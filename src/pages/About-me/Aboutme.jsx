import React from "react";
import "./aboutme.css";
import Banner from "../../components/banner/Banner";
import Myportrait from "./vhickjr2.png";
import {
  FaArrowRight,
  FaSchool,
  FaChartLine,
  FaBusinessTime,
  FaDesktop,
} from "react-icons/fa";

const processSteps = ["Empathize", "Define", "Ideate", "Prototype", "Test"];

const facts = [
  { icon: <FaDesktop />, label: "10 featured projects" },
  { icon: <FaSchool />, label: "EEE Student at Unilag" },
  { icon: <FaChartLine />, label: "Forex trader" },
  { icon: <FaBusinessTime />, label: "Entrepreneur" },
];

export default function Aboutme() {
  return (
    <div className="about-page">
      <Banner />

      <div className="about-page__hero">
        <div className="about-page__hero-text">
          <span className="section-label">About Me</span>
          <h1 className="section-title">Victor Mathias</h1>
          <p className="about-page__bio">
            I am a software developer with 2 years of experience, specializing
            in front-end development. My skillset includes full-stack and
            back-end development, and I am proficient in several languages
            including HTML, CSS, JavaScript, Python, C and C++. I am dedicated
            to creating visually stunning front-end interfaces.
          </p>
        </div>
        <div className="about-page__hero-img">
          <img src={Myportrait} alt="Victor Mathias" />
        </div>
      </div>

      <div className="about-page__process">
        <span className="section-label">How I Work</span>
        <h2 className="section-title">My Design Process</h2>
        <div className="process-steps">
          {processSteps.map((step, i) => (
            <React.Fragment key={step}>
              <div className="process-step">
                <div className="process-step__num">{i + 1}</div>
                <span className="process-step__label">{step}</span>
              </div>
              {i < processSteps.length - 1 && (
                <FaArrowRight className="process-arrow" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="about-page__facts">
        <span className="section-label">Fun Facts</span>
        <h2 className="section-title">About Me</h2>
        <div className="facts-grid">
          {facts.map((f) => (
            <div key={f.label} className="fact-card">
              <div className="fact-card__icon">{f.icon}</div>
              <span className="fact-card__label">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
