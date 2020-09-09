import React, { useState } from "react";
import "../App.css";
import Instagram from "../Images/instagram.png";
import LinkedIn from "../Images/linkedin-round-color.png";
import Facebook from "../Images/facebook.svg";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Contact = () => {
  // <Styles>
  const [name, handleNameChange] = useState("");
  const [phone, handlePhoneChange] = useState("");
  const [uni, handleUniChage] = useState("");
  const [email, handleEmailChange] = useState("");
  const [message, handleMessageChange] = useState("");
  return (
    <Container fluid className="contact-div" id = "Contact">
      <Row>
        {/* <Col xs={12} md={3} sm={4} style={{ marginTop: "10%" }}>
          <p className="contact-text">contact us</p>
          <p className="sugg-text">send us your questions and suggestions!</p>
        </Col>
        <Col xs={12} md={4} sm={8} style={{ marginTop: "10%" }}>
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
        </Col>
        <Col xs={12} md={4} sm={8} style={{ marginTop: "10%" }}>
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
        </Col>*/}
        <Col xs={12} md={4} sm={4} style={{ marginTop: "10%" }}>
          <p className="contact-text">contact us</p>
          <p className="sugg-text">send us your questions and suggestions!</p>
        </Col>
        <Col xs={12} md={4} sm={4} style={{ marginTop: "10%" }}>
          <Form.Group>
            <Form.Control type="text" placeholder="full name" />
            <br />
            <Form.Control type="text" placeholder="phone number" />
            <br />
            <Form.Control type="text" placeholder="university" />
          </Form.Group>
        </Col>
        <Col xs={12} md={4} sm={4} style={{ marginTop: "10%" }}>
          <Form.Group>
            <Form.Control type="text" placeholder="email-address" />
            <br />
            <Form.Control as="textarea" rows="3" placeholder="message" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {/* Add alert for submit*/}
        <Col md={4}></Col>
        <Col md={8}>
          <Button
            type="submit"
            variant="light"
            style={{
              backgroundColor: "#1a5d57",
              color: "white",
              borderRadius: "5em",
              boxSizing: "border-box",
              width: "15%",
              height: "8vh",
            }}
          >
            Submit
          </Button>
        </Col>
        {/* <input
          type="submit"
          value="Submit"
          onClick={() => handleSubmit(name, phone, uni, email, message)}
        /> */}
      </Row>
      <Row style={{ marginTop: "8%" }}>
        <Col xs={12} md={6} sm={6} className="social-media">
          <a href="https://www.instagram.com/findr.study/" target="_blank">
            <img src={Instagram} className="social-media-logo" />
          </a>
          <a href="https://www.facebook.com/findr.study.3" target="_blank">
            <img src={Facebook} className="social-media-logo-facebook" />
          </a>
          <a href="https://www.linkedin.com/company/findrapp/" target="_blank">
            <img src={LinkedIn} className="social-media-logo-facebook" />
          </a>
        </Col>
        <Col xs={12} md={6} sm={6} className="like">
          <p className="like-title">leave a like!</p>
          <p className="like-plug">
            follow us on social media for continuous updates
          </p>
        </Col>
      </Row>
    </Container>
  );
  // </Styles>
};

function handleSubmit(name, phone, uni, email, message) {
  console.log({
    name,
    phone,
    uni,
    email,
    message,
  });
}
