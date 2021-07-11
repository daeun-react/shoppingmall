import { Button } from "antd";
import React from "react";

function UserCardBlock({ products = [], removeItem }) {
  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `http://localhost:5000/${image}`;
    }
  };

  const renderItems = () =>
    products.map((product) => (
      <tr key={product.id}>
        <td>
          <img
            style={{ width: "70px" }}
            alt="product"
            src={renderCartImage(product.images)}
          />
        </td>
        <td>{product.quantity} EA</td>
        <td>$ {product.price} </td>
        <td>
          <Button onClick={() => removeItem(product._id)}>Remove </Button>
        </td>
      </tr>
    ));

  return (
    <div style={{ width: "100%" }}>
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Remove from Cart</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
}

export default UserCardBlock;
