import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Event Booking Server",
    image: "/images/backend1.jpg",
    type: "Backend Development",
    description: "Handles event scheduling, bookings, and manages data securely with Node.js and MongoDB.",
    techStack: ["Node.js", "Express.js", "MongoDB"],
    link: "#https://github.com/Akankshya25arp/event-booking-app"
  },
  {
    title: "Responsive Webpages",
    image:  "/images/frontend1.jpg",
    type: "Frontend Development",
    description: "A web-based tool to translate text between languages using translation APIs.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "#https://github.com/Akankshya25arp/landing-page2"
  },
  {
    title: "Portfolio Website",
    image: "/images/reactjs.jpg",
    type: "React App",
    description: "A personal portfolio built with React to showcase projects, skills, and experience.",
    techStack: ["React", "HTML", "CSS"],
    link: "#https://github.com/Akankshya25arp/my-final-project"
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p><strong>Type:</strong> {project.type}</p>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong></p>
            <ul>
              {project.techStack.map((tech, idx) => (
                <li key={idx}>• {tech}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button>View Details</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
