import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "./section6.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Portrait from "./carousel1.jpg";

const Section6 = () => {
  return (
    <Carousel fade variant="dark" className="testimonials">
      <Carousel.Item>
        <img className="d-block w-100 secc6" src={Portrait} alt="First slide" />
        <Carousel.Caption>
          <h1 style={{ color: "black" }}>Testimonials</h1>
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
          <br></br>
          <br></br>
          <div className="client--content">
            <h2 className="client--quote"> They are good at what they do.</h2>
            <br />
            <br />
            <h3 className="client--name"> Victoria</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 secc6"
          src={Portrait}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 style={{ color: "black" }}>Testimonials</h1>
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
          <br></br>
          <br></br>
          <div className="client--content">
            <h2 className="client--quote"> They are good at what they do.</h2>
            <br />
            <br />
            <h3 className="client--name"> Loveth</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 secc6" src={Portrait} alt="Third slide" />
        <Carousel.Caption>
          <h1 style={{ color: "black" }}>Testimonials</h1>
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
          <br></br>
          <br></br>
          <div className="client--content">
            <h2 className="client--quote"> They are good at what they do.</h2>
            <br />
            <br />
            <h3 className="client--name"> Cisco</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Section6;
