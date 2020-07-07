import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import NavBar from "./navbar";
import "../App.css";

function Address() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

  function receiveMessage() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("🤡");
      }, 5000);
    });
  }

  async function requestMessage() {
    const msg = await receiveMessage();
    console.log("Message:", msg);
  }
3.25.104.164
  requestMessage(); // Message: 🤡 <-- after 2 seconds

  React.useEffect(() => {
    fetch("http://3.25.104.164:8000/address/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div id="task-container">
            <div id="list-wrapper" className="mater">
              <h1> Addresses</h1>
              {items.map(function (item, index) {
                return (
                  <div key={index} className="task-wrapper flex-wrapper">
                    <span>{item.street}</span>
                  </div>
                );
              })}
            </div>
            {/* <button onClick={this.createAddress} name="Manufacturer">
              Add Address
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Address;
