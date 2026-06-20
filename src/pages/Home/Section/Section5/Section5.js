import React from "react";
import "./section5.css";

const projects = [
  {
    image: "https://i.ibb.co/17LQC5X/Screenshot-48.png",
    heading: "My Portfolio Website",
    appName: "ReactJS",
    link: "https://www.mathiasvictor.com/",
  },
  {
    image: "https://i.ibb.co/1XNW7YP/Screenshot-49.png",
    heading: "PeersApp Landing Page",
    appName: "Next.js",
    link: "https://peersapp-3aigy7llz-portfolio-frontend-react-team-2.vercel.app/",
  },
  {
    image: "https://i.ibb.co/P6K4KTP/Screenshot-44.png",
    heading: "Barter Clone",
    appName: "ReactJS",
    link: "https://barter-clone.netlify.app/",
  },
  {
    image: "https://i.ibb.co/6ry4Lqn/Screenshot-46.png",
    heading: "URL Shortener",
    appName: "ReactJS",
    link: "https://bub-it.netlify.app/",
  },
];

const Section5 = () => {
  return (
    <div className="portfolio-preview">
      <div className="portfolio-preview__header">
        <span className="section-label">My Work</span>
        <h2 className="section-title">Featured Projects</h2>
        <a href="/Myportfolio" className="btn btn--outline portfolio-preview__all">
          View All Projects
        </a>
      </div>

      <div className="portfolio-preview__grid">
        {projects.map((p) => (
          <a
            key={p.heading}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-card"
          >
            <div className="proj-card__img-wrap">
              <img src={p.image} alt={p.heading} className="proj-card__img" />
              <div className="proj-card__overlay">
                <span className="proj-card__cta">View Project →</span>
              </div>
            </div>
            <div className="proj-card__body">
              <span className="proj-card__tech">{p.appName}</span>
              <h3 className="proj-card__title">{p.heading}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Section5;
