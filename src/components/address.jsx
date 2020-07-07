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

  fechTasks() {
    fetch("http://3.25.104.164:8000/address/")
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

    fetch("http://3.25.104.164:8000/address/", requestOptions)
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

    fetch("http://3.25.104.164:8000/address/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //Update of CRUD : This always updates the first record
  // Not correct way of doing it
  updateAddress = (e) => {
    e.preventDefault();
    console.log(this.state.zip);
    console.log(this.state.street);

    var formdata = new FormData();

    formdata.append("street", this.state.street);
    formdata.append("zip", this.state.zip);

    var requestOptions = {
      method: "PUT",
      body: formdata,
    };

    fetch("http://3.25.104.164:8000/address/1/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //Delete of CRUD : This performs the delete operation at the top of the stack
  //Not correct way of deleting, becausem delete operaion should be within the UI elementwhich needs to be deleted
  // But i do not know at thi spoint how to do that
  deleteAddress = (e) => {
    var raw = "";
    let topStackid = this.state.addressList[0].id;

    var requestOptions = {
      method: "DELETE",
      body: raw,
      redirect: "follow",
    };
    let url = "http://3.25.104.164:8000/address/" + topStackid + "/";
    console.log(url);
    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //# Read on CRUD
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
            <div id="list-wrapper">
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
                    <form onSubmit={this.updateAddress}>
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
                <Divider dark />
                <Typography variant="h5" color="inherit">
                  Delete Addresses
                </Typography>
                <div>
                  <div>
                    <form onSubmit={this.deleteAddress}>
                      <Button variant="outlined" color="primary" type="submit">
                        Delete One Address
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
