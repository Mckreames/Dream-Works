import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../Home/Imgs/GetImage.jpeg";
import linkedIn from "../Home/Imgs/Stencil-LinkedIn.png";
import gmail from "../Home/Imgs/Stencil-Gmail.png";
import github from "../Home/Imgs/Stencil-github.png";

export default function Footer() {
  return (
    <>
      <div className="d-flex pt-2 footer-sheet">
        <div className="col-2 offset-4 contact-bubble contact-left">
          <img className="contact-logo" alt="site-logo" src={logo} />
          {/* <h2 className="contact-slogan">Dreaming Up Technology</h2> */}
        </div>
        <div className="col-4 contact-bubble contact-right">
          {/* <h2 className="">Contact Me</h2> */}
          <h4 className="mt-3">Mobile: (805) 844-6973</h4>
          <h4 className="mt-4">Email: asdaven15@gmail.com</h4>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/asdavenus15/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="me-5 media-link border-shadow-1"
                alt="LinkedIn"
                src={linkedIn}
              />
            </a>
            <a href="mailto:Asdaven15@gmail.com?subject=Portfolio%20Inquiry">
              <img
                className="me-5 media-link border-shadow-2"
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
                className="media-link border-shadow-1"
                alt="GitHub"
                href="https://github.com/WingingItUS"
                src={github}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="pb-2 all-rights-container">
        <h6>
          <Link to="/Terms-Of-Service/">
            <a className="all-rights">All Right Reserved</a>
          </Link>
        </h6>
      </div>
    </>
  );
}
