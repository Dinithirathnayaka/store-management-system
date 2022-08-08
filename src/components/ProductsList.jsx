import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ProductDataService from "../services/productservices";

const ProductsList = ({ getProductId }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const data = await ProductDataService.getAllProducts();
    console.log(data.docs);
    console.log("hello");
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await ProductDataService.deleteProduct(id);
    getProducts();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getProducts}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(products, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Product Description</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Sizes</th>
            <th>Stock Availability</th>
            <th>Actioin</th>
          </tr>
        </thead>
        <tbody>
          {products.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>
                  <img src={doc.imageUrl} alt="img" />
                </td>
                <td>{doc.description}</td>
                <td>{doc.category}</td>
                <td>{doc.quantity}</td>
                <td>{doc.size}</td>
                <td>{doc.stock}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getProductId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ProductsList;
