import React from "react";
import "./aboutme.css";
import Myportrait from "./vhickjr.png";
import { FaArrowCircleLeft, FiArrowRight } from "react-icons/fa";
export default function Aboutme() {
  return (
    <div className="aboutme">
      {" "}
      <div className="main">
        <a href="/Home">
          <FaArrowCircleLeft id="arrow" />
        </a>
        <div style={{ width: "520px" }}>
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
              width: "520px",
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
              border: "2px solid black",
              borderRadius: "15px",
              backgroundColor: "white",
            }}
          >
            box1
          </div>
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid black",
              borderRadius: "15px",
              backgroundColor: "white",
            }}
          >
            <p>box2</p>
          </div>
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid black",
              borderRadius: "15px",
              backgroundColor: "white",
            }}
          >
            box3
          </div>
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid black",
              borderRadius: "15px",
              backgroundColor: "white",
            }}
          >
            box4
          </div>
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid black",
              borderRadius: "15px",
              backgroundColor: "white",
            }}
          >
            box5
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
              border: "2px solid black",
              borderRadius: "15px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            box1
          </div>
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid black",
              borderRadius: "15px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            <p>box2</p>
          </div>
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid black",
              borderRadius: "15px",
              backgroundColor: "white",
              color: "black",
            }}
          >
            box3
          </div>
        </div>
      </div>
    </div>
  );
}
