import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import NavBar from "./navbar";

import "../App.css";

class Manufacturer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturerList: [],
    };
    this.fetchDevices = this.fechTasks.bind(this);
  }

  fechTasks() {
    fetch("http://3.25.104.164:8000/manufacturer/")
      .then((response) => response.json())
      .then(console.log("fetching"))
      .then((response) =>
        this.setState({
          manufacturerList: response,
        })
      );
  }

  UNSAFE_componentWillMount() {
    this.fetchDevices();
  }

  render() {
    var manufacturers = this.state.manufacturerList;
    return (
      <div>
        <NavBar />
        <Container maxWidth="sm">
          <div id="task-container">
            <div id="list-wrapper" className="mater">
              <h1> Manufacturer</h1>
              {manufacturers.map(function (manufacturer, index) {
                return (
                  <div key={index} className="task-wrapper flex-wrapper">
                    <span>{manufacturer.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Manufacturer;
