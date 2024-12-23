// CTASection.js
import React from "react";
import "../styles/CTASection.css";
import { useForm } from "react-hook-form";

const CTASection = () => {
  // 1. Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const FORM_ENDPOINT = "https://formspree.io/f/mdkkopzj";

  // 2. Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert("¡Gracias! Tu mensaje ha sido enviado con éxito.");
      } else {
        alert("Hubo un error al enviar el formulario.");
      }
    } catch (error) {
      alert("Error de red al enviar el formulario.");
    }
  };

  return (
    <section
      id="ctaSection"
      className="cta-section container-fluid d-flex align-items-center"
    >
      <div className="row w-100 align-items-center justify-content-center">
        {/* Text Section */}
        <div className="col-12 col-lg-6 text-center text-lg-start px-4 mb-4 mb-lg-0">
          <h1 className="cta-title">
            Simplifica el acceso a la información de medicamentos con Higea
          </h1>
        </div>

        {/* Contact Form */}
        <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
          {/* 3. Use handleSubmit to handle the form submission */}
          <form className="cta-form shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-3 text-start">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                placeholder="Tu nombre"
                // 4. Register the field with validation
                {...register("name", { required: "El nombre es obligatorio." })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="Tu correo electrónico"
                {...register("email", {
                  required: "El email es obligatorio.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Por favor, introduce un correo válido."
                  }
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">
                  {errors.email.message}
                </div>
              )}
            </div>

            {/* Company Field */}
            <div className="mb-3 text-start">
              <label htmlFor="company" className="form-label">
                Empresa
              </label>
              <input
                type="text"
                className={`form-control ${errors.company ? "is-invalid" : ""}`}
                id="company"
                placeholder="Nombre de la empresa"
                {...register("company", {
                  maxLength: {
                    value: 100,
                    message: "El nombre de la empresa es demasiado largo."
                  }
                })}
              />
              {errors.company && (
                <div className="invalid-feedback">
                  {errors.company.message}
                </div>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-4 text-start">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                id="message"
                rows="3"
                placeholder="Escribe tu mensaje aquí..."
                {...register("message", {
                  required: "El mensaje es obligatorio.",
                  minLength: {
                    value: 10,
                    message: "El mensaje debe tener al menos 10 caracteres."
                  }
                })}
              ></textarea>
              {errors.message && (
                <div className="invalid-feedback">
                  {errors.message.message}
                </div>
              )}
            </div>

            {/* Submit Button */}
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
