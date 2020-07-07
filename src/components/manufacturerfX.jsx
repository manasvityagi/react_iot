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
        resolve("The message from past, using async await");
        //setter in local storage
        localStorage.setItem("key1", 1);
        //getter in local storage
        console.log(localStorage.getItem("key1"));
        //setter in session storage
        sessionStorage.setItem("key2", 2);
        //getter in session storage
        console.log(sessionStorage.getItem("key2"));
      }, 2500);
    });
  }
  //This is a sample for assignemnt requirement, a message is sent
  // and the message is receivevd after 2000 ms
  async function requestMessage() {
    const msg = await receiveMessage();
    console.log("Message:", msg);
  }

  requestMessage();

  React.useEffect(() => {
    fetch("http://3.25.104.164:8000/manufacturer/")
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
              <h1> Manufacturer</h1>
              {items.map(function (item, index) {
                return (
                  <div key={index} className="task-wrapper flex-wrapper">
                    <span>{item.name}</span>
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
