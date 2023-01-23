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
                  <div
                    className="card-title fw-bold fs-4"
                    style={{ color: "#32de84" }}
                  >
                    {Val.title}
                  </div>
                  <div className="card-text">{Val.desc}</div>

                  <div style={{ paddingTop: "10px" }}>
                    <button
                      onClick={() => window.open(Val.link)}
                      style={{
                        color: "white",
                        backgroundColor: "#32de84",
                        border: "#32de84",
                        borderRadius: "10px",
                      }}
                    >
                      {" "}
                      view project
                    </button>
                  </div>
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
