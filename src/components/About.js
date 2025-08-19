import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hello! I'm a full-stack developer who loves bringing ideas to life
          through clean, efficient code. Based in India, I build scalable web
          apps using <span>React</span>, <span>Node.js</span>, and{" "}
          <span>MongoDB</span>.
        </p>
        <p className="about-text">
          When I’m not coding, I’m usually exploring new technologies, hiking,
          or sketching digital art.
        </p>
      </div>
    </section>
  );
};

export default About;
