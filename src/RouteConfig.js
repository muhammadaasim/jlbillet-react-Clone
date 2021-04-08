import  React from "react";
import Header from "./Components/Header";
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from './Components/About'
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
          <Route path="/*" element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default RouteConfig;
