import ProgressBar from "react-bootstrap/ProgressBar";
import "./section3.css";
function Section3() {
  const html = 95;
  const css = 85;
  const js = 70;
  const python = 50;
  return (
    <div className="sec3">
      <h3>HTML</h3>
      <ProgressBar variant="success" html={html} label={`${html}%`} />
      <br></br>
      <h3>CSS</h3>
      <ProgressBar variant="info" css={css} label={`${css}%`} />
      <br></br>
      <h3>Javascript</h3>
      <ProgressBar variant="warning" js={js} label={`${js}%`} />
      <br></br>
      <h3>Python</h3>
      <ProgressBar variant="danger" python={python} label={`${python}%`} />
    </div>
  );
}

export default Section3;
