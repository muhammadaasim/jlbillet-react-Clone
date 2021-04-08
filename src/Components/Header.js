import React from "react";
import { Link } from 'react-router-dom'
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
              <Link to="index.html">
                <img src="assets/images/jl-logo.png" alt="JL Billet" />
              </Link>
            </div>
          </div>
          <div className="inner-top-right">
            <div className="header-details">
              <div className="h-phone">
                <p className="icon-img">
                  <img src="assets/images/call-icon.png" alt="#" />
                </p>
                <p className="with-icon-txt">
                  <Link to="tel:6198001751">619-800-1751</Link>
                </p>
              </div>
              <div className="h-gift xborder-left">
                <p className="icon-img">
                  <img src="assets/images/gift-icon.png" alt="#" />
                </p>
                <p className="with-icon-txt">
                  <Link to="/gifts">Gift Certificates</Link>
                </p>
              </div>
              <div className="h-account xborder-left">
                <p className="icon-img">
                  <img src="assets/images/account-icon.png" alt="#" />
                </p>

                <p className="with-icon-txt">
                  <Link to="/login">
                    My Account</Link>
                </p>

              </div>
              <div className="h-cart">
                <Link to="#">
                  <img src="assets/images/cart-icon.png" alt="#" /> cart
                  <span className="badge">0</span>
                </Link>
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
                <Link to="#">
                  <img src="assets/images/cart-icon.png" alt="#" />
                  <span className="badge">0</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
