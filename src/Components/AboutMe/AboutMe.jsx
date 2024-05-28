import React from "react";
import "./AboutMe.css";
import AboutMeImg from "./Imgs/profile-color-removebg-preview.png";
import NavPill from "../NavPill/NavPill";
import Teledyne from "./Imgs/Teledyne.png";
import UT from "./Imgs/University-of-Tennessee.png";
import Denso from "./Imgs/Denso.png";
import HarborFreight from "./Imgs/Harbor-Freight.png";

export default function AboutMe() {
  return (
    <>
      <section className="prof-splash">
        <div className="offset-3 col-6">
          <h1>AboutMe</h1>
          <img className="prof-img" alt="Profile Picture" src={AboutMeImg} />
          <h2>About Me</h2>
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
      <section>
        <h2 className="mt-5 mb-5 pb-5">Companies I Have Worked With</h2>
        <div>
          <img className="collab-img" alt="Teledyne Logo" src={Teledyne} />
        </div>
        <div>
          <img
            className="collab-img"
            alt="University of Tennessee Logo"
            src={UT}
          />
        </div>
        <div>
          <img className="collab-img" alt="Denso Logo" src={Denso} />
        </div>
        <div>
          <img
            className="collab-img"
            alt="Harbor Freight Logo"
            src={HarborFreight}
          />
        </div>
      </section>
      <section>
        <div className="offset-2 col-8 pill-container">
          <NavPill />
        </div>
      </section>
    </>
  );
}
