import  React from "react";
import Header from "./Components/Header";
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from './Components/About'
import Terms from './Components/Terms'
import Gallery from './Components/Gallery'
import Tutorial from './Components/Tutorial'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from 'react-router-scroll-to-top';

function RouteConfig() {

  return (
    <div>
      <Router>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutorial" element={<Tutorial />} />

          <Route path="/*" element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default RouteConfig;
