"use client";

import { useState } from "react";
import "./hero.scss";

function Hero() {
  const [email, setEmail] = useState("");
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add email capture logic here
  };

  return (
    <section id="home" className="hero">
      <div className="hero__background">
        {/* Background Video */}
        <video
          className={`hero__video ${videoError ? "hero__video--hidden" : ""}`}
          autoPlay
          muted
          loop
          playsInline
          onError={handleVideoError}
          onLoadStart={() => setVideoError(false)}
        >
          <source src="/assets/hero-bg.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Fallback Overlay */}
        <div
          className={`hero__gradient-fallback ${
            videoError ? "hero__gradient-fallback--active" : ""
          }`}
        ></div>

        <div className="hero__overlay"></div>
      </div>

      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Don't have time to detail your car yourself?&nbsp;
              <span className="hero__highlight">
                We bring professional detailing
              </span>
              &nbsp;right to your home
              <br />
            </h1>

            <p className="hero__subtitle">
              You've tried the rest, now try the best. We will bring the same
              amount of care to your car as if were ours. We use only the best
              products to bring the shine back to your vehicle.
            </p>

            {/* <div className="hero__stats">
              <div className="stat">
                <div className="stat__number">500+</div>
                <div className="stat__label">Cars Detailed</div>
              </div>
              <div className="stat">
                <div className="stat__number">99.9%</div>
                <div className="stat__label">Customer Satisfaction</div>
              </div>
              <div className="stat">
                <div className="stat__number">24/7</div>
                <div className="stat__label">Booking Available</div>
              </div>
            </div> */}

            <div className="hero__cta">
              <form className="hero__form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="hero__input"
                  required
                />
                <button type="submit" className="btn btn--primary btn--large">
                  Get Free Quote
                </button>
              </form>

              <p className="hero__guarantee">
                {/* 💪 Free 7-day trial • No credit card required • Cancel anytime */}
              </p>
            </div>

            {/* <div className="hero__social-proof">
              <p>Trusted by executives at:</p>
              <div className="hero__companies">
                <span>Netflix</span>
                <span>Tesla</span>
                <span>Google</span>
                <span>Disney</span>
              </div>
            </div> */}
          </div>

          {/* Video Player */}

          <div className="hero__media">
            {/* <div className="hero__video-placeholder">
              <div className="play-button">
                <span>▶</span>
              </div>
              <p>Coming soon!</p>
            </div> */}

            <div className="hero__testimonial">
              <blockquote>
                "My BMW has never looked better! The team arrived on time and
                transformed my car right in my driveway. Professional service
                that exceeded my expectations."
              </blockquote>
              <cite>
                <strong>Michael Rodriguez</strong>
                <span>Business Owner, Beverly Hills</span>
              </cite>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1758582131">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
