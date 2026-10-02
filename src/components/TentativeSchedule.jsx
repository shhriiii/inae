const TentativeSchedule = () => {
  return (
    <section className="tentative-schedule">
      <div className="tentative-schedule-container">

        <h2>Tentative Program Schedule</h2>

        <p>
          The tentative program schedule for YEISS 2026 is available below.
        </p>

        <a
          href="https://drive.google.com/file/d/1x7ZQtLkSZvB87VpVhgdUGJVZM1V-UIX-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="schedule-button"
        >
          View Tentative Program Schedule
        </a>

      </div>

      <style>{`
        .tentative-schedule {
  padding: 25px 20px;
  background: #f4f6fb;
}

.tentative-schedule-container {
  max-width: 1100px;
  margin: 0 auto;
  background: white;
  padding: 35px 40px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.tentative-schedule-container h2 {
  color: #0c1c5a;
  margin-top: 0;
  margin-bottom: 15px;
}

.tentative-schedule-container p {
  color: #444;
  margin-top: 0;
  margin-bottom: 25px;
  line-height: 1.6;
}

.schedule-button {
  display: inline-block;
  background: #0c1c5a;
  color: white !important;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;
}

.schedule-button:hover {
  background: #162b7a;
  color: white !important;
}
      `}</style>
    </section>
  );
};

export default TentativeSchedule;