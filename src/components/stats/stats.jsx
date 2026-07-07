import "./stats.css";

export default function Stats() {
  const stats = [
    { number: "10+", label: "Certificates" },
    { number: "4+", label: "Projects" },
    { number: "3", label: "Internships" },
    { number: "IEEE", label: "Student Branch Chair" },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
