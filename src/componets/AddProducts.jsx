import React from "react";

function AddProducts() {
  return (
    <div>
      <header>Add Products</header>

      <div className="container">
        <form action="">
          Product Name : <input type="text" name="name" className="name" />
          <br />
          Category :
          <select name="" className="category">
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="children">Children</option>
            <option value="other">Other</option>
          </select>{" "}
          <br />
          Content :<br />
          <textarea name="" id="context"></textarea>
          <br />
          Quantity : <input type="text" name="quantity" className="quantity" />
          <br />
          Available sizes:
          <div className="size">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
          In Stock / Out Stock :{" "}
          <input type="text" name="stockupdate" className="stock" />
          <br />
          <div className="imageback">
            {" "}
            <br />
            <button className="image">Upload an Image</button>
          </div>
          <div className="adddis">
            <button className="add">+ Add</button>
            <br />
            <button className="dismiss">Dismiss</button>
            <br />
          </div>
        </form>
      </div>

      <footer>© 2022.All Rights Reserved</footer>
    </div>
  );
}

export default AddProducts;
