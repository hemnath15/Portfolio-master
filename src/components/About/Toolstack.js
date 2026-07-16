import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiGithub,
  SiVercel,
  SiFirebase,
  SiMongodb,
  SiJupyter,
  SiRender,
  SiBitbucket,
  SiCloudflare,
  SiFilezilla,
} from "react-icons/si";
import { DiFirebase} from "react-icons/di";
import { motion } from "framer-motion";
const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" }
  })
};
function Toolstack() {
    const toolIcons  = [
 { id: 1, icon: <SiVisualstudiocode color="#007ACC" />, name: "VS Code" },
  { id: 2, icon: <SiPostman color="#FF6C37" />, name: "Postman" },
  { id: 3, icon: <SiGit color="#F05032" />, name: "Git" },
  { id: 4, icon: <SiGithub color="#FFFFFF" />, name: "GitHub" },
  { id: 5, icon: <SiVercel color="#FFFFFF" />, name: "Vercel" },
  { id: 6, icon: <SiJupyter color="#F37626" />, name: "Jupyter" },
  { id: 7, icon: <SiRender color="#46E3B7" />, name: "Render" },
  { id: 8, icon: <SiBitbucket color="#0052CC" />, name: "Bitbucket" },
  { id: 9, icon: <SiCloudflare color="#F38020" />, name: "Cloudflare" },
  { id: 10, icon: <SiFilezilla color="#BF0000" />, name: "FileZilla" },
  { id: 11, icon: <DiFirebase color="#FFCA28" />, name: "Firebase" },
    ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", display: "flex", flexWrap: "wrap" }}>
      {toolIcons .map((tech, index) => (
        <Col key={tech.id} xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
          <motion.div
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={iconVariants}
            viewport={{ once: false, amount: 0.2 }}
            style={{ display: "inline-block" }} 
          >
          <div className="skill-icon">
    {tech.icon}
  </div>

  <h5 className="skill-name">
    {tech.name}
  </h5>

          </motion.div>
        </Col>
      ))}
    </Row>

    // <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <SiVisualstudiocode />
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <SiPostman />
    //   </Col>
    // </Row>
  );
}

export default Toolstack;
