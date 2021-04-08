import React from "react";
import {Link} from 'react-router-dom'

const NewProducts = () => {
  return (
    <div className="product-grid-sep">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="product-side-banner2"></div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/* New Products Card Starts  */}
            <div className="product-card">
              <div className="product-bar-inner">
                <div className="product-image">
                  <img src="assets/images/product-image.png" alt="#"/>
                  <Link to="#" className="quick-btn">
                    Quick View
                  </Link>
                </div>
                <div className="product-content">
                  <h5>
                    <Link to="#">
                      Stainless Steel One Piece Threaded Bolt Catch Pin
                    </Link>
                  </h5>
                  <div className="testimonial-rating">
                    <span className="star-rating">
                      <span style={{width:"100%"}}></span>
                    </span>
                  </div>
                  <p className="product-price">$3.95</p>
                  <Link to="#" className="add-to-cart">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="product-card">
              <div className="product-bar-inner">
                <div className="product-image">
                  <img src="assets/images/product-image.png" alt="#"/>
                  <Link to="#" className="quick-btn">
                    Quick View
                  </Link>
                </div>
                <div className="product-content">
                  <h5>
                    <Link to="#">
                      Stainless Steel One Piece Threaded Bolt Catch Pin
                    </Link>
                  </h5>
                  <div className="testimonial-rating">
                    <span className="star-rating">
                      <span style={{width: "100%"}}></span>
                    </span>
                  </div>
                  <p className="product-price">$3.95</p>
                  <Link to="#" className="add-to-cart">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="product-card">
              <div className="product-bar-inner">
                <div className="product-image">
                  <img src="assets/images/product-image.png" alt="#"/>
                  <Link to="#" className="quick-btn">
                    Quick View
                  </Link>
                </div>
                <div className="product-content">
                  <h5>
                    <Link to="#">
                      Stainless Steel One Piece Threaded Bolt Catch Pin
                    </Link>
                  </h5>
                  <div className="testimonial-rating">
                    <span className="star-rating">
                      <span style={{width: "100%"}}></span>
                    </span>
                  </div>
                  <p className="product-price">$3.95</p>
                  <Link to="#" className="add-to-cart">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
            {/* Product Cards Ends  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
