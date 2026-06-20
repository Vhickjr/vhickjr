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
    <nav className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
      <a href="/" className="site-nav__brand">VM</a>

      <ul className={`site-nav__links${isOpen ? " site-nav__links--open" : ""}`}>
        <li><a href="/Aboutme" onClick={close}>About Me</a></li>
        <li><a href="/Skills" onClick={close}>Skills</a></li>
        <li><a href="/Services" onClick={close}>Services</a></li>
        <li><a href="/Myportfolio" onClick={close}>Portfolio</a></li>
        <li><a href="/Contactme" onClick={close}>Contact</a></li>
        <li>
          <a
            href="mailto:victormathias001@gmail.com"
            className="site-nav__hire"
            onClick={close}
          >
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
  );
}

export default Navbarr;
