import "./ImportantDates.css";

const ImportantDates = () => {
  const dates = [
    { title: "Call for Papers", date: "15 April 2026" },
    { title: "Abstract Submission Deadline", date: "31 July 2026" },
    { title: "Acceptance Notification", date: "Within 10 days of submission" },
    { title: "Full Length Paper Submission", date: "20 August 2026" },
    { title: "Notification of Review Decision", date: "31 August 2026" },
    { title: "Final Thesis Submission/Project Working Model", date: " 21 September 2026" },
    { title: "Early Registration", date: "30 September 2026" },
    { title: "Final Registration Deadline", date: "15 October 2026" },
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
