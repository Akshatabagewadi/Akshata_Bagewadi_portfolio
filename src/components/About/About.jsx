import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { personalInfo, strengths, interests } from '../../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="section-tag">Get to know me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-card glass-card" data-aos="fade-right">
            <p className="about-summary">{personalInfo.summary}</p>
            <ul className="about-info">
              <li>
                <FiMapPin /> {personalInfo.location}
              </li>
              <li>
                <FiMail /> {personalInfo.email}
              </li>
              <li>
                <FiPhone /> {personalInfo.phone}
              </li>
            </ul>
          </div>

          <div className="about-side">
            <div className="about-card glass-card about-tags-card" data-aos="fade-left" data-aos-delay="100">
              <h4>Strengths</h4>
              <div className="about-tags">
                {strengths.map((s) => (
                  <span className="pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div className="about-card glass-card about-tags-card" data-aos="fade-left" data-aos-delay="200">
              <h4>Interests</h4>
              <div className="about-tags">
                {interests.map((s) => (
                  <span className="pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
