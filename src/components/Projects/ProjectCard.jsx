// ProjectCard.jsx
import React from "react";

const ProjectCard = ({ project }) => {
  const { title, description, technologies, image, githubLink, liveLink } =
    project;

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-links">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <i className="fab fa-github"></i> Code
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="technology-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
