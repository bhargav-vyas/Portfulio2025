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
          Hello! I'm a <span>Full-Stack Developer</span> who loves bringing
          ideas to life through clean, efficient code. Based in{" "}
          <span>India</span>, I build scalable web apps using{" "}
          <span>React</span>, <span>Node.js</span>, and <span>MongoDB</span>.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          When I’m not coding, I’m usually exploring new technologies, hiking,
          or sketching digital art.
        </motion.p>

        {/* Call to Action */}
        <motion.button
          className="about-btn"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #00c6ff" }}
          whileTap={{ scale: 0.95 }}
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
