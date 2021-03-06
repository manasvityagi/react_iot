import React, { Component } from "react";
import NavBar from "./navbar";
import "../App.css";
import Container from "@material-ui/core/Container";
class DevicesAvailable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceList: [],
    };
    this.fetchAddresses = this.fechTasks.bind(this);
  }

  fechTasks() {
    fetch("http://3.25.104.164:8000/devices/")
      .then((response) => response.json())
      .then(console.log("fetching"))
      .then((response) =>
        this.setState({
          deviceList: response,
        })
      );
  }

  UNSAFE_componentWillMount() {
    this.fetchAddresses();
  }

  render() {
    var addresses = this.state.deviceList;
    return (
      <div>
        <NavBar />
        <Container maxWidth="sm">
          <div className="container">
            <div id="task-container">
              <div id="list-wrapper" className="mater">
                <h1> Devices On Catalogue</h1>
                {addresses.map(function (address, index) {
                  return (
                    <div key={index} className="task-wrapper flex-wrapper">
                      <span>{address.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default DevicesAvailable;
