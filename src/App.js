import React, { Component } from "react";

import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import InstalledDevices from "./components/installedDevices";
import Addresses from "./components/address";
import Manfacturer from "./components/manufacturer";
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

  state = {
    counters: [
      { id: 1, value: 0 },
      // { id: 2, value: 0 },
      // { id: 3, value: 0 },
      // { id: 4, value: 0 },
    ],
  };

  handleSelect = (event) => {
    this.setState({ answer: event.target.name });
  };

  // App component has two child, Navbar and Devices
  render() {
    if (this.state.answer === "Addresses") {
      return <Addresses />;
    }
    if (this.state.answer === "InstalledDevice") {
      return <InstalledDevices />;
    }
    if (this.state.answer === "Manfacturer") {
      return <Manfacturer />;
    }

    if (this.state.answer === "DevicesAvailable") {
      return <DevicesAvailable />;
    }

    console.log("App - render called");
    return (
      <React.Fragment>
        <NavBar />
        <button onClick={this.handleSelect} name="Addresses">
          Addresses
        </button>
        <button onClick={this.handleSelect} name="InstalledDevice">
          Devices Installed
        </button>
        <button onClick={this.handleSelect} name="Manufacturer">
          Manufacturer
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

class Manufacturer extends React.Component {
  render() {
    return <h1>Hello world! This is Component B</h1>;
  }
}

//One stateful function-based component which uses Hooks
class ModelsAvailable extends React.Component {
  render() {
    return <h1>Hello world! This is Component ModelsAvailable</h1>;
  }
}

//One stateless function-based component
class Navbar extends React.Component {
  render() {
    return <h1>Hello world! This is Component B</h1>;
  }
}

// getAddress = (counterId) => {
//   console.log("getAddress ", counterId);
//   const counters = this.state.counters.filter((c) => c.id !== counterId);
//   this.setState({ counters });
// };

// addAddress = (counterId) => {
//   console.log("handleDelete ", counterId);
//   const counters = this.state.counters.filter((c) => c.id !== counterId);
//   this.setState({ counters });
// };

// deleteAddress = (counterId) => {
//   console.log("handleDelete ", counterId);
//   const counters = this.state.counters.filter((c) => c.id !== counterId);
//   this.setState({ counters });
// };

// updateAddress = (counterId) => {
//   console.log("handleDelete ", counterId);
//   const counters = this.state.counters.filter((c) => c.id !== counterId);
//   this.setState({ counters });
// };

// getManufacurer = (counterId) => {
//   console.log("handleDelete ", counterId);
//   const counters = this.state.counters.filter((c) => c.id !== counterId);
//   this.setState({ counters });
// };

// getDeviceModels = (counterId) => {
//   console.log("handleDelete ", counterId);
//   const counters = this.state.counters.filter((c) => c.id !== counterId);
//   this.setState({ counters });
// };

// handleDelete = (counterId) => {
//   console.log("handleDelete ", counterId);
//   const counters = this.state.counters.filter((c) => c.id !== counterId);
//   this.setState({ counters });
// };

// handleReset = () => {
//   const counters = this.state.counters.map((c) => {
//     c.value = 0;
//     return c;
//   });

//   this.setState({ counters: counters });
// };

// handleIncrement = (counter) => {
//   const counters = [...this.state.counters];
//   let counterIndex = counters.indexOf(counter);
//   counters[counterIndex] = { ...counter };
//   counters[counterIndex].value++;
//   this.setState({ counters });
//   console.log(this.state.counters[counterIndex]);
// };
