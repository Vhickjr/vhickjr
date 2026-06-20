import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./section6.css";

const testimonials = [
  {
    quote: "He made me a nice website",
    name: "Samuel",
    link: "https://www.instagram.com/matty.jr24/",
  },
  {
    quote: "He did a great job 😁",
    name: "Loveth",
    link: "https://www.instagram.com/lovethmathias/",
  },
  {
    quote: "I'm impressed! 😀",
    name: "Jane",
    link: "https://www.instagram.com/kidochukwu_kido/",
  },
];

const Section6 = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonials-section">
      <span className="section-label">Client Feedback</span>
      <h2 className="section-title">Testimonials</h2>

      <div className="testimonials-track">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`tcard${i === active ? " tcard--active" : ""}`}
          >
            <FaQuoteLeft className="tcard__quote-icon" />
            <div className="tcard__stars">
              {[...Array(5)].map((_, j) => (
                <FaStar key={j} />
              ))}
            </div>
            <p className="tcard__text">{t.quote}</p>
            <a
              href={t.link}
              className="tcard__author"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.name} <AiFillInstagram />
            </a>
          </div>
        ))}
      </div>

      <div className="testimonials-dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`tdot${i === active ? " tdot--active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Section6;
