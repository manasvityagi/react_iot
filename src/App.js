import React, { Component } from "react";

import "./App.css";
import NavBar from "./components/navbar";
import InstalledDevices from "./components/installedDevices";
import Addresses from "./components/address";
import Manufacturer from "./components/manufacturerfX";
import DevicesAvailable from "./components/device";
import { Button, Divider, Paper } from "@material-ui/core";

// One stateful class-based component
class App extends Component {
  state = { selectedComponent: "" };
  constructor() {
    super();
    console.log("called Construktr App");
  }

  componentDidMount() {
    console.log("called componentDidMount");
  }

  handleSelect = (event) => {
    this.setState({ selectedComponent: event.target.name });
  };
  // App component has two child, Navbar and Devices
  render() {
    if (this.state.selectedComponent === "Addresses") {
      return <Addresses />;
    }
    if (this.state.selectedComponent === "Manufacturer") {
      return <Manufacturer />;
    }
    if (this.state.selectedComponent === "DevicesAvailable") {
      return <DevicesAvailable />;
    }

    console.log("App - render called");
    return (
      <React.Fragment>
        <NavBar />

        <Button
          variant="contained"
          onClick={() => {
            this.setState({ selectedComponent: "Addresses" });
          }}
        >
          Addresseses
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            this.setState({ selectedComponent: "Manufacturer" });
          }}
        >
          Manufacturer
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            this.setState({ selectedComponent: "DevicesAvailable" });
          }}
        >
          Devices Available
        </Button>
        <Divider light />
        <Paper elevation={1} />
        <main className="container"></main>
        {/* Home Page is the list of installed devices */}
        <InstalledDevices />
      </React.Fragment>
    );
  }
}

export default App;
