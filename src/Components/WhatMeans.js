import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Chat from "../Images/chat.png";
import { CardDeck, CardColumns, Button } from "react-bootstrap";

function WhatMeans() {
  return (
    <div className="why-findr" id="Testimonials">
      <p style={{ color: "#1a5d57", marginTop: "5%" }}>
        what does Findr mean to us?
      </p>
      <CardColumns>
        <Card style={{border: 'transparent', borderRadius: '10%'}}>
          <Card.Img variant="top" src={Chat} style={{ width: "30%", marginLeft: 'auto', marginRight: 'auto' }} />
          <Card.Body>
            <Card.Title style={{ color: "#1a5d57" }}>
              Yoothika Taneja
            </Card.Title>
            <Card.Text>
              As a first year political science student it was particularly
              dificult to make friends or even meet people in a class of 1000.
              It was almost impossible to sit next to the same person every time
              you went in for a convocation hall lecture.
            </Card.Text>
            <Card.Text>
              with findr, it is most certain that connectivity between students
              will get better. students can meet other students they share a
              class with much prior to their first lecture. Unlike other apps,
              that allow you to "join" class groups with 100+ students already
              in it. Findr will help you form a one to one relationship with
              your classmates.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{border: 'transparent', borderRadius: '10%'}}>
        <Card.Img variant="top" src={Chat} style={{ width: "30%", marginLeft: 'auto', marginRight: 'auto' }} />
          <Card.Body>
            <Card.Title style={{ color: "#1a5d57" }}>Shruti Kasera</Card.Title>
            <Card.Text>
              I think Findr is a great way to help students connect with each
              other. It will automatically connect you with people and allow
              students to form faster and better relationships that cater to
              immediate needs. It makes looking for a study partner or even
              someone to go to a Hackathon with so much easier.
            </Card.Text>
            <Card.Text>
              Going into first year, finding new friends will be a challenge,
              but Findr will make that process so much simpler. With such large
              classes, that are now going to be online, meeting people will
              become even more difficult. Findr will ensure that I can still be
              connected to my classmates even from home.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{border: 'transparent', borderRadius: '10%'}}>
        <Card.Img variant="top" src={Chat} style={{ width: "30%", marginLeft: 'auto', marginRight: 'auto' }} />
          <Card.Body>
            <Card.Title style={{ color: "#1a5d57" }}>Hala Touma</Card.Title>
            <Card.Text>
              Findr is honestly an excellent idea! A lot of students prefer to
              study in groups/ with a study partner. This app will connect you
              with people you may not normally see, and is a great way to find a
              study partner and maybe a friend!
            </Card.Text>
            <Card.Text>
              Usually, it is tough to talk to people in university generally; it
              is even tougher to find people that stick with you and are
              interested in being a study partner. Findr would help by allowing
              users to have easier access to focused people with similar study
              habits.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </div>
  );
}

export default WhatMeans;
