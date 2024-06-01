import React, { useState } from "react";
import "./Home.css";
import logo from "./Imgs/GetImage.jpeg";
import brick from "./Vids/Brick.mp4";
import profilePic from "./Imgs/frontal-color-removebg-preview.png";
import Projects from "./Imgs/MatLab.png";
import activityImg from "./Imgs/project-img.png";
import resume from "../ResumeModal/Imgs/Resume-Screenshot.png";
import linkedIn from "./Imgs/icons8-linkedin-48.png";
import gmail from "./Imgs/icons8-gmail-48.png";
import github from "./Imgs/icons8-github-48.png";
import ResumeModal from "../ResumeModal/ResumeModal";

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
          <div className="col-2 splash-quote">
            <h3>PRECISION</h3>
            <p>This 3d model is a 1:1 scale of a LEGO brick.</p>
          </div>
          <div className="offset-7 col-2 splash-quote">
            <h3>ASSOCIATION</h3>
            <p>
              Using the modeling software, the brick is given properties
              proportional to its real world counterpart
            </p>
          </div>
        </row>
        <div className="m-5 p-5 box-art"></div>
        <row className="row-quote-2">
          <div className="col-2 splash-quote">
            <h3>SIMULATION</h3>
            <p>
              With this model, physical stress simulations will Reflect accurate
              approximations of internal forces.
            </p>
          </div>
          <div className="offset-7 col-2 me-auto splash-quote">
            <h3>APPLICATION</h3>
            <p>
              Preforming these steps show that any project with Great care can
              produce quality and interesting results.
            </p>
          </div>
        </row>
      </section>
      {/* <section className="d-flex align-items-center profile-sect">
        <div className="offset-2 col-3 ps-5 pe-5 about-text">
          <h1 className="mb-3">Hi, I am Austin</h1>
          <h4 className="mb-3">Mechanical Engineer</h4>
          <p className="mb-3">
            An enthusiastic and passionate engineer with an eye for detail, a
            hunger to learn more, and a focus to produce quality work
          </p>
          <button className="p-3 me-2 contact-btn">Contact Me 💨</button>
          <button className="p-3 about-btn">About Me 👷🏽‍♂️</button>
        </div>
        <div className="offset-2">
          <img
            className="mt-3 profile-pic-2"
            alt="profile-pic"
            src={profilePic}
          />
        </div>
      </section> */}
      <section className="profile-sect">
        <h2>About Me</h2>
        <img className="mt-3 profile-pic" alt="profile-pic" src={profilePic} />
        <h3 className="offset-3 col-6 mt-4 profile-text">
          Hello! My name is Austin Davenport and I am currently an installation
          technician with University of Tennessee Knoxville. I am also a Senior
          at Tennessee Tech University majoring in Mechanical Engineering
          focusing on Aerospace.
        </h3>
        <h3 className="offset-3 col-6 mt-4 profile-text">
          My dream is to make a difference in the aerospace sector whether it
          deals with manned or unmanned aircraft with a focus on propulsion and
          the task of developing quieter and faster engines.
        </h3>
      </section>
      <section className="project-sect">
        <h2>Try Your Best to Keep Up!</h2>
        <div className="offset-2 d-flex mt-4">
          <div className="col-3 pt-3 card card1">
            <img
              className="col-3 mb-3 p-3 project-img"
              alt="project-img"
              src={Projects}
            />
            <div className="card-text">
              <h3>Projects</h3>
              <p>
                We've all been there... Is that guy Chinese? Japanese? Korean?
                Taiwanese? We always find ourselves wondering how much better
                life would be if all the rice munchers were the same ethnicity.
                Well wonder no more! A robot made using AI to recognize DNA and
                ethnicity of specific asian cultures for the sole purpose of
                eliminating all of them except one.
                <p>"More than one group of Slant-Eyes is too many"</p>
              </p>
              <p> ~ Ghandi</p>
            </div>
          </div>
          <div className="col-3 pt-3 card card2">
            <img
              className="col-3 mb-3 p-3 project-img"
              alt="project-img"
              src={activityImg}
            />
            <div className="card-text">
              <h3>Latest Activity</h3>
              <p>
                I joined a team of some of the brightest minds this age has to
                offer to create the "Weed-Dar". It's a gay-dar for weed! Tired
                of paying masculine weed prices but getting feminine weed
                instead? Well keep the misogyny alive and strong!
                <p>"Only straight kush is good kush"</p>
              </p>
              <p> ~ Martin Luther King</p>
            </div>
          </div>
          <div className="col-3 pt-3 card card3" onClick={toggleModal}>
            <img
              className="col-3 p-3 project-img"
              alt="project-img"
              src={resume}
            />
            <div className="card-text">
              <h3>Resume</h3>
              <p>
                Armed with motion detection, proximity sensors, 6 different
                voice types, 8 different levels of racist remarks, two giant
                lenses for "reconnaissance", and a giant smile for added{" "}
                <i>creepy</i>
                factor, I bring you the answer to all of your home security/ wet
                dream needs. The Peeping Tom.
                <p>
                  "Pudding Pops... And yes, that means what you think it does
                  😏"
                </p>
              </p>
              <p> ~ Bill Cosby</p>
            </div>
          </div>
        </div>
      </section>
      <ResumeModal isOpen={modalOpen} toggle={toggleModal} />
      <section className="contact-sect">
        <h2>Connect With Me</h2>
        <div className="d-flex">
          <div className="col-4 offset-1 mt-5 mb-5 contact-bubble contact-left">
            <img className="contact-logo" alt="site-logo" src={logo} />
            <h2 className="contact-slogan">Dreaming Up Technology</h2>
          </div>
          <div className="col-4 offset-2 mt-5 mb-5 contact-bubble contact-right">
            <h2 className="mt-3">Contact Me</h2>
            <h4 className="mt-5">Mobile: (805) 844-6973</h4>
            <h4 className="mt-5">Email: Asdaven15@gmail.com</h4>
            <div className="mt-5">
              <a
                href="https://www.linkedin.com/in/asdavenus15/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="me-5 media-link"
                  alt="LinkedIn"
                  src={linkedIn}
                />
              </a>
              <a href="mailto:Asdaven15@gmail.com?subject=Portfolio%20Inquiry">
                <img className="me-5 media-link" alt="Gmail" src={gmail} />
              </a>
              <a
                href="https://github.com/WingingItUS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="media-link"
                  alt="GitHub"
                  href="https://github.com/WingingItUS"
                  src={github}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
