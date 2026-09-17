import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ThesisSubmission = () => {
  return (
    <>
      <Navbar />

      <section className="submission">
        <div className="submission-container">

          <h1>Thesis Presentation</h1>

          <div className="registration-notice">
            <strong>Registration Link:</strong> Google Form for registration
            will be available soon. Microsoft CMT Link is available in
            General Submission Instructions section.
          </div>

          <h2>Thesis Presentation</h2>

          <p>
            Undergraduate (UG) and Postgraduate (PG) students may participate
            in the Thesis Presentation category by submitting their ongoing or
            completed research work.
          </p>

          <ol>
            <li>
              Submit a concise thesis/research <strong>abstract</strong>{" "}
              highlighting the research problem, objectives, methodology,
              key findings, and significance of the work.
            </li>

            <li>
              Selected participants will be invited to present their research
              work before an expert panel. The presentation should cover the
              research problem, objectives, methodology, results, key
              contributions, and future scope.
            </li>

            <li>
              Best Thesis Presentation Awards will be presented to outstanding
              participants based on the evaluation by the expert jury.
            </li>

            <li>
              The content will be published in program proceedings.
            </li>
          </ol>

          <h2>General Submission Instructions</h2>

          <ul>
            <li>
              All submissions should be done through{" "}
              <a
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2Fyeiss2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft CMT
              </a>.
            </li>

            <li>
  The sample paper template (short article) is made available in the{" "}
  <Link
    to="/download"
    className="download-link"
  >
    Download Menu
  </Link>
  .
</li>
<li> 
  For registration, please use the following link : 
              <Link
    to="/register"
    className="download-link"
  >
     Registration Link 
  </Link>
  
</li>

            <li>
              All submissions will be checked for plagiarism, requiring less
              than 15%.
            </li>

            <li>
              Submission of manuscript includes a commitment by the
              corresponding author to ensure that at least one of the authors
              of the manuscript registers for the conclave and presents
              his/her/their work.
            </li>

            <li>
              The camera-ready version must be in the prescribed format and
              should include all the reviewer recommendations, failing which
              the work will not be submitted for publication as a proceeding.
            </li>
          </ul>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ThesisSubmission;