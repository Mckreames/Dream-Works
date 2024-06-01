import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from "./Imgs/GetImage.jpeg";
import "./DreamWorksNav.css";
import linkedIn from "./Imgs/icons8-linkedin-48.png";
import gmail from "./Imgs/icons8-gmail-48.png";
import github from "./Imgs/icons8-github-48.png";

export default function DreamWorksNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="shadow">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img className="ms-3 me-3 logo" alt="app-logo" src={logo}></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink to="/" className="me-4 nav-btn">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Projects/" className="me-4 nav-btn">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Activities/" className="me-4 nav-btn">
                  Activity
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="me-4 nav-btn">Resume</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
            <NavbarText>
              <a
                href="https://www.linkedin.com/in/asdavenus15/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="me-4 media-link"
                  alt="LinkedIn"
                  src={linkedIn}
                />
              </a>
              <a href="mailto:Asdaven15@gmail.com?subject=Portfolio%20Inquiry">
                <img className="me-4 media-link" alt="Gmail" src={gmail} />
              </a>
              <a
                href="https://github.com/WingingItUS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="me-5 media-link"
                  alt="GitHub"
                  href="https://github.com/WingingItUS"
                  src={github}
                />
              </a>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}
