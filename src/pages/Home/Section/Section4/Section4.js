import React from "react";
import "./section4.css";
import { FaLaptop } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMicroblog } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";

const Section4 = () => {
  return (
    <section className="services-section">
      <div className="col-11 m-auto">
        <h1 className="main--title">Services</h1>
        <div className="">
          <div className="mb-2">
            <div className="component--row ">
              <div className="col">
                <div className=" card component--cards pt-xl-4 pt-lg-2 ">
                  <div className="card-body over-flow auto">
                    <div className="component--icon">
                      <FaLaptop />
                    </div>
                    <div className="component--design">
                      <h3 className="component--title"> Responsive Design</h3>
                      <p className="component--text">
                        Beautiful, stunning and unique responsive designs that
                        are very user friendly to provide an awesome experience
                        for all users.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className=" card component--cards pt-xl-4 pt-lg-2 ">
                  <div className="card-body over-flow auto">
                    <div className="component--icon">
                      <FaGlobe />
                    </div>
                    <div className="component--design">
                      <h3 className="component--title"> Web Designing</h3>
                      <p className="component--text">
                        Our team implements beautiful, stunning and unique
                        designs using React JS. Our websites are user friendly
                        and provide an awesome experience for all users.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className=" card component--cards pt-xl-4 pt-lg-2">
                  <div className=" card-body over-flow auto">
                    <div className="component--icon">
                      <FaGithub />
                    </div>
                    <div className="component--design">
                      <h3 className="component--title">
                        {" "}
                        GitHub / Git Experts
                      </h3>
                      <p className="component--text">
                        We are knowledgeable about the workings of Github and
                        Git, so you can just go to sleep and rely on us to take
                        care of maintaining open-source codes for your projects{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" component--row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-center justify-content-center">
            <div className="col me-xl-3 me-0">
              <div className=" card component--cards">
                <div className="card-body over-flow auto">
                  <div className="component--icon">
                    <FaMicroblog />
                  </div>
                  <div className="component--design">
                    <h3 className="component--title"> Content Creators</h3>
                    <p className="component--text">
                      We have awesome content writers on our team. Theu can put
                      together great material for your project and help you blog
                      about it on any platform of your choice.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className=" card component--cards ">
                <div className="card-body over-flow auto">
                  <div className="component--icon">
                    <FaSearchengin />
                  </div>
                  <div className="component--design search--engine">
                    <h3 className="component--title"> SEO Experts</h3>
                    <p className="component--text">
                      Leave your Search Engine Optimization to us. We can help
                      your potential customers find you easily with curated
                      keywords, on any search engine, especially Google. You are
                      in good hands.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
