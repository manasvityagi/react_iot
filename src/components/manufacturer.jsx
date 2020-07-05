import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
    fetch("http://127.0.0.1:8000/manufacturer/")
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
        <div className="container">
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
        </div>
      </div>
    );
  }
}

export default Manufacturer;
