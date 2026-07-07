import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../../data/portfolioData';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="section-tag">Where I've worked</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-list">
          {experience.map((exp, i) => (
            <div
              className="experience-card glass-card"
              key={exp.title}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="experience-icon">
                <FiBriefcase />
              </div>
              <div className="experience-body">
                <div className="experience-top">
                  <h3>{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p>{exp.description}</p>
                <div className="experience-tags">
                  {exp.tags.map((t) => (
                    <span className="pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
