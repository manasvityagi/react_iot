import React from "react";
import { AppBar } from "@material-ui/core";
//One stateless function-based component
const NavBar = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="_blank">
            Home <span className="badge badge-pill badge-secondary"></span>
          </a>
        </nav>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;

// Stateless class based component
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-dark bg-dark">
//         <a className="navbar-brand" href="_blank">
//           Home{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//         {/* <a className="navbar-brand" href="_blank">
//           Addresses{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//         <a className="navbar-brand" href="_blank">
//           Manufacturer{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a> */}
//       </nav>
//     );
//   }
//}
