import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="header-bottom-bar hide-on-mobile">
        <div className="container">
          <div className="inner-bottom-left"></div>
          <div className="inner-bottom-center">
            <div className="navigation-bar">
              <ul className="primary-menu">
                <li className="sub-menux">
                  <Link to="ar15.html">ar15</Link>
                  <div className="sub-menu-container">
                    <ul className="sub-menu-list">
                      <li>
                        <Link to="#">All AR15</Link>
                      </li>
                      <li>
                        <Link to="#">AR 15 Hondguards</Link>
                      </li>
                      <li>
                        <Link to="#">AR 15 Lower Parts</Link>
                      </li>
                      <li>
                        <Link to="#">AR 15 Upper Parts</Link>
                      </li>
                      <li>
                        <Link to="#">AR 15 Barrels</Link>
                      </li>
                      <li>
                        <Link to="#">AR 15 Magazines</Link>
                      </li>
                      <li>
                        <Link to="#">Jigs</Link>
                      </li>
                      <li>
                        <Link to="#">AR 15 All Parts</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sub-menux">
                  <Link to="#">308 LR Dpms</Link>
                  <div className="sub-menu-container">
                    <ul className="sub-menu-list">
                      <li>
                        <Link to="#">All 30B LR DPMS</Link>
                      </li>
                      <li>
                        <Link to="#">308 Hondguards</Link>
                      </li>
                      <li>
                        <Link to="#">308 Upper Parts</Link>
                      </li>
                      <li>
                        <Link to="#">308 Lower Parts</Link>
                      </li>
                      <li>
                        <Link to="#">308 Win Barrels</Link>
                      </li>
                      <li>
                        <Link to="#">Jigs</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#">Ak</Link>
                </li>
                <li className="sub-menux">
                  <Link to="#">Pistol</Link>
                  <div className="sub-menu-container">
                    <ul className="sub-menu-list">
                      <li>
                        <Link to="#">All Pistol</Link>
                      </li>
                      <li>
                        <Link to="#">Glock</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sub-menux">
                  <Link to="#">Stocks & Braces</Link>
                  <div className="sub-menu-container">
                    <ul className="sub-menu-list">
                      <li>
                        <Link to="#">All Stocks & Braces</Link>
                      </li>
                      <li>
                        <Link to="#">
                          MBS<sup>TM</sup> Stocks
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          MBS<sup>TM</sup> Accessories
                        </Link>
                      </li>
                      <li>
                        <Link to="#">Pistol Brace</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#">California Compliant parts</Link>
                </li>
                <li>
                  <Link to="#">Muzzle Devices</Link>
                </li>
                <li>
                  <Link to="#">Grips</Link>
                </li>
                <li>
                  <Link to="#">80% Lowers</Link>
                </li>
                <li className="sub-menux">
                  <Link to="#">Complete Uppers</Link>
                  <div className="sub-menu-container">
                    <ul className="sub-menu-list">
                      <li>
                        <Link to="#">All Complete Uppers</Link>
                      </li>
                      <li>
                        <Link to="#">556 Complete Uppers</Link>
                      </li>
                      <li>
                        <Link to="#">308 Complete Uppers</Link>
                      </li>
                      <li>
                        <Link to="#">300 BLK Out Complete Uppers</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="#">Swag</Link>
                </li>
                <li>
                  <Link to="#">Sale</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="inner-bottom-right"></div>
        </div>
      </div>
      <div className="mobile-nav-menu">
        <div className="nav-inner">
          <div className="mobile-search-box">
            <form action="#">
              <input type="text" name="" id="" placeholder="Search" required />
              <button type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
          <div className="nav-self">
            <ul className="primary-menu-mobile">
              <li className="drop-1">
                <Link to="#">ar15</Link>
                <button className="mobile-drop-btn">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
                <div className="sub-menu-container-mobile" id="d1">
                  <ul className="sub-menu-list-mobile">
                    <li>
                      <Link to="#">All AR15</Link>
                    </li>
                    <li>
                      <Link to="#">AR 15 Hondguards</Link>
                    </li>
                    <li>
                      <Link to="#">AR 15 Lower Parts</Link>
                    </li>
                    <li>
                      <Link to="#">AR 15 Upper Parts</Link>
                    </li>
                    <li>
                      <Link to="#">AR 15 Barrels</Link>
                    </li>
                    <li>
                      <Link to="#">AR 15 Magazines</Link>
                    </li>
                    <li>
                      <Link to="#">Jigs</Link>
                    </li>
                    <li>
                      <Link to="#">AR 15 All Parts</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="drop-2">
                <Link to="#">308 LR Dpms</Link>
                <button className="mobile-drop-btn">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
                <div className="sub-menu-container-mobile" id="d2">
                  <ul className="sub-menu-list-mobile">
                    <li>
                      <Link to="#">All 30B LR DPMS</Link>
                    </li>
                    <li>
                      <Link to="#">308 Hondguards</Link>
                    </li>
                    <li>
                      <Link to="#">308 Upper Parts</Link>
                    </li>
                    <li>
                      <Link to="#">308 Lower Parts</Link>
                    </li>
                    <li>
                      <Link to="#">308 Win Barrels</Link>
                    </li>
                    <li>
                      <Link to="#">Jigs</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="#">Ak</Link>
              </li>
              <li className="drop-3">
                <Link to="#">Pistol</Link>
                <button className="mobile-drop-btn">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
                <div className="sub-menu-container-mobile" id="d3">
                  <ul className="sub-menu-list-mobile">
                    <li>
                      <Link to="#">All Pistol</Link>
                    </li>
                    <li>
                      <Link to="#">Glock</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="drop-4">
                <Link to="#">Stocks & Braces</Link>
                <button className="mobile-drop-btn">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
                <div className="sub-menu-container-mobile" id="d4">
                  <ul className="sub-menu-list-mobile">
                    <li>
                      <Link to="#">All Stocks & Braces</Link>
                    </li>
                    <li>
                      <Link to="#">
                        MBS<sup>TM</sup> Stocks
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        MBS<sup>TM</sup> Accessories
                      </Link>
                    </li>
                    <li>
                      <Link to="#">Pistol Brace</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="#">California Compliant parts</Link>
              </li>
              <li>
                <Link to="#">Muzzle Devices</Link>
              </li>
              <li>
                <Link to="#">Grips</Link>
              </li>
              <li>
                <Link to="#">80% Lowers</Link>
              </li>
              <li className="drop-5">
                <Link to="#">Complete Uppers</Link>
                <button className="mobile-drop-btn">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
                <div className="sub-menu-container-mobile" id="d5">
                  <ul className="sub-menu-list-mobile">
                    <li>
                      <Link to="#">All Complete Uppers</Link>
                    </li>
                    <li>
                      <Link to="#">556 Complete Uppers</Link>
                    </li>
                    <li>
                      <Link to="#">308 Complete Uppers</Link>
                    </li>
                    <li>
                      <Link to="#">300 BLK Out Complete Uppers</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="#">Swag</Link>
              </li>
              <li>
                <Link to="#">Sale</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
