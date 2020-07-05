import React, { Component } from "react";
import Counter from "./counter";
import Device from "./device";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        {/* <button onClick={onReset} className="btn btn-sm m-2 badge-primary">
          Reset
        </button> */}

        {counters.map((counter) => (
          <Device
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          ></Device>
        ))}
      </div>
    );
  }
}

export default Counters;
