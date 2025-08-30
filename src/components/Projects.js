// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { motion } from 'framer-motion';
// import './Project.css';

// const Projects = () => {
//   const isLaptop = window.innerWidth >= 992; // Laptop breakpoint for animation

//   const projects = [
//     {
//       title: 'Project One',
//       description: 'This is a short description of my first project.',
//       img: 'https://via.placeholder.com/150'
//     },
//     {
//       title: 'Project Two',
//       description: 'This is a short description of my second project.',
//       img: 'https://via.placeholder.com/150'
//     },
//     {
//       title: 'Project Three',
//       description: 'This is a short description of my third project.',
//       img: 'https://via.placeholder.com/150'
//     },
//     {
//       title: 'Project Four',
//       description: 'This is a short description of my fourth project.',
//       img: 'https://via.placeholder.com/150'
//     },
//     {
//       title: 'Project Five',
//       description: 'This is a short description of my fifth project.',
//       img: 'https://via.placeholder.com/150'
//     }
//   ];

//   return (
//     <section id="projects" className="py-5 bg-light">
//       <Container>
//         <h2 className="text-center mb-4">Projects</h2>
//         <Row>
//           {projects.map((project, index) => (
//             <Col key={index} md={4} className="mb-4">
//               {isLaptop ? (
//                 <motion.div
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <Card>
//                     <Card.Img variant="top" src={project.img} />
//                     <Card.Body>
//                       <Card.Title>{project.title}</Card.Title>
//                       <Card.Text>{project.description}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </motion.div>
//               ) : (
//                 <Card>
//                   <Card.Img variant="top" src={project.img} />
//                   <Card.Body>
//                     <Card.Title>{project.title}</Card.Title>
//                     <Card.Text>{project.description}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               )}
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Projects;

import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Project.css";

const projectData = [
  {
    title: "Project One",
    description: "This is a short description of my first project.",
    img: "https://via.placeholder.com/400x250"
  },
  {
    title: "Project Two",
    description: "This is a short description of my second project.",
    img: "https://via.placeholder.com/400x250"
  },
  {
    title: "Project Three",
    description: "This is a short description of my third project.",
    img: "https://via.placeholder.com/400x250"
  },
  {
    title: "Project Four",
    description: "This is a short description of my fourth project.",
    img: "https://via.placeholder.com/400x250"
  },
  {
    title: "Project Five",
    description: "This is a short description of my fifth project.",
    img: "https://via.placeholder.com/400x250"
  }
];

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        if (window.innerWidth > 768) {
          // Desktop only
          if (cardTop < triggerBottom) {
            setTimeout(() => {
              card.classList.add("show");
            }, index * 200);
          }
        } else {
          // Mobile: show instantly
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
    <section id="projects">
      <Container>
        <h2>My Projects</h2>
        <Row className="g-4">
          {projectData.map((project, index) => (
            <Col md={4} key={index}>
              <Card className="project-card">
                <Card.Img variant="top" src={project.img} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button href="#">View More</Button>
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
