import React from "react";
import Data from "./data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "50px",
        }}
      >
        {/* {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}*/}
        <button
          className="btn-dark text-white  btn"
          onClick={() => setItem(Data)}
        >
          All
        </button>

        <button
          style={{
            color: "white",
            backgroundColor: "#32de84",
            border: "#32de84",
            borderRadius: "10px",
          }}
          className=" text-whites"
          onClick={() => filterItem("latest")}
        >
          latest
        </button>
        <button
          className="text-white"
          onClick={() => filterItem("cms")}
          style={{
            color: "white",
            backgroundColor: "#32de84",
            border: "#32de84",
            borderRadius: "10px",
          }}
        >
          cms
        </button>
        <button
          className="text-white"
          onClick={() => filterItem("scripting")}
          style={{
            color: "white",
            backgroundColor: "#32de84",
            border: "#32de84",
            borderRadius: "10px",
          }}
        >
          scripting
        </button>
      </div>
    </>
  );
};

export default Buttons;
