// SkillCategory.jsx
import React from "react";

const SkillCategory = ({ category }) => {
  return (
    <div className="skill-category">
      <h3>{category.category}</h3>
      <div className="skills-list">
        {category.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.proficiency}%</span>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
