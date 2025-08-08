import React from 'react';
import './About.css';


const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="text">
          <p1>
           <strong>I have strong interest in web development, problem-solving, and building efficient user-centered digital solutions. I love exploring technologies like React, Node.js, and MongoDB.
            With understanding of responsive design and API integration, I build user-friendly and scalable web applications.
I'm also experienced in version control (Git), deployment, and optimizing performance for a smooth user experience.I have hands-on experience in building dynamic, responsive websites that work seamlessly across all devices.
Proficient in using React for component-based UI development and integrating RESTful APIs for real-time data handling.
Skilled in debugging, optimizing performance, and ensuring cross-browser compatibility.</strong>
          </p1>
          <div className="timeline">
            <h3>Education</h3>
            <ul>
              <li><strong>2024 - 2028:</strong> B.Tech in CSE, Odisha University of Technology & Research, Bhubaneswar</li>
             
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
