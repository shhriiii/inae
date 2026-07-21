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
            <a href="https://drive.google.com/file/d/1UheAlg2TmS8cuiJzGKMR0K6aY5_alWoI/view?usp=sharing" target="_blank">
              YEISS Flyer
            </a>
          </li>

          {/* <li>
            <a href="/files/brochure.pdf" target="_blank">
              Conference Brochure
            </a>
          </li> */}
          <li>
            <a href="https://drive.google.com/file/d/1V_EARQV7o6F--7VYgOPF3272Frt1lhFf/view?usp=sharing" target="_blank">
              Declaration Form
            </a>
          </li>

          <li>
            <a href="https://drive.google.com/file/d/1e2s8cCc-60qvLp4dZl2QScGKpdwHAQ--/view?usp=sharing" target="_blank">
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