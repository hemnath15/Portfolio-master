import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
<p style={{ textAlign: "justify" }}>
  Hi, I'm from
  <span className="textColor"> Panruti, Tamil Nadu, India.</span>
  <br />
  <br />
  My journey into software Engineer began with a curiosity about how ideas
  become real-world applications. Since then, I've enjoyed solving problems,
  learning new technologies, and building projects that improve my skills with
  every challenge.
  <br />
  <br />
  I believe in writing clean, maintainable code and creating applications that
  are not only functional but also provide a great user experience. Every
  project teaches me something new, and I enjoy the process of continuously
  growing as a developer.
  <br />
  <br />
  Outside of coding, I like exploring new technologies, Alongside my professional experience, I'm currently pursuing a
<span className="textColor">
{" "}Post Graduate Certificate Programme in Applied Data Science & AI from <span style={{
    textDecoration: "underline",
    textDecorationColor: "#00ccff",
    textDecorationThickness: "2px",
    textUnderlineOffset: "4px",
  }}>IIT Roorkee</span>
</span>,
where I'm expanding my knowledge in Python, Machine Learning, and Artificial Intelligence.
  <br />
  <br />
  My goal is to keep learning, take on challenging opportunities, and build
  software that makes a meaningful impact.
   <br />
  <br />
  And My Hobbies are :
</p>
          <ul>
            <li className="about-activity">
             <ImPointRight /> Building Personal Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
             <ImPointRight /> UI/UX Design Inspiration
            </li>
          </ul>

          <p className="textColor">
            "When the world is against you, just believe in yourself."{" "}
          </p>
          <footer className="blockquote-footer">Hemnath</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
