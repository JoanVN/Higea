import React from "react";
import Header from "./components/Header";
import "./styles/Header.css";
import Hero from "./components/Hero";
import "./styles/Hero.css";
import Solutions from "./components/Solutions";
import "./styles/Solutions.css";
import Features from "./components/Features";
import "./styles/Features.css";
import Banner from "./components/Banner";
import "./styles/Banner.css";
import Cases from "./components/Cases";
import "./styles/Cases.css";
import CTASection from "./components/CTASection";
import "./components/CTASection";



function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Solutions />
      <Features />
      <Banner />
      <Cases />
      <CTASection />
    </div>
  );
}

export default App;