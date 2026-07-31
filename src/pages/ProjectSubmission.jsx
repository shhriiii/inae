import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectSubmission = () => {
  return (
    <>
      <Navbar />

      <section className="submission">
        <div className="submission-container">

          <h1>Project Submission</h1>

          <p>
            <strong>Methodology, Implementation procedure in abstract format.</strong>
          </p>

          <h2>Project Exhibition Themes</h2>

          <ul>
            <li>ET 1: Eco-Friendly Construction: Blending Heritage with Sustainability</li>
            <li>ET 2: Metallurgy, Water & Energy Management: From Legacy to Cutting-Edge Solutions</li>
            <li>ET 3: Bio-Inspired Engineering: Nature-Inspired Innovations for Future Technologies</li>
            <li>ET 4: AI-Driven Smart Welding & Additive Manufacturing</li>
            <li>ET 5: Next-Generation MSMEs: Digital Twins and Smart Manufacturing</li>
            <li>ET 6: Emerging Challenges and Future Technologies</li>
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

          <h2>Project Exhibition Procedure</h2>

          <p>
            The <strong>Project Exhibition</strong> provides an opportunity for
            students to demonstrate innovative prototypes, engineering models,
            research outcomes, and technology-driven solutions addressing
            contemporary industrial and societal challenges.
          </p>

          <h3>1. Eligibility</h3>

          <p>Participation is open to:</p>

          <ul>
            <li>Schools (Classes IX–XII)</li>
            <li>Polytechnics</li>
            <li>Undergraduate Students</li>
            <li>Postgraduate Students</li>
            <li>Research Scholars</li>
          </ul>

          <p>
            Each team shall consist of a minimum of <strong>2</strong> and a
            maximum of <strong>4</strong> students.
          </p>

          <h3>2. Registration</h3>

          <p>Teams shall submit:</p>

          <ul>
            <li>Online Registration Form</li>
            <li>Project Title</li>
            <li>Abstract (300–500 words)</li>
            <li>Team Details</li>
            <li>Faculty Mentor Details (if applicable)</li>
          </ul>

          <h3>3. Project Categories</h3>

          <p>
            Projects may be submitted under, but are not limited to, the
            following areas:
          </p>

          <ul>
            <li>Sustainable Engineering</li>
            <li>Smart Manufacturing</li>
            <li>Renewable Energy</li>
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Robotics and Automation</li>
            <li>Internet of Things (IoT)</li>
            <li>Smart Agriculture</li>
            <li>Water Resource Management</li>
            <li>Healthcare Technologies</li>
            <li>Bio-Inspired Engineering</li>
            <li>Digital Manufacturing</li>
            <li>Industry 5.0</li>
            <li>Indigenous Technologies</li>
            <li>Rural Innovation</li>
            <li>Emerging Engineering Technologies</li>
          </ul>

          <h3>4. Exhibition Requirements</h3>

          <p>Each participating team shall display:</p>

          <ul>
            <li>Working Prototype or Functional Model</li>
            <li>Technical Poster (A1 size recommended)</li>
            <li>Project Summary</li>
            <li>Demonstration Material</li>
            <li>Laptop or supporting equipment (if required)</li>
          </ul>

          <p>
            Power supply will be provided on request. Participants shall arrange
            any specialised equipment required for demonstration.
          </p>

          <h3>5. Exhibition Schedule</h3>

          <h4>Project Setup</h4>

          <p>
            Participants shall complete the installation of their exhibits
            before the commencement of the exhibition.
          </p>

          <h4>Jury Evaluation</h4>

          <ul>
            <li>Project Demonstration – 5 Minutes</li>
            <li>Interaction with Jury – 5 Minutes</li>
          </ul>

          <p>
            Visitors, industry experts and academicians will also have the
            opportunity to interact with the teams throughout the exhibition.
          </p>

          <h3>6. Evaluation Criteria</h3>

          <table className="submission-table">
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Weightage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Innovation and Novelty</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Technical Merit</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Practical Utility</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Design and Prototype Quality</td>
                <td>15</td>
              </tr>
              <tr>
                <td>Societal and Industrial Relevance</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Sustainability</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Presentation and Demonstration</td>
                <td>10</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>100</strong></td>
              </tr>
            </tbody>
          </table>

          <h3>7. Awards</h3>

          <p>
            Awards will be presented to the best projects in recognition of
            innovation, technical excellence, and societal impact. Special
            awards may also be instituted for outstanding interdisciplinary and
            sustainable engineering solutions.
          </p>

          <h3>8. General Guidelines</h3>

          <ul>
            <li>The project must represent the original work of the participants.</li>
            <li>Teams shall clearly acknowledge the use of open-source software, datasets, or external support, if any.</li>
            <li>Hazardous materials or unsafe demonstrations shall not be permitted without prior approval.</li>
            <li>The Organizing Committee reserves the right to reject any exhibit that does not comply with safety or ethical standards.</li>
            <li>The decision of the Jury shall be final and binding.</li>
            <li>All registered participants will receive Certificates of Participation.</li>
            <li>Outstanding projects may be considered for incubation support, industry interaction, or recommendation for special recognition by the Organizing Committee.</li>
          </ul>

          {/* ================= NEW CONTENT END ================= */}

        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProjectSubmission;