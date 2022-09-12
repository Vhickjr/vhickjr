import React from "react";
import "./skills.css";
import Screenshot from "./Screenshot.png";
import { FaArrowCircleLeft } from "react-icons/fa";
import LOGO from "./logo1.png";
import Hamburger from "hamburger-react";

export default function Skills() {
  return (
    <div className="skills">
      {/* <Hamburger color="white" />*/}
      <img
        src={LOGO}
        alt="my logo"
        style={{ height: "100px", width: "100px" }}
        id="arrrow1"
      ></img>
      <label for="check" id="arrrow2">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",

          flexWrap: "wrap",
        }}
      >
        {" "}
        <div style={{ width: "600px" }}>
          <h3 style={{ color: "white", textAlign: "start" }}>HTML</h3>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {" "}
              25%
            </div>
          </div>
          <br></br>
          <h3 style={{ color: "white", textAlign: "start" }}>CSS</h3>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {" "}
              50%
            </div>
          </div>
          <br></br>
          <h3 style={{ color: "white", textAlign: "start" }}>MongoDB/MySQL</h3>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              100%
            </div>
          </div>
        </div>
        <div style={{ width: "600px" }}>
          <h3 style={{ color: "white", textAlign: "start" }}>
            Javascript/Nodejs
          </h3>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
          <br></br>
          <h3 style={{ color: "white", textAlign: "start" }}>ReactJS/NextJS</h3>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              100%
            </div>
          </div>
          <br></br>
          <h3 style={{ color: "white", textAlign: "start" }}>Git/Github</h3>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              100%
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <div className="portt1">
          <div className="portt2">
            <img
              src={Screenshot}
              alt="My portrait"
              className="img-containerr img-containerr1 img-containerr2 "
            ></img>
          </div>
          <div className="portt3" style={{ background: "#f4f4f4" }}>
            <h1 style={{ color: "green", paddingTop: "40px" }}>
              Victor Mathias
            </h1>
            <p style={{ color: "white", paddingTop: "20px" }}>
              This is my portfolio website, built with ReactJS.
            </p>
            <button
              style={{
                color: "green",
                border: "2px solid green",
                background: "transparent",
                marginTop: "30px",
                maxHeight: "50px",
                maxWidth: "100px",
                padding: "0px",
              }}
            >
              <a>View project</a>
            </button>
          </div>
        </div>
        <div className="portt1">
          <div className="portt2">
            <img
              src={Screenshot}
              alt="My portrait"
              className="img-containerr img-containerr1 img-containerr2 "
            ></img>
          </div>
          <div className="portt3" style={{ background: "#f4f4f4" }}>
            <h1 style={{ color: "green", paddingTop: "40px" }}>
              Victor Mathias
            </h1>
            <p style={{ color: "white", paddingTop: "20px" }}>
              This is my portfolio website, built with ReactJS.
            </p>
            <button
              style={{
                color: "green",
                border: "2px solid green",
                background: "transparent",
                marginTop: "30px",
                maxHeight: "50px",
                maxWidth: "100px",
                padding: "0px",
              }}
            >
              <a>View project</a>
            </button>
          </div>
        </div>
        <div className="portt1">
          <div className="portt2">
            <img
              src={Screenshot}
              alt="My portrait"
              className="img-containerr img-containerr1 img-containerr2 "
            ></img>
          </div>
          <div className="portt3" style={{ background: "#f4f4f4" }}>
            <h1 style={{ color: "green", paddingTop: "40px" }}>
              Victor Mathias
            </h1>
            <p style={{ color: "white", paddingTop: "20px" }}>
              This is my portfolio website, built with ReactJS.
            </p>
            <button
              style={{
                color: "green",
                border: "2px solid green",
                background: "transparent",
                marginTop: "30px",
                maxHeight: "50px",
                maxWidth: "100px",
                padding: "0px",
              }}
            >
              <a>View project</a>
            </button>
          </div>
        </div>
        <div className="portt1">
          <div className="portt2">
            <img
              src={Screenshot}
              alt="My portrait"
              className="img-containerr img-containerr1 img-containerr2 "
            ></img>
          </div>
          <div className="portt3" style={{ background: "#f4f4f4" }}>
            <h1 style={{ color: "green", paddingTop: "40px" }}>
              Victor Mathias
            </h1>
            <p style={{ color: "white", paddingTop: "20px" }}>
              This is my portfolio website, built with ReactJS.
            </p>
            <button
              style={{
                color: "green",
                border: "2px solid green",
                background: "transparent",
                marginTop: "30px",
                maxHeight: "50px",
                maxWidth: "100px",
                padding: "0px",
              }}
            >
              <a>View project</a>
            </button>
          </div>
        </div>
        <div className="portt1">
          <div className="portt2">
            <img
              src={Screenshot}
              alt="My portrait"
              className="img-containerr img-containerr1 img-containerr2 "
            ></img>
          </div>
          <div className="portt3" style={{ background: "#f4f4f4" }}>
            <h1 style={{ color: "green", paddingTop: "40px" }}>
              Victor Mathias
            </h1>
            <p style={{ color: "white", paddingTop: "20px" }}>
              This is my portfolio website, built with ReactJS.
            </p>
            <button
              style={{
                color: "green",
                border: "2px solid green",
                background: "transparent",
                marginTop: "30px",
                maxHeight: "50px",
                maxWidth: "100px",
                padding: "0px",
              }}
            >
              <a>View project</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
