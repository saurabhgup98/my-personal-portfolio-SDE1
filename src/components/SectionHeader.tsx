import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title, subtitle }) => {
  return (
    <div className="section-header">
      <div className="section-number">{number}</div>
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default SectionHeader;
