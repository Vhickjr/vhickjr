import React, { useState, useEffect, createContext } from "react";
import ReactSwitch from "react-switch";
import "./home.css";
import "../Home/Section/Section1/section1.css";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Section1 from "../Home/Section/Section1/Section1";
import Section2 from "../Home/Section/Section2/Section2";
import Section3 from "../Home/Section/Section3/Section3";
import Section4 from "../Home/Section/Section4/Section4";
import Section5 from "../Home/Section/Section5/Section5";
import Section6 from "../Home/Section/Section6/Section6";
import Section7 from "../Home/Section/Section7/Section7";
import { MdDarkMode } from "react-icons/md";
export const ThemeContext = createContext(null);

export default function Home() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div class="customcontainer">
        <a id="Top">
          <Navbar></Navbar>
        </a>

        <main id={theme}>
          <Section1></Section1>
          <div className="switch">
            <label>
              {" "}
              {/*{theme === "light" ? "Light Mode" : "Dark Mode"}*/}
            </label>
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "dark"}
              handleDiameter={28}
              offColor="#FFFFFF"
              onColor="#ffff"
              offHandleColor="#FFFFFF"
              onHandleColor="#FFFFFF"
              height={40}
              width={70}
              borderRadius={6}
              activeBoxShadow="0px 0px 1px 2px #fffc35"
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 15,
                    color: "black",
                    paddingRight: 2,
                  }}
                >
                  <MdDarkMode></MdDarkMode>
                </div>
              }
              checkedIcon={
                <svg
                  viewBox="0 0 10 10"
                  height="100%"
                  width="100%"
                  fill="black"
                >
                  <circle r={3} cx={5} cy={5} />
                </svg>
              }
              uncheckedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 20,
                  }}
                >
                  <svg
                    viewBox="0 0 10 10"
                    height="100%"
                    width="100%"
                    fill="#38004c"
                  >
                    <circle r={3} cx={5} cy={5} />
                  </svg>
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    color: "#38004c",
                    fontSize: 18,
                  }}
                >
                  <MdDarkMode></MdDarkMode>
                </div>
              }
            />
          </div>
        </main>
        <div className="section2">
          <Section2></Section2>
        </div>
        <div className="section3" id={theme}>
          <Section3></Section3>
        </div>
        <div className="section4">
          <h3
            style={{
              color: "black",
              paddingTop: "50px",
              fontFamily: "open sans",
            }}
          >
            <a href="/services">
              <button
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#32de84",
                  border: "#32de84",
                }}
              >
                Services
              </button>{" "}
            </a>
          </h3>
          <Section4></Section4>
        </div>
        <div className="section5" id={theme}>
          <Section5></Section5>
        </div>
        <div className="section6">
          <Section6></Section6>
        </div>
        <div className="section7" id={theme}>
          <Section7></Section7>
        </div>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}
