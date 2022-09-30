import React from "react";
import "./testimonial.css";
export default function Testimonial() {
  function openNav() {
    document.getElementById("myNav").style.display = "block";
  }

  function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }
  return (
    <div>
      <div id="myNav" className="overlay">
        <a href="javascript:void(0)" className="closebtn" onclick={closeNav()}>
          ×
        </a>
        <div className="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <h2>Fullscreen Overlay Nav Example</h2>
      <p>
        Click on the element below to open the fullscreen overlay navigation
        menu.
      </p>
      <p>
        In this example, the navigation menu will slide in, from left to right:
      </p>
      <span style={{ fontSize: 30, cursor: "pointer" }} onclick={openNav()}>
        ☰ open
      </span>
    </div>
  );
}
