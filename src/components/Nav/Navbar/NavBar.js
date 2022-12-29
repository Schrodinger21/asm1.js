import React from "react";
import "./NavBar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <h3 className="title">Booking website</h3>
        <div className="navItem">
          <button className="navButton">Login</button>
          <button className="navButton">Reginster</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
