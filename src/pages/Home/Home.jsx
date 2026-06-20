import React, { useState, createContext } from "react";
import ReactSwitch from "react-switch";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./home.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Section1 from "./Section/Section1/Section1";
import Section2 from "./Section/Section2/Section2";
import Section3 from "./Section/Section3/Section3";
import Section4 from "./Section/Section4/Section4";
import Section5 from "./Section/Section5/Section5";
import Section6 from "./Section/Section6/Section6";
import Section7 from "./Section/Section7/Section7";

export const ThemeContext = createContext(null);

export default function Home() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id="Top">
        <Navbar />

        <main id={theme}>
          <Section1 />

          <div className="theme-toggle-bar">
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "dark"}
              handleDiameter={24}
              offColor="#e0e4f0"
              onColor="#1a1a2e"
              offHandleColor="#ffffff"
              onHandleColor="#ffffff"
              height={36}
              width={62}
              borderRadius={18}
              activeBoxShadow="0 0 0 2px rgba(50,222,132,0.4)"
              uncheckedIcon={
                <div className="switch-icon">
                  <MdLightMode />
                </div>
              }
              checkedIcon={
                <div className="switch-icon">
                  <MdDarkMode />
                </div>
              }
            />
          </div>
        </main>

        <Section2 />

        <div id={theme}>
          <Section3 />
        </div>

        <div className="services-section-wrap">
          <div className="services-section-header">
            <a href="/Services">
              <span className="section-label">What I Offer</span>
            </a>
            <h2 className="section-title">Services</h2>
          </div>
          <Section4 />
        </div>

        <div id={theme}>
          <Section5 />
        </div>

        <Section6 />

        <div id={theme}>
          <Section7 />
        </div>

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
