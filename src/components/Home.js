import React, { useEffect, useState } from "react";
import "./Home.css";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer | Backend & Software Engineering";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Floating Geometric Shapes */}
      <div className="shape circle"></div>
      <div className="shape square"></div>
      <div className="shape triangle"></div>

      <div className="hero-content">
        <h1>
          Hi, I'm <span>Bhargav Vyas</span>
        </h1>
        <h2 className="typing">{text}</h2>
        <p>Exploring innovation in technology and coding every day 🚀</p>
        <button className="glow-button">Explore My Work</button>
      </div>
    </section>
  );
};

export default HeroSection;
