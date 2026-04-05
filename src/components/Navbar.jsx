import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        {/* logo yaha */}
        <img  alt="logo" className="logo" />
        <span className="title">INAE 2026</span>
      </div>

      {/* CENTER */}
<ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/dates">Important Dates</Link></li>
  <li><Link to="/submission">Call for Papers</Link></li>
  <li><Link to="/speakers">Speakers</Link></li>
  <li><Link to="/contact">Contact</Link></li>
</ul>

      {/* RIGHT */}
      <div className="nav-buttons">
        <button className="btn outline">Download</button>
        <button className="btn filled">Register</button>
      </div>

    </nav>
  );
};

export default Navbar;