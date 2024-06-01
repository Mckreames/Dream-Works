import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "./ResumeModal.css";
import resume from "../ResumeModal/Imgs/Resume-Screenshot.png";
import resume2 from "../ResumeModal/Imgs/Resume-Screenshot2.png";
// import resume from "./Imgs/Resume-Screenshot.png";

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
          src="./ResumeDownloads/ASDResume3-24.docx.pdf"
          download="Austin-Davenport-Resume.png"
          className="offset-10 col-2 mb-3 btn btn-primary"
        >
          Download Resume
        </a>
        <img className="resume-download" alt="Image of Resume" src={resume} />
        <img className="resume-download" alt="Image of Resume" src={resume2} />
        {/* Add more content here as needed */}
      </ModalBody>
    </Modal>
  );
};

export default CustomModal;
