import React from "react";
import "./skills.css";
//import Screenshot from "./Screenshot.png";
import Banner from "../../components/banner/Banner";

export default function Skills() {
  return (
    <div className="skills">
      <div>
        {" "}
        <Banner></Banner>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "1em",
          flexWrap: "wrap",
          marginTop: "100px",
        }}
      >
        {" "}
        <div style={{ width: "500px" }}>
          <h3 style={{ color: "white", textAlign: "start" }}>HTML</h3>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: "95%" }}
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {" "}
              95%
            </div>
          </div>
          <br></br>
          <h3 style={{ color: "white", textAlign: "start" }}>CSS</h3>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {" "}
              80%
            </div>
          </div>
          <br></br>
          <h3 style={{ color: "white", textAlign: "start" }}>MongoDB/MySQL</h3>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </div>
          </div>
        </div>
        <div style={{ width: "500px" }}>
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
              style={{ width: "85%" }}
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
          <br></br>
          <h3 style={{ color: "white", textAlign: "start" }}>Git/Github</h3>
          <div class="progress">
            <div
              class="progress-bar bg-success"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <h1 style={{ color: "white" }}>Certifications</h1>
      <div>
        {/*<div className="portt1">
          <div className="portt2">
            <img
              src={
                "https://static.ra.co/images/profiles/square/alx-fr.jpg?dateUpdated=1605052800000"
              }
              alt="My portrait"
              className="img-containerr img-containerr1 img-containerr2 "
            ></img>
          </div>
          <div className="portt3" style={{ background: "#f4f4f4" }}>
            <h1 style={{ color: "#32de84", paddingTop: "10px" }}>
              Alx software engineering
            </h1>
            <p style={{ color: "black", paddingTop: "10px" }}>
              I am a member of Cohort 12 in the ALX Software Engineering
              Program.
            </p>
            <button
              style={{
                borderRadius: "10px",
                background: "#32de84",
                border: "2px solid #32de84 ",
              }}
            >
              <a>in progress</a>
            </button>
          </div>
            </div>*/}
        <div className="portt1">
          <div className="portt2">
            <img
              src={
                "https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
              }
              alt="My portrait"
              className="img-containerr img-containerr1 img-containerr2 "
            ></img>
          </div>
          <div className="portt3" style={{ background: "#f4f4f4" }}>
            <h1 style={{ color: "#32de84", paddingTop: "10px" }}>
              Responsive Web Design
            </h1>
            <p style={{ color: "black", paddingTop: "10px" }}>
              In this Responsive Web Design Certification, I learned the
              languages that developers use to build webpages: HTML (Hypertext
              Markup Language) for content, and CSS (Cascading Style Sheets) for
              design.
            </p>
            <button
              style={{
                borderRadius: "10px",
                background: "#32de84",
                border: "2px solid #32de84 ",
              }}
            >
              in progress
            </button>
          </div>
        </div>
        <div className="portt1">
          <div className="portt2">
            <img
              src={
                "https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
              }
              alt="My portrait"
              className="img-containerr img-containerr1 img-containerr2 "
            ></img>
          </div>
          <div className="portt3" style={{ background: "#f4f4f4" }}>
            <h1 style={{ color: "#32de84", paddingTop: "10px" }}>
              JavaScript Algorithms and Data Structures
            </h1>
            <p style={{ color: "black", paddingTop: "10px" }}>
              While HTML and CSS control the content and styling of a page,
              JavaScript is used to make it interactive. In the JavaScript
              Algorithm and Data Structures Certification, I learned the
              fundamentals of JavaScript including variables, arrays, objects,
              loops, and functions
            </p>
            <button
              style={{
                borderRadius: "10px",
                background: "#32de84",
                border: "2px solid #32de84 ",
              }}
            >
              in progress
            </button>
          </div>
        </div>
        <div className="portt1">
          <div className="portt2">
            <img
              src={
                "https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
              }
              alt="My portrait"
              className="img-containerr img-containerr1 img-containerr2 "
            ></img>
          </div>
          <div className="portt3" style={{ background: "#f4f4f4" }}>
            <h1 style={{ color: "#32de84", paddingTop: "40px" }}>
              Front End Development Libraries
            </h1>
            <p style={{ color: "black", paddingTop: "20px" }}>
              In the Front End Development Libraries Certification, you'll learn
              how to style your site quickly with Bootstrap. You'll also learn
              how to add logic to your CSS styles and extend them with Sass.
            </p>
            <button
              style={{
                borderRadius: "10px",
                background: "#32de84",
                border: "2px solid #32de84 ",
              }}
            >
              in progress
            </button>
          </div>
        </div>
        <div className="portt1">
          <div className="portt2">
            <img
              src={"https://i.ibb.co/T16ZfWF/Screenshot-54.png"}
              alt="My portrait"
              className="img-containerr img-containerr1 img-containerr2 "
            ></img>
          </div>
          <div className="portt3" style={{ background: "#f4f4f4" }}>
            <h1 style={{ color: "#32de84", paddingTop: "40px" }}>
              Front End Development (React)
            </h1>
            <p style={{ color: "black", paddingTop: "20px" }}>
              Through the SideHustle Internship, I acquired the skills to work
              with React and developed my abilities as a front-end developer.
            </p>
            <button
              style={{
                borderRadius: "10px",
                background: "#32de84",
                border: "2px solid #32de84 ",
              }}
            >
              <a
                href="https://certificate.terrahq.co/31442GR6BG2"
                style={{ color: "white" }}
              >
                view certification
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
