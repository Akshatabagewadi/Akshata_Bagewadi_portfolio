import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo, emailjsConfig } from '../../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      )
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="section-tag">Let's talk</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have an opportunity, a project, or just want to say hello? My inbox is open.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass-card" data-aos="fade-right">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <span className="contact-icon"><FiMail /></span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li>
                <span className="contact-icon"><FiPhone /></span>
                <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}>{personalInfo.phone}</a>
              </li>
              <li>
                <span className="contact-icon"><FiMapPin /></span>
                <span>{personalInfo.location}</span>
              </li>
            </ul>

            <div className="contact-socials">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </div>

          <form
            className="contact-form glass-card"
            ref={formRef}
            onSubmit={handleSubmit}
            data-aos="fade-left"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input type="text" id="user_name" name="user_name" required placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input type="email" id="user_email" name="user_email" required placeholder="your@email.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Tell me more..." />
            </div>

            <button type="submit" className="btn btn-primary contact-submit" disabled={status === 'sending'}>
              <FiSend /> {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="contact-status contact-status-success">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-status contact-status-error">
                Something went wrong. Please add your EmailJS keys in src/data/portfolioData.js, or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
