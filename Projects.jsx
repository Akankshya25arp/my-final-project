import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>AI-Based Web Chatbot</h3>
          <p>Built an AI chatbot using HTML, CSS, JavaScript, and Dialogflow to simulate human-like conversation for customer support.</p>
        </div>
        <div className="project">
          <h3>Voice-Based Email for Visually Impaired</h3>
          <p>A Python application using speech recognition and text-to-speech for voice-controlled email access.</p>
        </div>
        <div className="project">
          <h3>News Web App</h3>
          <p>Used NewsAPI and React to fetch and display live news articles by category using Axios and Bootstrap.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
