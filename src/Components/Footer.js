import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="website-footer">
      <div className="footer-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="column-title">CATEGORIES</div>
              <div className="row custom-menu">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <Link to="ar15.html">AR15</Link>
                    </li>
                    <li>
                      <Link to="#">AK</Link>
                    </li>
                    <li>
                      <Link to="#">Stocks & Braces</Link>
                    </li>
                    <li>
                      <Link to="#">Muzzle Devices</Link>
                    </li>
                    <li>
                      <Link to="#">80% Lowers</Link>
                    </li>
                    <li>
                      <Link to="#">Swag</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <Link to="#">308 LR DPMS</Link>
                    </li>
                    <li>
                      <Link to="#">Pistol</Link>
                    </li>
                    <li>
                      <Link to="#">California Compliant Parts</Link>
                    </li>
                    <li>
                      <Link to="#">Grips</Link>
                    </li>
                    <li>
                      <Link to="#">Complete Uppers</Link>
                    </li>
                    <li>
                      <Link to="#">Sale</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="column-title">QUICK LINKS</div>
              <div className="custom-menu">
                <ul>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/dealers">Dealers</Link>
                  </li>
                  <li>
                    <Link to="/tutorials">Tutorials</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/shippingandreturns">Shipping & Returns</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="column-title">POPULAR BRANDS</div>
              <div className="custom-menu">
                <ul>
                  <li>
                    <Link to="">Ballistic Advantage</Link>
                  </li>
                  <li>
                    <Link to="">Hexmag</Link>
                  </li>
                  <li>
                    <Link to="">JL Billet</Link>
                  </li>
                  <li>
                    <Link to="">Lancer</Link>
                  </li>
                  <li>
                    <Link to="">Naroh Arms</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="column-title">CONTACT US</div>
              <div className="general-contact-list">
                <ul>
                  <li>
                    <img src="assets/images/location-icon.png" alt="Location" />
                    12260 Crosthwaite Circle, Poway, CA 92064
                  </li>
                  <li>
                    <img src="assets/images/orange-call-icon.png" alt="Phone" />
                    <Link to="tel:6198001751">619-800-1751</Link>
                  </li>
                </ul>
              </div>
              <div className="column-title">Follow Us On</div>
              <div className="social-contact">
                <Link to="#">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <ul className="copy-right-list">
          <li>
            © 2021 <strong>jlbillet.</strong> All Rights Reserved.
          </li>
          <li>
            Currency Displayed in <strong>USD</strong>
          </li>
          <li>
            <Link to="/sitemap">Sitemap</Link>
          </li>
          <li>
            <Link to="/terms">Terms Of Use</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
