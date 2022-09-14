import React from "react";
import "./services.css";
import { VscDebugAll } from "react-icons/vsc";
import { FcEngineering } from "react-icons/fc";
import { GrDeploy } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import styled from "styled-components";
import Testimonials from "./Testimonials";

const Container = styled.main`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

export default function Services() {
  return (
    <div className="services">
      <h1>My Services</h1>
      <div className="services-content-wrapper ">
        <div className="myservices">
          <VscDebugAll id="myservices"></VscDebugAll>
          <h1 style={{ color: "white", padding: "10px" }}>Debugging</h1>
          <p style={{ color: "white", padding: "10px" }}>
            Debugging is the process of detecting and removing of existing and
            potential errors (bugs) in a software code that can cause it to
            behave unexpectedly or crash.
          </p>
        </div>
        <div className="myservices">
          <FcEngineering id="myservices"></FcEngineering>
          <h1 style={{ color: "white", padding: "10px" }}>API development</h1>
          <p style={{ color: "white", padding: "10px" }}>
            API (Application Programming Interface software) is a set of
            instructions, standards or requirements that enables a software or
            app to employ features/services of another app
          </p>
        </div>
        <div className="myservices">
          <GrDeploy id="myservices"></GrDeploy>
          <h1 style={{ color: "white", padding: "10px" }}>Deployment</h1>
          <p style={{ color: "white", padding: "10px" }}>
            Deploying projects/sites and apps to live servers using tools like
            Docker, AWS, Heroku, Netlify, Vercel, Google Play Console
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
            <p>experienced</p>
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
              <GoVerified></GoVerified> &nbsp;&nbsp;&nbsp;{/* for spacing*/}HTML
            </h5>
            <p>experienced</p>
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
      </div>

      <div className="mytestimonials">
        {" "}
        <Container>
          <Testimonials />
        </Container>
      </div>
    </div>
  );
}

/*Services and Testimonial, I merged them cause I don't want too many pages
      on my portfolio website. I want the site to be specific. Adding my
      services, frontend, backend tech stack,testimonials, */
