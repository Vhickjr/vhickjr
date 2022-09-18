import React from "react";
import "./testimonial.css";
export default function Testimonial() {
  return (
    <div>
      <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
          &times;
        </a>
        <div class="overlay-content">
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
      <span style="font-size:30px;cursor:pointer" onclick="openNav()">
        &#9776; open
      </span>
    </div>
  );
}
