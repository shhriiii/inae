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

export default ProjectSubmission;