import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HackathonSubmission = () => {
  return (
    <>
      <Navbar />

      <section className="submission">
        <div className="submission-container">

          <h1>Hackathon Submission</h1>

          <p>
            Participants may develop innovative solutions for hackathon in any
            of the following thematic areas:
          </p>

          <ul>
            <li>HT1: Eco-Friendly Housing Models with Near-Zero Carbon Footprint</li>
            <li>HT2: AI-Based Building Energy Monitoring and Optimization Systems</li>
            <li>HT3: Smart Irrigation Systems Based on Plant Health and Environmental Sensing</li>
            <li>HT4: AI-Enabled Predictive Maintenance for Industrial Equipment</li>
            <li>HT5: AI-Assisted Decision Support Systems for Engineering and Public Services</li>
            <li>HT6: Smart Healthcare Devices for Remote Monitoring and Preventive Care</li>
            <li>HT7: Real-Time Disaster Detection, Early Warning, and Emergency Response Systems</li>
            <li>HT8: Smart City Solutions for Sustainable Urban Infrastructure</li>
            <li>HT9: IoT-Enabled Smart Farming Devices for Precision Agriculture</li>
            <li>HT10: AI-Based Scrap Management and Intelligent Waste Segregation Systems</li>
            <li>HT11: Circular Economy Solutions for Resource Recovery and Sustainable Manufacturing</li>
            <li>HT12: Clean Energy Technologies and Renewable Energy Innovations</li>
            <li>HT13: Industry 5.0 Solutions for Human-Centric Smart Manufacturing</li>
            <li>HT14: Digital Twin Applications for MSMEs and Smart Factories</li>
            <li>HT15: Bio-Inspired Engineering Solutions for Sustainable Technologies</li>
          </ul>

          <h2>Submission Instructions</h2>

          <ul>
            <li>All submissions should be done through Microsoft CMT.</li>
            <li>The sample paper template (short article) is made available in the Download Menu.</li>
            <li>All submissions will be checked for plagiarism, requiring less than 15%.</li>
          </ul>

          <h2>Submission Guidelines</h2>

          <ul>
            <li>
              Submission of manuscript includes a commitment by the corresponding author to ensure that at least one author registers for the conclave and presents the work.
            </li>
            <li>
              The camera-ready version must be in the prescribed format and should include all reviewer recommendations.
            </li>
            <li>
              If the manuscript does not comply with publisher standards, it will not be considered for publication.
            </li>
          </ul>

          {/* ================= NEW CONTENT START ================= */}

          <h2>Hackathon / Project Exhibition Participation Guidelines</h2>

          <h3>1. Eligibility</h3>
          <ul>
            <li>Participation is open to students from Schools (Classes VIII–XII), Polytechnics, Undergraduate and Postgraduate programmes.</li>
            <li>Each team shall consist of a minimum of <strong>2</strong> and a maximum of <strong>5</strong> students.</li>
            <li>Each institution may nominate multiple teams.</li>
            <li>One faculty mentor may guide multiple teams; mentors shall not participate during the competition.</li>
            <li>Interdisciplinary teams from different departments, institutions or academic levels are encouraged.</li>
          </ul>

          <h3>2. Registration</h3>
          <p>
            Each team must complete online registration before the prescribed
            deadline by submitting:
          </p>
          <ul>
            <li>Team details</li>
            <li>Institutional affiliation</li>
            <li>Team leader information</li>
            <li>Selected Hackathon / Project Exhibition theme</li>
            <li>Brief concept note (maximum 300 words)</li>
          </ul>
          <p>Only registered teams will be eligible to participate.</p>

          <h3>3. Registration & Abstract Submission</h3>
          <ul>
            <li>Interested teams must register online and submit an abstract before the deadline.</li>
            <li>The abstract should include:
              <ul>
                <li>Problem Statement</li>
                <li>Proposed Solution</li>
                <li>Innovation & Uniqueness</li>
                <li>Expected Outcomes</li>
                <li>Technologies / Tools to be Used</li>
              </ul>
            </li>
            <li>Abstracts will be evaluated by the Technical Committee, and results will be communicated within 7 days.</li>
          </ul>

          <h3>4. Prototype / Model Development</h3>
          <ul>
            <li>A working prototype, proof-of-concept or functional model must be demonstrated during the Hackathon.</li>
            <li>Submission of an abstract alone does not qualify a team for final participation.</li>
            <li>Teams are expected to develop their prototype between abstract submission and the event.</li>
          </ul>

          <h3>5. Progress Presentation (Mandatory)</h3>
          <ul>
            <li>Approximately one month before the Hackathon, shortlisted teams shall deliver an online/offline progress presentation.</li>
            <li>The presentation should cover:
              <ul>
                <li>Progress made since abstract submission</li>
                <li>Current prototype status</li>
                <li>Technical feasibility</li>
                <li>Implementation methodology</li>
                <li>Expected completion plan</li>
              </ul>
            </li>
            <li>The committee may provide technical suggestions for improvement.</li>
          </ul>

          <h3>6. Final Project Submission</h3>
          <ul>
            <li>Final Project Report (maximum 5 pages)</li>
            <li>Presentation (maximum 10 slides)</li>
            <li>Prototype photographs/videos (maximum 5 images, up to 25 MB)</li>
            <li>Source code / design files (where applicable)</li>
            <li>Declaration of originality</li>
            <li>The organizing committee may grant an extension of up to seven days if required.</li>
          </ul>

          <h3>7. Final Approval for Participation</h3>
          <ul>
            <li>The Technical Committee will review project readiness.</li>
            <li>Only teams receiving final approval (Green Signal) will be permitted to present during the Hackathon.</li>
          </ul>

          <h3>8. Demonstration During the Event</h3>
          <ul>
            <li>Each shortlisted team must physically demonstrate its working prototype.</li>
            <li>The presentation should include:
              <ul>
                <li>Problem Addressed</li>
                <li>Design Methodology</li>
                <li>Innovation</li>
                <li>Prototype Demonstration</li>
                <li>Practical Applications</li>
                <li>Future Scope</li>
              </ul>
            </li>
          </ul>

          <h3>9. Evaluation Criteria</h3>

          <table className="submission-table">
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Weightage</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Innovation and Originality</td><td>20</td></tr>
              <tr><td>Technical Excellence</td><td>20</td></tr>
              <tr><td>Feasibility and Scalability</td><td>15</td></tr>
              <tr><td>Prototype Functionality</td><td>15</td></tr>
              <tr><td>Practical & Societal Impact</td><td>15</td></tr>
              <tr><td>Sustainability</td><td>5</td></tr>
              <tr><td>Presentation & Communication</td><td>10</td></tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>100</strong></td>
              </tr>
            </tbody>
          </table>

          <h3>10. Originality</h3>
          <ul>
            <li>All submissions must represent the team's original work.</li>
            <li>Plagiarism or intellectual property violations will result in immediate disqualification.</li>
            <li>Open-source libraries and publicly available resources may be used with proper acknowledgment.</li>
          </ul>

          <h3>11. Competition Format</h3>

          <h4>Phase I – Registration & Orientation</h4>
          <ul>
            <li>Verification of participants</li>
            <li>Distribution of participant kits</li>
            <li>Briefing on rules, schedule, evaluation criteria and code of conduct</li>
          </ul>

          <h4>Phase II – Problem Statement</h4>
          <p>
            Problem statements will be released by the Organizing Committee at
            the commencement of the Hackathon. Teams shall work only on the
            assigned or approved problem statement.
          </p>

          <h4>Phase III – Ideation</h4>
          <p>
            Teams will analyse the problem, identify user requirements, prepare
            the solution architecture and develop an implementation strategy.
          </p>

          <h4>Phase IV – Prototype Development</h4>
          <p>The solution may include:</p>

          <ul>
            <li>Hardware Prototype</li>
            <li>Software Application</li>
            <li>Mobile / Web Application</li>
            <li>AI / ML Solution</li>
            <li>IoT Prototype</li>
            <li>Digital Twin</li>
            <li>Engineering Design or Simulation</li>
            <li>Manufacturing Process Innovation</li>
          </ul>

          <p>
            Participants may use open-source software, development platforms and
            standard engineering tools.
          </p>

          <h4>Phase V – Mentoring</h4>
          <p>
            Technical experts, industry professionals and INAE Fellows will
            interact with teams to provide guidance. Mentors shall not directly
            contribute to solution development.
          </p>

          <h4>Phase VI – Final Submission</h4>

          <ul>
            <li>Executive Summary (maximum 2 pages)</li>
            <li>Presentation (maximum 10 slides)</li>
            <li>Prototype / Demonstration</li>
            <li>Source Code / Design Files (where applicable)</li>
            <li>Online submission of working concepts/prototypes is mandatory.</li>
            <li>Late submissions shall not be accepted.</li>
          </ul>

          <h3>12. Final Presentation</h3>

          <ul>
            <li>Presentation – 5 Minutes</li>
            <li>Prototype Demonstration – 3 Minutes</li>
            <li>Question & Answer – 5 Minutes</li>
          </ul>

          <h3>13. Awards</h3>

          <p>
            Awards will be presented for First, Second and Third positions,
            along with Special Jury Awards recognizing exceptional innovation,
            sustainability and societal impact.
          </p>

          <h3>14. General Rules</h3>

          <ul>
            <li>All work must be completed during the Hackathon.</li>
            <li>Teams shall work independently without external assistance.</li>
            <li>Plagiarism or intellectual property infringement will result in immediate disqualification.</li>
            <li>The decision of the Jury and Organizing Committee shall be final and binding.</li>
            <li>All participants will receive a Certificate of Participation.</li>
            <li>Selected participants may be recommended for INAE Student Membership, subject to approval by the Indian National Academy of Engineering (INAE).</li>
          </ul>

          {/* ================= NEW CONTENT END ================= */}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default HackathonSubmission;