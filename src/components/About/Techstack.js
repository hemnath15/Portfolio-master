import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import { DiAngularSimple, DiJavascript1, DiNodejs, DiReact, DiMongodb } from "react-icons/di";
import { TbBrandGolang } from "react-icons/tb";

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
    { id: 1, icon: <DiAngularSimple /> },
    { id: 2, icon: <DiJavascript1 /> },
    { id: 3, icon: <TbBrandGolang /> },
    { id: 4, icon: <DiNodejs /> },
    { id: 5, icon: <DiReact /> },
    { id: 6, icon: <DiMongodb /> }
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
            style={{ display: "inline-block" }} // Ensures motion div does not break the row
          >
            {tech.icon}
          </motion.div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
