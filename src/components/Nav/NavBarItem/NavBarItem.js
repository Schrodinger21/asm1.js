import React, { useState } from "react";

import "./NavBarItem.css";
import { navBarData } from "./NavBarData";

const NavBarItem = () => {
  const [navbar, setNavBar] = useState(navBarData);
  const navArr = navbar.map((item) => {
    return item.type === item
      ? {
          ...item,
          active: true,
        }
      : { ...item, active: false };
  });

  // setNavBar(navArr);

  console.log(navArr);
  const navBarItem = navBarData.map((item) => {
    const isActive = item.active ? "active" : "";
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
