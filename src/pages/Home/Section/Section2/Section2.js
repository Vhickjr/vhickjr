import React from "react";
import "./section2.css";
import Portrait from "./vhickjr.png";

export default function Section2() {
  return (
    <div className="about-preview">
      <div className="about-preview__inner">
        <div className="about-preview__portrait">
          <img src={Portrait} alt="Victor Mathias" />
        </div>

        <div className="about-preview__content">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Software Developer</h2>
          <p className="about-preview__text">
            I am a software developer with 2 years of experience, specializing
            in front-end development. My skillset includes full-stack and
            back-end development, and I am proficient in several languages
            including HTML, CSS, JavaScript, Python, C and C++. I am dedicated
            to creating visually stunning front-end interfaces.
          </p>
          <div className="about-preview__actions">
            <a
              href="https://docs.google.com/document/d/1LSzUCRVStYwlqMvS5vGaQOHmtdujmR1I/edit?usp=sharing&ouid=111082994503445633514&rtpof=true&sd=true"
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              href="mailto:victormathias001@gmail.com"
              className="btn btn--outline"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
