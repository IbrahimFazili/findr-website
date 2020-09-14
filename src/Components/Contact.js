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
              style={{
                borderRadius: 40,
                width: "90%",
                height: "25vh",
                borderWidth: 0,
                marginLeft: "3%",
                padding: "5%",
              }}
              onChange={(event) => handleMessageChange(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4}></Col>
        <Col md={8}>
          <ButtonGroup toggle>
            <ToggleButton
              type="checkbox"
              variant="secondary"
              checked={true}
              value="1"
              onClick={() => {
                handleSubmit(name, phone, uni, email, message);
                alert("You have successfully submitted!");
              }}
              style={{
                backgroundColor: "#1a5d57",
                color: "white",
                width: "20vh",
                height: "7vh",
                borderRadius: 30,
                boxsizing: "border-box",
                padding: "8%",
                borderWidth: "0",
                position: "relative",
                marginTop: "30%",
              }}
            >
              Submit
            </ToggleButton>
          </ButtonGroup>
        </Col>
      </Row>
      <Row style={{ marginTop: "5%" }}>
        <Col md={3}></Col>
        <Col xs={4} md={1}>
          <a href="https://www.instagram.com/findr.study/" target="_blank">
            <img src={Instagram} className="social-media-logo" />
          </a>
        </Col>
        <Col xs={4} md={1}>
          <a href="https://www.facebook.com/findr.study.3" target="_blank">
            <img src={Facebook} className="social-media-logo-facebook" />
          </a>
        </Col>
        <Col xs={4} md={1}>
          <a href="https://www.linkedin.com/company/findrapp/" target="_blank">
            <img src={LinkedIn} className="social-media-logo-facebook" />
          </a>
        </Col>
        <Col xs={12} md={6} className="like">
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
