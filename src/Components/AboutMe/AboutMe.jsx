import React, { useState, useEffect } from "react";
import "./AboutMe.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Blog from "../Blog/Blog";
// import Projects from "../Projects/Projects";
// import Activities from "../Activities/Activities";
import AboutMeImg from "./Imgs/profile-color-removebg-preview.png";
import NavPill from "../NavPill/NavPill";
import Teledyne from "./Imgs/Teledyne.png";
import UT from "./Imgs/University-of-Tennessee.png";
import Denso from "./Imgs/Denso.png";
import HarborFreight from "./Imgs/Harbor-Freight.png";
import AutoCAD from "./Imgs/AutoCAD.png";
import Matlab from "./Imgs/Matlab.png";
import Python from "./Imgs/Python.png";
import SolidWorks from "./Imgs/SolidWorks.png";
// import YearReview from "./Vids/2014 Year Review.mp4";

const companies = [
  {
    title: "Companies I Have Worked With",
    images: [
      { alt: "Teledyne Logo", src: Teledyne },
      { alt: "University of Tennessee Logo", src: UT },
      { alt: "Denso Logo", src: Denso },
      { alt: "Harbor Freight Logo", src: HarborFreight },
    ],
  },
  {
    title: "Technologies I Have Used",
    images: [
      { alt: "AutoCAD Logo", src: AutoCAD },
      { alt: "MatLab Logo", src: Matlab },
      { alt: "SolidWorks Logo", src: SolidWorks },
      { alt: "Python Logo", src: Python },
    ],
  },
  // {
  //   title: "Companies I Have Worked For",
  //   images: [
  //     { alt: "Company A Logo", src: Teledyne },
  //     { alt: "Company B Logo", src: UT },
  //     { alt: "Company C Logo", src: Denso },
  //     { alt: "Company D Logo", src: HarborFreight },
  //   ],
  // },
];

