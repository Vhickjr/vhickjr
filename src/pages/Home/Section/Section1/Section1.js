import React, { useState, useEffect, createContext } from "react";
import "./section1.css";
import "font-awesome/css/font-awesome.min.css";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const Section1 = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    const text = document.querySelector(".sec-text");

    const textLoad = () => {
      setTimeout(() => {
        text.textContent = "Hi, I'm victor a";
      }, 0);
      setTimeout(() => {
        text.textContent = "frontend software developer";
      }, 4000);
      /* setTimeout(() => {
        text.textContent = "YouTuber";
      }, 8000); //1s = 1000 milliseconds*/
    };

    textLoad();
    setInterval(textLoad, 12000);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="contain">
          <h2 className="lolu">
            {" "}
            <div class="containertext">
              {/* <span class="text first-text">I'm </span>*/}
              <span class="text sec-text">victor</span>
            </div>
          </h2>
        </div>
        <div className="social-menu">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/victor-mathias-585b71205">
                <i className="fa fa-linkedin" />
              </a>
            </li>

            <li>
              <a href="https://www.twitter.com/__therealvictor">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/vhickjr/">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/victor.mathias.3532">
                <i className="fa fa-facebook" />
              </a>
            </li>
          </ul>
        </div>

        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Section1;
