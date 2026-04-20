import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Download.css";
import { Link } from "react-router-dom";

const DownloadPage = () => {
  return (
    <>
      <Navbar />

      <section className="download">
        <h2>Download</h2>

        <ul className="download-list">
          <li>
            <a href="https://drive.google.com/file/d/1n95Fs-u6ECC5yBqUojiUMhlpbfWPXh-p/view?usp=drivesdk" target="_blank">
              YEISS Banner
            </a>
          </li>

          {/* <li>
            <a href="/files/brochure.pdf" target="_blank">
              Conference Brochure
            </a>
          </li> */}

          <li>
            <a href=" https://www.ieee.org/conferences/publishing/templates" target="_blank">
              Manuscript Template
            </a>
          </li>

<li>
  <Link to="/dates">
    Schedule of YEISS 2026
  </Link>
</li>
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default DownloadPage;