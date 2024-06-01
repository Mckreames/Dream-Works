import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./PortfolioModal.css";
import resume from "../Home/Imgs/Portfolio Screenshot.png";
// import resume from "./Imgs/Portfolio-Screenshot.png";

const CustomModal = ({ isOpen, toggle }) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="modal-xl"
      centered
      scrollable
    >
      <ModalHeader toggle={toggle} className="dark-mode-header">
        Resume
      </ModalHeader>
      <ModalBody className="dark-mode-body">
        <h1 className="modal">Resume</h1>
        <a
          src={resume}
          download="Austin-Davenport-Portfolio.png"
          className="offset-10 col-2 mb-3 btn btn-primary"
        >
          Download Resume
        </a>
        <img
          className="portfolio-download"
          alt="Image of Resume"
          src={resume}
        />
        {/* Add more content here as needed */}
      </ModalBody>
    </Modal>
  );
};

export default CustomModal;
