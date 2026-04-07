import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        {/* logo yaha */}
        <img  src="https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNjlkNDk5ZDJlMzY4ODE5MTkyN2IzNDcxZjNkZmIyMjI6ZmlsZV8wMDAwMDAwMDhkYTg3MjA4OWU1OGM5NGE4MjA5YzEzZSIsInRzIjoiMjA1NTAiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6ImZiNGFlYmVjZGM1YWNjYzA3NzdkODczNGUxOWUzZmQzNjQ2ZjhiNDMyMTY0NDgwNzcyNDFkNmE3YTIwZmRlMGMiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY2RuIjpudWxsLCJjcCI6bnVsbCwibWEiOm51bGx9" alt="logo" className="logo" />
        <span className="title">YEISS 2026</span>
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
        <a 
  href="https://drive.google.com/file/d/1qJfyOSSHavftUiCcA8nVfDyCTXPyWO89/view?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="btn filled">Download</button>
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