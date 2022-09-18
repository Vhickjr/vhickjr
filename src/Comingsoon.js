import pizza1 from "./pizza1.png";
import "./App.css";
import Mailer from "./components/Comingsoon/mailer";
import React from "react";

function Comingsoon() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <a href="./Home">
            <img src={pizza1} className="App-logo" alt="logo" />
          </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>
            <p className="vic2">something's cooking,</p>{" "}
            <p className="vic1"> check back soon :)</p>
          </p>
        </header>
      </div>
      <div>
        {" "}
        <Mailer></Mailer>
      </div>
    </div>
  );
}

export default Comingsoon;
