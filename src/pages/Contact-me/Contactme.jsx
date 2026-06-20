import React from "react";
import "./contactme.css";
import Banner from "../../components/banner/Banner";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export default function Contactme() {
  return (
    <div className="contact-page">
      <Banner />

      <div className="contact-page__inner">
        <div className="contact-page__header">
          <span className="section-label">Get In Touch</span>
          <h1 className="section-title">
            Contact <span className="text-accent">Me</span>
          </h1>
        </div>

        <div className="contact-page__body">
          <div className="contact-page__info">
            <h2 className="contact-page__sub">Let's work together</h2>
            <p className="contact-page__desc">
              Have a project in mind? I'd love to hear about it. Send me a
              message and let's make something great.
            </p>

            <ul className="contact-details">
              <li>
                <div className="contact-details__icon"><BsWhatsapp /></div>
                <a href="https://wa.me/message/J4QIEDLFNOBAK1">+234 813 962 4288</a>
              </li>
              <li>
                <div className="contact-details__icon"><FaEnvelope /></div>
                <a href="mailto:victormathias001@gmail.com">victormathias001@gmail.com</a>
              </li>
              <li>
                <div className="contact-details__icon"><FaMapMarkerAlt /></div>
                <span>Lagos, Nigeria</span>
              </li>
            </ul>

            <div className="contact-page__socials">
              <a href="https://www.linkedin.com/in/victor-mathias-585b71205" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.instagram.com/vhickjr/" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.twitter.com/__therealvictor" aria-label="Twitter"><FaTwitterSquare /></a>
              <a href="https://github.com/Vhickjr" aria-label="GitHub"><FaGithubSquare /></a>
            </div>
          </div>

          <div className="contact-page__form-wrap">
            <form className="contact-page__form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" placeholder="Phone Number" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} placeholder="Your Message" />
              </div>
              <button type="submit" className="btn btn--primary">
                Send Message
              </button>
            </form>

            <div className="contact-page__map">
              <iframe
                title="Location Map"
                src="https://maps.google.com/maps?q=4+Adelabu+lane+off+Olateju%2C+Mushin%2C+Lagos%2C+Nigeria.&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                style={{ border: 0, borderRadius: "var(--radius)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
