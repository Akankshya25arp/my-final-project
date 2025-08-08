import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">

    
        <div className="text">
          <h1>Welcome to my Portfolio!</h1>
          <h2>I'm Akankshya Rani Panda</h2>
          <p>A passionate web developer crafting visually stunning and user-friendly web experiences and with scrutized web processeing.</p>
       
        </div>

        
        <div className="profile-image-container">
          <img
            src="/images/me.jpg"  
            alt="Akankshya Rani Panda"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
