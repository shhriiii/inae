import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">

      <h2>Contact Us</h2>

      <div className="contact-container">

        <div className="contact-card">
          <h3>Email</h3>
          <p><b>yeiss@nitrr.ac.in</b></p>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>

          <p><b>Dr. Sanjeev Kumar:</b> 9410045437</p>
          <p><b>Dr. Ashish Kumar Dash:</b> 9406148487</p>
          <p><b>Dr. Jitendra Kumar Rout:</b> 7008153233</p>
          <p><b>Dr. Chandan Kumar Singh:</b> 7276170435</p>

        </div>

        <div className="contact-card">
          <h3>Location</h3>

          <iframe
            src="https://www.google.com/maps?q=NIT+Raipur&output=embed"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </section>
  );
};

export default Contact;
