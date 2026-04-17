import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div>
          <h3>YEISS 2026</h3>
          <p>Empowering Youth for Sustainable Innovation</p>
        </div>

 <div>
  <h4>Quick Links</h4>
  <p><Link to="/">Home</Link></p>
  <p><Link to="/speakers">Speakers</Link></p>
  <p><Link to="/submission">Submission</Link></p>
  <p><Link to="/contact">Contact</Link></p>
  <p><Link to="/committee">Committee</Link></p>
</div>

        <div>
          <h4>Contact</h4>
          <p>yeiss@nitrr.ac.in</p>
          <p>NIT Raipur, India</p>
        </div>

      </div>

      <p className="footer-bottom">
        © 2026 YEISS 2026 | NIT Raipur
        <br></br>
        {/* <br></br>
        The Microsoft CMT service was used for managing the peer-reviewing process for this conference.<br></br> This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support. */}
      </p>

    </footer>
  );
};

export default Footer;