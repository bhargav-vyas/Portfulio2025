import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Project.css';
const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Project One</Card.Title>
                <Card.Text>
                  This is a short description of my first project.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Project Two</Card.Title>
                <Card.Text>
                  This is a short description of my second project.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Project Three</Card.Title>
                <Card.Text>
                  This is a short description of my third project.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
