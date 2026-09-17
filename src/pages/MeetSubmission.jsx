// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const MeetSubmission = () => {
//   return (
//     <>
//       <Navbar />

//       <section className="submission">
//         <div className="submission-container">

//           <h1>National Conference MEET 2026</h1>

//           <h2>Submission Instructions</h2>

//           <ul>
//             <li>
//               <a
//                 href="https://drive.google.com/file/d/1e2s8cCc-60qvLp4dZl2QScGKpdwHAQ--/view?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Manuscript Template
//               </a>
//             </li>

//             <li>
//               <a
//                 href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2Fyeiss2026"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Microsoft CMT
//               </a>
//             </li>

//             <li>
//               All submissions should be done through Microsoft CMT.
//             </li>

//             <li>
//               The sample paper template (short article) is made available in
//               the Download Menu.
//             </li>

//             <li>
//               All submissions will be checked for plagiarism, requiring less
//               than 15%.
//             </li>
//           </ul>

//           <h2>Submission Guidelines</h2>

//           <ul>
//             <li>
//               Submission of manuscript includes a commitment by the
//               corresponding author to ensure that at least one author registers
//               for the conclave and presents the work.
//             </li>

//             <li>
//               The camera-ready version must be in the prescribed format and
//               should include all reviewer recommendations.
//             </li>

//             <li>
//               If the manuscript does not comply with publisher standards, it
//               will not be considered for publication.
//             </li>
//           </ul>

//           <h2>Publication Details for MEET 2026</h2>

//           <ol>
//             <li>
//               Selected short papers will be considered for publication in the
//               INAE Magazine.
//             </li>

//             <li>
//               Selected full-length papers will be considered for publication
//               in a special session of the ISED 2026 Conference (IEEE,
//               Scopus-indexed),{" "}
//               <a
//                 href="https://cms.nitw.ac.in/conference/ised2026/?utm_source=chatgpt.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 ISED 2026 Conference Website
//               </a>
//               . An additional publication charge of ₹6,000 will be applicable
//               along with the registration fee.
//             </li>

