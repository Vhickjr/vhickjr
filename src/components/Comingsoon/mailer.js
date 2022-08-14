import React from "react";
import "./mailerr.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import "./popup.css";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uzujr4h",
        "template_23cdkcq",
        e.target,
        "dfKvdTRbroAo0kBGF"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };
  return (
    <div className="border vic5">
      <h1 style={{ margin: "25px" }} className="vic3">
        Contact Form
      </h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label className="vic4">Name</label>
        <input type="text" name="name" className="form-control"></input>
        <label className="vic4">Email</label>
        <input type="email" name="user_email" className="form-control"></input>
        <label className="vic4">Message</label>
        <textarea name="message" rows="4" className="form-control"></textarea>

        <a onClick={handleClickOpen}>
          <input
            type="submit"
            value="send"
            className="form-control btn btn-primary"
            style={{ marginTop: "30px" }}
          ></input>
        </a>
        <div>
          {popup ? (
            <div className="main">
              <div className="popup">
                <div className="popup-header">
                  <h1>popup</h1>
                  <h1 onClick={closePopup}>X</h1>
                </div>
                <div>
                  <p>This is simple popup in React js</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};
export default Mailer;
