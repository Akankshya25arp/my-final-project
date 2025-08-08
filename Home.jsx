import React from 'react';
import './Home.css';
import profilePic from '/me.jpg';

const Home = () => {
  return (
    <section className="home" id="home">
      <h1>Welcome to my Portfolio!</h1>
      <h2>I'm Akankshya Rani Panda</h2>
      <p>A passionate developer crafting visually stunning and user-friendly web experiences.</p>
      <a href="/resume.pdf" download className="download-btn">Download Resume</a>
      <img src={profilePic} alt="Akankshya" className="profile-pic" />
    </section>
  );
};

export default Home;


