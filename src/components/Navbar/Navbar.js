import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbarr() {
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
      <nav className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
        <a href="/" className="site-nav__brand">VM</a>

        <ul className="site-nav__links">
          <li><a href="/Aboutme">About Me</a></li>
          <li><a href="/Skills">Skills</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/Myportfolio">Portfolio</a></li>
          <li><a href="/Contactme">Contact</a></li>
          <li>
            <a href="mailto:victormathias001@gmail.com" className="site-nav__hire">
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className="site-nav__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Rendered outside <nav> to avoid backdrop-filter containing-block clipping */}
      <div
        className={`mobile-menu${isOpen ? " mobile-menu--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul className="mobile-menu__links">
          <li><a href="/Aboutme" onClick={close}>About Me</a></li>
          <li><a href="/Skills" onClick={close}>Skills</a></li>
          <li><a href="/Services" onClick={close}>Services</a></li>
          <li><a href="/Myportfolio" onClick={close}>Portfolio</a></li>
          <li><a href="/Contactme" onClick={close}>Contact</a></li>
          <li>
            <a
              href="mailto:victormathias001@gmail.com"
              className="mobile-menu__hire"
              onClick={close}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbarr;
