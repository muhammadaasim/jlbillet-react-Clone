import React from "react";

const Instagram = () => {
  return (
    <section className="instagram-section">
      <div className="instagram-inner">
        <div className="container">
          <div className="insta-username">
            <p>
              <img src="assets/images/instagram-iconz.png" alt="" />
              #JL_BILLET
            </p>
          </div>
          <div className="insta-photos">
            <div className="photo-container">
              <a href="#">
                <img
                  src="assets/images/instagram-1.png"
                  alt="Instagram Photo"
                />
              </a>
            </div>
            <div className="photo-container">
              <a href="#">
                <img
                  src="assets/images/instagram-2.png"
                  alt="Instagram Photo"
                />
              </a>
            </div>
            <div className="photo-container">
              <a href="#">
                <img
                  src="assets/images/instagram-3.png"
                  alt="Instagram Photo"
                />
              </a>
            </div>
            <div className="photo-container">
              <a href="#">
                <img
                  src="assets/images/instagram-4.png"
                  alt="Instagram Photo"
                />
              </a>
            </div>
            <div className="photo-container">
              <a href="#">
                <img
                  src="assets/images/instagram-5.png"
                  alt="Instagram Photo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
