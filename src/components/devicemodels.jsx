import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "../App.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Device extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceList: [],
    };
    this.fetchDevices = this.fechTasks.bind(this);
  }

  fechTasks() {
    fetch("http://127.0.0.1:8000/address/")
      .then((response) => response.json())
      .then(console.log("fetching"))
      .then((response) =>
        this.setState({
          deviceList: response,
        })
      );
  }

  UNSAFE_componentWillMount() {
    this.fetchDevices();
  }

  render() {
    //this.parseResponse();
    var devices = this.state.deviceList;
    return (
      <div className="container">
        <div id="task-container">
          <div id="list-wrapper" className="mater">
            <h1> Addresses</h1>
            {devices.map(function (device, index) {
              return (
                <div key={index} className="task-wrapper flex-wrapper">
                  <span>{device.street}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  parseResponse() {
    if (this.state.deviceList.length > 0) {
      console.log(typeof this.state.deviceList);
      console.log(this.state.deviceList[0]);
      //const obj = JSON.parse(this.state.deviceList[0]);
    }
  }
}

export default Device;
