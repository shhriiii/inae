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

        .registration-note {
          background: #fff3cd;
          border-left: 5px solid #ff9d2f;
          padding: 15px 20px;
          margin: 20px 0 30px;
          border-radius: 6px;
          line-height: 1.6;
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
        }
      `}</style>

      <section className="registration-section">
        <div className="registration-container">

          <h1>Registration</h1>
          <div className="registration-notice">
  <strong>Registration Link:</strong>{" "}
  Google Form for registration will be available soon.
</div>

          <h2>Registration Charges</h2>

          <div className="registration-note">
            <strong>Important Registration Fee Notice:</strong>{" "}
            The registration fee applicable will be based on the actual date
            of payment. Participants must pay the fee corresponding to the
            applicable date.
            <br />
            <br />
            For example, if payment is made on <strong>8 October</strong>,
            the applicable fee is <strong>₹3,500</strong>. Payment of the
            earlier fee of ₹3,000 will <strong>not be considered valid</strong>.
            Participants are requested to carefully check the applicable fee
            before making the payment.
          </div>

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
                  No Fee
                </td>
              </tr>

              {/* Project Exhibition */}
              <tr>
                <td>Project Exhibition/Idea</td>
                <td>
                  School students (8th to 12th)
                </td>
                <td>
                  No Fee
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
                  No Fee
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
                  ₹3,000 – Before 7th Oct
                  <br />
                  ₹3,500 – 8th to 15th Oct
                  <br />
                  ₹4,000 – Spot Registration
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
                  ₹8,000 – Before 7th Oct
                  <br />
                  ₹9,000 – 8th to 15th Oct
                </td>
              </tr>

            </tbody>
          </table>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default RegisterForm;