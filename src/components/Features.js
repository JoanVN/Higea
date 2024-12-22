import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Features.css";
import { FaCheckCircle, FaLock, FaLeaf, FaClipboardList, FaShieldAlt } from "react-icons/fa";


const Features = () => {
  const features = [
    {
      title: "Accesible",
      description:
        "Información técnica y compleja adaptada a pacientes y profesionales sanitarios.",
      bgColor: "white",
      textColor: "#212529",
      icon: <FaClipboardList size={30} />, // Example icon
    },
    {
      title: "Respuesta Garantizada",
      description:
        "Nuestro modelo in-house está optimizado para garantizar la calidad de la respuesta.",
      bgColor: "#A7CEFC",
      textColor: "#FFFFFF",
      icon: <FaCheckCircle size={30} />, // Example icon
    },
    {
      title: "Cumplimiento Normativo",
      description:
        "Alineado con los estándares regulatorios europeos.",
      bgColor: "white",
      textColor: "#212529",
      icon: <FaShieldAlt size={30} />, // Example icon
    },
    {
      title: "Sostenible",
      description:
        "Elimina la necesidad de prospectos en papel, reduciendo residuos y costos logísticos.",
      bgColor: "#A7CEFC",
      textColor: "#FFFFFF",
      icon: <FaLeaf size={30} />, // Example icon
    },
    {
      title: "Seguro",
      description:
        "Prospectos respaldados por blockchain, garantizando inmutabilidad y trazabilidad.",
      bgColor: "white",
      textColor: "#212529",
      icon: <FaLock size={30} />, // Example icon
    },
  ];

  return (
    <section id="features" className="features-section container-fluid py-5">
      <div className="container">
        <div className="text-center mb-5">
          {/*<h2 className="section-title">Características</h2>*/}
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={32} // Spacing between slides
          slidesPerView={1} // Start with 1 slide for mobile
          loop={true} // Infinite loop
          navigation={true} // Enable navigation arrows
          pagination={{ clickable: true }} // Enable dots for pagination
          breakpoints={{
            // Configure breakpoints for responsiveness
            768: {
              slidesPerView: 2, // 2 slides for tablets
            },
            1024: {
              slidesPerView: 3, // 3 slides for desktops
            },
          }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div
                className="feature-card"
                style={{
                  backgroundColor: feature.bgColor,
                  color: feature.textColor,
                  boxShadow:
                    feature.bgColor === "white"
                      ? "10px 10px 50px rgba(0, 0, 0, 0.08)"
                      : "none",
                }}
              >
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-icon">{feature.icon}</div> {/* Icon */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
