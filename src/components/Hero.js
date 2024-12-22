import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section container-fluid d-flex align-items-center">
      <div className="row w-100 align-items-center">
        {/* Text Section */}
        <div className="col-12 col-lg-6 text-center text-lg-start px-4">
          <h1 className="hero-title">
          Soluciones para la Industria Farmacéutica
          </h1>
          <p className="hero-subtitle">
            Prospectos interactivos, seguros y accesibles gracias a la IA y Blockchain.
          </p>
          <a href="#ctaSection" className="btn btn-custom mt-4">
            Solicitar una demo →
          </a>
        </div>

        {/* Placeholder Image */}
        <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0 hero-image">
          <img
            src="/hero.png"
            alt="Placeholder"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
