import React, { useEffect, useState } from 'react';
import './Header.css';
import Logo from './Logo';

interface HeaderProps {
  animationConfig: {
    common: {
      animationName: string;
      animationDuration: string;
      animationFillMode: string;
      animationTimingFunction: string;
      transform: string;
    };
    delays: {
      left: string;
      item1: string;
      item2: string;
      item3: string;
      item4: string;
      button: string;
    };
  };
}

const Header: React.FC<HeaderProps> = ({ animationConfig }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const appElement = document.querySelector('.app');
      const currentScrollY = appElement ? appElement.scrollTop : 0;

      if (currentScrollY === 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll listener to app container
    const appElement = document.querySelector('.app');
    if (appElement) {
      appElement.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (appElement) {
        appElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [lastScrollY, isVisible]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const { common, delays } = animationConfig;

  const animationStyle = {
    animationName: common.animationName,
    animationDuration: common.animationDuration,
    animationFillMode: common.animationFillMode,
    animationTimingFunction: common.animationTimingFunction,
    transform: common.transform,
  };

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="header-content">
        <div className="header-left">
          <div
            className="logo-wrapper"
            style={{ ...animationStyle, animationDelay: delays.left }}
          >
            <Logo />
          </div>
        </div>

        <div className="header-right">
          {/* Desktop Navigation */}
          <nav className="nav-menu desktop-nav">
            <a
              href="#about"
              className="nav-link"
              style={{ ...animationStyle, animationDelay: delays.item1 }}
            >
              <span className="nav-number">01.</span>
              <span className="nav-text">About</span>
            </a>
            <a
              href="#experience"
              className="nav-link"
              style={{ ...animationStyle, animationDelay: delays.item2 }}
            >
              <span className="nav-number">02.</span>
              <span className="nav-text">Experience</span>
            </a>
            <a
              href="#projects"
              className="nav-link"
              style={{ ...animationStyle, animationDelay: delays.item3 }}
            >
              <span className="nav-number">03.</span>
              <span className="nav-text">Work</span>
            </a>
            <a
              href="#contact"
              className="nav-link"
              style={{ ...animationStyle, animationDelay: delays.item4 }}
            >
              <span className="nav-number">04.</span>
              <span className="nav-text">Contact</span>
            </a>
          </nav>

          <button
            className="resume-btn desktop-resume"
            style={{ ...animationStyle, animationDelay: delays.button }}
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Resume
          </button>

          {/* Mobile Navigation Toggle */}
          <button
            className={`mobile-nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile navigation"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <aside className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span className="mobile-nav-number">01.</span>
            <span className="mobile-nav-text">About</span>
          </a>
          <a href="#experience" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span className="mobile-nav-number">02.</span>
            <span className="mobile-nav-text">Experience</span>
          </a>
          <a href="#projects" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span className="mobile-nav-number">03.</span>
            <span className="mobile-nav-text">Work</span>
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            <span className="mobile-nav-number">04.</span>
            <span className="mobile-nav-text">Contact</span>
          </a>
          <button
            className="mobile-resume-btn"
            onClick={() => {
              window.open('/resume.pdf', '_blank');
              closeMobileMenu();
            }}
          >
            Resume
          </button>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
