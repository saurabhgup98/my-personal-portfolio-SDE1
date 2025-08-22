import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import './Experience.css';

interface Job {
  id: string;
  company: string;
  title: string;
  period: string;
  shortDescription: string;
  fullDescription: string[];
  techStack: string[];
  achievements: string[];
}

const Experience: React.FC = () => {
  const [activeJob, setActiveJob] = useState('nessa');
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());

  const jobs: Job[] = [
    {
      id: 'byjus',
      company: 'BYjus',
      title: 'SDE-1 Full Stack',
      period: 'Jan 2022 - March 2025',
      shortDescription: 'Built multi-tenant SaaS platforms for medical billing and pharmacy operations, improving efficiency by 30% and reducing costs by 20%.',
      fullDescription: [
        'Built a multi-tenant SaaS platform for medical billing using Java, Spring Boot, React, and AWS, improving efficiency by 30% and cutting costs by 20%. Developed secure REST APIs with Spring Security and optimized MySQL schemas for fast data access.',
        'Implemented responsive React + TypeScript interfaces based on Figma designs with seamless API integration and full testing. Deployed services to AWS Elastic Beanstalk for scalability and availability while aligning closely with product goals.',
        'Delivered a SaaS platform for pharmacy onboarding and operations. Created React frontends with complete API coverage and Java-based backends, deployed on AWS EC2 with a reliable database setup.',
        'Additional work includes an inventory system and productivity tool using PHP, MySQL, and Spring Boot. Also built a React.js product website for a U.S. client, enhancing their digital presence. Focus remains on clean, scalable, user-focused solutions.'
      ],
      techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'AWS', 'MySQL', 'PHP'],
      achievements: ['30% efficiency improvement', '20% cost reduction', 'Multi-tenant architecture', 'AWS deployment']
    },
    {
      id: 'nessa',
      company: 'Nessa Software Labs',
      title: 'SDE-1 Full Stack',
      period: 'Jan 2022 - March 2025',
      shortDescription: 'Developed comprehensive SaaS solutions for medical billing and pharmacy management with modern web technologies.',
      fullDescription: [
        'Built a multi-tenant SaaS platform for medical billing using Java, Spring Boot, React, and AWS, improving efficiency by 30% and cutting costs by 20%. Developed secure REST APIs with Spring Security and optimized MySQL schemas for fast data access.',
        'Implemented responsive React + TypeScript interfaces based on Figma designs with seamless API integration and full testing. Deployed services to AWS Elastic Beanstalk for scalability and availability while aligning closely with product goals.',
        'Delivered a SaaS platform for pharmacy onboarding and operations. Created React frontends with complete API coverage and Java-based backends, deployed on AWS EC2 with a reliable database setup.',
        'Additional work includes an inventory system and productivity tool using PHP, MySQL, and Spring Boot. Also built a React.js product website for a U.S. client, enhancing their digital presence. Focus remains on clean, scalable, user-focused solutions.'
      ],
      techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'AWS', 'MySQL', 'PHP'],
      achievements: ['SaaS platform development', 'API integration', 'AWS deployment', 'Product website']
    },
    {
      id: 'nessa2',
      company: 'Nessa Software Labs',
      title: 'SDE-1 Full Stack',
      period: 'Jan 2022 - March 2025',
      shortDescription: 'Led development of medical billing SaaS platform with focus on scalability and user experience.',
      fullDescription: [
        'Built a multi-tenant SaaS platform for medical billing using Java, Spring Boot, React, and AWS, improving efficiency by 30% and cutting costs by 20%. Developed secure REST APIs with Spring Security and optimized MySQL schemas for fast data access.',
        'Implemented responsive React + TypeScript interfaces based on Figma designs with seamless API integration and full testing. Deployed services to AWS Elastic Beanstalk for scalability and availability while aligning closely with product goals.',
        'Delivered a SaaS platform for pharmacy onboarding and operations. Created React frontends with complete API coverage and Java-based backends, deployed on AWS EC2 with a reliable database setup.',
        'Additional work includes an inventory system and productivity tool using PHP, MySQL, and Spring Boot. Also built a React.js product website for a U.S. client, enhancing their digital presence. Focus remains on clean, scalable, user-focused solutions.'
      ],
      techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'AWS', 'MySQL', 'PHP'],
      achievements: ['Multi-tenant architecture', 'REST API development', 'Database optimization', 'Client website']
    }
  ];

  const activeJobData = jobs.find(job => job.id === activeJob);

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
              {jobs.map((job) => (
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
                      {activeJobData.title} <span className="job-company">@ {activeJobData.company}</span>
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