export default function AboutMe() {
  return (
    <>
      <section className="small-prof-splash">
        <img
          className="d-lg-none col-9 prof-img"
          alt="Profile Picture"
          src={AboutMeImg}
        />
      </section>
      <section className="prof-splash">
        <img
          className="float-start d-none d-lg-block offset-1 offset-xxl-2 prof-img2"
          alt="Profile Picture"
          src={AboutMeImg}
        />
        <div className="offset-md-1 offset-lg-5 col-12 col-md-10 col-lg-6  pe-5 ps-5 pb-1 about-container">
          {/* <img className="prof-img" alt="Profile Picture" src={AboutMeImg} /> */}
          <h1>About Me</h1>
          <p>
            Hello! My name is Austin Davenport and I am currently an
            installation technician with University of Tennessee Knoxville. I am
            also a Senior at Tennessee Tech University majoring in Mechanical
            Engineering focusing on Aerospace.
          </p>
          <p>
            My dream is to make a difference in the aerospace sector whether it
            deals with manned or unmanned aircraft with a focus on propulsion
            and the task of developing quieter and faster engines.
          </p>
          <p>
            I am a skilled Installation Technician with six years of experience
            working in the professional field. My proficiency in installing and
            maintaining various equipment and systems has led to successful
            project completion and satisfied clients. As a Laboratory Technician
            in my previous position, I gained expertise in analyzing and testing
            samples and interpreting results, demonstrating a meticulous and
            detail-oriented approach to my work.
          </p>
          <p>
            Beyond my professional expertise, I am also a passionate
            photographer and videographer. My creative eye and technical skills
            have allowed myself to capture stunning images and produce
            captivating videos that showcase my unique perspective. I enjoy
            using my artistic talents to tell stories and bring ideas to life.
          </p>
          <p>
            Overall, I am a versatile and talented professional who excels in
            both technical and creative endeavors. My ability to think
            critically and solve problems, combined with my artistic vision and
            attention to detail, make me a valuable asset to any team.
          </p>
        </div>
      </section>
      <div className="dividend-container">
        <div className="offset-1 offset-xxl-2 col-10 col-xxl-8 dividend"></div>
      </div>
      {/* <section className="scroll-logos">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-section">
            <h2 className="mt-5 mb-5 pb-5">Companies I Have Worked With</h2>
          </div>
          <div className="col-4 collab-sect">
            <div className="collab-container">
              <img className="collab-img" alt="Teledyne Logo" src={Teledyne} />
              <img
                className="collab-img"
                alt="University of Tennessee Logo"
                src={UT}
              />
              <img className="collab-img" alt="Denso Logo" src={Denso} />
              <img
                className="collab-img"
                alt="Harbor Freight Logo"
                src={HarborFreight}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="mt-5 mb-5 pb-5">
              Companies I Would Like To Work With
            </h2>
          </div>
        </div>
        <div>
          <div>
            <h2 className="mt-5 mb-5 pb-5">Companies I Have Worked For</h2>
          </div>
        </div>
      </section> */}
      {companies.map((company, index) => (
        <section key={index} className="company-section">
          <div className="d-flex align-items-center justify-content-between">
            <div className="text-section">
              <h2 className="offset-xl-1 offset-xxl-2 col-11 col-xxl-8 mt-5 mb-5 pb-5 pt-5 collab-title">
                {company.title}
              </h2>
            </div>
            <div className="col-8 collab-sect">
              <div className="collab-container">
                {company.images
                  .concat(company.images)
                  .map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      className="collab-img"
                      alt={image.alt}
                      src={image.src}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      <div className="dividend-container">
        <div className="offset-1 offset-xxl-2 col-10 col-xxl-8 dividend"></div>
      </div>
      <section>
        <div className="d-flex flex-column flex-lg-row justify-content-center offset-sm-1 col-sm-10 ps-1 ps-sm-0 ps-xxl-5 pe-1 pe-sm-0 pe-xxl-5 pt-5 pb-5 about-me-vid-sect">
          <h3 className="offset-sm-1 offset-lg-0 lh-base col-12 col-sm-10 col-xxl-7 ps-2 ps-xxl-0 pe-2 pe-xxl-0 pt-3 pb-3 about-h3">
            Come see what I'm up to on my{" "}
            <span className="p-1 red">YouTube</span> :{" "}
            <a
              href="https://www.youtube.com/@Wingingit.us15"
              target="_blank"
              className="youtube-link"
            >
              @WingingIt
            </a>
          </h3>
          <div className="offset-sm-1 offset-lg-0 col-12 col-sm-10 vid-container">
            <iframe
              className="about-vid"
              src="https://www.youtube.com/embed/LMPdNyQvXiI"
              title="Bucket list item: Sunrise on top of the world"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h2 className="vid-title">
              Bucket List item_ Sunrise on top of the world
            </h2>
            <p className="offset-1 col-10 vid-text">
              Watch the journey as I meet my friend before sunrise at the
              highest point in the Appalachian mountains to witness the dawns
              arrival.
            </p>
          </div>
          <div className="offset-sm-1 offset-lg-0 col-12 col-sm-10 vid-container">
            <iframe
              className="about-vid"
              src="https://www.youtube.com/embed/APbCPUImgqs"
              title="Santa Cruz"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h2 className="vid-title">Santa Cruz</h2>
            <p className="offset-1 col-10 vid-text">
              A birds eye look at the Island of Santa Cruz near my hometown in
              southern California.
            </p>
          </div>
          <div className="offset-sm-1 offset-lg-0 col-12 col-sm-10 vid-container">
            <iframe
              className="about-vid"
              src="https://www.youtube.com/embed/OuSvtnWMnjg"
              title="Strand"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h2 className="vid-title">Strand</h2>
            <p className="offset-1 col-10 vid-text">
              Testing my skills as a videographer while my friend surfs the
              waves of Silver Strand in Oxnard California.
            </p>
          </div>
          <div className="offset-sm-1 offset-lg-0 col-12 col-sm-10 vid-container">
            <iframe
              className="about-vid"
              src="https://www.youtube.com/embed/oETLm0db9QU"
              title="4th of July Fun."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h2 className="vid-title">4th of July Fun</h2>
            <p className="offset-1 col-10 vid-text">
              A look at how southern California celebrates the Fourth of July.
            </p>
          </div>
          <div className="offset-sm-1 offset-lg-0 col-12 col-sm-10 vid-container">
            <iframe
              className="about-vid"
              src="https://www.youtube.com/embed/6utjmpT1ryM"
              title="2014 Year Review"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <h2 className="vid-title">2014 Year Review</h2>
            <p className="offset-1 col-10 vid-text">
              A look back into one of the wildest years of my life. Everyone
              should have a highlight reel of their favorite year.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="offset-2 col-8 pill-container">{/* <NavPill /> */}</div>
      </section>
    </>
  );
}
