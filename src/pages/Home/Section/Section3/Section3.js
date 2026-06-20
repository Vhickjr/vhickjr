import React from "react";
import "./section3.css";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 80 },
  { name: "JavaScript / Node.js", level: 70 },
  { name: "React JS / Next JS", level: 70 },
];

function Section3() {
  return (
    <div className="skills-preview">
      <a href="/Skills" className="skills-preview__link">
        <span className="section-label">My Skills</span>
      </a>
      <h2 className="section-title">What I Know</h2>

      <div className="skills-preview__bars">
        {skills.map((s) => (
          <div key={s.name} className="skill-bar">
            <div className="skill-bar__meta">
              <span className="skill-bar__name">{s.name}</span>
              <span className="skill-bar__pct">{s.level}%</span>
            </div>
            <div className="skill-bar__track">
              <div
                className="skill-bar__fill"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
