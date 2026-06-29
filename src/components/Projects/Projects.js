import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="textColor">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=''
              isBlog={false}
              title="The Professional Couriers – Courier Management Form Module"
              description="Data and Document Management in Courier business, real time data entry
• Developed a dynamic courier form UI (Add/Edit/Delete) using Formly.                                                                                      
• Integrated AG Grid with advanced filtering, sorting and pagination.                                                                                                      
• Followed modular Angular best practices for scalability."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=''
              isBlog={false}
              title="Mandate Management System"
              description=" Built a banking module to validate Aadhaar, UPI, and account details via secure NPCI/NSDL      
integration.s"
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=''
              isBlog={false}
              title="Klassguru – Music School Management System "
              description="• Built dynamic scheduling forms with centralized schema control.                                                                                    
• Designed a responsive UI for staff and students.                                                                                                                             
• Added schedule conflict validation with reusable components."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=''
              isBlog={false}
              title="Production Parts Approval Process"
              description=" Developed a document tracking system for supplier quality approvals."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
