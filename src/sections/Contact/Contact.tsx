import React from 'react';
import './Contact.css';
import SectionHeader from '../../components/SectionHeader';

const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.open('mailto:saurabhgup98@gmail.com', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+918454900296', '_blank');
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <SectionHeader number="04" title="What's Next?" />
        
        {/* Main Contact Content */}
        <div className="contact-main">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            I'm currently seeking exciting new job opportunities. If you have a role that aligns with my skills and experience, feel free to reach out. I'm always open to connecting - whether it's for a potential collaboration, a job opportunity, or simply a conversation.
          </p>
          
          <div className="contact-buttons">
            <button className="contact-btn email-btn" onClick={handleEmailClick}>
              Email Me
            </button>
            <button className="contact-btn phone-btn" onClick={handlePhoneClick}>
              +91-8454900296
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
