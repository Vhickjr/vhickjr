import React from "react";
import "./myportfolio.css";
const Card = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div className="port1" key={Val.id}>
                <div className="port2">
                  <img
                    src={Val.img}
                    alt={Val.title}
                    className="img-container img-container1 img-container2 "
                  />
                </div>
                <div className="port3">
                  <div className="card-title fw-bold fs-4">
                    {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                    {Val.price}
                  </div>
                  <div className="card-text">{Val.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
