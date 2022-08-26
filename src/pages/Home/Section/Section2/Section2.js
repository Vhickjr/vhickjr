import React from "react";
import "./section2.css";
import { Button, Container, Row } from "react-bootstrap";
import Portrait from "./image.png";
export default function Section2() {
  return (
    <div className="sec2">
      <Container
        fluid
        style={{
          padding: "2.5em",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "whitesmoke",
          flexWrap: "wrap",
        }}
      >
        <div className="vizard1">
          <img
            src={Portrait}
            alt="My Portrait"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="vizard2">
          <Row
            className="About"
            style={{
              maxWidth: "100%",
              height: "100%",
              display: "flex",

              alignItems: "center",
            }}
          >
            <div>
              <h2 className="header">About Me</h2>

              <p className="content">
                I am a creative product designer with 1 year experience, I offer
                the most value to companies looking for design directions, I am
                skilled at turning complicated information into creative and
                easy-to-understand user interfaces, layouts, and visualizations.
                Work collaboratively with project managers, software developers,
                engineers,etc
              </p>

              <div className="button-container">
                <Button className="button Resume">View Resume</Button>
                <Button className="button Hire">Hire Me</Button>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
