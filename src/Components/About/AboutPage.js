import React from "react";
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className="link-map">
        <div className="container">
          <div className="links">
            <Link to="/">Home</Link> / <Link to="/about">About</Link>
          </div>
        </div>
      </div>
      <section className="page-about-section">
        <div className="page-about-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="about-content">
                  <h3 className="page-inner-title">ABOUT</h3>
                  <p className="parax">
                    JL Billet is dedicated to making some of the most innovative
                    and highest quality parts on the market. All of our parts
                    are 100% designed and manufactured in the USA with top
                    quality US sourced materials. We pride ourselves on
                    producing quality products that are both functional and
                    aesthetically pleasing. We are veteran owned and operated.
                    We hold 07 FFL and SOT to offer OEM manufacturing to the
                    firearms industry.
                  </p>
                  <p className="parax">
                    We believe in <strong>quality through precision</strong> and
                    stand behind our products 100%! If you ever have an issue
                    with anything purchased through us just let us know and
                    we'll make it right.
                  </p>
                  <p className="parax">
                    We are continually expanding our product line so check back
                    regularly to see what's new or click here to sign up to our
                    news letter. We are expanding our dealer network, click here
                    for more info.
                  </p>
                  <p className="parax">
                    Contact us directly for OEM manufacturing questions. We are
                    an 07 FFL holder and offer custom solutions for handguards
                    in both 308/AR10 and AR-15 as well as billet uppers and
                    lower, and other parts on request.
                  </p>
                  <p className="parax">
                    We also offer 10% off site wide (some exclusions apply) for
                    Military, Firefighters, and LEO. Contact US for more info.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
