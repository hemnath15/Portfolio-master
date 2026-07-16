import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import courier from "../../Assets/Courier.png"
import klassguru from "../../Assets/klassguru.png"
import MMS from "../../Assets/MMS.png"
import PPAP from "../../Assets/PPAP.png"
import fintrackai from "../../Assets/fintrackai.jfif"
import todoM from "../../Assets/todo.png"
import utube from "../../Assets/utubeclone.png"
import wedding from "../../Assets/weddingCraft.png"
import AiTask from "../../Assets/AItaskmang.png"
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
        <Row style={{ justifyContent: "center" }}>
          <Col lg={4} md={6} sm={12} className="project-card">
       <ProjectCard
  imgPath = {courier}
  isBlog={false}
  title="The Professional Couriers – Enterprise Courier Management System"
  description="Developed and maintained enterprise-level courier management modules using Angular and TypeScript. Built dynamic, schema-driven forms with JSON Formly to simplify data entry and business workflows. Created responsive, reusable UI components using Angular Material and integrated AG Grid with advanced filtering, sorting, and pagination for efficient data management. Implemented offline-first functionality using IndexedDB to ensure uninterrupted operation during network outages. Collaborated with cross-functional teams in an Agile/Scrum environment to deliver scalable and maintainable solutions."
  ghLink=""
  demoLink=""
/>
          </Col>
          <Col md={4} className="project-card">
           <ProjectCard
  imgPath= {fintrackai}
  isBlog={false}
  title="FinTrack AI – Enterprise Financial Operations Dashboard"
  description="FinTrack AI is a full-stack enterprise financial management application that enables organizations to monitor income, expenses, and financial performance through an interactive dashboard. It features secure authentication, transaction management, real-time KPI analytics, AI-driven financial insights, and dynamic data visualization using charts. The application follows a scalable architecture with REST APIs and a Postgresql database, making it suitable for enterprise financial operations and reporting."
  ghLink=""
  demoLink=""
/>
          </Col>
   <Col md={4} className="project-card">
           <ProjectCard
  imgPath={klassguru}
  isBlog={false}
  title="Klassguru – Music School Management System"
  description="Developed and maintained modules for a music school management platform using Angular and TypeScript. Built dynamic, schema-driven scheduling forms with JSON Formly and created responsive, reusable UI components using Angular Material. Implemented schedule conflict validation to ensure accurate timetable management and improve the overall user experience. Followed modular architecture and Agile/Scrum practices to deliver scalable and maintainable solutions."
  ghLink=""
  demoLink=""
/>
          </Col>
   <Col md={4} className="project-card">
<ProjectCard
  imgPath={PPAP}
  isBlog={false}
  title="Production Parts Approval Process (PPAP)"
  description="Developed and maintained enterprise modules for a Production Parts Approval Process (PPAP) system using Angular and TypeScript. Built dynamic, schema-driven forms with JSON Formly to manage supplier quality documentation and approval workflows. Created responsive, reusable UI components using Angular Material and implemented document tracking features to improve visibility and streamline approval processes. Collaborated with cross-functional teams in an Agile/Scrum environment to deliver scalable and maintainable solutions."
  ghLink=""
  demoLink=""
/>
          </Col>
          <Col  md={4} className="project-card">
          <ProjectCard
  imgPath={todoM}
  isBlog={false}
  title="To-Do Manager"
  description="Developed a cloud-based task management application using Angular and Firebase. Implemented secure user authentication with Firebase Authentication and built real-time CRUD functionality using Firestore. Added task categorization, filtering, and live synchronization across devices. Configured Firebase Cloud Functions to send automated email reminders for pending tasks and designed a responsive, mobile-friendly user interface."
  ghLink=""
  demoLink=""
/>
          </Col>
          <Col md={4} className="project-card">
           <ProjectCard
  imgPath= {MMS}
  isBlog={false}
  title="Mandate Management System"
  description="Developed and maintained enterprise banking modules using Angular and TypeScript for mandate registration and validation workflows. Built responsive, reusable user interfaces with Angular Material and implemented dynamic forms using JSON Formly. Integrated secure APIs for Aadhaar, UPI, and bank account verification through NPCI/NSDL services, ensuring accurate validation and seamless user experience. Collaborated in an Agile/Scrum team to deliver scalable and maintainable solutions."
  ghLink=""
  demoLink=""
/>
          </Col>
                    <Col  md={4} className="project-card">
<ProjectCard
  imgPath={AiTask}
  isBlog={false}
  title="AI Task Manager"
  description="Developed a full-stack task management application using React, TypeScript, Node.js, Express.js, and MongoDB. Implemented secure JWT-based authentication with protected routes and built complete CRUD functionality for task management, filtering, priority handling, status tracking, and dashboard analytics. Integrated AI-powered insights to help users prioritize tasks and improve productivity. Designed a responsive, component-based user interface with Redux Toolkit for efficient state management."
  ghLink=""
  demoLink=""
/>
          </Col>
                    <Col  md={4} className="project-card">
<ProjectCard
  imgPath={utube}
  isBlog={false}
  title="YouTube Clone"
  description="Developed a YouTube-inspired video streaming application using Angular and TypeScript. Implemented video search, category-based filtering, and responsive layouts to provide an intuitive browsing experience. Built reusable, modular components following Angular best practices and optimized application performance for smooth navigation across desktop and mobile devices."
  ghLink=""
  demoLink=""
/>
          </Col>
          <Col  md={4} className="project-card">
<ProjectCard
  imgPath={wedding}
  isBlog={false}
  title="Wedding Craft – Canva-inspired Wedding Invitation Designer (Ongoing)"
  description="Developing a Canva-inspired wedding invitation designer using Angular 20 and TypeScript. Building an interactive drag-and-drop editor with canvas-based design capabilities, including text customization, image uploads, resizing, rotation, and layer management. Designing reusable, responsive components with a modular Angular architecture to support template customization, scalability, and a seamless experience across desktop and mobile devices."
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
