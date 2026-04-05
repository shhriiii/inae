import "./ImportantDates.css";

const ImportantDates = () => {
  const dates = [
    { title: "Call for Papers", date: "1 April 2026" },
    { title: "Abstract Submission Deadline", date: "15 May 2026" },
    { title: "Acceptance Notification", date: "15 June 2026" },
    { title: "Full Paper Submission", date: "5 July 2026" },
    { title: "Final Submission", date: "25 August 2026" },
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
