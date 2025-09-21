import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Title */}
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Hello! I'm a <span>Full-Stack Developer</span> with a strong focus on{" "}
          <span>Java, Spring Boot, Hibernate, and SQL</span>. Based in{" "}
          <span>India</span>, I specialize in building scalable enterprise
          applications and crafting efficient backend solutions that power
          modern digital experiences.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I’m passionate about software engineering, problem-solving, and
          creating applications that are both performant and user-friendly. When
          I’m not coding, I enjoy exploring new technologies and continuously
          improving my skills.
        </motion.p>

        {/* Call to Action */}
        <motion.button
          className="about-btn"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #00c6ff" }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.open("https://github.com/bhargav-vyas", "_blank")
          }
        >
          View My Work
        </motion.button>
      </motion.div>

      {/* Unique Animated Gradient Waves */}
      <motion.div
        className="wave-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
      </motion.div>
    </section>
  );
};

export default About;
