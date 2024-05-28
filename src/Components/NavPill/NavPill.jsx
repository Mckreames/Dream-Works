import React from "react";
import "./NavPill.css";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function NavPill() {
  return (
    <>
      <div>
        <Nav pills>
          <NavItem>
            <NavLink active href="#">
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Activities</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Company Collaborations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </>
  );
}
