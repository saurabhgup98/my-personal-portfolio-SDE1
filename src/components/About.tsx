import React from 'react';
import './About.css';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <SectionHeader 
          number="01." 
          title="About Me"
        />
        
        <div className="about-body">
          <div className="about-text">
            <p>
              Hello! My name is Saurabh, and I enjoy bringing ideas to life on the web. 
              What started as a curiosity for how things work behind the scenes grew into 
              a passion for building full-stack applications that solve real-world problems.
            </p>
            
            <p>
              Currently, I work as an SDE-1 at a fast-paced startup, building SaaS products 
              across domains like healthcare and e-commerce. I enjoy working across the stack 
              – from frontend development and backend services to databases and cloud deployment.
            </p>
            
            <p>
              I focus on writing clean, scalable code and delivering user-centric products 
              that are both functional and reliable.
            </p>
            
            <p>Here are a few technologies I've been working with recently:</p>
            
            <ul className="skills-list">
              <li>Java 24</li>
              <li>Spring Boot</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Mysql and MongoDB</li>
            </ul>
          </div>
          
          <div className="about-image">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=280&h=280&fit=crop&crop=face" 
                alt="Profile Photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
