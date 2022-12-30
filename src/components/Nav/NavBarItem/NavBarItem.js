import React from "react";

import "./NavBarItem.css";
import { navBarData } from "./NavBarData";

const NavBarItem = () => {
  const navBarItem = navBarData.map((item) => {
    // Nếu item.active = true thì border được thêm vào.
    const isActive = item.active ? "active" : " ";
    const icon = `fa ${item.icon}`;

    return (
      <div>
        <div key={item.type}>
          <div className={isActive}>
            <i className={icon}></i>
            {"  "} {item.type}
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="navbar">
        <div className="nav-icon">{navBarItem}</div>
      </div>
    </>
  );
};

export default NavBarItem;
