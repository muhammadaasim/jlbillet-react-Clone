import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Carousel from "./Carousel";
import Headline from "./Headline";
import Brand from "./Brands";
import TopProducts from "./TopProducts";
import NewProducts from "./NewProducts";
import FeaturedProducts from "./FeaturedProducts";
import CaliforniaComplimentPart from './CaliforniaComplimentPart'
import PopularProducts from './PopularProducts'
import Instagram from './Instagram'
import Subscription from './Subscription'
const index = () => {
  return (
    <>
      <Header />
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
      <Subscription/>
      <Footer />
    </>
  );
};

export default index;
