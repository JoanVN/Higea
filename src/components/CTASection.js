import React from "react";
import "../styles/CTASection.css";

const CTASection = () => {
  return (
    <section id="ctaSection" className="cta-section container-fluid d-flex align-items-center">
      <div className="row w-100 align-items-center justify-content-center">
        {/* Text Section */}
        <div className="col-12 col-lg-6 text-center text-lg-start px-4 mb-4 mb-lg-0">
          <h1 className="cta-title">
            Simplifica el acceso a la información de medicamentos con Higea
          </h1>
        </div>

        {/* Contact Form */}
        <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
          <form className="cta-form shadow-lg rounded">
            <div className="mb-3 text-start">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="company" className="form-label">
                Empresa
              </label>
              <input
                type="text"
                className="form-control"
                id="company"
                placeholder="Nombre de la empresa"
              />
            </div>
            <div className="mb-4 text-start">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-custom w-100">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;