import React from "react";
import "animate.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
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
          <a href="https://www.instagram.com/matty.jr24/">
            <div className="client--content">
              <h2 className="client--quote"> He made me a nice website</h2>
              <br />
              <br />
              <h3 className="client--name">
                {" "}
                Samuel{" "}
                <AiFillInstagram
                  style={{ color: " #E1306C" }}
                ></AiFillInstagram>
              </h3>
            </div>
          </a>
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
          <a href="https://www.instagram.com/lovethmathias/">
            <div className="client--content">
              <h2 className="client--quote">
                {" "}
                He did a geat job{" "}
                <span role="img" aria-label="Smiling face emoji">
                  😁
                </span>
              </h2>
              <br />
              <br />
              <h3 className="client--name">
                {" "}
                Loveth{" "}
                <AiFillInstagram
                  style={{ color: " #E1306C" }}
                ></AiFillInstagram>
              </h3>
            </div>
          </a>
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
          <a href="https://www.instagram.com/kidochukwu_kido/">
            <div className="client--content">
              <h2 className="client--quote">
                {" "}
                I'm impressed!{" "}
                <span role="img" aria-label="Smiling face emoji">
                  😀 .
                </span>
              </h2>
              <br />
              <br />

              <h3 className="client--name">
                {" "}
                Jane
                <AiFillInstagram
                  style={{ color: " #E1306C" }}
                ></AiFillInstagram>
              </h3>
            </div>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Section6;
