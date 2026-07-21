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
            <a href="https://drive.google.com/file/d/1e2s8cCc-60qvLp4dZl2QScGKpdwHAQ--/view?usp=sharing" target="_blank">
              Manuscript Template
            </a>
          </li>
                                        <li>
            <a href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2Fyeiss2026" target="_blank">
              Microsoft CMT
            </a> 
          </li>
            <li>All submissions should be done through Microsoft CMT.</li>
            <li>The sample paper template (short article) is made available in the Download Menu.</li>
            <li>All submissions will be checked for plagiarism, requiring less than 15%.</li>
          </ul>

          <h2>Submission Guidelines</h2>

          <ul>
            <li>Submission of manuscript includes a commitment by the corresponding author to ensure that at least one author registers for the conclave and presents the work.</li>

            <li>The camera-ready version must be in the prescribed format and should include all reviewer recommendations.</li>

            <li>If the manuscript does not comply with publisher standards, it will not be considered for publication.</li>
          </ul>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default MeetSubmission;