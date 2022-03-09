import React from "react";

// shortcut for stateless-function-based-component : sfc
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="/">
          Navbar{""}
          <span className="badge badge-pill badge-secondary m-2">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

// shortcut for class-based-component : cc
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand mb-0 h1" href="/">
//             Navbar
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default NavBar;
