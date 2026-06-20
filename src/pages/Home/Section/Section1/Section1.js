import React, { useEffect } from "react";
import "./section1.css";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export const ThemeContext = React.createContext(null);

const Section1 = () => {
  useEffect(() => {
    const text = document.querySelector(".sec-text");
    if (!text) return;

    const textLoad = () => {
      setTimeout(() => { text.textContent = "Hi, I'm Victor"; }, 0);
      setTimeout(() => { text.textContent = "a frontend software developer"; }, 4000);
      setTimeout(() => { text.textContent = "welcome to my portfolio"; }, 8000);
    };

    textLoad();
    const id = setInterval(textLoad, 12000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero">
      <div className="hero__content">
        <span className="hero__label">Software Developer</span>
        <h1 className="hero__heading">
          <span className="sec-text">Hi, I'm Victor</span>
          <span className="hero__cursor" aria-hidden="true" />
        </h1>
        <p className="hero__sub">
          Building beautiful, fast, and responsive web experiences.
        </p>

        <div className="hero__socials">
          <a href="https://www.linkedin.com/in/victor-mathias-585b71205" aria-label="LinkedIn" className="hero__social-link">
            <FaLinkedin />
          </a>
          <a href="https://www.twitter.com/__therealvictor" aria-label="Twitter" className="hero__social-link">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/vhickjr/" aria-label="Instagram" className="hero__social-link">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/victor.mathias.3532" aria-label="Facebook" className="hero__social-link">
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>
    </div>
  );
};

export default Section1;
