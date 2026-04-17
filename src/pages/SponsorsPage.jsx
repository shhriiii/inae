import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

const SponsorsPage = () => {
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Our Sponsors
      </h1>
      <Sponsors />
      <Footer />
    </>
  );
};

export default SponsorsPage;