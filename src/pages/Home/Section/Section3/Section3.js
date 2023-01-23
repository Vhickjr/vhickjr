import React from "react";
import "./section3.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Section3() {
  return (
    <div className="sec3">
      <a href="./skills">
        <h3 style={{ color: "white", textAlign: "center" }}>skills</h3>
      </a>
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

      <h3 style={{ color: "white", textAlign: "start" }}>Javascript/Node</h3>
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style={{ width: "70%" }}
          aria-valuenow="70"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          70%
        </div>
      </div>
      <br></br>

      <h3 style={{ color: "white", textAlign: "start" }}>ReactJS/NextJS</h3>
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style={{ width: "70%" }}
          aria-valuenow="70"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          70%
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Section3;
