import React from "react";
import "./section4.css";
import { FaLaptop } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMicroblog } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";
import { Animation } from "react-animate-style";
export default function Section4() {
  return (
    <div className="customcontain0">
      <div className="customcontain">
        <div className="component--cards ">
          <div className="component--icon">
            <FaLaptop />
          </div>
          <Animation animationIn="bounceIn" animationOut="bounceOut">
            <div>My animated content</div>
          </Animation>
          ;<h3 className="component--title"> Responsive Design</h3>
          <p className="component--text">
            Beautiful, stunning and unique responsive designs that are very user
            friendly to provide an awesome experience for all users.{" "}
          </p>
        </div>
        <div className="component--cards">
          <div className="component--icon">
            <FaGlobe />
          </div>
          <div>
            <h3 className="component--title"> Web Designing</h3>
            <p className="component--text">
              I create visually stunning and unique designs using React JS,
              resulting in user-friendly websites that provide an exceptional
              experience for all users.
            </p>
          </div>
        </div>
        <div className="component--cards">
          <div className="component--icon">
            <FaGithub />
          </div>
          <div className="component--design">
            <h3 className="component--title"> GitHub / Git Experts</h3>
            <p className="component--text">
              I am knowledgeable about the workings of GitHub and Git, so you
              can rest easy and rely on me to take care of maintaining
              open-source codes for your projects.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* <div className="customcontain1">
        <div className=" component--cards">
          <div className="component--icon">
            <FaMicroblog />
          </div>
          <div>
            <h3 className="component--title"> UI/UX design</h3>
            <p className="component--text">
              As a software developer, while I may not specialize in UI/UX
              design, I am able to create simple designs and source them to
              complement my development work, ensuring a cohesive and
              user-friendly end-product for your business.{" "}
            </p>
          </div>
        </div>
        <div className="component--cards ">
          <div className="component--icon" style={{ paddingBotton: "200px" }}>
            <FaSearchengin />
          </div>
          <div>
            <h3 className="component--title"> SEO Experts</h3>
            <p className="component--text">
              Leave your search engine optimization to me. I can help your
              customers find you easily with curated keywords, on any search
              engine, especially Google. You are in good hands.
            </p>
          </div>
        </div>
  </div>*/}
    </div>
  );
}
