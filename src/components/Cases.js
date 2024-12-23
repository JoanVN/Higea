import React from "react";
import "../styles/Cases.css";

const UseCases = () => {
  const cases = [
    {
      title: "Pacientes",
      description:
        "Consulta rápidamente información clara sobre medicamentos, como dosificación, interacciones y efectos secundarios.",
      image: "./patients.png",
    },
    {
      title: "Profesionales sanitarios",
      description:
        "Accede a información técnica detallada y actualizada en segundos, optimizando la toma de decisiones clínicas. Herramientas intuitivas que mejoran la eficiencia en entornos de alta presión.",
      image: "./profesionales.png",
    },
    {
      title: "Compañías farmacéuticas",
      description:
        "Garantiza el cumplimiento normativo con prospectos inmutables y trazables mediante blockchain. Facilita la gestión de información confiable y actualizada para sus productos.",
      image: "./farma.png",
    },
  ];

  return (
    <section id="use-cases" className="use-cases-section container-fluid py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="section-title">Casos de Uso</h2>
          <p className="section-subtitle">Higea en Acción</p>
        </div>

        {/* Use Cases */}
        <div className="use-cases-list">
          {cases.map((useCase, index) => (
            <div key={index} className="use-case-item d-flex flex-column flex-lg-row align-items-center gap-4 mb-5">
              {/* Text Content */}
              <div className="text-content flex-grow-1">
                <h3 className="use-case-title">{useCase.title}</h3>
                <p className="use-case-description">{useCase.description}</p>
              </div>

              {/* Image Placeholder */}
              <div className="image-placeholder">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;