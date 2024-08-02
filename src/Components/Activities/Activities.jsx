import React from "react";
import "./Activities.css";
import Engine from "./Imgs/Engine.png";
import Jet from "./Imgs/Jet.png";
import CO2 from "./Imgs/NOAA CO2.png";

export default function Activities() {
  return (
    <>
      <div className="dark-back">
        <h1 className="pt-5 mb-3 activity-h1">Latest Activities</h1>
        <section className="offset-1 col-10 dark-back activity-splash">
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
      </div>
    </>
  );
}
