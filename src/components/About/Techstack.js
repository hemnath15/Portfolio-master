import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import { DiAngularSimple, DiJavascript1,  DiReact, DiCss3,DiHtml5,DiMongodb ,DiFirebase,DiPython} from "react-icons/di";
import { SiTypescript } from "react-icons/si";

const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" }
  })
};

function Techstack() {
  const techIcons = [
  { id: 1, icon: <DiAngularSimple color="#DD0031" />, name: "Angular" },
  { id: 2, icon: <DiHtml5 color="#E34F26" />, name: "HTML" },
  { id: 3, icon: <DiCss3 color="#1572B6" />, name: "CSS" },
  { id: 4, icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
  { id: 5, icon: <DiReact color="#61DAFB" />, name: "React" },
  { id: 6, icon: <DiMongodb color="#47A248" />, name: "MongoDB" },
  { id: 7, icon: <DiFirebase color="#FFCA28" />, name: "Firebase" },
  { id: 8, icon: <DiPython color="#3776AB" />, name: "Python" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", display: "flex", flexWrap: "wrap" }}>
      {techIcons.map((tech, index) => (
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
  );
}

export default Techstack;
