import React, { useEffect, useState } from "react";
import "./Home.css";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText =
    "Full-Stack Developer | Java & Spring Boot | Backend Engineering Specialist";

  useEffect(() => {
    let index = 0;
    let typing = true;

    const interval = setInterval(() => {
      if (typing) {
        setText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          typing = false;
          setTimeout(() => {
            typing = false;
          }, 1500);
        }
      } else {
        setText(fullText.slice(0, index));
        index--;
        if (index < 0) {
          typing = true;
          index = 0;
        }
      }
    }, typing ? 150 : 100);

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
        <p>
          Passionate about building scalable enterprise applications with Java,
          Spring Boot, Hibernate, and modern web technologies. Dedicated to
          delivering high-performance backend solutions that power innovative
          digital experiences 🚀
        </p>
        <button
          className="glow-button"
          onClick={() => window.open("https://github.com/bhargav-vyas", "_blank")}
        >
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
