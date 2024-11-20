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
import resumePng from "./Imgs/resume-icon.png";
import { Link } from "react-router-dom";
import { Input, Form, FormGroup, Label, Button } from "reactstrap";

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
        <div className="row-quote-1">
          <div className="col-3 splash-quote quote1">
            <h3 className="splash-title">PRECISION</h3>
            <p>This 3d model is a 1:1 scale of a LEGO brick.</p>
          </div>
          <div className="offset-5 col-3 splash-quote quote2">
            <h3 className="splash-title">ASSOCIATION</h3>
            <p>
              Using the modeling software, the brick is given properties
              proportional to its real world counterpart
            </p>
          </div>
        </div>
        <div className="m-4 p-5 box-art"></div>
        <div className="row-quote-2">
          <div className="col-3 splash-quote quote3">
            <h3 className="splash-title">SIMULATION</h3>
            <p>
              With this model, physical stress simulations will Reflect accurate
              approximations of internal forces.
            </p>
          </div>
          <div className="offset-5 col-3 me-auto splash-quote quote4">
            <h3 className="splash-title">APPLICATION</h3>
            <p>
              Preforming these steps show that any project with Great care can
              produce quality and interesting results.
            </p>
          </div>
        </div>
      </section>
      <section className="splash-quote-small">
        <div>
          <div className="splash-underline">
            <h3 className="splash-title">PRECISION</h3>
            <p className="ps-2 pe-2">
              This 3d model is a 1:1 scale of a LEGO brick.
            </p>
          </div>
          <div className="splash-underline">
            <h3 className="pt-3 splash-title">ASSOCIATION</h3>
            <p className="ps-3 pe-3">
              Using the modeling software, the brick is given properties
              proportional to its real world counterpart
            </p>
          </div>
          <div className="splash-underline">
            <h3 className="pt-3 splash-title">SIMULATION</h3>
            <p className="ps-3 pe-3">
              With this model, physical stress simulations will Reflect accurate
              approximations of internal forces.
            </p>
          </div>
          <div>
            <h3 className="pt-3 splash-title">APPLICATION</h3>
            <p className="ps-3 pe-3">
              Preforming these steps show that any project with Great care can
              produce quality and interesting results.
            </p>
          </div>
        </div>
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
        <div className="d-flex flex-column-reverse flex-lg-row align-items-center work-around-for-arrow-transition">
          <div className="offset-md-1 col-12 col-md-5 ps-2 ps-lg-5 pe-2 pe-lg-5 pt-0 pt-lg-3 pb-0 pb-lg-3 align-content-center about-text">
            <h1 className="mb-3 prof-h1">I'm Austin</h1>
            {/* <h4 className="mb-3">
              <span className="magic">Mechanical Engineer</span>
            </h4> */}
            <p className="fs-5 mb-3">
              <i>
                An enthusiastic and passionate engineer with an eye for detail,
                a hunger to learn more, and a focus to produce quality work. I
                studied with a focus in Aerospace and hope to push our nations
                limits through my work.
              </i>
            </p>
            <a href="#contact-me">
              <button className="p-3 me-2 contact-btn">Contact Me 💨</button>
            </a>
            <Link to="/about-me/">
              <button className="p-3 about-btn">About Me 👷🏽‍♂️</button>
            </Link>
          </div>
          <div className="offset-md-1">
            <img
              className="mt-3 mb-3 col-12 col-lg-10 col-xl-12 profile-pic-2"
              alt="profile-pic"
              src={profilePic}
            />
          </div>
        </div>
      </section>
      <section className="pt-0 pb-5 project-sect">
        <div>
          <img
            className="w-100 transition-img"
            alt="transition image"
            src={waves}
          />
        </div>
        <h2 className="pt-4 pb-4">Try Your Best to Keep Up!</h2>
        <div className="offset-sm-1 offset-md-3 offset-lg-2 d-flex flex-column flex-lg-row mt-4">
          <div className="col-sm-10 col-md-8 col-lg-3 pt-3 card card1">
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
          <div className="col-sm-10 col-md-8 col-lg-3 pt-3 card card2">
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
          <div
            className="col-sm-10 col-md-8 col-lg-3 pt-3 card card3"
            onClick={toggleModal}
          >
            <img
              className="col-3 p-3 home-project-img"
              alt="home-project-img"
              src={resumePng}
            />
            <div className="card-text">
              <h3 id="contact-me">Resume</h3>
              <p>
                Here, you will be able to view my resume and download a pdf
                copy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="offset-sm-1 offset-md-2 offset-lg-4 col-sm-10 col-md-8 col-lg-4 p-3 mb-5 home-contact-sect">
          <h2 className="mb-5 home-contact-title">I'll Contact You</h2>
          <div>
            {/* <div className="offset-1 col-4"></div> */}
            <div className="offset-1 col-10">
              <Form>
                <FormGroup>
                  <Label className="contact-label" for="name">
                    Name
                  </Label>
                  <Input type="name" name="name" id="name" placeholder="" />
                </FormGroup>
                <FormGroup>
                  <Label className="contact-label" for="phone">
                    Phone #
                  </Label>
                  <Input type="phone" name="phone" id="phone" placeholder="" />
                </FormGroup>
                <FormGroup>
                  <Label className="contact-label" for="email">
                    Email
                  </Label>
                  <Input type="email" name="email" id="email" placeholder="" />
                </FormGroup>
                <FormGroup className="d-flex flex-start" check>
                  <Input type="checkbox" />{" "}
                  <Label className="ps-3 contact-label" check>
                    Call Me
                  </Label>
                </FormGroup>
                <FormGroup className="d-flex flex-start" check>
                  <Input type="checkbox" />{" "}
                  <Label className="ps-3 contact-label" check>
                    Email Me
                  </Label>
                </FormGroup>
                <Button className="mt-4">Submit</Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
      <ResumeModal isOpen={modalOpen} toggle={toggleModal} />
    </>
  );
}
