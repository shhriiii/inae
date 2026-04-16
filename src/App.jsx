import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SponsorsPage from "./pages/SponsorsPage";
import SpeakersPage from "./pages/SpeakersPage";
import ContactPage from "./pages/ContactPage";
import DatesPage from "./pages/DatesPage";

import SubmissionPage from "./pages/SubmissionPage";
import ThesisPage from "./pages/ThesisPage";
import ProjectPage from "./pages/ProjectPage";
import HackathonPage from "./pages/HackathonPage";
import ArticlePage from "./pages/ArticlePage";
import AbstractPage from "./pages/AbstractPage";
import FullPaperPage from "./pages/FullPaperPage";
import CommitteePage from "./pages/CommitteePage";

function App() {
  return (
    <Routes>
      {/* MAIN */}
      <Route path="/" element={<Home />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
      <Route path="/speakers" element={<SpeakersPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/committee" element={<CommitteePage />} />
      <Route path="/dates" element={<DatesPage />} />

      {/* SUBMISSION FLOW */}
      <Route path="/submission" element={<SubmissionPage />} />
      <Route path="/submission/thesis" element={<ThesisPage />} />
      <Route path="/submission/project" element={<ProjectPage />} />
      <Route path="/submission/hackathon" element={<HackathonPage />} />
      <Route path="/submission/article" element={<ArticlePage />} />

      <Route path="/submission/article/abstract" element={<AbstractPage />} />
      <Route path="/submission/article/full" element={<FullPaperPage />} />
    </Routes>
  );
}

export default App;