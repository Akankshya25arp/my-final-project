import React from 'react';
import './About.css';
import profilePic from '/me.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={profilePic} alt="Rosalin" />
        <div className="text">
          <p>
            I'm a Computer Science and Engineering student with a strong interest in web development, problem-solving, and building efficient user-centered digital solutions. I love exploring technologies like React, Node.js, and MongoDB.
          </p>
          <div className="timeline">
            <h3>Education</h3>
            <ul>
              <li><strong>2021 - 2025:</strong> B.Tech in CSE, Odisha University of Technology & Research, Bhubaneswar</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

