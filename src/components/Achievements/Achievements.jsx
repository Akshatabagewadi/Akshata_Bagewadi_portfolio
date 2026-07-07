import { FiStar } from 'react-icons/fi';
import { achievements } from '../../data/portfolioData';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="section-tag">Milestones</span>
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="achievements-list">
          {achievements.map((item, i) => (
            <div
              className="achievement-item glass-card"
              key={item.text}
              data-aos="fade-up"
              data-aos-delay={i * 90}
            >
              <span className="achievement-icon"><FiStar /></span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
