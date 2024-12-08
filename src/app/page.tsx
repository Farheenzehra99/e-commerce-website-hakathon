import React from "react";
import HeroSection from "./components/HeroSection";
import AboutUs from "./about/page";
import Products from "./components/Products";
import Latest from "./components/Latest";
import Features from "./components/Features";
import Trendingproduct from "./components/TrendingProduct";
import DiscountItem from "./components/DiscountItem";
const Home = () => {

  return (
    <>
    <HeroSection/>
    <Features/>
    <Latest/>
    <Products/>
    <Trendingproduct/>
    <DiscountItem/>
    <AboutUs/>
    </>
  )
}

export default Home;