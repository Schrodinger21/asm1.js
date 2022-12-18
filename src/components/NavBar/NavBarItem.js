import React, { useState } from "react";
import "./NavBarItem.css";

import {
  NavLink,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { navBarData } from "./NavBarData";

const NavBarItem = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [navbar, setNavBar] = useState(navBarData);
  const toggleButton = (type) => {
    const newArr = navbar.map((item) => {
      return item.type === type
        ? {
            ...item,
            active: true,
          }
        : { ...item, active: false };
    });

    setNavBar(newArr);
  };
  const navBarItem = navBarData.map((item) => {
    const isActive = item.active ? "active" : "";
    const icon = `fa ${item.icon}`;

    return (
      <div key={item.type}>
        <NavItem className="m-2">
          <NavLink
            href="#"
            onClick={() => toggleButton(item.type)}
            className={isActive}
          >
            <i className={icon}></i>
            {"  "} {item.type}
          </NavLink>
        </NavItem>
      </div>
    );
  });

  return (
    <>
      <div
        style={{
          display: "block",
          width: "100%",
          padding: 30,
        }}
      >
        <Navbar dark expand="md">
          <NavbarToggler
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {navBarItem}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};
export default NavBarItem;
