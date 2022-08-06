import React from "react";

function CategoryDetail() {
  return (
    <div>
      <header>Category Details</header>

      <div className="container">
        <form action="">
          Add Category : <input type="text" name="cate" className="cate" />
          <button>+</button>
          <br />
        </form>

        <div className="">
          <table className="tablecato">
            <tr>
              <th>Category Name</th>
              <th>Delete</th>
            </tr>

            <tr>
              <td>Women</td>
              <td>
                <button className="del">Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <br />
      <br />

      <h3 className="text-center">Product Details</h3>
      <div className="detail">
        <table className="detailtable">
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Available Sizes</th>
            <th>In Stock / Out Of Stock</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
          <tr>
            <th>frock</th>
            <th>women</th>
            <th></th>
            <th>10</th>
            <th>M,L</th>
            <th>In Stock</th>
            <th>
              <button className="delete">Delete</button>
            </th>
            <th>
              <button className="edit">Edit</button>
            </th>
          </tr>
        </table>
      </div>

      <footer>© 2022.All Rights Reserved</footer>
    </div>
  );
}

export default CategoryDetail;
