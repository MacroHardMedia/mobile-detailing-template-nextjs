"use client";
import "./packages.scss";

const packagesData = {
  packages: [
    {
      name: "Basic Detail",
      duration_hours: 2,
      pricing: {
        sedan_coupe: 95,
        small_suv: 110,
        large_suv_truck: 130,
      },
      services: [
        "Rinseless or hand wash",
        "Quick dry",
        "Wheels & tire clean",
        "Light interior vacuum",
        "Wipe down surfaces",
        "Interior & exterior glass cleaned",
        "Spray wax",
        "Light tire dressing",
        "Air freshener",
      ],
    },
    {
      name: "Standard Detail",
      duration_hours: 3,
      pricing: {
        sedan_coupe: 170,
        small_suv: 200,
        large_suv_truck: 240,
      },
      services: [
        "Full 2-bucket wash & dry",
        "Wheels & wheel wells cleaned",
        "Door jambs cleaned",
        "Detailed interior vacuum",
        "Wipe down & protectant applied",
        "Light carpet/seat spot cleaning",
        "Interior & exterior glass cleaned",
        "Spray sealant (up to 3 months protection)",
        "Tire dressing",
        "Floor mats cleaned",
      ],
    },
    {
      name: "Premium Detail",
      duration_hours: 4.5,
      pricing: {
        sedan_coupe: 350,
        small_suv: 420,
        large_suv_truck: 500,
      },
      services: [
        "Deep foam & 2-bucket wash",
        "Clay bar & paint decontamination",
        "1-step machine polish",
        "Wheels, barrels & wells cleaned",
        "Door & trunk jambs cleaned",
        "Long-lasting tire dressing",
        "Full interior vacuum (crevices, under seats)",
        "Interior wipe down & UV protectant",
        "Full carpet & upholstery shampoo/extraction",
        "Leather clean & conditioner",
        "Machine-applied wax or sealant (6–12 months)",
        "Optional ceramic spray topper",
        "Trim restoration",
        "Headlight polish",
        "Full glass cleaned",
        "Premium mat cleaning",
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
    { name: "Ceramic spray topper", price_range: "$75–$200" },
  ],
};

function Packages() {
  const formatVehicleType = (type) => {
    return type.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
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
                <button className="package-btn secondary">Learn More</button>
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
                <button className="addon-btn">Add</button>
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
            <button className="cta-btn secondary">Call (818) 308-0207</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
