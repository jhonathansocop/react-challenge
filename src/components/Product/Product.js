import React from "react";

import "./Product.scss";

const Product = ({ name, count, price }) => {
  return (
    <div className="product">
      <span>{name}</span>
      <span>{count}</span>
      <span>{price}</span>
    </div>
  );
};

export default Product;
