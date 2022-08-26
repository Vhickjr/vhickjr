import React from "react";
import {
  FaPhoneAlt,
  FaBehanceSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowAltCircleUp,
} from "react-icons/fa";
import "./section7.css";

const Section7 = () => {
  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className="contact-me">
      <h2 className="title">contact me</h2>
      <div className="wrapper">
        <ul className="contact-list">
          <li className="contact-list-item">
            <FaPhoneAlt className="icon" />
            <p className="contact-details">+234 802 726 3362</p>
          </li>
          <li className="contact-list-item">
            <FaEnvelope className="icon" />
            <p className="contact-details">hephzibahtoye@gmail.com</p>
          </li>
          <li className="contact-list-item">
            <FaMapMarkerAlt className="icon" />
            <p className="contact-details">Ibadan, NIGERIA</p>
          </li>

          <div className="icons">
            <FaLinkedin className="icon" />
            <FaInstagram className="icon" />
            <FaTwitterSquare className="icon" />
            <FaBehanceSquare className="icon" />
          </div>
        </ul>
        <div className="contact-form">
          <form>
            <div className="contact-input">
              <input type="text" placeholder="Name" />
            </div>
            <div className="contact-input">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="contact-input">
              <input type="email" placeholder="Email" />
            </div>
            <div className="contact-textarea">
              <textarea placeholder="Message"></textarea>
              <button type="submit">Submit</button>
            </div>
          </form>
          <FaArrowAltCircleUp id="goto" onClick={goToTop} />
        </div>
      </div>
    </div>
  );
};

export default Section7;
