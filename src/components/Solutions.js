import React from "react";
import "../styles/Solutions.css";

const Solutions = () => {
  return (
    <section id="solutions" className="solutions-section container-fluid py-5">
      <div className="container">
        {/* Header */}
        {/*
        <div className="text-center mb-5">
          <h2 className="section-title">Soluciones</h2>
          <p className="section-subtitle">
            Tres soluciones para la industria farmacéutica.
          </p>
        </div>
        */}

        {/* Prospectos Inmutables */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="solution-title">Prospectos Inmutables</h3>
            <p className="solution-description">
              Información almacenada de forma inmutable en blockchain,
              garantizando que el contenido no se pueda alterar.
              <br />
              Ideal para el cumplimiento normativo y la confianza de los
              usuarios finales.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="./immutable1 copy.png"
              alt="Prospectos inmutables"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Biblioteca de Prospectos */}
        <div className="row align-items-center mb-5 flex-lg-row-reverse">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="solution-title">Biblioteca de Prospectos</h3>
            <p className="solution-description">
              La información compleja y poco accesible dificulta las búsquedas.
              Con Higea, puedes realizar búsquedas rápidas y filtradas por
              conceptos como dosificación, interacciones y contraindicaciones.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="./biblioteca copy.png"
              alt="Biblioteca de Prospectos"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Pregunta a los Prospectos */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h3 className="solution-title">Pregunta a los Prospectos</h3>
            <p className="solution-description">
              Responde preguntas específicas con precisión.
              <br />
              Diferencia los modos de interacción y garantiza que las
              respuestas sean adaptadas al contexto del usuario.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="./pregunta copy.png"
              alt="Pregunta a los Prospectos"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* CTA Button */}
        {/*<div className="text-center mt-5">
          <a href="#cta" className="btn btn-custom">
            Solicitar una demo →
          </a>
        </div>*/}
      </div>
    </section>
  );
};

export default Solutions;
