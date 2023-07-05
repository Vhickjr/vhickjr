import React from "react";
import "./section5.css";

const Card = ({ image, alt, heading, appName, value, onClick }) => {
  return (
    <div className="px-3 py-3 d-flex text-center shadow align-items-center port-card ">
      <div className="w-50 img-div">
        <img src={image} alt={alt} className="w-100"></img>
      </div>
      <div className="w-50 ps-1">
        <p className="fw-bold fs-6">{heading}</p>
        <p className="fw-bold d-md-block d-lg-none">{appName}</p>
        <button
          style={{
            borderRadius: "10px",
            backgroundColor: "#9b59b6",
            border: "#32de84",
          }}
          onClick={onClick}
        >
          {value}
        </button>
      </div>
    </div>
  );
};

export default Card;
