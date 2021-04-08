import React from "react";
import {Link} from 'react-router-dom'
const Brands = () => {
  return (
    <div className="brand-gallery-cards">
      <div className="row brand-cards">
        <div className="col-lg-2 col-md-3 col-sm-4 brand-x">
          <Link to="#">
            <img src="assets/images/b1.png" alt="" />
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 brand-x">
          <Link to="#">
            <img src="assets/images/b2.png" alt="" />
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 brand-x">
          <Link to="#">
            <img src="assets/images/b3.png" alt="" />
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 brand-x">
          <Link to="#">
            <img src="assets/images/b4.png" alt="" />
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 brand-x">
          <Link to="#">
            <img src="assets/images/b5.png" alt="" />
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 brand-x">
          <Link to="#">
            <img src="assets/images/b6.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brands;
