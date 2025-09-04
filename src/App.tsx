import "./App.css";
import HexagonLoader from "./components/HexagonLoader";
import Header from "./components/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Work from "./sections/Work/Work";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import { headerAnimationConfig } from "./config/animations";
import { SOCIAL_LINKS, EMAIL_CONFIG } from "./config/constants/global";
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
} from "./components/icons/SvgIcons";

// Icon mapping object
const iconMap = {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
};

function App() {
  return (
    <HexagonLoader>
      <div className="app">
        <Header animationConfig={headerAnimationConfig} />
        <div className="content-container">
          <div className="global-social-sidebar">
            <div className="social-icons">
              {SOCIAL_LINKS.map((link) => {
                const IconComponent =
                  iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.target}
                    rel={link.rel}
                    className="social-icon"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
            <div className="sidebar-line"></div>
          </div>

          <div className="global-email-sidebar">
            <div className="sidebar-line"></div>
            <a href={EMAIL_CONFIG.href} className="email-link">
              {EMAIL_CONFIG.text}
            </a>
          </div>

          {/* Internal Container for Sections */}
          <div className="internal-container">
            <div id="home" className="section-box section-hero">
              <Hero />
            </div>

            <div id="about" className="section-box section-about">
              <About />
            </div>

            <div id="experience" className="section-box section-experience">
              <Experience />
            </div>

            <div id="projects" className="section-box section-work">
              <Work />
            </div>

            <div id="contact" className="section-box section-contact">
              <Contact />
            </div>

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