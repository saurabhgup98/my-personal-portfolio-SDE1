import './App.css';
import HexagonLoader from './components/HexagonLoader';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { headerAnimationConfig } from './config/animations';
import { GitHubIcon, LinkedInIcon, TwitterIcon, InstagramIcon } from './components/icons/SvgIcons';

function App() {
  return (
    <HexagonLoader>
      <div className="app">
        {/* Header */}
        <Header animationConfig={headerAnimationConfig} />

        <div className="content-container">          
          <div className="global-social-sidebar">
            <div className="social-icons">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <LinkedInIcon />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <InstagramIcon />
              </a>
            </div>
            <div className="sidebar-line"></div>
          </div>
          
          <div className="global-email-sidebar">
            <div className="sidebar-line"></div>
            <a href="mailto:saurabhgup98@gmail.com" className="email-link">
              saurabhgup98@gmail.com
            </a>
          </div>

          {/* Internal Container for Social Media */}
          <div className="internal-container">
            {/* Hero Section */}
            <div id="home" className="section-box section-hero">
              <Hero />
            </div>

            {/* About Section */}
            <div id="about" className="section-box section-about">
              <About />
            </div>

            {/* Experience Section */}
            <div id="experience" className="section-box section-experience">
              <Experience />
            </div>

            {/* Work Section */}
            <div id="projects" className="section-box section-work">
              <Work />
            </div>

            {/* Contact Section */}
            <div id="contact" className="section-box section-contact">
              <Contact />
            </div>

            {/* Footer */}
            <div className="section-box section-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </HexagonLoader>
  );
}

export default App;
