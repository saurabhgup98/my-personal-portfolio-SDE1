import React, { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import {
  GitHubIcon,
  ExternalLinkIcon,
  FolderIcon,
} from "../../components/icons/SvgIcons";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "./constants";
import "./Work.css";

const Work: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects
    ? OTHER_PROJECTS
    : OTHER_PROJECTS.slice(0, 3);
  const hasMoreProjects = OTHER_PROJECTS.length > 3;
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
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`project-item ${
                project.imagePosition === "right" ? "project-reverse" : ""
              }`}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="sample-image"
                />
                <div className="image-overlay"></div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <GitHubIcon />
                    </a>
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLinkIcon />
                    </a>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Section */}
        <div className="other-projects-section">
          <div className="other-projects-header">
            <h3 className="other-projects-title">Other Noteworthy Projects</h3>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="view-archive-link"
            >
              View the full archive →
            </a>
          </div>

          <div className="other-projects-grid">
            {displayedProjects.map((project) => (
              <div key={project.id} className="other-project-card">
                <div className="project-card-header">
                  <div className="project-card-icons">
                    <FolderIcon className="folder-icon" />
                    <div className="project-card-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <GitHubIcon />
                      </a>
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLinkIcon />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-card-content">
                  <h4 className="project-card-title">{project.title}</h4>
                  <p className="project-card-description">
                    {project.description}
                  </p>

                  <div className="project-card-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {OTHER_PROJECTS.length > 3 && (
            <div className="show-more-container">
              <button
                className={`show-more-btn ${
                  isButtonDisabled ? "disabled" : ""
                }`}
                onClick={handleShowMore}
                disabled={isButtonDisabled}
              >
                {showAllProjects ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
