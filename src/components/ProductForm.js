import React, { Component } from "react";

import "./components.scss";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      count: "",
      price: "",
      promotionalPrice: "",
    };
  }

  handleInputChange = (event) => {
    console.log(event.target.value)
    return this.setState(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="centered">
        <h2>Add new product</h2>
        <div>
          <input placeholder="Product name" name="product" type="text" value={ this.state.product } onChange={this.handleInputChange}/>
          <input placeholder="Items count" name="count" type="text" value={ this.state.count } onChange={this.handleInputChange}/>
          <input placeholder="Price" name="price" type="text" value={ this.state.price } onChange={this.handleInputChange}/>
          <input placeholder="Promotional Price" name="promotionalPrice" type="text" value={ this.state.promotionalPrice } onChange={this.handleInputChange}/>
          <input className="button" type="submit" value="Aceptar" />
        </div>
      </div>
    );
  }
}

export default ProductForm;
