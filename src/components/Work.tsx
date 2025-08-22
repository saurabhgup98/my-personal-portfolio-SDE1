import React, { useState } from 'react';
import './Work.css';
import SectionHeader from './SectionHeader';
import todoAppImage from '../assets/todo-app.png';
import foodDeliveryImage from '../assets/food-delivery-sera.png';
import { GitHubIcon, ExternalLinkIcon, FolderIcon } from './icons/SvgIcons';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
  github: string;
  external: string;
  tech: string[];
}

interface OtherProject {
  id: number;
  title: string;
  description: string;
  github: string;
  external: string;
  tech: string[];
}

const Work: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects: Project[] = [
    {
      id: 1,
      title: "Todo Application",
      description: "A modern, responsive todo application built with React. Features include task management, filtering, and local storage persistence. The app provides an intuitive interface for organizing daily tasks with clean design and smooth animations.",
      image: todoAppImage,
      imagePosition: 'left',
      github: "https://github.com/yourusername/todo-app",
      external: "https://todo-app-demo.com",
      tech: ["React", "TypeScript", "CSS3", "Local Storage"]
    },
    {
      id: 2,
      title: "Food Delivery Platform",
      description: "A comprehensive food delivery platform with restaurant listings, menu management, and order tracking. Built with modern web technologies, featuring real-time updates, payment integration, and responsive design for seamless mobile experience.",
      image: foodDeliveryImage,
      imagePosition: 'right',
      github: "https://github.com/yourusername/food-delivery",
      external: "https://food-delivery-demo.com",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"]
    }
  ];

  const otherProjects: OtherProject[] = [
    {
      id: 3,
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for managing e-commerce operations with analytics, inventory management, and order processing.",
      github: "https://github.com/yourusername/ecommerce-dashboard",
      external: "https://ecommerce-dashboard.com",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js"]
    },
    {
      id: 4,
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      github: "https://github.com/yourusername/weather-app",
      external: "https://weather-app-demo.com",
      tech: ["React", "OpenWeather API", "Geolocation", "CSS3"]
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and professional experience with modern design.",
      github: "https://github.com/yourusername/portfolio",
      external: "https://portfolio-demo.com",
      tech: ["React", "TypeScript", "Framer Motion", "SCSS"]
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with user authentication, message history, and file sharing capabilities.",
      github: "https://github.com/yourusername/chat-app",
      external: "https://chat-app-demo.com",
      tech: ["React", "Socket.io", "Express", "MongoDB"]
    }
  ];

  const displayedProjects = showAllProjects ? otherProjects : otherProjects.slice(0, 3);
  const hasMoreProjects = otherProjects.length > 3;
  const isButtonDisabled = !hasMoreProjects && !showAllProjects;

  const handleShowMore = () => {
    if (!isButtonDisabled) {
      setShowAllProjects(!showAllProjects);
    }
  };

  return (
    <section className="work-section">
      <div className="work-content">
        <SectionHeader number="03" title="Some Things I've Built" />
        
        {/* Featured Projects Section */}
        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <div key={project.id} className={`project-item ${project.imagePosition === 'right' ? 'project-reverse' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} className="sample-image" />
                <div className="image-overlay"></div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <GitHubIcon />
                    </a>
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </div>
                
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Noteworthy Projects Section */}
        <div className="other-projects-section">
          <div className="other-projects-header">
            <h3 className="other-projects-title">Other Noteworthy Projects</h3>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="view-archive-link">
              view the full archive →
            </a>
          </div>
          
          <div className="other-projects-grid">
            {displayedProjects.map((project) => (
              <div key={project.id} className="other-project-card">
                <div className="project-card-header">
                  <div className="project-card-icons">
                    <FolderIcon className="folder-icon" />
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <GitHubIcon />
                    </a>
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </div>
                
                <div className="project-card-content">
                  <h4 className="project-card-title">{project.title}</h4>
                  <p className="project-card-description">{project.description}</p>
                  <div className="project-card-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show More/Less Button - Always visible but disabled when no more projects */}
          <div className="show-more-container">
            <button 
              className={`show-more-btn ${isButtonDisabled ? 'disabled' : ''}`}
              onClick={handleShowMore}
              disabled={isButtonDisabled}
            >
              {showAllProjects ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
