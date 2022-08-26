import ProgressBar from "react-bootstrap/ProgressBar";
import "./section3.css";
function Section3() {
  const now = 95;
  const now2 = 85;
  const now3 = 70;
  const now4 = 50;
  return (
    <div className="sec3">
      <h3>HTML</h3>
      <ProgressBar variant="success" now={95} label={`${now}%`} />
      <br></br>
      <h3>CSS</h3>
      <ProgressBar variant="info" now2={now2} label={`${now2}%`} />
      <br></br>
      <h3>Javascript</h3>
      <ProgressBar variant="warning" now3={now3} label={`${now3}%`} />
      <br></br>
      <h3>Python</h3>
      <ProgressBar variant="danger" now4={now4} label={`${now4}%`} />
    </div>
  );
}

export default Section3;
