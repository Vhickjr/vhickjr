import React from "react";
import "./section2.css";
import { Button, Container, Row } from "react-bootstrap";
import Portrait from "./vhickjr.png";
export default function Section2() {
  return (
    <div className="sec2">
      <Container
        fluid
        style={{
          paddingLeft: "auto",
          paddingRight: "auto",
          paddingTop: "2.5em",
          paddingBottom: "2.5em",

          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
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
              <a
                href="/Aboutme"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h2 className="header">About Me</h2>
              </a>

              <p className="content">
                I am a creative product designer with 1 year experience, I offer
                the most value to companies looking for design directions, I am
                skilled at turning complicated information into creative and
                easy-to-understand user interfaces, layouts, and visualizations.
                Work collaboratively with project managers, software developers,
                engineers,etc
              </p>

              <div className="button-container">
                <Button className="button Resume">
                  <a href="https://universityoflagos-my.sharepoint.com/:b:/g/personal/190403081_live_unilag_edu_ng/Ef7_wIM_aIBCuYNDR1xw-aQByMc0k0ihS39HK71td9OKqg?e=WYnncG">
                    {" "}
                    View Resume
                  </a>
                </Button>
                <Button className="button Hire">Hire Me</Button>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
