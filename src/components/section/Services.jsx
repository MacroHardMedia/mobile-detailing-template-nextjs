"use client";

import React from "react";
import Card from "../ui/Card";
import "./services.scss";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: "/assets/exterior-detail.png",
      imageAlt: "Professional exterior car detailing service",
      header: "Exterior Detailing",
      description:
        "Complete exterior wash, wax, and protection. Paint correction, ceramic coating, and tire shine included for a showroom finish.",
    },
    {
      id: 2,
      image: "/assets/interior-detail.png",
      imageAlt: "Professional interior car detailing service",
      header: "Interior Detailing",
      description:
        "Deep cleaning of seats, carpets, and dashboard. Steam cleaning, leather conditioning, and odor elimination for a fresh interior.",
    },
    {
      id: 3,
      image: "/assets/headlight-restoration.png",
      imageAlt: "Professional headlight restoration service",
      header: "Headlight Restoration",
      description:
        "Restore cloudy and yellowed headlights to like-new condition. Improved visibility and enhanced vehicle appearance guaranteed.",
    },
  ];

  const handleLearnMore = (serviceName) => {
    console.log(`Learn more about ${serviceName}`);
    // Add navigation or modal logic here
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">
            <span className="services__highlight">
              Our Professional Detailing Services
            </span>
          </h2>
          <p className="services__subtitle">
            Transform your vehicle with our expert mobile detailing services. We
            bring professional-grade cleaning and protection directly to your
            location.
          </p>
        </div>

        <div className="services__grid">
          {servicesData.map((service) => (
            <Card
              key={service.id}
              image={service.image}
              imageAlt={service.imageAlt}
              header={service.header}
              description={service.description}
              onLearnMore={() => handleLearnMore(service.header)}
            />
          ))}
        </div>

        {/* <div className="services__cta">
          <div className="services__cta-content">
            <h3 className="services__cta-title">Ready to Get Started?</h3>
            <p className="services__cta-text">
              Book your mobile detailing service today and experience the
              convenience of professional car care at your location.
            </p>
            <div className="services__cta-buttons">
              <button className="btn btn--primary">Get Free Quote</button>
              <button className="btn btn--secondary">Call Now</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
