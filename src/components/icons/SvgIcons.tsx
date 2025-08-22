import React from 'react';

// Social Media Icons
export const GitHubIcon: React.FC<{ className?: string; width?: number; height?: number }> = ({ 
  className = "", 
  width = 20, 
  height = 20 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string; width?: number; height?: number }> = ({ 
  className = "", 
  width = 20, 
  height = 20 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string; width?: number; height?: number }> = ({ 
  className = "", 
  width = 20, 
  height = 20 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    className={className}
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string; width?: number; height?: number }> = ({ 
  className = "", 
  width = 20, 
  height = 20 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// Project Icons
export const ExternalLinkIcon: React.FC<{ className?: string; width?: number; height?: number }> = ({ 
  className = "", 
  width = 20, 
  height = 20 
}) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15,3 21,3 21,9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export const FolderIcon: React.FC<{ className?: string; width?: number; height?: number }> = ({ 
  className = "", 
  width = 40, 
  height = 40 
}) => (
  <svg 
    className={className} 
    width={width} 
    height={height} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1"
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

// Logo Icons
export const HexagonLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`hexagon-logo ${className}`} viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
    <polygon
      className="hexagon-outline"
      points="100,20 173.2,60 173.2,140 100,180 26.8,140 26.8,60"
    />
    <line
      className="highlight-line"
      x1="173.2" y1="60"
      x2="173.2" y2="140"
    />
    <line
      className="highlight-line"
      x1="173.2" y1="140"
      x2="100" y2="180"
    />
    <text x="100" y="125" className="logo-text">S</text>
  </svg>
);

export const HexagonLoaderSvg: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" className={`hexagon-svg ${className}`}>
    <polygon
      points="100,10 173,55 173,145 100,190 27,145 27,55"
      className="hexagon-path"
    />
  </svg>
);
