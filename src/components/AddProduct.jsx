import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ProductDataService from "../services/productservices";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddProduct = ({ id, setProductId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [imageUrl, setImageUrl] = React.useState(null);
  const [stock, setStock] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      name === "" ||
      description === "" ||
      category === "" ||
      quantity === "" ||
      imageUrl === " "
    ) {
      setMessage({ error: true, msg: "Please update all details" });
      return;
    }

    const newProduct = {
      name,
      description,
      category,
      quantity,
      size,
      imageUrl,
      stock,
    };
    console.log(newProduct);

    try {
      if (id !== undefined && id !== "") {
        await ProductDataService.updateProduct(id, newProduct);
        setProductId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await ProductDataService.addProducts(newProduct);
        setMessage({ error: false, msg: "New Product added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setDescription("");
    setCategory("");
    setQuantity("");
    setImageUrl("");
  };

  // const onFileChange = async (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = app.storage().ref();
  //   const fileRef = storageRef.child(file.name);
  //   await fileRef.put(file);
  //   setImageUrl(await fileRef.getDownloadURL());
  // };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ProductDataService.getProduct(id);
      console.log("the record is :", docSnap.data());

      setName(docSnap.data().name);
      setDescription(docSnap.data().description);
      setCategory(docSnap.data().category);
      setQuantity(docSnap.data().quantity);
      setSize(docSnap.data().size);
      setImageUrl(docSnap.data().imageUrl);
      setStock(docSnap.data().stock);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              {/* <InputGroup.Text id="formBookTitle">B</InputGroup.Text> */}
              <Form.Control
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              {/* <InputGroup.Text id="formBookTitle">B</InputGroup.Text> */}
              <Form.Control
                type="text"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStock("In Stock");
                setFlag(true);
              }}
            >
              In Stock
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStock("Out of Stock");
                setFlag(false);
              }}
            >
              Out Of Stock
            </Button>
          </ButtonGroup>

          <div className=" size mb-3 ">
            <Button
              className="bg-info"
              disabled={flag}
              onClick={(e) => {
                setStock("S");
                setFlag(true);
              }}
            >
              S
            </Button>
            <Button
              className="bg-info"
              disabled={flag}
              onClick={(e) => {
                setStock("M");
                setFlag(true);
              }}
            >
              M
            </Button>
            <Button
              className="bg-info"
              disabled={flag}
              onClick={(e) => {
                setStock("L");
                setFlag(true);
              }}
            >
              L
            </Button>
            <Button
              className="bg-info"
              disabled={flag}
              onClick={(e) => {
                setStock("XL");
                setFlag(true);
              }}
            >
              XL
            </Button>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="formBookTitle">
              <InputGroup>
                {/* <input
                  type="file"
                  id="myFile"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setImageUrl((imageUrl = e.target.files[0]))}
                /> */}

                {/* <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={onFileChange}
                /> */}
              </InputGroup>
            </Form.Group>
          </div>
          {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddProduct;
