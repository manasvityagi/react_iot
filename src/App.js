import React, { Component } from "react";

import "./App.css";
import NavBar from "./components/navbar";
import InstalledDevices from "./components/installedDevices";
import Addresses from "./components/address";
import Manufacturer from "./components/manufacturer";
import DevicesAvailable from "./components/device";

// One stateful class-based component
class App extends Component {
  state = { selectedComponent: "" };
  constructor() {
    super();
    console.log("App - Constrktr called");
  }

  componentDidMount() {
    console.log("App - componentDidMount called");
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
        <button onClick={this.handleSelect} name="Addresses">
          Addresses
        </button>
        <button onClick={this.handleSelect} name="Manufacturer">
          Manufacturers List
        </button>
        <button onClick={this.handleSelect} name="DevicesAvailable">
          Devices Available
        </button>
        <main className="container">
          {/* Home Page is the list of installed devices */}
          <InstalledDevices />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

//One stateful function-based component which uses Hooks
class ModelsAvailable extends React.Component {
  render() {
    return <h1>Hello world! This is Component ModelsAvailable</h1>;
  }
}
