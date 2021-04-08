import React from "react";

import OwnCarousel from 'react-owl-carousel'
const Carousel = () => {
  return (
    <div class="main-content-wrapper">
      <section class="homepage-banner">
        <div class="homepage-banner-inner">
          <div class="custom-owl-carousel owl-carousel">
            <div class="slide-1">
              <div class="slide-container-x"></div>
            </div>

            <div class="slide-2">
              <div class="slide-container-x"></div>
            </div>
            <div class="slide-3">
              <div class="slide-container-x"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
