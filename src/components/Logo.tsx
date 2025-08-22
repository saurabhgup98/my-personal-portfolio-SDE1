import React from 'react';
import './Logo.css';
import { HexagonLogo } from './icons/SvgIcons';

const Logo: React.FC = () => {
  return (
    <div className="logo-wrapper">
      <HexagonLogo />
    </div>
  );
};

export default Logo;
