import { FiBookOpen } from 'react-icons/fi';
import { education } from '../../data/portfolioData';
import './EducationTimeline.css';

export default function EducationTimeline() {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="section-tag">Academic journey</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="timeline">
          {education.map((edu, i) => (
            <div
              className={`timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              key={edu.degree}
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="timeline-dot">
                <FiBookOpen />
              </div>
              <div className="timeline-card glass-card">
                <span className="timeline-period">{edu.period}</span>
                <h3>{edu.degree}</h3>
                <p className="timeline-institution">{edu.institution}</p>
                <span className="pill">{edu.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
