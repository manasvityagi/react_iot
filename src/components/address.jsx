import React, { Component } from "react";
import { Button } from "@material-ui/core";
import NavBar from "./navbar";
import "../App.css";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressList: [],
    };
    this.fetchAddress = this.fechTasks.bind(this);
  }

  fechTasks() {
    fetch("http://127.0.0.1:8000/address/")
      .then((response) => response.json())
      .then(console.log("fetching"))
      .then((response) =>
        this.setState({
          addressList: response,
        })
      );
  }

  createAddress() {
    var formdata = new FormData();
    formdata.append("zip", "01");
    formdata.append("street", "New Str3");

    var requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch("http://127.0.0.1:8000/address/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  UNSAFE_componentWillMount() {
    this.fetchAddress();
  }

  render() {
    var addresses = this.state.addressList;
    return (
      <div>
        <NavBar />
        <div className="container">
          <div id="task-container">
            <div id="list-wrapper" className="mater">
              app
              <h1> Addresses</h1>
              {addresses.map(function (address, index) {
                return (
                  <div key={index} className="task-wrapper flex-wrapper">
                    <span>{address.street}</span>
                  </div>
                );
              })}
            </div>
            <Button onClick={this.createAddress} name="Manufacturer">
              Add Address
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
