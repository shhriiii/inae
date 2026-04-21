import "./Submission.css";
import { Link } from "react-router-dom";

const Submission = () => {
  return (
<section className="submission">

  <h2>Submission</h2>

  <p>
    Participants must submit an <b>ABSTRACT</b> of their work for oral presentations in the conclave.
  </p>

  <h3>Instruction to the Participants</h3>

  <ol>
    <li>
      Author should submit an Abstract manuscript to{" "}
      <a href="https://cmt3.research.microsoft.com/yeiss2026" target="_blank">
        Microsoft CMT
      </a>{" "}
      for the peer review process in the 1<sup>st</sup> phase.
    </li>

    <li>
      Selected Abstracts will be displayed on the website as per the deadline in the 2<sup>nd</sup> phase.
    </li>

    <li>
      Full-length work needs to be submitted in the 3<sup>rd</sup> phase for final presentation and publication.
    </li>

    <li>
      There are 4 categories of submissions:
      <br />
      (a) Hackathon Submission (Core idea, Methodology, Implementation procedure in abstract format)
      <br />
      (b) Project Submission (Methodology, Implementation procedure in abstract format)
      <br />
      (c) Short Article Submission (Abstract of the work done)
      <br />
      (d) Thesis Submission (Thesis Abstract)
    </li>
  </ol>

  <h4>Submission Instructions:</h4>

  <ul>
    <li>
      All submissions should be done through{" "}
      <a href="https://cmt3.research.microsoft.com/yeiss2026" target="_blank">
        Microsoft CMT
      </a>.
    </li>

    <li>
      The sample paper template (short article) is made available in the{" "}
      <Link to="/download" className="download-link">
        Download Menu
      </Link>.
    </li>

    <li>
      All submissions will be checked for plagiarism, requiring less than 15%.
    </li>
  </ul>

  <h3>Submission Guidelines for Participants</h3>

  <ul>
    <li>
      Submission of manuscript includes a commitment by the corresponding author to ensure that at least one of the authors of the manuscript registers for the conclave and presents his/her/their work.
    </li>

    <li>
      The camera-ready version must be in the prescribed format and should include all the reviewer recommendations, failing which the work will not be submitted for publication as a proceeding.
    </li>

    <li>
      At any stage of the submission process, if the organizer feels that the manuscript doesn't comply with the standards of the publisher, it will not be considered for publication.
    </li>
  </ul>

</section>
  );
};

export default Submission;