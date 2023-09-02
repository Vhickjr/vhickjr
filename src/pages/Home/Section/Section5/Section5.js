import React from "react";
import Card from "./Card";
import "./section5.css";

const Section5 = () => {
  const data = [
    {
      image: "https://i.ibb.co/17LQC5X/Screenshot-48.png",
      alt: "landing",
      heading: "My Portfolio website",
      appName: "Reactjs",
      link: "https://www.mathiasvictor.com/",
      value: "VIEW PROJECT",
      link1: "https://www.mathiasvictor.com/",
    },
    {
      image: "https://i.ibb.co/1XNW7YP/Screenshot-49.png",
      alt: "landing",
      heading: "PeersApp landing page",
      appName: "nextjs",
      value: "VIEW PROJECT",
      link:
        "https://peersapp-3aigy7llz-portfolio-frontend-react-team-2.vercel.app/",
    },
    {
      image: "https://i.ibb.co/P6K4KTP/Screenshot-44.png",
      alt: "landing",
      heading: "Barter clone",
      appName: "REACTJS",
      value: "VIEW PROJECT",
      link: "https://barter-clone.netlify.app/",
    },
    {
      image: "https://i.ibb.co/6ry4Lqn/Screenshot-46.png",
      alt: "landing",
      heading: "URL shortener",
      appName: "REACTJS",
      value: "VIEW PROJECT",
      link: "https://bub-it.netlify.app/",
    },
  ];
  const handleClick = (link) => {
    window.location.href = link;
  };
  return (
    <div className="port">
      <a href="/myportfolio">
        <button
          style={{
            borderRadius: "10px",
            backgroundColor: "#32de84",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <h2>My Portfolio</h2>
        </button>
      </a>
      <div className="portfolio container ">
        <div className="row">
          {data.map((details) => (
            <div className=" col-md-12 col-lg-4 mb-5">
              <Card
                image={details.image}
                alt={details.alt}
                heading={details.heading}
                appName={details.appName}
                value={details.value}
                onClick={() => handleClick(details.link)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
