import React from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowAltCircleUp,
  FaGithubSquare,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./section7.css";

const Section7 = () => {
  const goToTop = () => {
    document.body.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  };

  return (
    <div className="contact-me">
      <h2 className="title">contact me</h2>
      <div className="wrapper">
        <ul className="contact-list">
          <li className="contact-list-item">
            <BsWhatsapp className="icon" />
            <a
              href="https://wa.me/message/J4QIEDLFNOBAK1"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p className="contact-details">+234 813 962 4288</p>
            </a>
          </li>
          <li className="contact-list-item">
            <FaEnvelope className="icon" />
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="mailto:victormathias001@gmail.com"
            >
              {" "}
              <p className="contact-details">victormathias001@gmail.com</p>
            </a>
          </li>
          <li className="contact-list-item">
            <FaMapMarkerAlt className="icon" />
            <p className="contact-details">Lagos, NIGERIA</p>
          </li>

          <div className="icons">
            <a href="https://www.linkedin.com/in/victor-mathias-585b71205">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://www.instagram.com/vhickjr/">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.twitter.com/__therealvictor">
              <FaTwitterSquare className="icon" />
            </a>
            <a href="https://github.com/Vhickjr">
              <FaGithubSquare className="icon" />
            </a>
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
          <a href="#Top">
            {" "}
            <FaArrowAltCircleUp id="goto" onClick={goToTop} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section7;

/*Create a  function called totop that scrolls to the top of a page*/
