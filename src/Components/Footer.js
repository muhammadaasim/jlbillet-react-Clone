import React from "react";

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
                      <a href="ar15.html">AR15</a>
                    </li>
                    <li>
                      <a href="#">AK</a>
                    </li>
                    <li>
                      <a href="#">Stocks & Braces</a>
                    </li>
                    <li>
                      <a href="#">Muzzle Devices</a>
                    </li>
                    <li>
                      <a href="#">80% Lowers</a>
                    </li>
                    <li>
                      <a href="#">Swag</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <a href="#">308 LR DPMS</a>
                    </li>
                    <li>
                      <a href="#">Pistol</a>
                    </li>
                    <li>
                      <a href="#">California Compliant Parts</a>
                    </li>
                    <li>
                      <a href="#">Grips</a>
                    </li>
                    <li>
                      <a href="#">Complete Uppers</a>
                    </li>
                    <li>
                      <a href="#">Sale</a>
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
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Dealers</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Shipping & Returns</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              <div className="column-title">POPULAR BRANDS</div>
              <div className="custom-menu">
                <ul>
                  <li>
                    <a href="">Ballistic Advantage</a>
                  </li>
                  <li>
                    <a href="">Hexmag</a>
                  </li>
                  <li>
                    <a href="">JL Billet</a>
                  </li>
                  <li>
                    <a href="">Lancer</a>
                  </li>
                  <li>
                    <a href="">Naroh Arms</a>
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
                    <a href="tel:6198001751">619-800-1751</a>
                  </li>
                </ul>
              </div>
              <div className="column-title">Follow Us On</div>
              <div className="social-contact">
                <a href="#">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
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
            <a href="#">Sitemap</a>
          </li>
          <li>
            <a href="#">Terms Of Use</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
