import React, { useState, useEffect } from "react";
import LOGO from "./Assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./banner.css";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className={`banner-nav${scrolled ? " banner-nav--scrolled" : ""}`} id="home">
        <a href="/" className="banner-nav__logo">
          <img src={LOGO} alt="VM logo" height={48} />
        </a>

        <ul className="banner-nav__links">
          <li><a href="/">Home</a></li>
          <li><a href="/Aboutme">About Me</a></li>
          <li><a href="/Skills">Skills</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/Myportfolio">Portfolio</a></li>
          <li><a href="/Contactme">Contact</a></li>
          <li>
            <a href="mailto:victormathias001@gmail.com" className="banner-nav__hire">
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="banner-nav__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Rendered outside <nav> to avoid backdrop-filter containing-block clipping */}
      <div
        className={`banner-mobile${isOpen ? " banner-mobile--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul className="banner-mobile__links">
          <li><a href="/" onClick={close}>Home</a></li>
          <li><a href="/Aboutme" onClick={close}>About Me</a></li>
          <li><a href="/Skills" onClick={close}>Skills</a></li>
          <li><a href="/Services" onClick={close}>Services</a></li>
          <li><a href="/Myportfolio" onClick={close}>Portfolio</a></li>
          <li><a href="/Contactme" onClick={close}>Contact</a></li>
          <li>
            <a
              href="mailto:victormathias001@gmail.com"
              className="banner-mobile__hire"
              onClick={close}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Banner;
