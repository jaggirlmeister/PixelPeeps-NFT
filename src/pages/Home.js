import React from "react";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ConnectWallet from "../components/ConnectWallet/ConnectWallet";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Carousel from "../components/Carousel/Carousel";
import FaqSection from "../components/FaqSection/FaqSection";

const Home = () => {
  return (
    <>
    <NavBar />
      <div className='homeContainer'>
        <Hero />
        <HowItWorks />
        <ConnectWallet />
        <FaqSection />
        <Footer />
      </div>
      <Carousel />
    </>
  );
};

export default Home;
