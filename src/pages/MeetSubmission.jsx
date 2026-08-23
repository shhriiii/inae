import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MeetSubmission = () => {
  return (
    <>
      <Navbar />

      <section className="submission">
        <div className="submission-container">

          <h1>National Conference MEET 2026</h1>

          <h2>Submission Instructions</h2>

          <ul>
            <li>
              <a
                href="https://drive.google.com/file/d/1e2s8cCc-60qvLp4dZl2QScGKpdwHAQ--/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Manuscript Template
              </a>
            </li>

            <li>
              <a
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2Fyeiss2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft CMT
              </a>
            </li>

            <li>
              All submissions should be done through Microsoft CMT.
            </li>

            <li>
              The sample paper template (short article) is made available in
              the Download Menu.
            </li>

            <li>
              All submissions will be checked for plagiarism, requiring less
              than 15%.
            </li>
          </ul>

          <h2>Submission Guidelines</h2>

          <ul>
            <li>
              Submission of manuscript includes a commitment by the
              corresponding author to ensure that at least one author registers
              for the conclave and presents the work.
            </li>

            <li>
              The camera-ready version must be in the prescribed format and
              should include all reviewer recommendations.
            </li>

            <li>
              If the manuscript does not comply with publisher standards, it
              will not be considered for publication.
            </li>
          </ul>

          <h2>Publication Details for MEET 2026</h2>

          <ol>
            <li>
              Selected short papers will be considered for publication in the
              INAE Magazine.
            </li>

            <li>
              Selected full-length papers will be considered for publication
              in a special session of the ISED 2026 Conference (IEEE,
              Scopus-indexed),{" "}
              <a
                href="https://cms.nitw.ac.in/conference/ised2026/?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ISED 2026 Conference Website
              </a>
              . An additional publication charge of ₹6,000 will be applicable
              along with the registration fee.
            </li>

            <li>
              Extended versions of selected papers will be forwarded for
              consideration for publication in the Transactions of the INAE,
              published by Springer (Scopus-indexed).
            </li>
          </ol>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default MeetSubmission;