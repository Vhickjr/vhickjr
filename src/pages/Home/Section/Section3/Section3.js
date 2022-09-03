import "./section3.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Section3() {
  return (
    <div className="sec3">
      <h3 style={{ color: "white", textAlign: "center" }}>skills</h3>
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

      <h3 style={{ color: "white", textAlign: "start" }}>Javascript</h3>
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

      <h3 style={{ color: "white", textAlign: "start" }}>ReactJS</h3>
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
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Section3;
