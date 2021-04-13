import React from "react";
import Navbar from './Navbar'
const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-top-bar hide-on-mobile">
          <div className="inner-top-left">
            <div className="header-search">
              <form action="#">
                <input
                  type="text"
                  className="search-field"
                  placeholder="Search"
                  required
                />
                <button type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="inner-top-center">
            <div className="site-logo">
              <a href="index.html">
                <img src="assets/images/jl-logo.png" alt="JL Billet" />
              </a>
            </div>
          </div>
          <div className="inner-top-right">
            <div className="header-details">
              <div className="h-phone">
                <p className="icon-img">
                  <img src="assets/images/call-icon.png" alt="" />
                </p>
                <p className="with-icon-txt">
                  <a href="tel:6198001751">619-800-1751</a>
                </p>
              </div>
              <div className="h-gift xborder-left">
                <p className="icon-img">
                  <img src="assets/images/gift-icon.png" alt="" />
                </p>
                <p className="with-icon-txt">
                  <a href="#">Gift Certificates</a>
                </p>
              </div>
              <div className="h-account xborder-left">
                <p className="icon-img">
                  <img src="assets/images/account-icon.png" alt="" />
                </p>
                <p className="with-icon-txt">
                  <a href="#">My Account</a>
                </p>
              </div>
              <div className="h-cart">
                <a href="#">
                  <img src="assets/images/cart-icon.png" /> cart
                  <span className="badge">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*  MOBILE RESPONSIVE  */}
        <div className="header-top-bar mobile-change show-on-mobile">
          <div className="inner-top-left">
            <div className="burder-btn">
              <button className="burderx">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="inner-top-center">
            <div className="site-logo">
              <img src="assets/images/jl-logo.png" alt="JL Billet" />
            </div>
          </div>
          <div className="inner-top-right">
            <div className="header-details mobile-change">
              <div className="h-cart">
                <a href="#">
                  <img src="assets/images/cart-icon.png" />
                  <span className="badge">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar/>
    </header>
  );
};

export default Header;
