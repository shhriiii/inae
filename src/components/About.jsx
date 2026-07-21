import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2>About Conclave</h2>

        <p>
          This program YEISS will be organized under a unified umbrella
          comprising Youth Conclave (Thesis Presentation, Project Exhibition,
          Hackathon) and National Conference on Multidisciplinary Engineering
          and Emerging Technology (MEET 2026).
        </p>

        <div className="submission-buttons">
          <Link to="/hackathon-submission">
            <button className="btn filled">
              Hackathon Submission
            </button>
          </Link>

          <Link to="/project-submission">
            <button className="btn filled">
              Project Submission
            </button>
          </Link>

          <Link to="/thesis-submission">
            <button className="btn filled">
              Thesis Submission
            </button>
          </Link>

          <Link to="/meet2026">
            <button className="btn filled">
              National Conference MEET 2026
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;