import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
import resume from "../ResumeModal/Imgs/Resume-Screenshot.png";
import ResumeModal from "../ResumeModal/ResumeModal";

export default function DreamWorksNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <div className="shadow">
        <Navbar color="dark" dark expand="md" className="nav-stuff">
          <NavbarBrand>
            <Link to="/">
              <img className="ms-3 me-3 logo" alt="app-logo" src={logo}></img>
            </Link>
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
                <NavLink to="/about-me/" className="me-4 nav-btn">
                  About Me
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="me-4 nav-btn"
                  src={resume}
                  download="Austin-Davenport-Resume.png"
                  onClick={toggleModal}
                >
                  Resume
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <a
                href="https://www.linkedin.com/in/asdavenus15/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="me-1 me-lg-4 media-link border-shadow-3"
                  alt="LinkedIn"
                  src={linkedIn}
                />
              </a>
              <a href="mailto:Asdaven15@gmail.com?subject=Portfolio%20Inquiry">
                <img
                  className="me-1 me-lg-4 media-link border-shadow-4"
                  alt="Gmail"
                  src={gmail}
                />
              </a>
              <a
                href="https://github.com/WingingItUS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="me-2 me-lg-5 media-link border-shadow-1"
                  alt="GitHub"
                  href="https://github.com/WingingItUS"
                  src={github}
                />
              </a>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
      <ResumeModal isOpen={modalOpen} toggle={toggleModal} />
    </>
  );
}
