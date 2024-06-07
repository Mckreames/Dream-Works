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

export default function Projects() {
  return (
    <>
      {/* <h1>Projects</h1> */}
      {/* Card Container */}
      <div className="pt-5 pb-5 card-container">
        <Card
          style={{
            width: "fit-content",
          }}
        >
          <img alt="Actual Nutz" src={deezNutz} />
          <CardBody>
            <CardTitle tag="h5">Deez Nutz</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Those Nutz
            </CardSubtitle>
            <CardText>
              Deez Nutz are, in fact, Those Nutz as well. It's not a commonly
              known fact.
            </CardText>
            <Button>View Project</Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