//             <li>
//               Extended versions of selected papers will be forwarded for
//               consideration for publication in the Transactions of the INAE,
//               published by Springer (Scopus-indexed).
//             </li>
//           </ol>

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default MeetSubmission;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const MeetSubmission = () => {
  return (
    <>
      <Navbar />

      <section className="submission">
        <div className="submission-container">

          {/* ================= CSS ================= */}
          <style>{`
            .submission-container h3 {
              text-align: left;
              margin-top: 28px;
            }

            .submission-container h2 {
              margin-top: 35px;
            }

            .submission-container p {
              line-height: 1.6;
            }

            .submission-container ul {
              padding-left: 25px;
            }

            .submission-container li {
              margin-bottom: 10px;
              line-height: 1.6;
            }

            .formatting-table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0 30px 0;
              font-size: 16px;
            }

            .formatting-table th,
            .formatting-table td {
              border: 1px solid #ccc;
              padding: 10px 14px;
              text-align: left;
            }

            .formatting-table th {
              background-color: #f5f5f5;
              font-weight: 700;
            }

            .formatting-table th:first-child,
            .formatting-table td:first-child {
              width: 40%;
            }

            .formatting-table th:last-child,
            .formatting-table td:last-child {
              width: 60%;
            }

            .registration-notice {
              background: #fff3cd;
              border-left: 5px solid #f0ad4e;
              padding: 14px 18px;
              margin: 20px 0 30px 0;
              border-radius: 4px;
              font-size: 16px;
              line-height: 1.5;
            }

            .submission-container a {
              color: #0645ad;
              text-decoration: none;
              font-weight: 600;
            }

            .submission-container a:hover {
              text-decoration: underline;
            }
          `}</style>

          {/* ================= TITLE ================= */}

          <h1>National Conference MEET 2026</h1>

          {/* ================= REGISTRATION NOTICE ================= */}

          <div className="registration-notice">
            <strong>Registration Link:</strong> Google Form for registration
            will be available soon. Microsoft CMT is available in the
            Submission Instructions section.
          </div>

          {/* ================= SHORT ARTICLE ================= */}

          <h2>Short Article Abstract-Based Presentation</h2>

          <h3>1. Purpose</h3>

          <p>
            The Short Article is an extended version of the submitted abstract.
            Participants should present their{" "}
            <strong>
              problem, proposed idea/work, key findings, novelty, and potential
              application
            </strong>{" "}
            in a concise and technically meaningful manner.
          </p>

          <h3>2. Length</h3>

          <ul>
            <li>
              The{" "}
              <strong>
                complete article must be limited to a maximum of TWO (2) pages
              </strong>
              .
            </li>

            <li>
              The two-page limit includes{" "}
              <strong>
                text, figures, photographs, tables, equations, and references
              </strong>
              .
            </li>

            <li>
              Articles exceeding two pages may not be considered for
              evaluation.
            </li>
          </ul>

          <h3>3. Formatting Requirements</h3>

          <p>
            Participants must follow the following formatting specifications:
          </p>

          <table className="formatting-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Requirement</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Paper Size</td>
                <td>A4</td>
              </tr>

              <tr>
                <td>Maximum Length</td>
                <td>2 pages</td>
              </tr>

              <tr>
                <td>Font</td>
                <td>Times New Roman</td>
              </tr>

              <tr>
                <td>Font Size</td>
                <td>12 pt</td>
              </tr>

              <tr>
                <td>Line Spacing</td>
                <td>Single</td>
              </tr>

              <tr>
                <td>Text Alignment</td>
                <td>Justified</td>
              </tr>

              <tr>
                <td>Margins</td>
                <td>0.75–1 inch</td>
              </tr>

              <tr>
                <td>Paragraph Spacing</td>
                <td>Minimal/consistent</td>
              </tr>

              <tr>
                <td>Language</td>
                <td>English</td>
              </tr>

              <tr>
                <td>Submission Format</td>
                <td>PDF (preferred) / MS Word</td>
              </tr>
            </tbody>
          </table>

          <p>
            The Short Article is intended to communicate the essence of the
            submitted idea/work within a very limited space. Participants
            should therefore focus on{" "}
            <strong>
              “Problem → Innovation → Method → Result → Impact”
            </strong>{" "}
            rather than providing an extensive research paper.
          </p>

          {/* ================= SPRINGER ================= */}

          <h2>Full-Length Paper for Springer Transactions of INAE</h2>

          <ul>
            <li>
              Submit a full-length research paper prepared according to the
              prescribed paper format and submission guidelines.
            </li>

            <li>
              Papers will undergo peer review.
            </li>

            <li>
              Selected and accepted papers may be invited for consideration as
              extended papers in Springer Transactions of INAE, subject to the
              journal's peer-review process and editorial approval.
            </li>
          </ul>

          {/* ================= SCOPUS ================= */}

          <h2>Full-Length Paper for Scopus-Indexed Special Issue</h2>

          <ul>
            <li>
              Submit a full-length research paper prepared according to the
              prescribed submission guidelines.
            </li>

            <li>
              Papers will undergo peer review and selection.
            </li>

            <li>
              Selected papers may be considered for publication in a
              Scopus-indexed Special Issue, subject to the respective
              journal's review, acceptance, and publication policies.
            </li>
          </ul>

          {/* ================= GENERAL SUBMISSION ================= */}

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
              </a>
              .
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

          {/* ================= NOTE ================= */}

          <h2>Note</h2>

          <p>
            Acceptance for presentation at the conference does not
            automatically guarantee publication in Springer Transactions of
            INAE or a Scopus-indexed journal. Publication will be subject to
            the respective publisher/journal's review and editorial
            processes.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default MeetSubmission;