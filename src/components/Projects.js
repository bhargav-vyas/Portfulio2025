import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Project.css";

const projectData = [
  {
    title: "Project One",
    desc: "This is a short description of my first project.",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Project Two",
    desc: "This is a short description of my second project.",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "Project Three",
    desc: "This is a short description of my third project.",
    img: "https://via.placeholder.com/150",
  },
];

const Projects = () => {
  // check screen size
  const isMobile = window.innerWidth < 768;

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projectData.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              {isMobile ? (
                // Normal card (no animation in mobile)
                <Card>
                  <Card.Img variant="top" src={project.img} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.desc}</Card.Text>
                  </Card.Body>
                </Card>
              ) : (
                // Animated card (only in laptop/desktop)
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <Card>
                    <Card.Img variant="top" src={project.img} />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
