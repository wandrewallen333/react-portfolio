// Footer.js
import React from "react";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Your Name</h3>
          <p>
            Front-end developer focused on creating clean, user-friendly
            experiences.
          </p>
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
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-envelope"></i> youremail@example.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +1 (123) 456-7890
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> City, State, Country
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        <p className="credits">
          Designed & Built with <span className="heart">❤</span> using React
        </p>
      </div>

      <div className="back-to-top">
        <a href="#home" aria-label="Back to top">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
