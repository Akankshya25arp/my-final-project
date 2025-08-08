import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Full-stack web development using React, Node.js, and MongoDB to build responsive and scalable applications.</p>
        </div>
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>Creating user-friendly and beautiful interfaces that enhance user experience and increase engagement.</p>
        </div>
        <div className="service-card">
          <h3>Problem Solving</h3>
          <p>Solving complex algorithmic problems using languages like C++ and JavaScript with a focus on optimization.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
