import { FiCode, FiLayers, FiTool } from 'react-icons/fi';
import { skills } from '../../data/portfolioData';
import './Skills.css';

const icons = [FiCode, FiLayers, FiTool];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="section-tag">What I work with</span>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            A toolkit spanning core programming, full-stack frameworks, and the tools that keep projects moving.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                className="skill-card glass-card"
                key={group.category}
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                <div className="skill-icon">
                  <Icon />
                </div>
                <h3>{group.category}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
