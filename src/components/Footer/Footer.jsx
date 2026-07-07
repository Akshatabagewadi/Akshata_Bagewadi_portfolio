import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>{personalInfo.name}</h3>
          <p>{personalInfo.roles.join(' · ')}</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="footer-social-icons">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} {personalInfo.name}. All rights reserved.</p>
        <a href="#home" className="footer-top-btn" aria-label="Back to top">
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
