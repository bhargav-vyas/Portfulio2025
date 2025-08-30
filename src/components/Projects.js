import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Project.css';

const Projects = () => {
  const projectData = [
    {
      title: "Project One",
      desc: "This is a short description of my first project.",
      img: "https://via.placeholder.com/400x300",
    },
    {
      title: "Project Two",
      desc: "This is a short description of my second project.",
      img: "https://via.placeholder.com/400x350",
    },
    {
      title: "Project Three",
      desc: "This is a short description of my third project.",
      img: "https://via.placeholder.com/400x250",
    },
    {
      title: "Project Four",
      desc: "Another project with details here.",
      img: "https://via.placeholder.com/400x320",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        <Row className="g-4">
          {projectData.map((proj, index) => (
         <Col key={index} xs={12} sm={12} md={6} lg={4}>
              <div className="project-card">
                <img src={proj.img} alt={proj.title} className="project-img" />
                <div className="project-overlay">
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <button className="btn">View More</button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
