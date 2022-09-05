import React, { Component } from "react";
import "./contactme.css";

export default class Contactme extends Component {
  render() {
    return (
      <div className="contactme">
        <div
          style={{
            marginTop: "-20px",
          }}
        >
          <h1 style={{ color: "white" }}>
            Contact <span style={{ color: "green" }}>Me</span>
          </h1>
          <h2 style={{ color: "white" }}>
            <span style={{ color: "green" }}>Get </span>in touch
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginTop: "100px",
          }}
        >
          <div className="mymap">
            {" "}
            <div className="earth3dmap-com">
              <iframe
                id="iframemap"
                src="https://maps.google.com/maps?q=4+Adelabu+lane+off+Olateju%2C+Mushin%2C+Lagos%2C+Nigeria.&ie=UTF8&iwloc=&output=embed"
                style={{ width: "100%", height: "400px" }}
              />
              <div
                style={{
                  color: "#333",
                  fontSize: "14px",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  textAlign: "right",
                  padding: "10px",
                }}
              >
                Map by{" "}
                <a
                  style={{
                    color: "#333",
                    textDecoration: "underline",
                    fontSize: "14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    textAlign: "right",
                  }}
                  href="http://earth3dmap.com/?from=embed"
                  target="_blank"
                >
                  Earth3DMap.com
                </a>
              </div>
            </div>
          </div>
          <div className="myform">
            <div>
              <form>
                <div className="contact-inputt">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="contact-inputt">
                  <input type="text" placeholder="Phone Number" />
                </div>
                <div className="contact-inputt">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="contact-textareaa">
                  <textarea placeholder="Message"></textarea>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
