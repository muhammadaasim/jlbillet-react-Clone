import React from "react";
import Carousel from "./Carousel";
import Headline from "./Headline";
import Brand from "./Brands";
import TopProducts from "./TopProducts";
import NewProducts from "./NewProducts";
import FeaturedProducts from "./FeaturedProducts";
import CaliforniaComplimentPart from './CaliforniaComplimentPart'
import PopularProducts from './PopularProducts'
import Instagram from './Instagram'
const index = () => {
  return (
    <>
      <Carousel />
      <TopProducts />
      <Headline>
        <Brand />
      </Headline>
      <NewProducts />
      <FeaturedProducts />
      <CaliforniaComplimentPart/>
      <PopularProducts/>
      <Instagram/>

    </>
  );
};

export default index;
