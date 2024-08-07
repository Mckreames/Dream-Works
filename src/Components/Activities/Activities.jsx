import React from "react";
import "./Activities.css";
import Engine from "./Imgs/Engine.png";
import Jet from "./Imgs/Jet.png";
import Starship from "./Imgs/starship.jpeg";
import Shuttle from "./Imgs/SpaceShuttle.jpg";

export default function Activities() {
  return (
    <>
      <div className="dark-back">
        <h1 className="pt-5 mb-3 activity-h1">Latest Activities</h1>
        <section className="col-11 dark-back activity-splash">
          <div className="offset-1 col-7 main-splash">
            <img
              alt="Blown out image of an engine"
              src={Engine}
              className="activity-imgs"
            />
          </div>
          <div className="col-4 list-splash">
            <ul className="no-bullets">
              <li className="splash-list-item">
                <div className="list-title">Whisper Aero</div>
                <div className="list-date">8/8/24</div>
              </li>
              <div className="col mb-1 mt-1 activity-divider"></div>
              <li className="splash-list-item">
                <div className="list-title">Hermeus and Quarter Horse</div>
                <div className="list-date">4/20/24</div>
              </li>
              <div className="col mb-1 mt-1 activity-divider"></div>
              <li className="splash-list-item">
                <div className="list-title">Bomb Drone</div>
                <div className="list-date">9/11/24</div>
              </li>
              <div className="col mb-1 mt-1 activity-divider"></div>
              <li className="splash-list-item">
                <div className="list-title">Peeping Tom</div>
                <div className="list-date">6/9/24</div>
              </li>
            </ul>
          </div>
        </section>
        <div className="dividend-container">
          <div className="offset-2 col-8 mt-3 dividend"></div>
        </div>
        <section className="d-flex activity-sect">
          <div className="offset-1 col-10 activity-entry">
            <div className="p-5 activity-entries">
              <img
                src={Engine}
                alt="blown out picture of the whisper Aero jet engine"
                className="col-2 activity-img"
              />
              <div className="ms-3 me-3 vertical-divider"></div>
              <div className="activity-content">
                <h2 className="activity-head-text">Whisper Aero</h2>
                <p className="activity-p-text">
                  During my time at Tennessee tech university I had the
                  opportunity to meet and talk with one of my professors who is
                  close friends with a professional at whisper arrow. What
                  they're accomplishing here baffles me and the peaks my
                  interest to no end. Here they are creating a ducted fan engine
                  that is imperceivable past 500 feet. I hope to learn more and
                  possibly work with them in the near future read more about
                  what they want to accomplish here:{" "}
                  <a href="https://www.whisper.aero/" target="_blank">
                    Ultra-quiet,efficient,and scalable electric propulsion
                    (whisper.aero)
                  </a>
                </p>
              </div>
            </div>
            <div className="col mb-1 mt-1 activity-divider"></div>
            <div className="p-5 activity-entries">
              <img
                src={Jet}
                alt="blown out picture of the whisper Aero jet engine"
                className="col-2 activity-img"
              />
              <div className="ms-3 me-3 vertical-divider"></div>
              <div className="activity-content">
                <h2 className="activity-head-text">
                  Hermeus and Quarter Horse
                </h2>
                <p className="activity-p-text">
                  I recently fell in love with this company named Hermes in
                  Atlanta GA. What they're accomplishing is a reusable unmanned
                  and manned hypersonic engine. They are the forefront of
                  aerospace technology and I have started following almost every
                  bit of media I can get my hands on. They most recently posted
                  an article about their first prototype that should take flight
                  later in 2024. Feel free to read more about it here:{" "}
                  <a
                    href="https://www.hermeus.com/press-release-mk1-unveil"
                    target="_blank"
                  >
                    Hermeus Unveils First Aircraft, Quarterhorse Mk 1 | Hermeus
                  </a>
                </p>
              </div>
            </div>
            <div className="col mb-1 mt-1 activity-divider"></div>
            <div className="p-5 activity-entries">
              <img
                src={Shuttle}
                alt="blown out picture of the whisper Aero jet engine"
                className="col-2 activity-img"
              />
              <div className="ms-3 me-3 vertical-divider"></div>
              <div className="activity-content">
                <h2 className="activity-head-text">NASA Mars Expedition</h2>
                <p className="activity-p-text">
                  Everyone knows the almighty NASA. Since I was a boy, I've been
                  fascinated with everything space has to offer. From blackholes
                  to dark matter, I can't seem to stop fantisizing about the
                  posiibilities the dark void offers. See what NASA is working
                  on next here:{" "}
                  <a
                    href="https://www.nasa.gov/ames/core-area-of-expertise-entry-systems/"
                    target="_blank"
                  >
                    Core Area of Expertise-Entry Systems
                  </a>
                </p>
              </div>
            </div>
            <div className="col mb-1 mt-1 activity-divider"></div>
            <div className="p-5 activity-entries">
              <img
                src={Starship}
                alt="blown out picture of the whisper Aero jet engine"
                className="col-2 activity-img"
              />
              <div className="ms-3 me-3 vertical-divider"></div>
              <div className="activity-content">
                <h2 className="activity-head-text">SpaceX Starship</h2>
                <p className="activity-p-text">
                  That, Elon Musk, fella is something else, isn't he? Well, I
                  think so as well! I find his ideas and his solutions to be
                  very interesting. If I could work on any of his various
                  products, I would happily work on the Starship. Take a look at
                  the starship here:{" "}
                  <a
                    href="https://www.spacex.com/vehicles/starship/"
                    target="_blank"
                  >
                    STARSHIP. SERVICE TO EARTH ORBIT, MOON, MARS AND BEYOND
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
