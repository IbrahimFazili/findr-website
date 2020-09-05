import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import { CardDeck, CardColumns, CardImg } from "react-bootstrap";
import Harsh from "../Images/Team/team-harsh.jpg";
import Lux from "../Images/Team/team-lux.jpg";
import Parry from "../Images/Team/team-parry.jpg";
import GG from "../Images/Team/team-gg.jpg";
import Shakshi from "../Images/Team/team-shaakshi.jpg"
import Parshva from "../Images/Team/team-parshva.jpg"
import Saakshi from "../Images/Team/team-saak.jpg"
import Ibby from "../Images/Team/team-ibby.jpg"
import Adits from "../Images/Team/team-adits.jpg"
import Mahak from "../Images/Team/team-mahak.jpg"
import Yoothika from "../Images/Team/team-yoot.jpg"
import Alexie from "../Images/Team/team-alexie.jpg"
import Vasudev from "../Images/Team/team-vasudev.jpg"
import Hans from "../Images/Team/team-hans.jpg"
import Aavi from "../Images/Team/team-aavi.jpg"

function Team() {
  return (
    <div className="why-findr" id="Team">
      <p style={{ color: "#1a5d57", marginTop: "5%" }}>meet the team!</p>
      <CardColumns>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={Harsh}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Harsh Jhunjhunwala
          </Card.Subtitle>
          <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
            Founder
          </Card.Text>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <img
            src={Lux}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Lakshya Gupta
          </Card.Subtitle>
          <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
            Lead Backend Developer
          </Card.Text>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={Parry}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Parnikaa Uppal
          </Card.Subtitle>
          <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
            Lead Design
          </Card.Text>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={GG}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Gautam Gireesh
          </Card.Subtitle>
          <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
            Frontend Developer
          </Card.Text>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={Shakshi}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Shakshi Sharma
          </Card.Subtitle>
          <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
            Marketing Strategy
          </Card.Text>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={Parshva}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Parshva Shah
          </Card.Subtitle>
          <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
            Frontend Developer
          </Card.Text>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={Saakshi}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Saakshi Shah
          </Card.Subtitle>
          <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
            Lead Design
          </Card.Text>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={Ibby}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Ibrahim Fazili
          </Card.Subtitle>
          <Card.Text style={{ color: "#1a5d57", fontSize: 20 }}>
            Frontend Developer
          </Card.Text>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={Adits}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Body>
            <Card.Subtitle style={{ color: "#1a5d57" }}>
              Aditi Dagar
            </Card.Subtitle>
            <Card.Text
              style={{
                color: "#1a5d57",
                fontSize: 20,
                width: "50%",
                marginLeft: "25%",
              }}
            >
              Backend Developer
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={Mahak}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Body>
            <Card.Subtitle style={{ color: "#1a5d57" }}>
              Mahak Jain
            </Card.Subtitle>
            <Card.Text
              style={{
                color: "#1a5d57",
                fontSize: 20,
                width: "50%",
                marginLeft: "25%",
              }}
            >
              Student Ambassador - University of Toronto
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={Yoothika}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Body>
            <Card.Subtitle style={{ color: "#1a5d57" }}>
              Yoothika Tanja
            </Card.Subtitle>
            <Card.Text
              style={{
                color: "#1a5d57",
                fontSize: 20,
                width: "50%",
                marginLeft: "25%",
              }}
            >
              Student Ambassador - University of Toronto
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={Alexie}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Body>
            <Card.Subtitle style={{ color: "#1a5d57" }}>
              Alexie El Morr
            </Card.Subtitle>
            <Card.Text
              style={{
                color: "#1a5d57",
                fontSize: 20,
                width: "50%",
                marginLeft: "25%",
              }}
            >
              Student Ambassador - University of Toronto
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ display: "inline-block", width: "25%", marginBottom: "2%" }}
        >
          <Card.Img
            src={Vasudev}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Vasudev Agarwal
          </Card.Subtitle>
          <Card.Text
            style={{
              color: "#1a5d57",
              fontSize: 20,
              width: "50%",
              marginLeft: "25%",
            }}
          >
            Student Ambassador - Brown University
          </Card.Text>
        </Card>
        <Card style={{ display: "inline-block", width: "25%" }}>
          <Card.Img
            src={Hans}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>Hans Bala</Card.Subtitle>
          <Card.Text
            style={{
              color: "#1a5d57",
              fontSize: 20,
              width: "50%",
              marginLeft: "25%",
            }}
          >
            Student Ambassador - Brown University
          </Card.Text>
        </Card>
        <Card style={{ display: "inline-block", width: "25%" }}>
          <Card.Img
            src={Aavi}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>Aavi Deora</Card.Subtitle>
          <Card.Text
            style={{
              color: "#1a5d57",
              fontSize: 20,
              width: "50%",
              marginLeft: "25%",
            }}
          >
            Student Ambassador - Northwestern University
          </Card.Text>
        </Card>
        <Card style={{ display: "inline-block", width: "25%" }}>
          <Card.Img
            src={Harsh}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Shashank Singhania
          </Card.Subtitle>
          <Card.Text
            style={{
              color: "#1a5d57",
              fontSize: 20,
              width: "50%",
              marginLeft: "25%",
            }}
          >
            Student Ambassador - Georgia Tech University
          </Card.Text>
        </Card>
        <Card style={{ display: "inline-block", width: "25%" }}>
          <Card.Img
            src={Harsh}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Jahnvi Hariani
          </Card.Subtitle>
          <Card.Text
            style={{
              color: "#1a5d57",
              fontSize: 20,
              width: "50%",
              marginLeft: "25%",
            }}
          >
            Student Ambassador - Georgia Tech University
          </Card.Text>
        </Card>
        <Card style={{ display: "inline-block", width: "25%" }}>
          <Card.Img
            src={Harsh}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Hala Touma
          </Card.Subtitle>
          <Card.Text
            style={{
              color: "#1a5d57",
              fontSize: 20,
              width: "50%",
              marginLeft: "25%",
            }}
          >
            Student Ambassador - Ryerson University
          </Card.Text>
        </Card>
        <Card style={{ display: "inline-block", width: "25%" }}>
          <Card.Img
            src={Harsh}
            style={{
              width: "8vw",
              borderRadius: "50%",
              height: "16vh",
              display: "inline-block",
            }}
          />
          <Card.Subtitle style={{ color: "#1a5d57" }}>
            Hodo Wardheer
          </Card.Subtitle>
          <Card.Text
            style={{
              color: "#1a5d57",
              fontSize: 20,
              width: "50%",
              marginLeft: "25%",
            }}
          >
            Student Ambassador - Ryerson University
          </Card.Text>
        </Card>

      </CardColumns>
    </div>
  );
}

export default Team;
