import React from "react";
import "../styles/Banner.css";

const Banner = () => {
  return (
    <section className="banner-section container-fluid d-flex align-items-center">
      <div className="container text-center">
        {/* Heading */}
        <h1 className="banner-title">
          Higea transforma la manera de acceder y comprender la información de medicamentos
        </h1>

        {/* Subtitle */}
        <p className="banner-subtitle mt-4">
          Higea ofrece una solución digital interactiva, segura e inmutable que mejora la
          experiencia de pacientes, agiliza el trabajo de profesionales sanitarios y asegura la
          trazabilidad para reguladores.
        </p>

        {/* CTA Button */}
        <a href="#ctaSection" className="btn btn-custom mt-5">
          Solicitar una demo →
        </a>
      </div>
    </section>
  );
};

export default Banner;
