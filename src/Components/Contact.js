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
    <div className="contact-div" id="Contact-Us">
      <div className="contact-text">contact us</div>
      <div className="sugg-text">send us your questions and suggestions!</div>

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

      <div className="social-media">
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

      <div className="like">
        <div className="like-title">leave a like!</div>
        <div className="like-plug">
          follow us on social media for continuous updates
        </div>
      </div>
    </div>
  );
}

export default Contact;
