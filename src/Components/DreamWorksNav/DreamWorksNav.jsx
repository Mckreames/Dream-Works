import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img className="ms-3 me-3 logo" alt="app-logo" src={logo}></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Activity</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Resume</NavLink>
              </NavItem>
              <NavItem>
                {/* <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink> */}
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
              <img className="me-4 media-link" alt="LinkedIn" src={linkedIn} />
              <img className="me-4 media-link" alt="Gmail" src={gmail} />
              <img className="me-5 media-link" alt="GitHub" src={github} />
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}
