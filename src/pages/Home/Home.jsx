import React from "react";
import "./home.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
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
    <div style={{ height: "1300px" }}>
      <Header></Header>
      <Navbar></Navbar>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer></Footer>
    </div>
  );
}
