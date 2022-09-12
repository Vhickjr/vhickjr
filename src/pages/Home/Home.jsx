import React from "react";
import "./home.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Section1 from "../Home/Section/Section1/Section1";
import Section2 from "../Home/Section/Section2/Section2";
import Section3 from "../Home/Section/Section3/Section3";
import Section4 from "../Home/Section/Section4/Section4";
import Section5 from "../Home/Section/Section5/Section5";
import Section6 from "../Home/Section/Section6/Section6";
import Section7 from "../Home/Section/Section7/Section7";

export default function Home() {
  return (
    <div class="customcontainer">
      <nav>
        <a id="Top"></a>
        <Navbar></Navbar>
      </nav>
      <main>
        <Section1></Section1>
      </main>
      <div className="section2">
        <Section2></Section2>
      </div>
      <div className="section3">
        <Section3></Section3>
      </div>
      <div className="section4">
        <h3 style={{ color: "black", paddingTop: "80px" }}>Services</h3>
        <Section4></Section4>
      </div>
      <div className="section5">
        <Section5></Section5>
      </div>
      <div className="section6">
        <Section6></Section6>
      </div>
      <div className="section7">
        <Section7></Section7>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
