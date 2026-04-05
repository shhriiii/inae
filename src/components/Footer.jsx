import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h3>INAE 2026</h3>
          <p>Empowering Youth for Sustainable Innovation</p>
        </div>

 <div>
  <h4>Quick Links</h4>
  <p><Link to="/">Home</Link></p>
  <p><Link to="/speakers">Speakers</Link></p>
  <p><Link to="/submission">Submission</Link></p>
  <p><Link to="/contact">Contact</Link></p>
</div>

        <div>
          <h4>Contact</h4>
          <p>email</p>
          <p>NIT Raipur, India</p>
        </div>

      </div>

      <p className="footer-bottom">
        © 2026 INAE Youth Conclave | NIT Raipur
      </p>

    </footer>
  );
};

export default Footer;