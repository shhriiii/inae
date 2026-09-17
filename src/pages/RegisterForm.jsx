import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RegisterForm = () => {
  return (
    <>
      <Navbar />

      <style>{`
        .registration-section {
          padding: 60px 20px;
          background: #f4f6fb;
        }

        .registration-container {
          max-width: 1100px;
          margin: 0 auto;
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .registration-container h1 {
          text-align: center;
          color: #0c1c5a;
          margin-bottom: 30px;
        }

        .registration-container h2 {
          color: #0c1c5a;
          margin-top: 30px;
          margin-bottom: 20px;
        }

        /* Normal registration link - no yellow box */
        .registration-link-text {
          margin: 20px 0 30px;
          line-height: 1.6;
          // font: #0c1c5a !important;
          // font-color: #0c1c5a;

        }

        .registration-link {
          color: #0645ad !important;
          // font-color: #0c1c5a !important;
          font-weight: 600;
          text-decoration: underline;
        }

        .registration-link:hover {
          color: #0c1c5a;
        }

        /* How to Register Video */
        .registration-video {
          margin: 30px 0 40px;
        }

        .registration-video h2 {
          margin-bottom: 15px;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 10px;
        }

        .video-container iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }

        .registration-table {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0 40px;
          background: white;
        }

        .registration-table th,
        .registration-table td {
          border: 1px solid #ccc;
          padding: 14px;
          text-align: left;
          vertical-align: top;
        }

        .registration-table th {
          background: #0c1c5a;
          color: white;
          font-weight: bold;
        }

        .registration-table td {
          line-height: 1.5;
        }

        .registration-category td {
          background: #f4f6fb;
          color: #0c1c5a;
          font-size: 18px;
          text-align: left;
        }

        @media (max-width: 768px) {
          .registration-container {
            padding: 20px;
          }

          .registration-table {
            font-size: 14px;
          }

          .registration-table th,
          .registration-table td {
            padding: 10px;
          }

          .registration-video {
            margin-top: 25px;
          }
        }
      `}</style>

      <section className="registration-section">
        <div className="registration-container">

          <h1>Registration</h1>

          {/* Registration Link */}
          <p className="registration-link-text">
            <strong>Registration Link:</strong>{" "}
            <a
              href="https://forms.gle/3uwM9picYgCepT7z8"
              target="_blank"
              rel="noopener noreferrer"
              className="registration-link"
            >
              Click here to register
            </a>
          </p>

          {/* How to Register Video */}
         

          {/* Registration Table */}
          <table className="registration-table">
            <thead>
              <tr>
                <th>Theme</th>
                <th>Participants</th>
                <th>Registration Charge</th>
              </tr>
            </thead>

            <tbody>

              {/* Hackathon */}
              <tr>
                <td>Hackathon</td>
                <td>
                  School students (8th to 12th)
                </td>
                <td>
                  NIL
                </td>
              </tr>

              {/* Project Exhibition */}
              <tr>
                <td>Project Exhibition/Idea</td>
                <td>
                  School students (8th to 12th)
                </td>
                <td>
                  NIL
                </td>
              </tr>

              {/* Conference */}
              <tr className="registration-category">
                <td colSpan="3">
                  <strong>Conference</strong>
                </td>
              </tr>

              {/* Abstract Based */}
              <tr>
                <td>Abstract Based</td>
                <td>
                  UG / PG / PhD
                </td>
                <td>
                  NIL
                </td>
              </tr>

              {/* Transactions of INAE */}
              <tr>
                <td>
                  Full Length Paper – Publication as Extended Version in
                  Transactions of INAE as per Journal Terms
                </td>
                <td>
                  UG / PG / PhD / Young Professionals from Industry / Faculty
                </td>
                <td>
                  NIL
                </td>
              </tr>

              {/* Scopus Special Issue */}
              <tr>
                <td>
                  Full Length Paper – Publication in Scopus-Based Special Issue
                </td>
                <td>
                  UG / PG / PhD / Young Professionals from Industry / Faculty
                </td>
                <td>
                  NIL
                </td>
              </tr>

            </tbody>
          </table>
           <div className="registration-video">
            <h2>How to Register</h2>

            <div className="video-container">
              <iframe
                src="https://www.youtube-nocookie.com/embed/XSqJdZp9qZs"
                title="How to Register"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
        
      </section>

      <Footer />
    </>
  );
};

export default RegisterForm;