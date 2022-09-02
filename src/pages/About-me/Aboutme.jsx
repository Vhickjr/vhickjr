import React from "react";
import "./aboutme.css";
import Myportrait from "./vhickjr.png";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
export default function Aboutme() {
  return (
    <div className="aboutme">
      {" "}
      <div className="main">
        <div style={{ width: "425px" }}>
          <a href="/Home">
            <FaArrowCircleLeft id="arrow" />
          </a>
          <h2
            style={{
              fontWeight: "800",
              fontSize: "32px",
              lineHeight: "64px",
              fontFamily: "Nunito",
              fontStyle: "normal",
              marginTop: "100px",
            }}
          >
            About me
          </h2>
          <p style={{}}>
            I am a creative product designer with 1 year experience, I offer the
            most value to companies looking for design directions, I am skilled
            at turning complicated information into creative and
            easy-to-understand user interfaces, layouts, and visualizations.
            Work collaboratively with project managers, software developers,
            engineers,etc
          </p>
        </div>
        <div>
          <img
            src={Myportrait}
            alt="My portrait"
            style={{
              height: "520px",
              width: "425px",
              borderRadius: "100%",
              padding: "2em",
            }}
          ></img>
        </div>
      </div>
      <div className="item1">
        <h2
          style={{
            fontWeight: "800",
            fontSize: "32px",
            lineHeight: "64px",
            fontFamily: "Nunito",
            fontStyle: "normal",
          }}
        >
          My design process
        </h2>
        <div
          style={{
            flexWrap: "wrap",
            display: "inline-flex",
            justifyContent: "center",
            gap: "2em",
            padding: "2em",
          }}
        >
          {" "}
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid #f4f4f4",
              borderRadius: "15px",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div style={{ marginTop: "50px" }}>Empathize</div>
          </div>
          <FaArrowCircleRight id="arrow1" />
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid #f4f4f4",
              borderRadius: "15px",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div style={{ marginTop: "50px" }}>Define</div>
          </div>
          <FaArrowCircleRight id="arrow1" />
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid #f4f4f4",
              borderRadius: "15px",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div style={{ marginTop: "50px" }}>Ideate</div>
          </div>
          <FaArrowCircleRight id="arrow1" />
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid #f4f4f4",
              borderRadius: "15px",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div style={{ marginTop: "50px" }}>Prototype</div>
          </div>
          <FaArrowCircleRight id="arrow1" />
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid #f4f4f4",
              borderRadius: "15px",
              backgroundColor: "white",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div style={{ marginTop: "50px" }}>Test</div>
          </div>
        </div>
      </div>
      <div className="item2">
        {" "}
        <h2
          style={{
            fontWeight: "800",
            fontSize: "32px",
            lineHeight: "64px",
            fontFamily: "Nunito",
            fontStyle: "normal",
            color: "white",
            backgroundColor: "black",
          }}
        >
          Fun fact about me
        </h2>
        <div
          style={{
            flexWrap: "wrap",
            display: "inline-flex",
            justifyContent: "space-between",
            gap: "2em",
            padding: "2em",
          }}
        >
          {" "}
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid #f4f4f4",
              borderRadius: "15px",
              backgroundColor: "#f4f4f4",
              color: "black",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div style={{ marginTop: "50px" }}>10 featured projects</div>
          </div>
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid #f4f4f4",
              borderRadius: "15px",
              backgroundColor: "#f4f4f4",
              color: "black",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div style={{ marginTop: "50px" }}>EEE Student at Unilag</div>
          </div>
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid #f4f4f4",
              borderRadius: "15px",
              backgroundColor: "#f4f4f4",
              color: "black",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div style={{ marginTop: "50px" }}>Forex trader</div>
          </div>
        </div>
      </div>
    </div>
  );
}
