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
          className="btn-warning text-whites"
          onClick={() => filterItem("Breakfast")}
        >
          latest
        </button>
        <button
          className="btn-warning text-white"
          onClick={() => filterItem("Lunch")}
        >
          cms
        </button>
        <button
          className="btn-warning text-white"
          onClick={() => filterItem("Dinner")}
        >
          scripting
        </button>
      </div>
    </>
  );
};

export default Buttons;
