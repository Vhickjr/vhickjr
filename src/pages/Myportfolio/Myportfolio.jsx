import React from "react";
import "./myportfolio.css";
import Screenshot from "./Screenshot.png";
import { FaArrowCircleLeft } from "react-icons/fa";
export default function Myportfolio() {
  return (
    <div className="myportfolio" style={{ width: "100vw" }}>
      <div>
        <a href="/Home">
          <FaArrowCircleLeft id="arrow2" />
        </a>
        <h1>
          {" "}
          <span style={{ color: "green" }}>My</span> Portfolio
        </h1>
        <br></br>
        <h4>
          Some of the{" "}
          <span style={{ color: "green" }}> Projects I have worked</span> on.
        </h4>
      </div>
      <div className="port1">
        <div className="port2">
          <img
            src={Screenshot}
            alt="My portrait"
            className="img-container img-container1 img-container2 "
          ></img>
        </div>
        <div className="port3">
          <h1 style={{ color: "green", paddingTop: "40px" }}>Victor Mathias</h1>
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
      <div className="port1">
        <div className="port2">
          <img
            src={Screenshot}
            alt="My portrait"
            className="img-container img-container1 img-container2 "
          ></img>
        </div>
        <div className="port3">
          <h1 style={{ color: "green", paddingTop: "40px" }}>Victor Mathias</h1>
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
      <div className="port1">
        <div className="port2">
          <img
            src={Screenshot}
            alt="My portrait"
            className="img-container img-container1 img-container2 "
          ></img>
        </div>
        <div className="port3">This is my portfolio website</div>
      </div>
      <div className="port1">
        <div className="port2">
          <img
            src={Screenshot}
            alt="My portrait"
            className="img-container img-container1 img-container2 "
          ></img>
        </div>
        <div className="port3">This is my portfolio website</div>
      </div>
      <div className="port1">
        <div className="port2">
          <img
            src={Screenshot}
            alt="My portrait"
            className="img-container img-container1 img-container2 "
          ></img>
        </div>
        <div className="port3">This is my portfolio website</div>
      </div>
      <div className="port1">
        <div className="port2">
          <img
            src={Screenshot}
            alt="My portrait"
            className="img-container img-container1 img-container2 "
          ></img>
        </div>
        <div className="port3">This is my portfolio website</div>
      </div>
      <div className="port1">
        <div className="port2">
          <img
            src={Screenshot}
            alt="My portrait"
            className="img-container img-container1 img-container2 "
          ></img>
        </div>
        <div className="port3">This is my portfolio website</div>
      </div>
      <div className="port1">
        <div className="port2">
          <img
            src={Screenshot}
            alt="My portrait"
            className="img-container img-container1 img-container2 "
          ></img>
        </div>
        <div className="port3">This is my portfolio website</div>
      </div>
      <div className="port1">
        <div className="port2">
          <img
            src={Screenshot}
            alt="My portrait"
            className="img-container img-container1 img-container2 "
          ></img>
        </div>
        <div className="port3">This is my portfolio website</div>
      </div>
      <div className="port1">
        <div className="port2">
          <img
            src={Screenshot}
            alt="My portrait"
            className="img-container img-container1 img-container2 "
          ></img>
        </div>
        <div className="port3">This is my portfolio website</div>
      </div>
    </div>
  );
}

/*Myportfolio: 1. Restaurant Website 2. Admin Dashboard 3. Bater clone 4.
      To-do App 5. Bub-it 6. Quiz-app 7. internet tools app (Practicing raw
      programming skills) 8. styleteebera website 9. Frontend libraries project
      10. JavaScript dataStructure and Algorithms project. 11. Your Porfolio
      website */
