import React from "react";
import "./section2.css";
import { Button } from "react-bootstrap";
import Portrait from "./vhickjr.png";
export default function Section2() {
  const handleClick = () => {
    window.location.href = "mailto:victormathias001@gmail.com";
  };
  return (
    <div className="sec2">
      <div
        style={{
          paddingLeft: "1em",
          paddingRight: "1em",
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
          <img src={Portrait} alt="My Portrait" />
        </div>

        <div className="vizard2">
          <div
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
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <h2 className="header">
                  <button
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#32de84",
                      border: "#32de84",
                    }}
                  >
                    About Me
                  </button>
                </h2>
              </a>

              <p className="content">
                I am a software developer with 2 years of experience,
                specializing in front-end development. My skillset includes
                full-stack and back-end development, and I am proficient in
                several languages including HTML, CSS, JavaScript, Python, C and
                C++. I am dedicated to creating visually stunning front-end
                interfaces.
              </p>

              <div className="button-container">
                <div>
                  <Button className="button Resume">
                    <a
                      style={{ color: "white" }}
                      href="https://docs.google.com/document/d/1LSzUCRVStYwlqMvS5vGaQOHmtdujmR1I/edit?usp=sharing&ouid=111082994503445633514&rtpof=true&sd=true"
                    >
                      {" "}
                      View Resume
                    </a>
                  </Button>
                </div>
                <div>
                  {" "}
                  <Button className="button Hire">
                    {" "}
                    <span onClick={handleClick}>Hire me</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
