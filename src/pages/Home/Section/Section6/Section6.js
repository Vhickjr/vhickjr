import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "./section6.css";

const Section6 = () => {
  return (
    <div className="testimonials">
      <h1 className="title">Testimonials</h1>
      <div className="quote--marks">
        <FaQuoteLeft />
      </div>
      <div className="star--ratings">
        <span>
          {" "}
          <FaStar />{" "}
        </span>
        <span>
          {" "}
          <FaStar />{" "}
        </span>
        <span>
          {" "}
          <FaStar />{" "}
        </span>
        <span>
          {" "}
          <FaStar />{" "}
        </span>
        <span>
          {" "}
          <FaStar />{" "}
        </span>
      </div>
      <div className="client--content">
        <h2 className="client--quote"> They are good at what they do.</h2>
        <br />
        <br />
        <h3 className="client--name"> Victoria</h3>
      </div>
    </div>
  );
};

export default Section6;
