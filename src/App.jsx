import React from "react";
import Navbar from "./navbar/Navbar";
import IntroPage from "./intro/IntroPage";
import Projects from "./projects/Projects";
import ContactPage from "./contact/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
