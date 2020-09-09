import React from "react";
import "../App.css";
import logo from "../Images/Findr_logo2x.png";
import NavBar from "./Nav-Bar-About";
import Particles from "react-particles-js";
import { Jumbotron as Jumbo, Container, Row, Col } from "react-bootstrap";

export const AboutHome = () => (
  <Jumbo fluid className="jumbo">
    <Container fluid className="Home">
      <Row>
        <Col xs={12} md={3}>
          <img src={logo} style={{ width: "100%" }} />
        </Col>
        <Col xs={12} md={9}>
          <p
            className="home-screen-msg"
            style={{ fontSize: "150%", fontFamily: "sans-serif" }}
          >
            about us
          </p>
          <p className="home-screen-msg1" style={{ fontSize: "100%" }}>
            check out who we are!
          </p>
        </Col>
      </Row>
    </Container>
    <Particles
      params={{
        particles: {
          line_linked: {
            color: "#1a5d57",
            number: {
              value: 15,
            },
            size: {
              value: 1,
            },
          },
          color: {
            value: "#1a5d57",
          },
        },
      }}
      style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
    />
  </Jumbo>
);

// function HomeAboutUs() {
//   return (
//     <div
//       className="Home"
//       id="Home"
//       style={{
//         position: "relative",
//       }}
//     >
//       <Particles
//         params={{
//           particles: {
//             line_linked: {
//               color: "#1a5d57",
//               number: {
//                 value: 15,
//               },
//               size: {
//                 value: 1,
//               },
//             },
//             color: {
//               value: "#1a5d57",
//             },
//           },
//         }}
//         style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}
//       />
//       <div style={{ position: "absolute", marginTop: "8%", width: "100%" }}>
//         <div
//           style={{
//             display: "inline-block",
//             width: "30%",
//             marginLeft: "15%",
//             marginTop: "8%",
//             verticalAlign: "top",
//             float: "left",
//           }}
//         >
//           {/* <div
//             style={{
//               display: "inline-block",
//               width: "50%",
//               alignContent: "center",
//             }}
//           > */}
//           <img src={logo} className="logo" />
//           <figcaption className="caption">Keep Swiping</figcaption>
//         </div>
//         <div>
//           <div
//             style={{
//               display: "inline-block",
//               width: "40%",
//               verticalAlign: "top",
//               marginTop: "10%",
//               marginRight: "5%",
//             }}
//           >
// <p
//   className="home-screen-msg"
//   style={{ fontSize: "150%", fontFamily: "sans-serif" }}
// >
//   about us
// </p>
// <p className="home-screen-msg1" style={{ fontSize: "100%" }}>
//   check out who we are!
// </p>
//             <br></br>
//             <br></br>
//           </div>
//         </div>
//         {/* <div className="linkSecond">
//           <ul>
//             <div style={{ display: "inline-block", width: "80%" }}>
//               <li class="nav-link">
//                 <a href="#WhyFindr">why us?</a>
//                 <div class="underline"></div>
//               </li>
//               <li class="nav-link">
//                 <a href="#Findr">Findr</a>
//                 <div class="underline"></div>
//               </li>
//               <li class="nav-link" style={{ marginRight: "2%" }}>
//                 <a href="#Team">the team</a>
//                 <div class="underline"></div>
//               </li>
//             </div>
//           </ul>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default HomeAboutUs;
