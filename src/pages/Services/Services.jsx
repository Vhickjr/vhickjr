import React from "react";
import "./services.css";
import { VscDebugAll } from "react-icons/vsc";
import { FcEngineering } from "react-icons/fc";
import { GrDeploy } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import styled from "styled-components";
import Testimonials from "./Testimonials";
import Banner from "../../components/banner/Banner";
const Container = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

const Services = () => {
  return (
    <div className="services">
      <div>
        {" "}
        <Banner></Banner>
      </div>
      <h1 style={{ marginTop: "100px", color: "#046d33" }}>My Services</h1>
      <div className="services-content-wrapper ">
        <div className="myservices">
          <VscDebugAll id="myservices"></VscDebugAll>
          <h1 style={{ color: "white", padding: "10px" }}>Debugging</h1>
          <p style={{ color: "white", padding: "10px" }}>
            The task of debugging involves identifying and eliminating errors,
            both present and potential, in the software code that may cause it
            to malfunction or crash.
          </p>
        </div>
        <div className="myservices">
          <FcEngineering id="myservices"></FcEngineering>
          <h1 style={{ color: "white", padding: "10px" }}>API development</h1>
          <p style={{ color: "white", padding: "10px" }}>
            An API, or Application Programming Interface, is a set of
            guidelines, protocols, or specifications that allows a program or
            application to access and utilize the functionalities and resources
            of another program or application
          </p>
        </div>
        <div className="myservices">
          <GrDeploy id="myservices"></GrDeploy>
          <h1 style={{ color: "white", padding: "10px" }}>Deployment</h1>
          <p style={{ color: "white", padding: "10px" }}>
            Deploying projects, websites, and applications on live servers using
            various tools such as AWS, Heroku, Netlify, Vercel, or Google Play
            Console.
          </p>
        </div>
      </div>
      <h1>My Tech Stack</h1>
      <div className="techstack">
        <div className="frontend">
          <h4 id="frontend1">Frontend Development</h4>
          <div id="frontend2">
            <h5>
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}HTML
            </h5>
          </div>
          <div id="frontend2">
            <h5>
              {" "}
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}CSS
            </h5>
          </div>
          <div id="frontend3">
            <h5>
              {" "}
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}
              javaScript
            </h5>
          </div>
          <div id="frontend3">
            <h5>
              {" "}
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}
              ReactJS
            </h5>
          </div>
          <div id="frontend4">
            <h5>
              {" "}
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}
              NextJS
            </h5>
          </div>
          <div id="frontend4">
            <h5>
              {" "}
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}SASS
            </h5>
          </div>
        </div>

        <div className="frontend">
          <h4 id="frontend1">Backend Development</h4>
          <div id="frontend2">
            <h5>
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}
              NodeJS (Express)
            </h5>
          </div>
          <div id="frontend2">
            <h5>
              {" "}
              <GoVerified></GoVerified>
              {/* for spacing*/}
              python(Django)
            </h5>
          </div>
          <div id="frontend3">
            <h5>
              {" "}
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}
              MongoDB
            </h5>
          </div>
          <div id="frontend3">
            <h5>
              {" "}
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}
              MySQL
            </h5>
          </div>
          <div id="frontend4">
            <h5>
              {" "}
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}
              Vercel
            </h5>
          </div>
          <div id="frontend4">
            <h5>
              {" "}
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}SASS
            </h5>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="mytestimonials">
        {" "}
        <Container>
          <Testimonials />
        </Container>
      </div>
    </div>
  );
};
export default Services;
/*Services and Testimonial, I merged them cause I don't want too many pages
      on my portfolio website. I want the site to be specific. Adding my
      services, frontend, backend tech stack,testimonials, */
