import React, { useEffect } from "react";
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
  {
    title: "Project Five",
    description: "This is a short description of my fifth project.",
    img: "https://via.placeholder.com/400x250",
    link: "#",
  },
];

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (window.innerWidth > 768) {
          if (cardTop < triggerBottom) {
            setTimeout(() => {
              card.classList.add("show");
            }, index * 200);
          }
        } else {
          card.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("load", revealOnScroll);
    };
  }, []);

  return (
    <section
      id="projects"
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      <Container fluid>
        <h2>My Projects</h2>
        <Row className="g-4">
          {projectData.map((project, index) => (
            <Col
              md={12}
              key={index}
              className="h-screen flex items-center justify-center snap-center"
            >
              <Card className="project-card">
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button href={project.link} target="_blank">
                    View More
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
