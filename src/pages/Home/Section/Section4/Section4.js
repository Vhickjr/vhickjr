import React from "react";
import "./section4.css";
import { FaLaptop, FaGlobe, FaGithub } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptop />,
    title: "Responsive Design",
    text: "Beautiful, stunning and unique responsive designs that are very user friendly to provide an awesome experience for all users.",
  },
  {
    icon: <FaGlobe />,
    title: "Web Designing",
    text: "I create visually stunning and unique designs using React JS, resulting in user-friendly websites that provide an exceptional experience for all users.",
  },
  {
    icon: <FaGithub />,
    title: "GitHub / Git Experts",
    text: "I am knowledgeable about the workings of GitHub and Git, so you can rest easy and rely on me to take care of maintaining open-source codes for your projects.",
  },
];

export default function Section4() {
  return (
    <div className="services-preview">
      <div className="services-preview__cards">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-card__icon">{s.icon}</div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__text">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
