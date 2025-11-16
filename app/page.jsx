'use client'
import React from "react";
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Impact from "@/components/Impact";


const Home = () => {
  return (
    <>
      <Navbar />
      {/* <div className="px-6 md:px-16 lg:px-32"> */}
      {/* <HeaderSlider /> */}
      <Hero />
      <WhyChoose />
      <Impact />
      <HomeProducts />
      {/* <FeaturedProduct /> */}
      {/* <Banner /> */}
      {/* <NewsLetter /> */}
      {/* </div> */}
      <Footer />
    </>
  );
};

export default Home;
