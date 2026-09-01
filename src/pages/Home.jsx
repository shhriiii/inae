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
import Committee from "../components/Committee";
import SubmissionRegistration from "../components/SubmissionRegistration";
import VideoSection from "../components/VideoSection";
const Home = () => {
  return (
<>
  <Navbar />
  <Hero />
  <Sponsors />
   <VideoSection />
  <About />
 
  <SubmissionRegistration />
  <ImportantDates />
    <Institute />
    <Speakers />
  <Committee />  
    {/* <Submission /> */}
    <Contact />
    <Footer />
</>
  );
};

export default Home;