import React, { Component, useState } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import {
  CardDeck,
  CardColumns,
  CardImg,
  Collapse,
  Button,
} from "react-bootstrap";
import Harsh from "../Images/Team/team-harsh.jpg";
import Lux from "../Images/Team/team-lux.jpg";
import Parry from "../Images/Team/team-parry.jpg";
import GG from "../Images/Team/team-gg.jpg";
import Shakshi from "../Images/Team/team-shaakshi.jpg";
import Parshva from "../Images/Team/team-parshva.jpg";
import Saakshi from "../Images/Team/team-saak.jpg";
import Ibby from "../Images/Team/team-ibby.jpg";
import Adits from "../Images/Team/team-adits.jpg";
import Mahak from "../Images/Team/team-mahak.jpg";
import Yoothika from "../Images/Team/team-yoot.jpg";
import Alexie from "../Images/Team/team-alexie.jpg";
import Vasudev from "../Images/Team/team-vasudev.jpg";
import Hans from "../Images/Team/team-hans.jpg";
import Aavi from "../Images/Team/team-aavi.jpg";
import Jahnvi from "../Images/Team/team-jahnvi.jpg";
import Hodo from "../Images/Team/team-hodo.jpg";

function Team() {
  const [openMarketing, setOpenMarketing] = useState(false);
  const [openDev, setOpenDev] = useState(false);
  const [openAmbass, setOpenAmbass] = useState(false);
  return (
    <div className="findr-team" id="Team">
      <p style={{ color: "#1a5d57", marginTop: "5%", fontSize: "xx-large" }}>
        meet the team!
      </p>
      <Button
        style={{
          backgroundColor: "#fcfdfd",
          color: "#1a5d57",
          width: "100%",
          height: "5vh",
          boxsizing: "border-box",
          padding: "8px 32px",
          borderWidth: "0",
          position: "relative",
          fontSize: "x-large",
          // textAlign: "left",
        }}
        onClick={() => setOpenMarketing(!openMarketing)}
        aria-controls="example-collapse-text"
        aria-expanded={openMarketing}
      >
        marketing team - the ones behind our awesome instagram
      </Button>
      <Collapse in={openMarketing}>
        <CardColumns>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Harsh}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>
                Harsh Jhunjhunwala
              </Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Founder
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Parry}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>
                Parnikaa Uppal
              </Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Lead Design
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Shakshi}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>
                Shakshi Sharma
              </Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Marketing Strategy
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Saakshi}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>Saakshi Shah</Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Lead Design
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </Collapse>
      <br></br>
      <Button
        style={{
          backgroundColor: "#fcfdfd",
          color: "#1a5d57",
          width: "100%",
          height: "5vh",
          boxsizing: "border-box",
          padding: "8px 32px",
          borderWidth: "0",
          position: "relative",
          fontSize: "x-large",
          // textAlign: "left",
        }}
        onClick={() => setOpenDev(!openDev)}
        aria-controls="example-collapse-text"
        aria-expanded={openDev}
      >
        development team - the ones we fire if you find bugs in the app
      </Button>
      <Collapse in={openDev}>
        <CardColumns>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={GG}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>
                Gautam Gireesh
              </Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Frontend Developer
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Lux}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>
                Lakshya Gupta
              </Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Backend Developer
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Ibby}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>
                Ibrahim Fazili
              </Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Frontend Developer
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Parshva}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>Parshva Shah</Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Frontend Developer
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Adits}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>Aditi Dagar</Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Backend Developer
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </Collapse>
      <br></br>
      <Button
        style={{
          backgroundColor: "#fcfdfd",
          color: "#1a5d57",
          width: "100%",
          height: "5vh",
          boxsizing: "border-box",
          padding: "8px 32px",
          borderWidth: "0",
          position: "relative",
          fontSize: "x-large",
          // textAlign: "left",
        }}
        onClick={() => setOpenAmbass(!openAmbass)}
        aria-controls="example-collapse-text"
        aria-expanded={openAmbass}
      >
        student ambassador team - the ones who hype sh*t up!
      </Button>
      <Collapse in={openAmbass}>
        <CardColumns>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Mahak}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>Mahak Jain</Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Student Ambassador - University of Toronto
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Yoothika}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>
                Yoothika Tanja
              </Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Student Ambassador - University of Toronto
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Alexie}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>
                Alexie El Morr
              </Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Student Ambassador - University of Toronto
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Vasudev}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>
                Vasudev Agarwal
              </Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Student Ambassador - Brown University
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Hans}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>Hans Bala</Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Student Ambassador - Brown University
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Aavi}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>Aavi Deora</Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Student Ambassador - Northwestern University
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Jahnvi}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>
                Jahnvi Hariani
              </Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Student Ambassador - Georgia Tech University
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "transparent", borderRadius: "10%" }}
            bg="transparent"
          >
            <Card.Img
              variant="top"
              src={Hodo}
              style={{
                width: "30%",
                height: "20vh",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#1a5d57" }}>
                Hodo Wardheer
              </Card.Title>
              <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
                Student Ambassador - Ryerson University
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </Collapse>
    </div>
  );
}

export default Team;
