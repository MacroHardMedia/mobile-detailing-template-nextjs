import Image from "next/image";
import Layout from "../../components/layout/Layout";
import "./exterior-detailing.scss";

export const metadata = {
  title: "Exterior Car Detailing Chatsworth CA | Mobile Auto Detailing Service",
  description:
    "Professional exterior car detailing in Chatsworth, Simi Valley, Thousand Oaks & Camarillo. Paint correction, ceramic coating, waxing. Mobile service to your location.",
  keywords:
    "exterior car detailing Chatsworth, auto detailing Simi Valley, car wax Thousand Oaks, paint correction Camarillo, mobile car detailing",
  alternates: {
    canonical: "https://your-domain.com/services/exterior-detailing",
  },
  openGraph: {
    title: "Professional Exterior Car Detailing - Zuma Mobile Detailing",
    description:
      "Transform your vehicle with our premium exterior detailing service. Paint correction, ceramic coating, and protection.",
    type: "website",
    url: "https://your-domain.com/services/exterior-detailing",
  },
};

export default function ExteriorDetailingPage() {
  return (
    <Layout>
      <div className="service-page">
        {/* Hero Section */}
        <section className="service-hero">
          <div className="container">
            <div className="service-hero__content">
              <nav className="breadcrumb">
                <a href="/">Home</a> &gt; <a href="/services">Services</a> &gt;{" "}
                <span>Exterior Detailing</span>
              </nav>

              <h1 className="service-hero__title">
                Professional{" "}
                <span className="highlight">Exterior Car Detailing</span> in
                Chatsworth, CA
              </h1>

              <p className="service-hero__subtitle">
                Transform your vehicle's appearance with our premium exterior
                detailing service. From paint correction to ceramic coating, we
                bring showroom-quality results directly to your location.
              </p>

              <div className="service-hero__features">
                <div className="feature">✓ Paint Correction & Protection</div>
                <div className="feature">✓ Ceramic Coating Available</div>
                <div className="feature">✓ Mobile Service to Your Location</div>
                <div className="feature">✓ Eco-Friendly Products</div>
              </div>

              <button className="btn btn--primary btn--large">
                Get Free Quote Today
              </button>
            </div>

            <div className="service-hero__image">
              <Image
                src="/assets/exterior-detail.png"
                alt="Professional exterior car detailing service in Chatsworth"
                width={600}
                height={400}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="service-details">
          <div className="container">
            <h2>Complete Exterior Detailing Process</h2>

            <div className="service-steps">
              <div className="step">
                <h3>1. Pre-Wash Assessment</h3>
                <p>
                  Thorough inspection of paint condition, identifying scratches,
                  swirl marks, and contamination.
                </p>
              </div>

              <div className="step">
                <h3>2. Multi-Stage Washing</h3>
                <p>
                  Safe two-bucket wash method with premium pH-balanced shampoos
                  and microfiber mitts.
                </p>
              </div>

              <div className="step">
                <h3>3. Decontamination</h3>
                <p>
                  Clay bar treatment removes embedded contaminants for smooth,
                  clean paint surface.
                </p>
              </div>

              <div className="step">
                <h3>4. Paint Correction</h3>
                <p>
                  Professional polishing removes scratches and swirl marks,
                  restoring paint clarity.
                </p>
              </div>

              <div className="step">
                <h3>5. Protection Application</h3>
                <p>
                  High-grade wax or ceramic coating provides long-lasting
                  protection and shine.
                </p>
              </div>

              <div className="step">
                <h3>6. Final Details</h3>
                <p>
                  Tire shine, trim restoration, and glass cleaning for complete
                  transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas">
          <div className="container">
            <h2>We Serve These Local Areas</h2>
            <div className="areas-grid">
              <div className="area">
                <h3>Chatsworth</h3>
                <p>
                  Professional exterior detailing in the heart of Chatsworth.
                  Mobile service to your home or office.
                </p>
              </div>

              <div className="area">
                <h3>Simi Valley</h3>
                <p>
                  Serving Simi Valley with premium car detailing. Protecting
                  vehicles from harsh California sun.
                </p>
              </div>

              <div className="area">
                <h3>Thousand Oaks</h3>
                <p>
                  Mobile detailing service throughout Thousand Oaks. Convenient
                  scheduling, exceptional results.
                </p>
              </div>

              <div className="area">
                <h3>Camarillo</h3>
                <p>
                  Professional auto detailing in Camarillo. Expert paint
                  correction and protection services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="service-pricing">
          <div className="container">
            <h2>Exterior Detailing Packages</h2>

            <div className="pricing-grid">
              <div className="package">
                <h3>Express Exterior</h3>
                <div className="price">$89</div>
                <ul>
                  <li>Multi-stage wash</li>
                  <li>Dry & dress tires</li>
                  <li>Window cleaning</li>
                  <li>Basic wax protection</li>
                </ul>
                <button className="btn btn--secondary">Select Package</button>
              </div>

              <div className="package featured">
                <h3>Premium Exterior</h3>
                <div className="price">$149</div>
                <ul>
                  <li>Everything in Express</li>
                  <li>Clay bar decontamination</li>
                  <li>Paint correction (minor)</li>
                  <li>Premium carnauba wax</li>
                  <li>Trim restoration</li>
                </ul>
                <button className="btn btn--primary">Most Popular</button>
              </div>

              <div className="package">
                <h3>Elite Exterior</h3>
                <div className="price">$249</div>
                <ul>
                  <li>Everything in Premium</li>
                  <li>Full paint correction</li>
                  <li>Ceramic coating protection</li>
                  <li>Headlight restoration</li>
                  <li>6-month protection warranty</li>
                </ul>
                <button className="btn btn--secondary">
                  Ultimate Protection
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="service-cta">
          <div className="container">
            <h2>Ready to Transform Your Vehicle?</h2>
            <p>
              Get professional exterior detailing service at your location. Free
              quotes, flexible scheduling.
            </p>
            <div className="cta-buttons">
              <button className="btn btn--primary btn--large">
                Get Free Quote
              </button>
              <button className="btn btn--secondary btn--large">
                Call (747) 347-8176
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Exterior Car Detailing",
            description:
              "Professional exterior car detailing service including paint correction, ceramic coating, and protection",
            provider: {
              "@type": "LocalBusiness",
              name: "Zuma Mobile Detailing",
              telephone: "+1-747-347-8176",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chatsworth",
                addressRegion: "CA",
                postalCode: "91311",
              },
            },
            serviceArea: [
              "Chatsworth, CA",
              "Simi Valley, CA",
              "Thousand Oaks, CA",
              "Camarillo, CA",
            ],
            offers: {
              "@type": "Offer",
              priceRange: "$89-$249",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </Layout>
  );
}
