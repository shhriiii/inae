import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RegisterForm = () => {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "calc(100vh - 420px)", // Adjust if your footer/navbar height changes
          padding: "50px 80px",
          background: "#f4f6fb",
        }}
      >
        <section className="submission">
          <h1
            style={{
              textAlign: "center",
              color: "#0c1c5a",
              marginBottom: "30px",
            }}
          >
            Registration
          </h1>

          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <ul>
              {/* <li>
                <a href="#" className="download-link">
                  Format for conference (word)
                </a>
              </li>

              <li>
                Themes for Hackathon and Project Exhibition
                (put on page, don't as a file)
              </li>

              <li>
                <a href="#" className="download-link">
                  Themes guidelines (pdf)
                </a>
              </li> */}

              <li>
                <strong>Registration Charges:</strong>
                <ul style={{ marginTop: "10px" }}>
                  <li>Hackathon / Project – Rs. 1200 per team</li>
                  <li>Thesis – Rs. 1000 per thesis</li>
                  <li>National Conference – Rs. 3000 per paper</li>
                </ul>
              </li>

              {/* <li>
                <a href="#" className="download-link">
                  New Flyer (PDF)
                </a>
              </li>

              <li>Add guest name with pic (attached in word)</li> */}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RegisterForm;