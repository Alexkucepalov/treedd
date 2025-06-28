import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Description3DPrint from "./components/Description3DPrint";
import Advantages from "./components/Advantages";
import HowItWorks from "./components/HowItWorks";
import BestPerformers from "./components/BestPerformers";
import NewsCarousel from "./components/NewsCarousel";
import PricingPlans from "./components/PricingPlans";
import WorkshopMap from "./components/WorkshopMap";
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Description3DPrint />
      <Advantages />
      <HowItWorks />
      <BestPerformers />
      <NewsCarousel />
      <PricingPlans />
      <WorkshopMap />
      <Footer />
    </>
  );
};

export default App;
