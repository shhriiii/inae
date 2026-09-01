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

const MeetSubmission = () => {
  return (
    <>
      <Navbar />

      <section className="submission">
        <div className="submission-container">

          <h1>National Conference MEET 2026</h1>

          <div className="registration-notice">
            <strong>Registration Link:</strong> Google Form for registration
            will be available soon. Microsoft CMT is available in the
            Submission Instructions section.
          </div>

          <h2>Abstract Submission based Presentation</h2>

          <ul>
            <li>
              Submit an abstract summarizing the research work.
            </li>

            <li>
              Accepted abstracts will be considered for oral/poster
              presentation at the conference.
            </li>

            <li>
              Accepted abstracts will be published in the conference
              proceedings, subject to the conference's publication guidelines.
            </li>
          </ul>

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
              The sample paper template (short article) is made available in
              the{" "}
              <a
                href="/download"
                className="download-link"
              >
                Download Menu
              </a>.
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