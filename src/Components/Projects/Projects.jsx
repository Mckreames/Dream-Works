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
        <div className="offset-sm-1 col-12 col-sm-10 project-border">
          <h1 className="pt-3 pb-3 project-h1">Projects</h1>
          <div className="d-flex flex-wrap justify-content-center pt-3 pb-5 card-container">
            <Card className="col-12 col-md-10 col-xl-5 col-xxl-3 card-30">
              <img
                alt="Actual Nutz"
                src={observatory}
                className="col-12 project-img"
              />
              <CardBody>
                <CardTitle tag="h5" className="card-main-text">
                  CO2 In Rain
                </CardTitle>
                <CardSubtitle className="mb-2" tag="h6"></CardSubtitle>
                <CardText className="pt-3 project-par">
                  NOAA Observatory
                </CardText>
                <Button>Download Project PDF</Button>
              </CardBody>
            </Card>
            <Card className="col-12 col-md-10 col-xl-5 col-xxl-3 card-30">
              <img
                alt="Weed Room"
                src={weedRoom}
                className="col-12 project-img"
              />
              <CardBody>
                <CardTitle tag="h5" className="card-main-text">
                  Lego Brick Stress Test
                </CardTitle>
                <CardSubtitle className="mb-2" tag="h6"></CardSubtitle>
                <CardText className="pt-3 project-par">
                  SolidWorks Brick Stress Test
                </CardText>
                <Button>Download Project PDF</Button>
              </CardBody>
            </Card>

            <Card className="col-12 col-md-10 col-xl-5 col-xxl-3 card-30">
              <img
                alt="Bomb Drone"
                src={bombDrone}
                className="col-12 project-img"
              />
              <CardBody>
                <CardTitle tag="h5" className="card-main-text">
                  Bomb Drone
                </CardTitle>
                <CardSubtitle className="mb-2" tag="h6"></CardSubtitle>
                <CardText className="pt-3 project-par">
                  A drone designed to disarm bombs from the air
                </CardText>
                <Button>Download Project PDF</Button>
              </CardBody>
            </Card>

            <Card className="col-12 col-md-10 col-xl-5 col-xxl-3 card-30">
              <img
                alt="Peeping Tom"
                src={peepingTom}
                className="col-12 project-img"
              />
              <CardBody>
                <CardTitle tag="h5" className="card-main-text">
                  Peeping Tom
                </CardTitle>
                <CardSubtitle
                  className="mb-2 white-text"
                  tag="h6"
                ></CardSubtitle>
                <CardText className="pt-3 project-par">
                  X-ray capable dual cameras
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
