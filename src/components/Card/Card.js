import React from "react";
import "../../pages/Section/Section5/section5.css";

const Card = ({ image, alt, heading, appName, value }) => {
  return (
    <div className="px-3 py-3 d-flex text-center shadow align-items-center port-card ">
      <div className="w-50 img-div">
        <img src={image} alt={alt} className="w-100"></img>
      </div>
      <div className="w-50 ps-1">
        <p className="fw-bold fs-6">{heading}</p>
        <p className="fw-bold d-md-block d-lg-none">{appName}</p>
        <button className="btn btn-dark text-white">{value}</button>
      </div>
    </div>
  );
};

export default Card;
