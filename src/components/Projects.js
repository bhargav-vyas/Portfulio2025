import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Project.css";

const projectData = [
  {
    title: "Library Management System",
    description:
      "The Library Management System – Microservices is built with Spring Boot using Eureka Server and Feign Client. It has separate modules for book catalog, users, and inventory to ensure modularity and scalability.",
    link: "https://github.com/bhargav-vyas/Library-Management-System-new",
  },
  {
    title: "E-Learning Platform",
    description:
      "An E-Learning platform built with Spring Boot and Angular, providing user authentication, course management, and interactive quizzes for better engagement.",
    link: "https://github.com/bhargav-vyas/E-Learning-Hub.git",
  },
  {
    title: "Bloging-application",
    description:
      "A core banking system project demonstrating method overloading and overriding in Java. It handles savings and current accounts with transaction operations.",
    link: "https://github.com/bhargav-vyas/Bloging-application.git",
  },
  {
    title: "Referr-Easy-FrontEnd",
    description:
      "A fun React.js project implementing Tic Tac Toe with an interactive grid, winner detection, and image display for results.",
    link: "https://github.com/bhargav-vyas/referr-easy-front.git",
  },
  {
    title: "Sky-Scheduler",
    description:
      "A React.js app with a simple file upload interface, allowing users to select and upload files with a clean and intuitive UI.",
    link: "https://github.com/bhargav-vyas/Sky-Scheduler.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="text-center mb-5">🚀 My Projects</h2>
        <Row>
          {projectData.map((project, index) => (
            <Col md={12} key={index} className="mb-5">
              <Card className="project-card shadow-lg">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>

                  {/* Pipeline Flow */}
                  <div className="pipeline-container">
                    <div className="pipeline-step">
                      <span className="circle">API</span>
                      <p>API Call</p>
                    </div>
                    <div className="pipeline-line">
                      <span className="flow-dot"></span>
                    </div>
                    <div className="pipeline-step">
                      <span className="circle">1</span>
                      <p>Controller</p>
                    </div>
                    <div className="pipeline-line">
                      <span className="flow-dot"></span>
                    </div>
                    <div className="pipeline-step">
                      <span className="circle">2</span>
                      <p>Service</p>
                    </div>
                    <div className="pipeline-line">
                      <span className="flow-dot"></span>
                    </div>
                    <div className="pipeline-step">
                      <span className="circle">3</span>
                      <p>DAO</p>
                    </div>
                    <div className="pipeline-line">
                      <span className="flow-dot"></span>
                    </div>
                    <div className="pipeline-step">
                      <span className="circle">4</span>
                      <p>Database</p>
                    </div>
                    <div className="pipeline-line">
                      <span className="flow-dot"></span>
                    </div>
                    <div className="pipeline-step">
                      <span className="circle">✔</span>
                      <p>Postman Response</p>
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <Button
                    href={project.link}
                    target="_blank"
                    className="view-btn"
                  >
                    🔗 View on GitHub
                  </Button>
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
