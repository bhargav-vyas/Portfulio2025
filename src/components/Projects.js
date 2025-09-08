import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Project.css";

const projectData = [
  {
    title: "Library Management System",
    description:
      "The Library Management System – Microservices is an ongoing project built with Spring Boot, using Eureka Server and Feign Client. It includes modules for book catalog, users, and inventory, ensuring scalability and modularity. Available on GitHub.",
    img: "https://via.placeholder.com/400x250?text=Library+Management+System",
    link: "https://github.com/bhargav-vyas/Library-Management-System-new",
  },
  {
    title: "Project Two",
    description: "This is a short description of my second project.",
    img: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "Project Three",
    description: "This is a short description of my third project.",
    img: "https://via.placeholder.com/400x250",
    link: "#",
  },
  {
    title: "Project Four",
    description: "This is a short description of my fourth project.",
    img: "https://via.placeholder.com/400x250",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="text-center mb-5">🚀 My Projects</h2>
        <Row>
          {projectData.map((project, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="project-card shadow-lg">
                <div className="project-img-wrapper">
                  <Card.Img variant="top" src={project.img} />
                  <div className="overlay">
                    <Button href={project.link} target="_blank" className="view-btn">
                      View More
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
