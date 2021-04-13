import React from "react";

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
                  <a href="ar15.html">ar15</a>
                  <div className="sub-menu-container">
                    <ul className="sub-menu-list">
                      <li>
                        <a href="#">All AR15</a>
                      </li>
                      <li>
                        <a href="#">AR 15 Hondguards</a>
                      </li>
                      <li>
                        <a href="#">AR 15 Lower Parts</a>
                      </li>
                      <li>
                        <a href="#">AR 15 Upper Parts</a>
                      </li>
                      <li>
                        <a href="#">AR 15 Barrels</a>
                      </li>
                      <li>
                        <a href="#">AR 15 Magazines</a>
                      </li>
                      <li>
                        <a href="#">Jigs</a>
                      </li>
                      <li>
                        <a href="#">AR 15 All Parts</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sub-menux">
                  <a href="#">308 LR Dpms</a>
                  <div className="sub-menu-container">
                    <ul className="sub-menu-list">
                      <li>
                        <a href="#">All 30B LR DPMS</a>
                      </li>
                      <li>
                        <a href="#">308 Hondguards</a>
                      </li>
                      <li>
                        <a href="#">308 Upper Parts</a>
                      </li>
                      <li>
                        <a href="#">308 Lower Parts</a>
                      </li>
                      <li>
                        <a href="#">308 Win Barrels</a>
                      </li>
                      <li>
                        <a href="#">Jigs</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Ak</a>
                </li>
                <li className="sub-menux">
                  <a href="#">Pistol</a>
                  <div className="sub-menu-container">
                    <ul className="sub-menu-list">
                      <li>
                        <a href="#">All Pistol</a>
                      </li>
                      <li>
                        <a href="#">Glock</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sub-menux">
                  <a href="#">Stocks & Braces</a>
                  <div className="sub-menu-container">
                    <ul className="sub-menu-list">
                      <li>
                        <a href="#">All Stocks & Braces</a>
                      </li>
                      <li>
                        <a href="#">
                          MBS<sup>TM</sup> Stocks
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          MBS<sup>TM</sup> Accessories
                        </a>
                      </li>
                      <li>
                        <a href="#">Pistol Brace</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">California Compliant parts</a>
                </li>
                <li>
                  <a href="#">Muzzle Devices</a>
                </li>
                <li>
                  <a href="#">Grips</a>
                </li>
                <li>
                  <a href="#">80% Lowers</a>
                </li>
                <li className="sub-menux">
                  <a href="#">Complete Uppers</a>
                  <div className="sub-menu-container">
                    <ul className="sub-menu-list">
                      <li>
                        <a href="#">All Complete Uppers</a>
                      </li>
                      <li>
                        <a href="#">556 Complete Uppers</a>
                      </li>
                      <li>
                        <a href="#">308 Complete Uppers</a>
                      </li>
                      <li>
                        <a href="#">300 BLK Out Complete Uppers</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Swag</a>
                </li>
                <li>
                  <a href="#">Sale</a>
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
                <a href="#">ar15</a>
                <button className="mobile-drop-btn">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
                <div className="sub-menu-container-mobile" id="d1">
                  <ul className="sub-menu-list-mobile">
                    <li>
                      <a href="#">All AR15</a>
                    </li>
                    <li>
                      <a href="#">AR 15 Hondguards</a>
                    </li>
                    <li>
                      <a href="#">AR 15 Lower Parts</a>
                    </li>
                    <li>
                      <a href="#">AR 15 Upper Parts</a>
                    </li>
                    <li>
                      <a href="#">AR 15 Barrels</a>
                    </li>
                    <li>
                      <a href="#">AR 15 Magazines</a>
                    </li>
                    <li>
                      <a href="#">Jigs</a>
                    </li>
                    <li>
                      <a href="#">AR 15 All Parts</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="drop-2">
                <a href="#">308 LR Dpms</a>
                <button className="mobile-drop-btn">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
                <div className="sub-menu-container-mobile" id="d2">
                  <ul className="sub-menu-list-mobile">
                    <li>
                      <a href="#">All 30B LR DPMS</a>
                    </li>
                    <li>
                      <a href="#">308 Hondguards</a>
                    </li>
                    <li>
                      <a href="#">308 Upper Parts</a>
                    </li>
                    <li>
                      <a href="#">308 Lower Parts</a>
                    </li>
                    <li>
                      <a href="#">308 Win Barrels</a>
                    </li>
                    <li>
                      <a href="#">Jigs</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Ak</a>
              </li>
              <li className="drop-3">
                <a href="#">Pistol</a>
                <button className="mobile-drop-btn">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
                <div className="sub-menu-container-mobile" id="d3">
                  <ul className="sub-menu-list-mobile">
                    <li>
                      <a href="#">All Pistol</a>
                    </li>
                    <li>
                      <a href="#">Glock</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="drop-4">
                <a href="#">Stocks & Braces</a>
                <button className="mobile-drop-btn">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
                <div className="sub-menu-container-mobile" id="d4">
                  <ul className="sub-menu-list-mobile">
                    <li>
                      <a href="#">All Stocks & Braces</a>
                    </li>
                    <li>
                      <a href="#">
                        MBS<sup>TM</sup> Stocks
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        MBS<sup>TM</sup> Accessories
                      </a>
                    </li>
                    <li>
                      <a href="#">Pistol Brace</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">California Compliant parts</a>
              </li>
              <li>
                <a href="#">Muzzle Devices</a>
              </li>
              <li>
                <a href="#">Grips</a>
              </li>
              <li>
                <a href="#">80% Lowers</a>
              </li>
              <li className="drop-5">
                <a href="#">Complete Uppers</a>
                <button className="mobile-drop-btn">
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
                <div className="sub-menu-container-mobile" id="d5">
                  <ul className="sub-menu-list-mobile">
                    <li>
                      <a href="#">All Complete Uppers</a>
                    </li>
                    <li>
                      <a href="#">556 Complete Uppers</a>
                    </li>
                    <li>
                      <a href="#">308 Complete Uppers</a>
                    </li>
                    <li>
                      <a href="#">300 BLK Out Complete Uppers</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Swag</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
