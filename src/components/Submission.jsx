import "./Submission.css";
import { Link } from "react-router-dom";

const Submission = () => {
  return (
    <section className="submission">

  <h2>Paper Submission</h2>

  <p>
    Authors/Participants have to submit <b>full paper</b> to participate in oral/poster presentations.
  </p>

  <h3>Instruction to the Participants</h3>

  <p>
    Author should submit full-length manuscript to{" "}
    <a href="https://cmt3.research.microsoft.com/yeiss2026" target="_blank">
    Microsoft CMT 
      
    </a>{" "}
     for peer review process.
  </p>

  <h4>Submission Instructions:</h4>

  <ul>
    <li>
      Paper submissions should be done through{" "}
      <a href="https://cmt3.research.microsoft.com/yeiss2026" target="_blank">
        Microsoft CMT
      </a>.
    </li>

    <li>
      The sample paper template is made available on the conference website in the{" "}
<Link to="/download" className="download-link">
  Download Menu
</Link>.
    </li>

    <li>
      The paper should be written in IEEE double-column conference format and restricted to a maximum of 6 pages only. Extra pages (beyond the 6-page limit, up to a maximum of 8 pages) are subject to additional charges of INR 1000 per page for Indian authors and USD 20 per page for foreign authors.
    </li>

    <li>
      All submissions will be checked for plagiarism, requiring less than 15%.
    </li>
  </ul>

  <h3>Submission Guidelines for Participants</h3>

  <ul>
    <li>
      Submission of manuscript includes a commitment by the corresponding author to ensure that at least one of the authors of the manuscript registers for the conference and presents his/her/their work.
    </li>

    <li>
      The camera-ready article must be in the prescribed format and should include all the reviewer recommendations, failing which the article will not be submitted for publication as a Conference proceeding.
    </li>
    <li>
      At any stage of the submission process, if the organizer feels that the manuscript doesn't comply with the standards of the publisher, it will not be considered for publication.
    </li>
  </ul>

</section>
  );
};

export default Submission;