import React from "react";
import {Link} from 'react-router-dom'
const CaliforniaComplimentPart = () => {
  return (
    <div className="twin-section">
      <div className="row">
        <div className="col-md-6">
          <Link to="#">
            <div className="promo-banner1 shadow-hover"></div>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="#">
            <div className="promo-banner2 shadow-hover"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaliforniaComplimentPart;
