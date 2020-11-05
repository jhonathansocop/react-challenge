import React, { Component } from "react";

import "./components.scss";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      country: "",
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
        <h2>Add new user</h2>
        <div>
          <label htmlFor="" className="label">Name</label>
          <input placeholder="Name" name="name" type="text" value={ this.state.name } onChange={this.handleInputChange}/>
          <label htmlFor="" className="label">Email</label>
          <input placeholder="Email" name="Email" type="text" value={ this.state.email } onChange={this.handleInputChange}/>
          <label htmlFor="" className="label">Phone</label>
          <input placeholder="Phone" name="price" type="text" value={ this.state.phone } onChange={this.handleInputChange}/>
          <label htmlFor="" className="label">País</label>
          <input placeholder="Country" name="Country" type="text" value={ this.state.country } onChange={this.handleInputChange}/>
          <input className="button" type="submit" value="Aceptar" />
        </div>
      </div>
    );
  }
}

export default UserForm;
