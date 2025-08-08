
// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {/* Left: Technical Skills */}
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <div className="skill">
            <span>HTML, CSS & JavaScript</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="skill">
            <span>React</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <span>NodeJS</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="skill">
            <span>ExpressJS</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: '72%' }}></div>
            </div>
          </div>
        </div>

        {/* Right: Soft Skills */}
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="circular-skill">
            <div className="circle" style={{ '--percentage': 65 }}>
              <span>65%</span>
              <p>Leadership</p>
            </div>
            <div className="circle" style={{ '--percentage': 65 }}>
              <span>65%</span>
              <p>Creativity</p>
            </div>
            <div className="circle" style={{ '--percentage': 90 }}>
              <span>90%</span>
              <p>Patience</p>
            </div>
            <div className="circle" style={{ '--percentage': 70 }}>
              <span>70%</span>
              <p>Team Work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

