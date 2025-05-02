// About.js
import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src="/images/about-image.jpg" alt="Professional headshot" />
        </div>

        <div className="about-text">
          <h3>Who I Am</h3>
          <p>
            I'm a passionate frontend developer based in [Your Location]. With
            [X years] of experience in web development, I specialize in creating
            responsive and intuitive user interfaces that provide exceptional
            user experiences.
          </p>

          <h3>My Journey</h3>
          <p>
            My journey in web development began at [University/College] where I
            studied [Your Degree]. Since then, I've worked with [mention
            significant companies or projects] where I've honed my skills in
            various modern technologies and frameworks.
          </p>

          <h3>What I Do</h3>
          <p>
            I transform design concepts into fully functional web applications.
            My approach combines technical expertise with an eye for design to
            create solutions that are both visually appealing and functionally
            robust.
          </p>

          <div className="skills-container">
            <h3>My Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul className="skills-list">
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React.js</li>
                  <li>Redux</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

              <div className="skill-category">
                <h4>Tools & Others</h4>
                <ul className="skills-list">
                  <li>Git & GitHub</li>
                  <li>Webpack</li>
                  <li>NPM</li>
                  <li>Figma</li>
                  <li>VS Code</li>
                </ul>
              </div>

              <div className="skill-category">
                <h4>Soft Skills</h4>
                <ul className="skills-list">
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                  <li>Communication</li>
                  <li>Time Management</li>
                  <li>Adaptability</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="education-experience">
            <div className="education">
              <h3>Education</h3>
              <div className="timeline-item">
                <h4>Bachelor of Science in Computer Science</h4>
                <p>University Name | 2018 - 2022</p>
              </div>
              <div className="timeline-item">
                <h4>Web Development Bootcamp</h4>
                <p>Bootcamp Name | 2022</p>
              </div>
            </div>

            <div className="experience">
              <h3>Experience</h3>
              <div className="timeline-item">
                <h4>Frontend Developer</h4>
                <p>Company Name | 2022 - Present</p>
                <ul>
                  <li>Developed responsive web applications using React</li>
                  <li>
                    Collaborated with designers to implement UI/UX improvements
                  </li>
                  <li>Optimized application performance</li>
                </ul>
              </div>
              <div className="timeline-item">
                <h4>Web Development Intern</h4>
                <p>Company Name | Summer 2021</p>
                <ul>
                  <li>Assisted in developing frontend features</li>
                  <li>Gained experience with agile development processes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cta-container">
            <a
              href="/resume.pdf"
              className="btn resume-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

