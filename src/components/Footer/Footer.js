import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p className="site-footer__text">
        &copy; {new Date().getFullYear()} mathiasvictor.com — Built with React
      </p>
    </footer>
  );
};

export default Footer;
