import React from "react";

import NavBar from "./navbar";

import "../App.css";

//Hooks & Promises
function Manufacturer() {
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

  requestMessage(); // Message: 🤡 <-- after 2 seconds

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/manufacturer/")
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

export default Manufacturer;
