import React from "react";
import Product from "../Product/Product";

import "./_product-list.scss";
const data = [
  { name: "T-shirt", count: 3, price: 20, promotionalPrice: 15 },
  { name: "Trousers", count: 5, price: 15, promotionalPrice: 13 },
  { name: "sweater", count: 10, price: 25, promotionalPrice: 15 },
  { name: "Jacket", count: 3, price: 40, promotionalPrice: 30 },
];

const ProductList = () => {
  return (
    <section>
      <h2>Product list</h2>
      <div className="header-table">
        <ul>
          <li>Product</li>
          <li>Count</li>
          <li>Price</li>
          <li>Promotional Price</li>
        </ul>
      </div>
      <ul className="product-list">
        {data.map((product, i) => (
          <li key={i}>
            <Product
              name={product.name}
              count={product.count}
              price={product.price}
              promotionalPrice={product.promotionalPrice}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
