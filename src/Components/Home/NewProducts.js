import React from "react";

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
                  <img src="assets/images/product-image.png" />
                  <a href="#" className="quick-btn">
                    Quick View
                  </a>
                </div>
                <div className="product-content">
                  <h5>
                    <a href="#">
                      Stainless Steel One Piece Threaded Bolt Catch Pin
                    </a>
                  </h5>
                  <div className="testimonial-rating">
                    <span className="star-rating">
                      <span style={{width:"100%"}}></span>
                    </span>
                  </div>
                  <p className="product-price">$3.95</p>
                  <a href="#" className="add-to-cart">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="product-card">
              <div className="product-bar-inner">
                <div className="product-image">
                  <img src="assets/images/product-image.png" />
                  <a href="#" className="quick-btn">
                    Quick View
                  </a>
                </div>
                <div className="product-content">
                  <h5>
                    <a href="#">
                      Stainless Steel One Piece Threaded Bolt Catch Pin
                    </a>
                  </h5>
                  <div className="testimonial-rating">
                    <span className="star-rating">
                      <span style={{width: "100%"}}></span>
                    </span>
                  </div>
                  <p className="product-price">$3.95</p>
                  <a href="#" className="add-to-cart">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="product-card">
              <div className="product-bar-inner">
                <div className="product-image">
                  <img src="assets/images/product-image.png" />
                  <a href="#" className="quick-btn">
                    Quick View
                  </a>
                </div>
                <div className="product-content">
                  <h5>
                    <a href="#">
                      Stainless Steel One Piece Threaded Bolt Catch Pin
                    </a>
                  </h5>
                  <div className="testimonial-rating">
                    <span className="star-rating">
                      <span style={{width: "100%"}}></span>
                    </span>
                  </div>
                  <p className="product-price">$3.95</p>
                  <a href="#" className="add-to-cart">
                    Add to Cart
                  </a>
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
