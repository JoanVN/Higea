// src/components/Header.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          {/* Logo Placeholder */}
          <a className="navbar-brand" href="/">
            <img
              src="/logo.png"
              alt="logo"
              height="80"
            />
          </a>

          {/* Toggle button for mobile */}
          {/*<button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>*/}

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#solutions">
                  Soluciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Características
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#use-cases">
                  Casos de Uso
                </a>
              </li>
            </ul>

            {/* CTA Button */}
            <a href="#ctaSection" className="btn custom-btn">
              Solicitar una demo
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
