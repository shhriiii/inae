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

        </div>
      </section>

      <Footer />
    </>
  );
};

export default HackathonSubmission;