import React from "react";
import "./skills.css";
import Banner from "../../components/banner/Banner";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 80 },
  { name: "JavaScript / Node.js", level: 75 },
  { name: "React JS / Next JS", level: 85 },
  { name: "Git / GitHub", level: 90 },
  { name: "MongoDB / MySQL", level: 50 },
];

const certifications = [
  {
    img: "https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png",
    title: "Responsive Web Design",
    body: "I learned the languages that developers use to build webpages: HTML for content, and CSS for design.",
    badge: "In Progress",
    link: null,
  },
  {
    img: "https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png",
    title: "JavaScript Algorithms and Data Structures",
    body: "I learned the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.",
    badge: "In Progress",
    link: null,
  },
  {
    img: "https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png",
    title: "Front End Development Libraries",
    body: "I learned how to style sites quickly with Bootstrap, add logic with Sass, and use React and Redux.",
    badge: "In Progress",
    link: null,
  },
  {
    img: "https://i.ibb.co/T16ZfWF/Screenshot-54.png",
    title: "Front End Development (React)",
    body: "Through the SideHustle Internship, I acquired the skills to work with React and developed my abilities as a front-end developer.",
    badge: "View Certificate",
    link: "https://certificate.terrahq.co/31442GR6BG2",
  },
];

export default function Skills() {
  return (
    <div className="skills-page">
      <Banner />

      <div className="skills-page__inner">
        <div className="skills-page__header">
          <span className="section-label">What I Know</span>
          <h1 className="section-title">My Skills</h1>
        </div>

        <div className="skills-bars">
          {skills.map((s) => (
            <div key={s.name} className="skill-bar">
              <div className="skill-bar__meta">
                <span className="skill-bar__name">{s.name}</span>
                <span className="skill-bar__pct">{s.level}%</span>
              </div>
              <div className="skill-bar__track">
                <div className="skill-bar__fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="skills-page__certs-header">
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certs-grid">
          {certifications.map((c) => (
            <div key={c.title} className="cert-card">
              <div className="cert-card__img-wrap">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="cert-card__body">
                <h3 className="cert-card__title">{c.title}</h3>
                <p className="cert-card__desc">{c.body}</p>
                {c.link ? (
                  <a href={c.link} className="btn btn--primary cert-card__btn" target="_blank" rel="noopener noreferrer">
                    {c.badge}
                  </a>
                ) : (
                  <span className="cert-card__badge">{c.badge}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
