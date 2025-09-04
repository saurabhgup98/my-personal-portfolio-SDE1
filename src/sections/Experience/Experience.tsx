import React, { useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import { JOBS } from './constants';
import './Experience.css';

const Experience: React.FC = () => {
  const [activeJob, setActiveJob] = useState('nessa');
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());

  const activeJobData = JOBS.find(job => job.id === activeJob);

  const toggleExpanded = (jobId: string) => {
    const newExpanded = new Set(expandedJobs);
    if (newExpanded.has(jobId)) {
      newExpanded.delete(jobId);
    } else {
      newExpanded.add(jobId);
    }
    setExpandedJobs(newExpanded);
  };

  const isExpanded = (jobId: string) => expandedJobs.has(jobId);

  return (
    <section className="experience-section">
      <div className="experience-content">
        <SectionHeader number="02" title="Where I've Worked" />
        
        <div className="experience-body">
          {/* Main Content */}
          <div className="experience-main">
            {/* Company Navigation */}
            <div className="company-nav">
              {JOBS.map((job) => (
                <button
                  key={job.id}
                  className={`company-tab ${activeJob === job.id ? 'active' : ''}`}
                  onClick={() => setActiveJob(job.id)}
                >
                  {job.company}
                </button>
              ))}
            </div>

            {/* Job Details */}
            <div className="job-details">
              {activeJobData && (
                <>
                  <div className="job-header">
                    <h3 className="job-title">
                      {activeJobData.title} <span className="job-company">@ {activeJobData.id === 'nessa2' ? 'Nessa Software Labs' : activeJobData.company}</span>
                    </h3>
                    <p className="job-period">{activeJobData.period}</p>
                  </div>
                  
                  <div className="job-card">
                    <div className="job-summary">
                      <p className="job-short-description">{activeJobData.shortDescription}</p>
                      
                      <div className="job-tech-stack">
                        <h4 className="tech-stack-title">Tech Stack</h4>
                        <div className="tech-tags">
                          {activeJobData.techStack.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="job-achievements">
                        <h4 className="achievements-title">Key Achievements</h4>
                        <ul className="achievements-list">
                          {activeJobData.achievements.map((achievement, index) => (
                            <li key={index} className="achievement-item">
                              <span className="achievement-bullet">▹</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button 
                        className={`expand-btn ${isExpanded(activeJobData.id) ? 'expanded' : ''}`}
                        onClick={() => toggleExpanded(activeJobData.id)}
                      >
                        {isExpanded(activeJobData.id) ? 'Show Less' : 'Read More'}
                        <span className="expand-icon">
                          {isExpanded(activeJobData.id) ? '▲' : '▼'}
                        </span>
                      </button>
                    </div>

                    <div className={`job-full-description ${isExpanded(activeJobData.id) ? 'expanded' : ''}`}>
                      {activeJobData.fullDescription.map((item, index) => (
                        <p key={index} className="job-point">{item}</p>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
