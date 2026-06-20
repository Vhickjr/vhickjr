import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaGithubSquare,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./section7.css";

const Section7 = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="contact-section">
      <div className="contact-section__inner">
        <div className="contact-section__info">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>

          <ul className="contact-list">
            <li>
              <BsWhatsapp className="contact-list__icon" />
              <a href="https://wa.me/message/J4QIEDLFNOBAK1">
                +234 813 962 4288
              </a>
            </li>
            <li>
              <FaEnvelope className="contact-list__icon" />
              <a href="mailto:victormathias001@gmail.com">
                victormathias001@gmail.com
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className="contact-list__icon" />
              <span>Lagos, Nigeria</span>
            </li>
          </ul>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/victor-mathias-585b71205" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/vhickjr/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com/__therealvictor" aria-label="Twitter">
              <FaTwitterSquare />
            </a>
            <a href="https://github.com/Vhickjr" aria-label="GitHub">
              <FaGithubSquare />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="contact-form__row">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message" rows={5} />
          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
        </form>
      </div>

      <button className="scroll-top" onClick={goToTop} aria-label="Scroll to top">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Section7;
