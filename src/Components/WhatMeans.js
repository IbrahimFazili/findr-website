import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Chat from "../Images/chat.png";

function WhatMeans() {
  return (
    <div className="why-findr" id="Findr">
      <p style={{ color: "#1a5d57", marginTop: "5%" }}>
        what does Findr mean to us?
      </p>
      <div>
        <Card style={{ display: "inline-block", width: "30%" }}>
          <Card.Img style={{ width: "30%" }} src={Chat} />
          <Card.Title>Hello</Card.Title>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card.Text>
        </Card>
        <Card style={{ display: "inline-block", width: "30%" }}>
          <Card.Title>Hello Pt 2</Card.Title>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card.Text>
        </Card>
        <Card style={{ display: "inline-block", width: "30%" }}>
          <Card.Title>Hello Pt 3</Card.Title>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Card.Text>
        </Card>
      </div>
    </div>
  );
}

export default WhatMeans;
