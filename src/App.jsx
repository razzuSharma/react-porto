import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Services";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
