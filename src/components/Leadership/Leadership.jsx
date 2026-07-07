import { FiUsers } from 'react-icons/fi';
import { leadership } from '../../data/portfolioData';
import './Leadership.css';

export default function Leadership() {
  return (
    <section id="leadership" className="leadership">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="section-tag">Beyond academics</span>
          <h2 className="section-title">IEEE Leadership &amp; Volunteering</h2>
        </div>

        <div className="leadership-grid">
          {leadership.map((item, i) => (
            <div
              className="leadership-card glass-card"
              key={item.title}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div className="leadership-icon">
                <FiUsers />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  <span className="leadership-badge">IEEE Leadership</span>
}

