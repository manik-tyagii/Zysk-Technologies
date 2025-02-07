import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import "./index.css"; 

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <Features />
      <Testimonial />
      <FAQ />
      <Blog />
      <CTA/>
      <Footer />
    </div>
  );
}

export default App;
