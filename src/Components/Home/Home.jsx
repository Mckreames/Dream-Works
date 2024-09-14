import React, { useState } from "react";
import "./Home.css";
import logo from "./Imgs/GetImage.jpeg";
import brick from "./Vids/Brick.mp4";
import profilePic from "./Imgs/frontal-color-removebg-preview.png";
import Projects from "./Imgs/MatLab.png";
import activityImg from "./Imgs/project-img.png";
import resume from "../ResumeModal/Imgs/Resume-Screenshot.png";
import linkedIn from "./Imgs/Stencil-LinkedIn.png";
import gmail from "./Imgs/Stencil-Gmail.png";
import github from "./Imgs/Stencil-github.png";
import ResumeModal from "../ResumeModal/ResumeModal";
import waves from "./Imgs/wavesOpacity.svg";
import arrow from "./Imgs/bookNegative.svg";
import { Link } from "react-router-dom";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <section className="pt-5 shadow main-event">
        <h1 className="main-title"></h1>
        <video autoPlay muted loop className="background-video">
          <source src={brick} type="video/mp4" />
          Your browser does not support this video
        </video>
        <row className="row-quote-1">
          <div className="col-3 splash-quote">
            <h3 className="splash-title">PRECISION</h3>
            <p>This 3d model is a 1:1 scale of a LEGO brick.</p>
          </div>
          <div className="offset-5 col-3 splash-quote">
            <h3 className="splash-title">ASSOCIATION</h3>
            <p>
              Using the modeling software, the brick is given properties
              proportional to its real world counterpart
            </p>
          </div>
        </row>
        <div className="m-5 p-5 box-art"></div>
        <row className="row-quote-2">
          <div className="col-3 splash-quote">
            <h3 className="splash-title">SIMULATION</h3>
            <p>
              With this model, physical stress simulations will Reflect accurate
              approximations of internal forces.
            </p>
          </div>
          <div className="offset-5 col-3 me-auto splash-quote">
            <h3 className="splash-title">APPLICATION</h3>
            <p>
              Preforming these steps show that any project with Great care can
              produce quality and interesting results.
            </p>
          </div>
        </row>
      </section>
      {/* Profile Sect */}
      <section className="pt-0 profile-sect">
        <div className="d-flex justify-content-center">
          <img
            className="d-block arrow-img transition-img"
            alt="transition image"
            src={arrow}
          />
        </div>
        <div className="d-flex d-xs-column align-items-center work-around-for-arrow-transition">
          <div className="offset-1 col-5 ps-5 pe-5 pt-3 pb-3 align-content-center about-text">
            <h1 className="mb-3">Hi, I'm Austin</h1>
            <h4 className="mb-3">
              <span className="magic">Mechanical Engineer</span>
            </h4>
            <p className="mb-3">
              An enthusiastic and passionate engineer with an eye for detail, a
              hunger to learn more, and a focus to produce quality work
            </p>
            <a href="#contact-me">
              <button className="p-3 me-2 contact-btn">Contact Me 💨</button>
            </a>
            <Link to="/about-me/">
              <button className="p-3 about-btn">About Me 👷🏽‍♂️</button>
            </Link>
          </div>
          <div className="offset-1">
            <img
              className="mt-3 profile-pic-2"
              alt="profile-pic"
              src={profilePic}
            />
          </div>
        </div>
      </section>
      <section className="pt-0 pb-5 project-sect" id="contact-me">
        <div>
          <img
            className="w-100 transition-img"
            alt="transition image"
            src={waves}
          />
        </div>
        <h2 className="pt-4 pb-4">Try Your Best to Keep Up!</h2>
        <div className="offset-2 d-flex mt-4">
          <div className="col-3 pt-3 card card1">
            <Link to="/projects/">
              <img
                className="col-3 mb-3 p-3 home-project-img"
                alt="home-project-img"
                src={Projects}
              />
              <div className="card-text">
                <h3>Projects</h3>
                <p>
                  Clicking here will bring you to a list of all of the projects
                  I have worked on that I can legally post about here. Come see
                  what I have worked on and let it spark your interest!
                </p>
              </div>
            </Link>
          </div>
          <div className="col-3 pt-3 card card2">
            <Link to="/Activities/">
              <img
                className="col-3 mb-3 p-3 home-project-img"
                alt="home-project-img"
                src={activityImg}
              />
              <div className="card-text">
                <h3>Latest Activity</h3>
                <p>
                  From here, you will be able to follow with my blog! I'll post
                  anything I do that I find to be particularly interesting.
                  There's a separate area here where you can see some videos of
                  me having fun in my free time.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-3 pt-3 card card3" onClick={toggleModal}>
            <img
              className="col-3 p-3 home-project-img"
              alt="home-project-img"
              src={resume}
            />
            <div className="card-text">
              <h3>Resume</h3>
              <p>
                Here, you will be able to view my resume and download a pdf
                copy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ResumeModal isOpen={modalOpen} toggle={toggleModal} />
    </>
  );
}
