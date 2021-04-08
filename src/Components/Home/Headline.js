import React from "react";
import {Link} from 'react-router-dom'

const Headline = () => {
  return (
    <section className="brad-section">
      <div className="brand-inner">
        <div className="container">
          <div className="intro text-center">
            <img
              src="assets/images/about-logo.png"
              alt="About"
              className="mb-2"
            />
            <p className="parax text-center">
              <strong className="site-orange">JL Billet</strong>
              is dedicated to making some of the most innovative and highest
              quality parts on the market. All of our parts are 100% designed
              and manufactured in the USA with top quality US sourced materials.
              We pride ourselves on producing quality products that are both
              functional and aesthetically pleasing. We are veteran owned and
              operated. We hold 07 FFL and SOT to offer OEM manufacturing to the
              firearms industry.
            </p>
            <p className="parax text-center">
               We believe in 
              <strong className="site-grey">
                quality through precision
              </strong>{" "}
              and stand behind our products 100%! If you ever have an issue with
              anything purchased through us just let us know and we'll make it
              right.
            </p>
            <div className="btn-wrapper">
              <Link to="#" className="primary-btn-x mb-4 mt-4">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headline;
