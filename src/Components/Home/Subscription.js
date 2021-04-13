import React from "react";

const Subscription = () => {
  return (
    <section className="newsletters-section">
      <div className="newsletters-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12"></div>
            <div className="col-lg-8 col-md-12">
              <div className="newsletters">
                <div className="n-icon">
                  <img src="assets/images/newsletter-icon.png" alt="Icon" />
                </div>
                <div className="n-content">
                  <h2>STAY CONNECTED</h2>
                  <p>Stay in the know. Get offers and news</p>
                </div>
                <div className="n-form">
                  <form action="#">
                    <p className="field-and-btn">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Your email address"
                        required
                      />
                      <button type="submit">Subscribe</button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
