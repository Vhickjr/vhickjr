import React from "react";
import "./services.css";
import { VscDebugAll } from "react-icons/vsc";
import { FcEngineering } from "react-icons/fc";
import { GrDeploy } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import Testimonials from "./Testimonials";
import Banner from "../../components/banner/Banner";

const services = [
  {
    icon: <VscDebugAll />,
    title: "Debugging",
    text: "The task of debugging involves identifying and eliminating errors, both present and potential, in the software code that may cause it to malfunction or crash.",
  },
  {
    icon: <FcEngineering />,
    title: "API Development",
    text: "An API (Application Programming Interface) is a set of guidelines that allows a program to access and utilize the functionalities of another application.",
  },
  {
    icon: <GrDeploy />,
    title: "Deployment",
    text: "Deploying projects, websites, and applications on live servers using various tools such as AWS, Heroku, Netlify, Vercel, or Google Play Console.",
  },
];

const frontendStack = ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "SASS"];
const backendStack = ["NodeJS (Express)", "Python (Django)", "MongoDB", "MySQL", "Vercel", "SASS"];

export default function Services() {
  return (
    <div className="services-page">
      <Banner />

      <div className="services-page__inner">
        <div className="services-page__header">
          <span className="section-label">What I Offer</span>
          <h1 className="section-title">My Services</h1>
        </div>

        <div className="svc-cards">
          {services.map((s) => (
            <div key={s.title} className="svc-card">
              <div className="svc-card__icon">{s.icon}</div>
              <h3 className="svc-card__title">{s.title}</h3>
              <p className="svc-card__text">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="tech-section">
          <span className="section-label">Technology</span>
          <h2 className="section-title">My Tech Stack</h2>
          <div className="tech-grids">
            <div className="tech-grid">
              <h4 className="tech-grid__title">Frontend Development</h4>
              <ul className="tech-list">
                {frontendStack.map((t) => (
                  <li key={t}>
                    <GoVerified className="tech-list__icon" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tech-grid">
              <h4 className="tech-grid__title">Backend Development</h4>
              <ul className="tech-list">
                {backendStack.map((t) => (
                  <li key={t}>
                    <GoVerified className="tech-list__icon" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="services-page__testimonials">
          <span className="section-label">Client Feedback</span>
          <h2 className="section-title">Testimonials</h2>
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
