import React, { Component } from "react";
import { Button, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import NavBar from "./navbar";
import "../App.css";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressList: [],
      zip: "",
      street: "",
      title: "",
      body: "",
    };
    this.fetchAddress = this.fechTasks.bind(this);
  }
  r;

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

  createAddress(str, zp) {
    var formdata = new FormData();

    formdata.append("street", str);
    formdata.append("zip", zp);

    var requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch("http://127.0.0.1:8000/address/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Create of CRUD
  addAddress = (e) => {
    e.preventDefault();

    console.log(this.state.zip);
    console.log(this.state.street);

    var formdata = new FormData();

    formdata.append("street", this.state.street);
    formdata.append("zip", this.state.zip);

    var requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch("http://127.0.0.1:8000/address/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //Update of CRUD
  updateAddress = (e) => {
    e.preventDefault();
    console.log(this.state.zip);
    console.log(this.state.street);

    var formdata = new FormData();

    formdata.append("street", this.state.street);
    formdata.append("zip", this.state.zip);

    // var requestOptions = {
    //   method: "POST",
    //   body: formdata,
    // };

    // fetch("http://127.0.0.1:8000/address/", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
  };

  UNSAFE_componentWillMount() {
    this.fetchAddress();
  }

  classes = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  render() {
    var addresses = this.state.addressList;
    const { street, zip } = this.state;
    return (
      <div>
        <NavBar />
        <div className="container">
          <div id="task-container">
            <div id="list-wrapper" className="mater">
              <div>
                <Typography variant="h5" color="inherit">
                  Add Addresses
                </Typography>
                <div>
                  <div>
                    <form onSubmit={this.addAddress}>
                      <div>
                        <label>Street</label>
                        <input
                          type="text"
                          name="street"
                          value={street}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div>
                        <label>Zip</label>
                        <input
                          type="text"
                          name="zip"
                          value={zip}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <Button variant="outlined" color="primary" type="submit">
                        Submit
                      </Button>
                    </form>
                  </div>
                </div>
                <Typography variant="h5" color="inherit">
                  Update Addresses
                </Typography>
                <div>
                  <div>
                    <form onSubmit={this.addAddress}>
                      <div>
                        <label>Street</label>
                        <input
                          type="text"
                          name="street"
                          value={street}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <div>
                        <label>Zip</label>
                        <input
                          type="text"
                          name="zip"
                          value={zip}
                          onChange={this.changeHandler}
                        />
                      </div>
                      <Button variant="outlined" color="primary" type="submit">
                        Submit
                      </Button>
                    </form>
                  </div>
                </div>
              </div>

              <br />

              <Divider dark />
              <Typography variant="h5" color="inherit">
                Existing Addresses
              </Typography>

              {addresses.map(function (address, index) {
                //this.store();
                return (
                  <div key={index} className="task-wrapper flex-wrapper">
                    <span>{address.street}</span>
                  </div>
                );
              })}
            </div>
            {/* <Button onClick={this.createAddress} name="Manufacturer">
              Add Address
            </Button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
