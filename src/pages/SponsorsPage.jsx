import Navbar from "../components/Navbar";
import Sponsors from "../components/Sponsors";

const SponsorsPage = () => {
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Our Sponsors
      </h1>
      <Sponsors />
    </>
  );
};

export default SponsorsPage;