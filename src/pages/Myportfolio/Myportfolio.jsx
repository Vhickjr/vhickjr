import React, { useState } from "react";
import "./myportfolio.css";
import Banner from "../../components/banner/Banner";
import Data from "./data";

const categories = ["all", "latest", "cms", "scripting"];

export default function Myportfolio() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? Data : Data.filter((d) => d.category === active);

  return (
    <div className="portfolio-page">
      <Banner />

      <div className="portfolio-page__inner">
        <div className="portfolio-page__header">
          <span className="section-label">My Work</span>
          <h1 className="section-title">
            My <span className="text-accent">Portfolio</span>
          </h1>
          <p className="section-subtitle">
            Some of the projects I have worked on.
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${active === cat ? " filter-btn--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map((item) => (
            <div key={item.id} className="port-card">
              <div className="port-card__img-wrap">
                <img src={item.img} alt={item.title} />
                <div className="port-card__overlay">
                  {item.link && (
                    <button
                      className="btn btn--primary port-card__cta"
                      onClick={() => window.open(item.link, "_blank")}
                    >
                      View Project
                    </button>
                  )}
                </div>
              </div>
              <div className="port-card__body">
                <span className="port-card__cat">{item.category}</span>
                <h3 className="port-card__title">{item.title}</h3>
                <p className="port-card__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
