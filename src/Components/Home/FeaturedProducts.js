import React from "react";
import {Link} from 'react-router-dom'

const FeaturedProducts = () => {
  return (
    <section className="featured-section">
      <div className="featured-inner">
        {/* TITLE */}
        <div className="container">
          <div className="section-title">
            <h3>Featured Products</h3>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="products-owl-carousel owl-carousel">
                {/* Product Card Starts */}
                <div className="product-card">
                  <div className="product-bar-inner">
                    <div className="product-image">
                      <img src="assets/images/product-image.png" alt="product image"/>
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
                {/* Product Card Ends */}
                {/* Product Card Starts */}
                <div className="product-card">
                  <div className="product-bar-inner">
                    <div className="product-image">
                      <img src="assets/images/product-image.png" alt="product image"/>
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
                {/* Product Card Ends */}
                {/* Product Card Starts */}
                <div className="product-card">
                  <div className="product-bar-inner">
                    <div className="product-image">
                      <img src="assets/images/product-image.png"alt="product image" />
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
                {/* Product Card Ends */}
                {/* Product Card Starts */}
                <div className="product-card">
                  <div className="product-bar-inner">
                    <div className="product-image">
                      <img src="assets/images/product-image.png" alt="product image"/>
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
                {/* Product Card Ends */}
                {/* Product Card Starts */}
                <div className="product-card">
                  <div className="product-bar-inner">
                    <div className="product-image">
                      <img src="assets/images/product-image.png" alt="product image" />
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
                {/* Product Card Ends */}
                {/* Product Card Starts */}
                <div className="product-card">
                  <div className="product-bar-inner">
                    <div className="product-image">
                      <img src="assets/images/product-image.png" alt="product image"/>
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
                {/* Product Card Ends */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
