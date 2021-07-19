import React, { useState } from "react";
import "../App.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ToggleButton,
  ButtonGroup,
} from "react-bootstrap";
// const phoneRegEx = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
// const emailRegEx = /\S+@\S+/;

export const Contact = () => {
  // <Styles>
  const [name, handleNameChange] = useState("");
  const [phone, handlePhoneChange] = useState("");
  return (
    <Container fluid className="contact-div" id="Contact">
      <Row>
        <Col xs={12} md={4} sm={4} style={{ marginTop: "15%" }}>
          <p className="contact-text">reset password</p>
          <p className="sugg-text"> enter your new password here to change it </p>
        </Col>
        <Col xs={12} md={4} sm={4} style={{ marginTop: "10%" }}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="new password"
              onChange={(event) => handleNameChange(event.target.value)}
            />
            <br />
            <Form.Control
              type="text"
              placeholder="confirm password"
              onChange={(event) => handlePhoneChange(event.target.value)}
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
              class="submit-button"
              value="1"
              onClick={() => {
                handleSubmit(name, phone);
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
    </Container>
  );
  // </Styles>
};

// function handleSubmit(name, phone, uni, email, message) {
//   let validEmail = emailRegEx.test(email);
//   let validPhone = phoneRegEx.test(phone);
//   let validMessage = message === "" ? false : true;
//   let validName = name === "" ? false : true;
//   let validUni = uni === "" ? false : true;
//   if (validEmail && validPhone && validMessage && validName && validUni) {
//     fetch("https://findrapp.ca/contact", {
//       method: "POST",
//       body: {
//         email,
//         phone,
//         message,
//         name,
//         uni,
//       },
//     })
//       .then((res) => {
//         if (res.status != 201) {
//           alert("Couldn't submit form. Try Again!");
//         } else {
//           alert("You have successfully submitted!");
//         }
//       })
//       .catch((error) => {
//         alert("Couldn't submit form. Try Again!");
//       });
//   } else {
//     alert("One or more fields you have entered is incorrect!");
//   }
// }
