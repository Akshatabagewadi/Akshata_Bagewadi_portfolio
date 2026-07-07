import { FiAward, FiExternalLink } from 'react-icons/fi';
import { certifications } from '../../data/portfolioData';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="section-tag">Continuous learning</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card glass-card"
              key={cert.title + i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="cert-icon">
                <FiAward />
              </div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer} · {cert.date}</p>
              </div>
              <FiExternalLink className="cert-link-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
