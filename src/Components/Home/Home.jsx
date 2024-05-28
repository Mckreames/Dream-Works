import React from "react";
import "./Home.css";
import logo from "./Imgs/GetImage.jpeg";
import Pug from "./Imgs/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg";
import Project1 from "./Imgs/MatLab.png";
import Project2 from "./Imgs/thisisengineering-V-AEBD99Hak-unsplash.jpg";
import Project3 from "./Imgs/gabriel-vasiliu-fCJi6nVU27o-unsplash.jpg";
import activityImg from "./Imgs/project-img.png";
import resume from "./Imgs/Portfolio Screenshot.png";

export default function Home() {
  return (
    <>
      <section className="shadow main-event">
        <h1 className="main-title">Main Event</h1>
        <row className="row-quote-1">
          <div className="offset-1 col-2 splash-quote">
            <h3>Wow!</h3>
            <p>So Shiny!</p>
          </div>
          <div className="offset-5 col-2 splash-quote">
            <h3>Woah!</h3>
            <p>So Rustic!</p>
          </div>
        </row>
        <div className="p-5 box-art">
          {/* <img className="splash-pic" alt="splash-pic" src={Splash} /> */}
        </div>
        <row className="row-quote-2">
          <div className="offset-1 col-2 splash-quote">
            <h3>Amaze-Balls!</h3>
            <p>Such a bold statement!</p>
          </div>
          <div className="offset-5 col-2 me-auto splash-quote">
            <h3>Inspiring!</h3>
            <p>#LitYoloSwag69420</p>
          </div>
        </row>
      </section>
      <section className="profile-sect">
        <h2>Profile</h2>
        <img className="mt-3 profile-pic" alt="profile-pic" src={Pug} />
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
      <section className="project-preview">
        <h2>Project Preview</h2>
        <div className="offset-2 d-flex mt-4">
          <div className="col-3 pt-3 card card1">
            <img
              className="col-3 mb-3 p-3 project-img"
              alt="project-img"
              src={Project1}
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
          <div className="col-3 pt-3 card card3">
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
      <section className="contact-sect">
        <h2>Contact Sect</h2>
        <div className="d-flex">
          <div className="col-4 offset-1 mt-5 mb-5 contact-bubble contact-left">
            <img className="contact-logo" alt="site-logo" src={logo} />
            <h2 className="contact-slogan">Dreaming Up Technology</h2>
          </div>
          <div className="col-4 offset-2 mt-5 mb-5 contact-bubble contact-right">
            <h2 className="mt-3">Contact Me</h2>
            <h4 className="mt-5">Phone</h4>
            <h4 className="mt-5">Email</h4>
            <h4 className="mt-5">Social Media</h4>
          </div>
        </div>
      </section>
    </>
  );
}
