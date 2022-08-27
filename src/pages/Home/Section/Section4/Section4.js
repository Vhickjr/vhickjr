import React from "react";
import "./section4.css";
import { FaLaptop } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMicroblog } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";

export default function Section4() {
  return (
    <div className="customcontain0">
      <div className="customcontain">
        <div className="component--cards ">
          <div className="component--icon">
            <FaLaptop />
          </div>

          <h3 className="component--title"> Responsive Design</h3>
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
              Our team implements beautiful, stunning and unique designs using
              React JS. Our websites are user friendly and provide an awesome
              experience for all users.{" "}
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
              We are knowledgeable about the workings of Github and Git, so you
              can just go to sleep and rely on us to take care of maintaining
              open-source codes for your projects{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="customcontain1">
        <div className=" component--cards">
          <div className="component--icon">
            <FaMicroblog />
          </div>
          <div>
            <h3 className="component--title"> Content Creators</h3>
            <p className="component--text">
              We have awesome content writers on our team. Theu can put together
              great material for your project and help you blog about it on any
              platform of your choice.{" "}
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
              Leave your Search Engine Optimization to us. We can help your
              customers find you easily with curated keywords, on any search
              engine,especially Google.You are in good hands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
