import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-left">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I’m Bhargav Vyas, a passionate developer focused on creating clean,
          modern, and impactful software solutions.
        </p>
        <button className="explore-btn">Explore Projects</button>
      </div>

      <div className="home-right">
        <div className="cube">
          <div className="face front">Home</div>
          <div className="face back">Projects</div>
          <div className="face left">About</div>
          <div className="face right">Skills</div>
          <div className="face top">Contact</div>
          <div className="face bottom">Thanks</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
