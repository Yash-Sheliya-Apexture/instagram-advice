import React from "react";
import Header from "../src/Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Pages/Hero/Hero";
import HostCard from "../src/Components/Host/HostCard";
import ServiceSection from "./Pages/Service";
import FeatureSection from "./Pages/FeatureSection";
import ReviewCards from "./Components/Review/ReviewCard";
import Footer from "./Components/Footer";
import ExpertSection from "./Pages/About";
import Offer from "./Components/Offer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <HostCard />
      <ServiceSection />
      <FeatureSection />
      <ReviewCards />
      <Offer />
      <ExpertSection />
      <Footer />
    </BrowserRouter>
  );
};
export default App;
