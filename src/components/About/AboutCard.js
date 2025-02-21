import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hemnath </span>
            from <span className="purple"> Panruti,India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed BE in CSE at SREC.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "When the world is against you, just believe in yourself."{" "}
          </p>
          <footer className="blockquote-footer">Hemnath</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
