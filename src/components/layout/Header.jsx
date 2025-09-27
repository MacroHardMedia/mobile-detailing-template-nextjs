"use client";

import React, { useState } from "react";
import "./header.scss";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("menu-open", !isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <img
              src="/assets/logo.svg"
              alt="Elite Mobile Detailing Logo"
              className="header__logo-img"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`header__mobile-toggle ${
              isMobileMenuOpen ? "active" : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </button>

          <nav className={`header__nav ${isMobileMenuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <a href="#home" className="active" onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMobileMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMobileMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={closeMobileMenu}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMobileMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__cta">
            {/* <button className="btn btn--secondary">Login</button> */}
            <button className="btn btn--primary">Get Quote</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
