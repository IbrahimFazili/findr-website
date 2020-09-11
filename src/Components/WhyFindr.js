import React, { useState } from "react";
import "../App.css";
import MainImage from "../Images/icon10.png";
import Video from "../Images/website_video.mp4";
import { Container, Row, Col, ResponsiveEmbed, Fade } from "react-bootstrap";

export const WhyFindr = () => {
  return (
    <Container fluid className="why-findr">
      <Row xs={12} md={12}>
        <p
          className="why-findr-title"
          style={{ alignSelf: "center", marginLeft: "45%" }}
        >
          why Findr?
        </p>
      </Row>
      <Row>
        <Col xs={12} md={3}>
          <img src={MainImage} style={{ width: "80%", marginTop: "40%" }} />
        </Col>
        <Col xs={12} md={9}>
          <ResponsiveEmbed aspectRatio="16by9">
            <video
              autostart
              autoPlay
              loop
              muted
              disablePictureInPicture
              src={Video}
              type="video/mp4"
              style={{ width: "100%" }}
            />
          </ResponsiveEmbed>
        </Col>
      </Row>
    </Container>
  );
};
