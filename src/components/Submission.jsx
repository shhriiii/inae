import "./Submission.css";

const Submission = () => {
  return (
    <section className="submission">

      <h2>Call for Papers & Participation</h2>

      <div className="submission-container">

        {/* THESIS */}
        <div className="submission-card">
          <h3>Thesis Presentation</h3>
          <p>For postgraduate and doctoral research work.</p>

          <div className="btn-group">
            <a href="https://cmt.microsoft.com" target="_blank">
              <button>Abstract</button>
            </a>
            <a href="https://cmt.microsoft.com" target="_blank">
              <button>Full Paper</button>
            </a>
          </div>
        </div>

        {/* PROJECT */}
        <div className="submission-card">
          <h3>Project Exhibition</h3>
          <p>Showcase innovative prototypes.</p>

          <div className="btn-group">
            <a href="https://cmt.microsoft.com" target="_blank">
              <button>Abstract</button>
            </a>
            <a href="https://cmt.microsoft.com" target="_blank">
              <button>Full Paper</button>
            </a>
          </div>
        </div>

        {/* HACKATHON */}
        <div className="submission-card">
          <h3>Hackathon</h3>
          <p>24–36 hour innovation challenge.</p>

          <div className="btn-group">
            <a href="https://cmt.microsoft.com" target="_blank">
              <button>Submit Idea</button>
            </a>
            {/* <a href="https://cmt.microsoft.com" target="_blank">
              <button>Full Paper</button>
            </a> */}
          </div>
        </div>

        {/* ARTICLE */}
        <div className="submission-card">
          <h3>Short Article</h3>
          <p>Submit research articles.</p>

          <div className="btn-group">
            <a href="https://cmt.microsoft.com" target="_blank">
              <button>Abstract</button>
            </a>
            <a href="https://cmt.microsoft.com" target="_blank">
              <button>Full Paper</button>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Submission;