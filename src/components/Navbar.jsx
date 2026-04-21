import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        {/* logo yaha */}
        <img  src="https://i.pinimg.com/736x/95/b8/a3/95b8a301ec506f9eaa0f558c427ee8d6.jpg" alt="logo" className="logo" />
        <span className="title">YEISS 2026</span>
      </div>

      {/* CENTER */}
<ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/dates">Important Dates</Link></li>
  <li><Link to="/submission">Paper Submission </Link></li>
  <li><Link to="/speakers">Speakers</Link></li>
  <li><Link to="/committee">Committee</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/download">Download</Link></li>
</ul>

      {/* RIGHT */}
      <div className="nav-buttons">
        <a 
  href="https://drive.google.com/file/d/1n95Fs-u6ECC5yBqUojiUMhlpbfWPXh-p/view?usp=drivesdk" 
  target="_blank" 
  rel="noopener noreferrer"
>
  {/* <button className="btn filled">Download</button> */}
</a>
      <button 
  className="btn filled"
  onClick={() => alert("Form link coming Soon!!")}
>
  Register
</button>
      </div>

    </nav>
  );
};

export default Navbar;