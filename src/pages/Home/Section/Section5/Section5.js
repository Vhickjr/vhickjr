import React from "react";
import Card from "./Card";
import landing from "./images/landing.svg";
import redesign from "./images/redesign.svg";
import music from "./images/music.svg";
import cypto from "./images/cypto.svg";
import "./section5.css";

const Section5 = () => {
  const data = [
    {
      image: landing,
      alt: "landing",
      heading: "Website Landing Page Re-design",
      appName: "OHEALTH",
    },
    {
      image: redesign,
      alt: "redesign",
      heading: "Website Re-design",
      appName: "KILIMANJARO MEDIA",
    },
    {
      image: music,
      alt: "music",
      heading: "Music App",
      appName: "AFROBEAT UNDERGROUND",
    },
    {
      image: cypto,
      alt: "crypto",
      heading: "Crypto Wallet",
      appName: "TECHNOLY",
    },
  ];
  return (
    <div className="port">
      <h2 className="text-center py-5">My Portfolio</h2>
      <div className="portfolio container ">
        <div className="row">
          {data.map((details) => (
            <div className=" col-md-12 col-lg-4 mb-5">
              <Card
                image={details.image}
                alt={details.alt}
                heading={details.heading}
                appName={details.appName}
                value="VIEW CASE STUDY"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
