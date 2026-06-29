import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myPhoto from "../../Assets/myphoto.png" 
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ once: false, amount: 0.2 }} 
    >
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="textColor"> INTRODUCE </span> MYSELF
            </h1>
<p className="home-about-body">
  I am a passionate Software Engineer with
  <i>
    <b className="textColor"> 3 years of experience </b>
  </i>
  developing and maintaining enterprise web applications.
  <br />
  <br />
  I specialize in
  <i>
    <b className="textColor">
      {" "}
      Angular, TypeScript, JavaScript, HTML, CSS
    </b>
  </i>{"  "}
   and building scalable, responsive, and user-friendly interfaces.
  <br />
  <br />
  My interests include creating modern
  <i>
    <b className="textColor"> Web Technologies and Digital Products </b>
  </i>
  while continuously exploring new tools and best practices in
  <i>
    <b className="textColor"> Web Development</b>
  </i>.
  <br />
  <br />
  I also enjoy working with
  <b className="textColor"> Node.js</b>, integrating
  <i>
    <b className="textColor"> REST APIs</b>
  </i>
  , and expanding my knowledge in emerging technologies and full-stack development.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myPhoto} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="textColor">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=" "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </motion.div>
  );
}
export default Home2;
