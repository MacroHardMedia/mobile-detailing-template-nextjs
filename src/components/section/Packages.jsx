"use client";
import { useState } from "react";
import "./packages.scss";

const packagesData = {
  packages: [
    {
      name: "Express Detail",
      duration_hours: "2 - 3",
      pricing: {
        sedan_coupe: 95,
        small_suv: 110,
        large_suv_truck: 130,
      },
      services: [
        "2 bucket rinseless wash",
        "Quick dry",
        "Wheels & tire clean",
        "Interior vacuum",
        "Wipe down surfaces",
        "Interior & exterior glass cleaned",
        "Spray on ceramic coating",
        "Light tire dressing",
      ],
    },
    {
      name: "Full Detail",
      duration_hours: "3 - 4",
      pricing: {
        sedan_coupe: 200,
        small_suv: 230,
        large_suv_truck: 260,
      },
      services: [
        "Eveything in the express detail",
        "Deep foam pre-wash",
        "2-bucket rinseless wash",
        "Wheels & barrels cleaned",
        "Ceramic spray sealant (up to 3 months protection)",
        "Door jambs cleaned",
        "Gas lid cleaned",
        "Detailed interior vacuum",
        "Interior steam sanitization",
        "Seatbelts cleaned",
        "Detailed interior wipe down and dressed",
        "Leather seats conditioned",
        "Air vents cleaned",
        "Wipe down & protectant applied",
        "Light carpet/seat spot cleaning",
        "Interior & exterior glass cleaned",
        "Tire dressing",
        "Floor mats cleaned",
      ],
    },
    {
      name: "Premium Detail",
      duration_hours: "5 - 8",
      pricing: {
        sedan_coupe: 350,
        small_suv: 380,
        large_suv_truck: 410,
      },
      services: [
        "Everything in the full detail included",
        "Deep foam & 2-bucket wash",
        "Chemical paint decontamination",
        "Clay bar decontamination",
        "Paint (cut/polish) correction",
        "Carnauba wax deep shine",
        "Wheels, barrels & wells cleaned",
        "Door & trunk jambs cleaned",
        "Premium tire dressing",
        "Full interior vacuum (crevices, under seats)",
        "Interior wipe down & dressed",
        "Interior steam sanitized",
        "Full carpet & upholstery shampoo/extraction",
        "Leather clean & conditioner",
        "Full glass decontaminated and cleaned",
        "Premium mat cleaning",
        "Headliner cleaned",
      ],
    },
  ],
  add_ons: [
    { name: "Heavy pet hair removal", price_range: "$40–$80" },
    { name: "Odor neutralizer / ozone treatment", price_range: "$75–$150" },
    {
      name: "Clay bar / decontamination (standalone)",
      price_range: "$60–$150",
    },
    { name: "Headlight restoration", price_range: "$40–$75" },
  ],
};

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatVehicleType = (type) => {
    return type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPackage(null);
    setIsModalOpen(false);
  };

  return (
    <section id="packages" className="packages">
      <div className="container">
        <div className="packages__header">
          <h2 className="section-title">Our Service Packages</h2>
          <p className="section-subtitle">
            Professional mobile detailing packages designed to meet every need
            and budget
          </p>
        </div>

        {/* Service Packages */}
        <div className="packages__grid">
          {packagesData.packages.map((pkg, index) => (
            <div
              key={index}
              className={`package-card ${index === 1 ? "featured" : ""}`}
            >
              {index === 1 && <div className="popular-badge">Most Popular</div>}

              <div className="package-card__header">
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-duration">
                  <span className="duration-icon">⏱️</span>
                  <span>{pkg.duration_hours} hours</span>
                </div>
              </div>

              <div className="package-card__pricing">
                <div className="pricing-item">
                  <span className="vehicle-type">Sedan/Coupe</span>
                  <span className="price">${pkg.pricing.sedan_coupe}</span>
                </div>
                <div className="pricing-item">
                  <span className="vehicle-type">Small SUV</span>
                  <span className="price">${pkg.pricing.small_suv}</span>
                </div>
                <div className="pricing-item">
                  <span className="vehicle-type">Large SUV/Truck</span>
                  <span className="price">${pkg.pricing.large_suv_truck}</span>
                </div>
              </div>

              <div className="package-card__footer">
                <button
                  className="package-btn secondary"
                  onClick={() => openModal(pkg)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="add-ons">
          <h3 className="add-ons__title">Popular Add-Ons</h3>
          <div className="add-ons__grid">
            {packagesData.add_ons.map((addon, index) => (
              <div key={index} className="addon-item">
                <div className="addon-info">
                  <span className="addon-name">{addon.name}</span>
                  <span className="addon-price">{addon.price_range}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="packages__cta">
          <h3>Ready to Transform Your Vehicle?</h3>
          <p>Get a custom quote based on your vehicle and service needs</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Get Free Quote</button>
            <button className="cta-btn secondary">Call (747) 347-8176</button>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && selectedPackage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>{selectedPackage.name}</h2>
                <button className="modal-close" onClick={closeModal}>
                  ×
                </button>
              </div>

              <div className="modal-body">
                <div className="modal-duration">
                  <span className="duration-icon">⏱️</span>
                  <span>{selectedPackage.duration_hours} hours</span>
                </div>

                <div className="modal-pricing">
                  <h3>Pricing</h3>
                  <div className="pricing-list">
                    <div className="pricing-item">
                      <span>Sedan/Coupe</span>
                      <span>${selectedPackage.pricing.sedan_coupe}</span>
                    </div>
                    <div className="pricing-item">
                      <span>Small SUV</span>
                      <span>${selectedPackage.pricing.small_suv}</span>
                    </div>
                    <div className="pricing-item">
                      <span>Large SUV/Truck</span>
                      <span>${selectedPackage.pricing.large_suv_truck}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-services">
                  <h3>What's Included</h3>
                  <ul>
                    {selectedPackage.services.map((service, index) => (
                      <li key={index}>
                        <span className="checkmark">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-footer">
                  {/* <button className="modal-btn primary">
                    Book {selectedPackage.name}
                  </button> */}
                  <button className="modal-btn secondary" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Packages;
