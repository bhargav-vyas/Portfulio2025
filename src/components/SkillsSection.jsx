import React, { useEffect, useState } from "react";
import "./SkillsSection.css";

const skills = [
  { name: "Java", level: "Advanced" },
  { name: "Spring Boot", level: "Advanced" },
  { name: "React.js", level: "Intermediate" },
  { name: "Angular", level: "Intermediate" },
  { name: "SQL / Databases", level: "Intermediate" },
  { name: "HTML, CSS, JavaScript", level: "Advanced" },
  { name: "Git & GitHub", level: "Advanced" },
  { name: "Docker & Kubernetes", level: "Basic" },
];

const SkillsSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 300);
  }, []);

  return (
    <section className="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${animate ? "fade-in" : ""}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
            <div className="progress-bar">
              <div
                className={`progress ${animate ? "fill" : ""}`}
                style={{
                  "--target-width":
                    skill.level === "Advanced"
                      ? "90%"
                      : skill.level === "Intermediate"
                      ? "70%"
                      : "50%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
