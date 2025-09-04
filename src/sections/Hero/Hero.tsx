import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Saurabh Gupta.</h1>
          <h2 className="hero-tagline">I build things for the web.</h2>
          <p className="hero-description">
            I'm a software engineer who specializes in web development, transforming thoughtful designs into clean, scalable, and accessible web applications. I focus on writing maintainable code and building human-centered digital products that deliver real value.
          </p>
          <button 
            className="hero-cta-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
