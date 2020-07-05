import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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

  createAddress() {}

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
              <h1> Addresses</h1>
              {addresses.map(function (address, index) {
                return (
                  <div key={index} className="task-wrapper flex-wrapper">
                    <span>{address.street}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
