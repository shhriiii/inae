import "./ImportantDates.css";

const ImportantDates = () => {
  const dates = [
    { title: "Call for Papers", date: "15 April 2026" },
    { title: "Abstract Submission Deadline", date: "21 July 2026" },
    { title: "Acceptance Notification", date: "Within 10 days of submission" },
    { title: "Full Paper Submission", date: "Within 20 days of acceptance of abstract" },
    { title: "Final Submission", date: "20 August 2026" },
    { title: "Early Registration", date: "25 August 2026" },
    { title: "Final Registration Deadline", date: "10 September 2026" },
  ];

  return (
    <section className="dates">
      <h2>Important Dates</h2>

      <div className="dates-container">
        {dates.map((item, index) => (
          <div className="date-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImportantDates;
