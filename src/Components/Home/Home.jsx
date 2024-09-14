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
      <section className="d-flex d-xs-column align-items-center profile-sect">
        <div className="offset-2 col-3 ps-5 pe-5 pt-3 pb-3 about-text">
          <h1 className="mb-3">Hi, I am Austin</h1>
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
        <div className="offset-2">
          <img
            className="mt-3 profile-pic-2"
            alt="profile-pic"
            src={profilePic}
          />
        </div>
      </section>
      <section className="project-sect" id="contact-me">
        <div className="transition">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <h2>Try Your Best to Keep Up!</h2>
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
