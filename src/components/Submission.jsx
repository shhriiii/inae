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
  <b>(a) Hackathon Submission (Core idea, Methodology, Implementation procedure in abstract format) </b>

  {/* <br /><br /> */}
  <strong>Hackathon Themes</strong>
  <br />
  Participants may develop innovative solutions for hackathon in any of the following thematic areas:
  <br />
  • HT1: Eco-Friendly Housing Models with Near-Zero Carbon Footprint <br />
  • HT2: AI-Based Building Energy Monitoring and Optimization Systems <br />
  • HT3: Smart Irrigation Systems Based on Plant Health and Environmental Sensing <br />
  • HT4: AI-Enabled Predictive Maintenance for Industrial Equipment <br />
  • HT5: AI-Assisted Decision Support Systems for Engineering and Public Services <br />
  • HT6: Smart Healthcare Devices for Remote Monitoring and Preventive Care <br />
  • HT7: Real-Time Disaster Detection, Early Warning, and Emergency Response Systems <br />
  • HT8: Smart City Solutions for Sustainable Urban Infrastructure <br />
  • HT9: IoT-Enabled Smart Farming Devices for Precision Agriculture <br />
  • HT10: AI-Based Scrap Management and Intelligent Waste Segregation Systems <br />
  • HT11: Circular Economy Solutions for Resource Recovery and Sustainable Manufacturing <br />
  • HT12: Clean Energy Technologies and Renewable Energy Innovations <br />
  • HT13: Industry 5.0 Solutions for Human-Centric Smart Manufacturing <br />
  • HT14: Digital Twin Applications for MSMEs and Smart Factories <br />
  • HT15: Bio-Inspired Engineering Solutions for Sustainable Technologies

  <br /><br />
  <b>(b) Project Submission (Methodology, Implementation procedure in abstract format)</b>

  {/* <br /><br /> */}
  <strong>Project Exhibition Themes</strong>
  <br />
  Participants may develop innovative solutions for Project Exhibition in any of the following thematic areas:
  <br />
  • ET 1: Eco-Friendly Construction: Blending Heritage with Sustainability <br />
  • ET 2: Metallurgy, Water & Energy Management: From Legacy to Cutting-Edge Solutions <br />
  • ET 3: Bio-Inspired Engineering: Nature-Inspired Innovations for Future Technologies <br />
  • ET 4: AI-Driven Smart Welding & Additive Manufacturing <br />
  • ET 5: Next-Generation MSMEs: Digital Twins and Smart Manufacturing <br />
  • ET 6: Emerging Challenges and Future Technologies

  <br /><br />
  <b>(c) Short Article Submission (Abstract of the work done) </b>
  <br />
  <b>(d) Thesis Submission (Thesis Abstract)</b>
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