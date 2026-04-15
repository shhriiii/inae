import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Sponsors from "../components/Sponsors";
import ImportantDates from "../components/ImportantDates";
import Institute from "../components/Institute";
import Speakers from "../components/Speakers";
import Submission from "../components/Submission";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Advisory from "../components/Advisory";
const Home = () => {
  return (
<>
  <Navbar />
  <Hero />
  <Sponsors />
  <About />
  <ImportantDates />
    <Institute />
    <Speakers />
      <Advisory /> 
    <Submission />
    <Contact />
    <Footer />
</>
  );
};

export default Home;