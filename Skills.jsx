import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="technical">
          <h3>Technical Skills</h3>
          <ul>
            <li>HTML, CSS & JavaScript - 95%</li>
            <li>React - 85%</li>
            <li>Node.js - 80%</li>
            <li>Express.js - 72%</li>
          </ul>
        </div>
        <div className="soft">
          <h3>Soft Skills</h3>
          <ul>
            <li>Creativity - 65%</li>
            <li>Communication - 65%</li>
            <li>Teamwork - 90%</li>
            <li>Problem Solving - 70%</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
