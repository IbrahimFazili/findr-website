import React, { useState } from "react";
import "../App.css";
import Instagram from "../Images/instagram.png";
import LinkedIn from "../Images/linkedin-round-color.png";
import Facebook from "../Images/facebook.svg";

function handleSubmit(event, name, phone, uni, email, message) {
  event.preventDefault();
  console.log({
    name,
    phone,
    uni,
    email,
    message,
  });
}

function Contact() {
  const [name, handleNameChange] = useState("");
  const [phone, handlePhoneChange] = useState("");
  const [uni, handleUniChage] = useState("");
  const [email, handleEmailChange] = useState("");
  const [message, handleMessageChange] = useState("");

  return (
    <div className="contact-div" id="contact-us">
      <div
        style={{
          display: "inline-block",
          width: "20%",
          alignContent: "center",
          verticalAlign: "top",
          marginTop: "10%",
        }}
      >
        <p className="contact-text">contact us</p>
        <p className="sugg-text">send us your questions and suggestions!</p>
      </div>
      <div
        style={{
          display: "inline-block",
          width: "50%",
          verticalAlign: "top",
          marginTop: "10%",
          marginRight: "10%",
        }}
      >
        <form
          className="forms"
          method="POST"
          onSubmit={(event) =>
            handleSubmit(event, name, phone, uni, email, message)
          }
        >
          <input
            type="text"
            placeholder="full name"
            name="full name"
            value={name}
            onChange={(event) => handleNameChange(event.target.value)}
          />
          <br />

          <input
            type="tel"
            placeholder="phone number"
            name="phone number"
            value={phone}
            onChange={(event) => handlePhoneChange(event.target.value)}
          />
          <br />

          <input
            type="text"
            placeholder="university"
            name="university"
            value={uni}
            onChange={(event) => handleUniChage(event.target.value)}
          />
          <br />

          <input
            type="email"
            placeholder="e-mail address"
            name="email"
            className="email"
            value={email}
            onChange={(event) => handleEmailChange(event.target.value)}
          />
          <br />

          <textarea
            style={{ resize: "none" }}
            rows="6"
            columns="80"
            placeholder="message"
            name="message"
            value={message}
            onChange={(event) => handleMessageChange(event.target.value)}
          ></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>

      <div>
        <div
          className="social-media"
          style={{
            display: "inline-block",
            width: "40%",
            verticalAlign: "bottom",
            marginBottom: "5%",
          }}
        >
          <a href="https://www.instagram.com/findr.study/" target="_blank">
            <img src={Instagram} className="social-media-logo" />
          </a>
          <a href="https://www.facebook.com/findr.study.3" target="_blank">
            <img src={Facebook} className="social-media-logo-facebook" />
          </a>
          <a href="https://www.linkedin.com/company/findrapp/" target="_blank">
            <img src={LinkedIn} className="social-media-logo-facebook" />
          </a>
        </div>

        <div className="like" style={{ display: "inline-block", width: "40%" }}>
          <p className="like-title">leave a like!</p>
          <p className="like-plug">
            follow us on social media for continuous updates
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
