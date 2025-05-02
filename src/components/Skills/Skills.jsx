// Skills.jsx
import React from "react";
import SkillCategory from "./SkillCategory";
import "./Skills.scss";

const Skills = () => {
  // Skills data organized by categories
  const skillsData = [
    {
      id: 1,
      category: "Frontend Development",
      skills: [
        { name: "HTML5", proficiency: 95 },
        { name: "CSS3/SASS", proficiency: 90 },
        { name: "JavaScript", proficiency: 85 },
        { name: "React", proficiency: 90 },
        { name: "Redux", proficiency: 80 },
        { name: "TypeScript", proficiency: 75 },
        { name: "Responsive Design", proficiency: 95 },
      ],
    },
    {
      id: 2,
      category: "Backend Development",
      skills: [
        { name: "Node.js", proficiency: 80 },
        { name: "Express", proficiency: 85 },
        { name: "MongoDB", proficiency: 75 },
        { name: "PostgreSQL", proficiency: 70 },
        { name: "RESTful APIs", proficiency: 85 },
        { name: "GraphQL", proficiency: 65 },
      ],
    },
    {
      id: 3,
      category: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", proficiency: 90 },
        { name: "Webpack", proficiency: 75 },
        { name: "Docker", proficiency: 60 },
        { name: "AWS", proficiency: 65 },
        { name: "Jest", proficiency: 80 },
        { name: "CI/CD", proficiency: 70 },
      ],
    },
    {
      id: 4,
      category: "Design & Others",
      skills: [
        { name: "Figma", proficiency: 80 },
        { name: "UI/UX Principles", proficiency: 85 },
        { name: "Agile Methodology", proficiency: 90 },
        { name: "Photoshop", proficiency: 70 },
        { name: "SEO Basics", proficiency: 75 },
      ],
    },
  ];

  return (
    <div className="skills-container">
      <div className="section-header">
        <h2>My Skills</h2>
        <div className="underline"></div>
        <p className="section-description">
          Here are the technologies and tools I work with. I'm constantly
          learning and expanding my skillset.
        </p>
      </div>

      <div className="skills-content">
        <div className="skills-grid">
          {skillsData.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>

        <div className="skills-additional">
          <h3>My Learning Philosophy</h3>
          <p>
            The tech world evolves rapidly, and I believe in continuous
            learning. I regularly take online courses, contribute to open-source
            projects, and experiment with new technologies to stay at the
            cutting edge.
          </p>
          <div className="currently-learning">
            <h4>Currently Learning</h4>
            <div className="learning-tags">
              <span className="learning-tag">Next.js</span>
              <span className="learning-tag">Three.js</span>
              <span className="learning-tag">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
