import React, { useState } from "react";
import "../App.css";
import Instagram from "../Images/instagram.png";
import LinkedIn from "../Images/linkedin-round-color.png";
import Facebook from "../Images/facebook.svg";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";

export const Contact = () => {
  // <Styles>
  const [name, handleNameChange] = useState("");
  const [phone, handlePhoneChange] = useState("");
  const [uni, handleUniChage] = useState("");
  const [email, handleEmailChange] = useState("");
  const [message, handleMessageChange] = useState("");
  return (
    <Container fluid className="contact-div" id="Contact">
      <Row>
        <Col xs={12} md={4} sm={4} style={{ marginTop: "10%" }}>
          <p className="contact-text">contact us</p>
          <p className="sugg-text">send us your questions and suggestions!</p>
        </Col>
        <Col xs={12} md={4} sm={4} style={{ marginTop: "10%" }}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="full name"
              onChange={(event) => handleNameChange(event.target.value)}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="phone number"
              onChange={(event) => handlePhoneChange(event.target.value)}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="university"
              onChange={(event) => handleUniChage(event.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={4} sm={4} style={{ marginTop: "10%" }}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="email-address"
              onChange={(event) => handleEmailChange(event.target.value)}
            />
            <br />
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="message"
              style={{ borderRadius: 40, width: "90%" }}
              onChange={(event) => handleMessageChange(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {/* Add alert for submit*/}
        <Col md={4}></Col>
        <Col md={8}>
          <ButtonGroup toggle style={{ width: "15%", borderRadius: "20%" }}>
            <ToggleButton
              type="checkbox"
              variant="secondary"
              checked={true}
              value="1"
              onChange={() => handleSubmit(name, phone, uni, email, message)}
              style={{
                backgroundColor: "#1a5d57",
                color: "white",
                borderRadius: "35%",
                width: "35%",
                height: "5vh",
              }}
            >
              Submit
            </ToggleButton>
          </ButtonGroup>
        </Col>

      </Row>
      <Row style={{ marginTop: "8%" }}>
        <Col xs={12} md={6} sm={6} className="social-media">
          <a href="https://www.instagram.com/findr.study/" target="_blank">
            <img src={Instagram} style={{width: '12.5%'}} className="social-media-logo" />
          </a>
          <a href="https://www.facebook.com/findr.study.3" target="_blank">
            <img src={Facebook} style={{width: '5%', marginRight: '3%'}} />
          </a>
          <a href="https://www.linkedin.com/company/findrapp/" target="_blank">
            <img src={LinkedIn} style={{width: '15%'}} className="social-media-logo-facebook" />
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
