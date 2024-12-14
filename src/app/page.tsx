'use lient'

import Header from "./components/Header";
import Footer from "./components/Footer";
import TopCategories from "./components/TopCategories";
import LatestProducts from "./components/LatestProducts";
import Feature from "./components/FeatureProducts";
import Offers from "./components/Offers";
import Unique from "./components/Unique";
import TrendingProducts from "./components/TrendingProduct";
import Newslater from "./components/Newslater";
import HeroSection from "./components/Hero";
import Discount from "./components/Discount";

function Homepage(){
  return(
    <div>
      <Header />
      <HeroSection />
      <Feature />
      <LatestProducts />
      <Offers />
      <Unique />
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <Newslater />
      <Footer />
    </div>
  )
}

export default Homepage;