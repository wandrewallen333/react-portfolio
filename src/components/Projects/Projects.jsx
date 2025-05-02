// Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.scss";

const Projects = () => {
  // Sample project data - you would replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A full-featured online store with shopping cart, user authentication, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/images/projects/ecommerce.jpg",
      githubLink: "https://github.com/yourusername/ecommerce-project",
      liveLink: "https://ecommerce-project.example.com",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "Real-time weather application showing forecasts, radar maps, and historical data.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS Grid"],
      image: "/images/projects/weather.jpg",
      githubLink: "https://github.com/yourusername/weather-dashboard",
      liveLink: "https://weather-dashboard.example.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Kanban-style productivity tool with drag-and-drop interface and team collaboration features.",
      technologies: ["React", "Redux", "Firebase", "React DnD"],
      image: "/images/projects/taskmanager.jpg",
      githubLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://task-manager.example.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React and modern CSS features.",
      technologies: ["React", "SASS", "Framer Motion", "Responsive Design"],
      image: "/images/projects/portfolio.jpg",
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "#",
    },
  ];

  return (
    <div className="projects-container">
      <div className="section-header">
        <h2>My Projects</h2>
        <div className="underline"></div>
        <p className="section-description">
          Here are some of my recent projects. Each one was built to solve a
          specific problem or explore new technologies.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
