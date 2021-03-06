import React, { Component } from "react";

import "../App.css";

class InstalledDevices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      installedDeviceList: [],
    };
    this.fetchDevices = this.fetchInstalledDevices.bind(this);
  }

  fetchInstalledDevices() {
    fetch("http://3.25.104.164:8000/devices/")
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
