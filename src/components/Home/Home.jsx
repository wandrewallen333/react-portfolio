import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="name">
          Hi, I'm <span className="highlight">Your Name</span>
        </h1>
        <h2 className="title">Frontend Developer</h2>
        <p className="intro">
          I build responsive, user-friendly web applications with modern
          JavaScript frameworks. Passionate about creating clean, efficient code
          and engaging user experiences.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>
          <a href="#contact" className="btn secondary-btn">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="home-image">
        {/* You can add a professional photo or an illustration here */}
        <img src="/images/profile-image.png" alt="Your Name" />
      </div>
      <div className="social-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <span>Scroll Down</span>
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
