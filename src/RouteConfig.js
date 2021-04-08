import React from "react";
import Header from "./Components/Header";
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";
import Subscription from './Components/Subscription'
import Home from "./Components/Home";
import About from './Components/About'
import Terms from './Components/Terms'
import Gallery from './Components/Gallery'
import Tutorial from './Components/Tutorial'
import Contact from './Components/Contact'
import Shippingandreturns from './Components/ShippingReturns'
import Dealers from './Components/Dealers'
import Blog from './Components/Blog'
import Sitemap from './Components/Sitemap'
import Gifts from './Components/Gifts'
import Login from './Components/Login'
import CreateAccount from './Components/CreateAccount'
import Forgetpassword from './Components/ForgetPassword'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from 'react-router-scroll-to-top';

function RouteConfig() {

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tutorials" element={<Tutorial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shippingandreturns" element={<Shippingandreturns />} />
          <Route path="/dealers" element={<Dealers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/*" element={<Home />} />
        </Routes>
        <Subscription />
        <Footer />
      </Router>
    </div>
  );
}

export default RouteConfig;
