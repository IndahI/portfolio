import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./Home";
import DetailProject from './components/DetailProject';
import DetailProject2 from './components/DetailProject2';
import DetailProject3 from './components/DetailProject3';
import "./components/global.css"
import "./components/Detail.css";
import "./App.css";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/detect-track-human" element={<DetailProject />} />
        <Route path="/project/cancer-detection" element={<DetailProject2 />} />
        <Route path="/project/defect-tracking" element={<DetailProject3 />} />
      </Routes>
      <Footer />
    </>
  );
}
