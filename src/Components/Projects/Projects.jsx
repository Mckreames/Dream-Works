import React from "react";
import "./Projects.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import deezNutz from "./Imgs/deez-nutz.webp";
import weedRoom from "./Imgs/thisisengineering-V-AEBD99Hak-unsplash.jpg";
import bombDrone from "./Imgs/thisisengineering-lfIDAUla2Hw-unsplash.jpg";
import peepingTom from "./Imgs/gabriel-vasiliu-fCJi6nVU27o-unsplash.jpg";
import observatory from "./Imgs/NOAA CO2.png";

export default function Projects() {
  return (
    <>
      {/* Card Container */}
      <div className="pt-5 pb-5 dark-back">
        <div className="offset-1 col-10 project-border">
          <h1 className="pt-3 pb-3 project-h1">Projects</h1>
          <div className="pt-3 pb-5 card-container">
            <Card className="card-30">
              <img
                alt="Actual Nutz"
                src={observatory}
                className="project-img"
              />
              <CardBody>
                <CardTitle tag="h5" className="white-text">
                  CO2 In Rain
                </CardTitle>
                <CardSubtitle className="mb-2 white-text" tag="h6">
                  NOAA Observatory
                </CardSubtitle>
                <CardText className="project-par"></CardText>
                <Button>Download Project PDF</Button>
              </CardBody>
            </Card>
            <Card className="card-30">
              <img alt="Weed Room" src={weedRoom} className="project-img" />
              <CardBody>
                <CardTitle tag="h5" className="white-text">
                  Weed Room
                </CardTitle>
                <CardSubtitle className="mb-2 white-text" tag="h6">
                  Room of Weed
                </CardSubtitle>
                <CardText className="project-par">
                  This is not actual weed but I thought it was funny which is
                  why I'm making the same joke for the second time on a
                  different page.
                </CardText>
                <Button>Download Project PDF</Button>
              </CardBody>
            </Card>

            <Card className="card-30">
              <img alt="Bomb Drone" src={bombDrone} className="project-img" />
              <CardBody>
                <CardTitle tag="h5" className="white-text">
                  Bomb Drone
                </CardTitle>
                <CardSubtitle className="mb-2 white-text" tag="h6">
                  Drone that is a bomb itself
                </CardSubtitle>
                <CardText className="project-par">
                  This sly, aluminum, bad boy is a drone, even though it doesn't
                  look like one. The sole purpose is to find all flat-earthers
                  and send them to the heavens... If you know what I mean 😉.
                  Good riddance.
                </CardText>
                <Button>Download Project PDF</Button>
              </CardBody>
            </Card>

            <Card className="card-30">
              <img alt="Peeping Tom" src={peepingTom} className="project-img" />
              <CardBody>
                <CardTitle tag="h5" className="white-text">
                  Peeping Tom
                </CardTitle>
                <CardSubtitle className="mb-2 white-text" tag="h6">
                  Tom while he's peeping.
                </CardSubtitle>
                <CardText className="project-par">
                  Peeping Toms get a bad rap because a couple of them do bad
                  things and it makes all of them look bad. Well, peeping toms
                  can do good for the world, and the best one?... Introducing
                  Peeping Tom 2.0! Twice the peeping, double the tom, triple the
                  fun!
                </CardText>
                <Button>Download Project PDF</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
