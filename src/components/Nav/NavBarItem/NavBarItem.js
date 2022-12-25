import React from "react";
import "./NavBarItem.css";
import { navBarData } from "./NavBarData";

const NavBarItem = () => {
  console.log(navBarData);
  return (
    <div className="navbar">
      <div className="navbar-item">
        {navBarData.map((item) => (
          <navItem className="nav-item">
            <i className={`fa ${item.icon}`}></i>
            {""} {item.type} {item.active}
          </navItem>
        ))}
      </div>
    </div>
  );
};
console.log(NavBarItem);
export default NavBarItem;
