import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Navbar from "./navbar";

import "../App.css";
import NavBar from "./navbar";

class InstalledDevices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      installedDeviceList: [],
    };
    this.fetchDevices = this.fetchInstalledDevices.bind(this);
  }

  fetchInstalledDevices() {
    fetch("http://127.0.0.1:8000/devices/")
      .then((response) => response.json())
      .then(console.log("fetching InstalledDevices"))
      .then((response) =>
        this.setState({
          installedDeviceList: response,
        })
      );
  }

  UNSAFE_componentWillMount() {
    this.fetchDevices();
  }

  render() {
    var installedDeviceList = this.state.installedDeviceList;
    return (
      <div>
        <Navbar />
        <div className="container">
          <div id="task-container">
            <div id="list-wrapper" className="mater">
              <h1> Installed Devices</h1>
              {installedDeviceList.map(function (device, index) {
                return (
                  <div key={index} className="task-wrapper flex-wrapper">
                    <span>{device.description}</span>
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

export default InstalledDevices;
