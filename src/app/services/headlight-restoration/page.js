import Layout from "../../components/layout/Layout";
import Image from "next/image";

export const metadata = {
  title: "Professional Headlight Restoration Services | Zuma Mobile Detailing",
  description:
    "Restore clarity and brightness to your headlights with our professional headlight restoration services in Chatsworth, Simi Valley, Camarillo, and Thousand Oaks. Improve visibility and vehicle appearance.",
  keywords:
    "headlight restoration, headlight repair, foggy headlights, yellow headlights, headlight polishing, automotive lighting, mobile headlight service, Chatsworth, Simi Valley, Camarillo, Thousand Oaks",
  openGraph: {
    title:
      "Professional Headlight Restoration Services | Zuma Mobile Detailing",
    description:
      "Professional mobile headlight restoration services. Improve visibility and vehicle appearance with our expert headlight polishing and restoration.",
    type: "website",
    locale: "en_US",
    siteName: "Zuma Mobile Detailing",
    images: [
      {
        url: "/assets/headlight-restoration.png",
        width: 1200,
        height: 630,
        alt: "Professional headlight restoration service results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Headlight Restoration Services | Zuma Mobile Detailing",
    description:
      "Restore clarity to your headlights with professional mobile headlight restoration services in Chatsworth, Simi Valley, Camarillo, and Thousand Oaks.",
    images: ["/assets/headlight-restoration.png"],
  },
  alternates: {
    canonical: "https://zumamobiledetailing.com/services/headlight-restoration",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function HeadlightRestoration() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Headlight Restoration",
    description:
      "Professional mobile headlight restoration services to restore clarity and improve visibility.",
    provider: {
      "@type": "LocalBusiness",
      name: "Zuma Mobile Detailing",
      telephone: "(818) 308-0207",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chatsworth",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    serviceType: "Headlight Restoration",
    areaServed: [
      {
        "@type": "City",
        name: "Chatsworth",
        addressRegion: "CA",
      },
      {
        "@type": "City",
        name: "Simi Valley",
        addressRegion: "CA",
      },
      {
        "@type": "City",
        name: "Camarillo",
        addressRegion: "CA",
      },
      {
        "@type": "City",
        name: "Thousand Oaks",
        addressRegion: "CA",
      },
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Basic Headlight Restoration",
        description:
          "Single vehicle headlight restoration with UV protection coating",
        priceRange: "$60-$80",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Premium Headlight Restoration",
        description:
          "Complete headlight restoration with long-lasting sealant and warranty",
        priceRange: "$90-$120",
        priceCurrency: "USD",
      },
    ],
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="service-page">
        <div className="container">
          {/* Hero Section */}
          <section className="service-hero">
            <div className="service-hero-content">
              <nav className="breadcrumb">
                <a href="/">Home</a> &gt; <a href="/services">Services</a> &gt;{" "}
                <span>Headlight Restoration</span>
              </nav>

              <h1>Professional Headlight Restoration Services</h1>
              <p className="service-subtitle">
                Restore clarity and brightness to your vehicle's headlights with
                our professional mobile headlight restoration services. Improve
                visibility, safety, and appearance.
              </p>

              <div className="service-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">💡</span>
                  <span>Improved Visibility</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🛡️</span>
                  <span>UV Protection</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✨</span>
                  <span>Like-New Clarity</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🚗</span>
                  <span>Enhanced Appearance</span>
                </div>
              </div>
            </div>

            <div className="service-hero-image">
              <Image
                src="/assets/headlight-restoration.png"
                alt="Before and after headlight restoration results"
                width={600}
                height={400}
                priority
              />
            </div>
          </section>

          {/* Process Section */}
          <section className="service-process">
            <h2>Our Headlight Restoration Process</h2>
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Assessment & Preparation</h3>
                <p>
                  We evaluate the condition of your headlights and prepare the
                  work area. We mask surrounding areas to protect your vehicle's
                  paint and trim.
                </p>
              </div>

              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Sanding & Restoration</h3>
                <p>
                  Using progressive grits, we carefully sand away oxidation,
                  yellowing, and cloudiness from the headlight lens surface.
                </p>
              </div>

              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Polishing & Refinishing</h3>
                <p>
                  We polish the headlight to restore crystal-clear transparency
                  and remove any remaining haze or scratches.
                </p>
              </div>

              <div className="process-step">
                <div className="step-number">4</div>
                <h3>UV Protection Application</h3>
                <p>
                  We apply a high-quality UV-resistant coating to protect
                  against future oxidation and maintain clarity longer.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="service-pricing">
            <h2>Headlight Restoration Packages</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Basic Restoration</h3>
                <div className="price">$60 - $80</div>
                <ul>
                  <li>Complete headlight restoration</li>
                  <li>Sanding & polishing</li>
                  <li>Basic UV protection coating</li>
                  <li>Both headlights included</li>
                  <li>Mobile service convenience</li>
                </ul>
                <button className="cta-button">Book Basic Service</button>
              </div>

              <div className="pricing-card featured">
                <div className="popular-badge">Most Popular</div>
                <h3>Premium Restoration</h3>
                <div className="price">$90 - $120</div>
                <ul>
                  <li>Professional-grade restoration</li>
                  <li>Multi-stage sanding process</li>
                  <li>Premium long-lasting sealant</li>
                  <li>6-month clarity warranty</li>
                  <li>Before/after photos included</li>
                </ul>
                <button className="cta-button">Book Premium Service</button>
              </div>

              <div className="pricing-card">
                <h3>Fleet Services</h3>
                <div className="price">Custom Quote</div>
                <ul>
                  <li>Multiple vehicle discounts</li>
                  <li>Commercial fleet rates</li>
                  <li>Scheduled maintenance programs</li>
                  <li>On-site service at your location</li>
                  <li>Custom service packages</li>
                </ul>
                <button className="cta-button">Request Quote</button>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="service-benefits-detailed">
            <h2>Why Choose Professional Headlight Restoration?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>🔍 Improved Visibility</h3>
                <p>
                  Restored headlights can improve light output by up to 50%,
                  dramatically enhancing nighttime visibility and driving
                  safety.
                </p>
              </div>

              <div className="benefit-card">
                <h3>💰 Cost-Effective Solution</h3>
                <p>
                  Headlight restoration costs a fraction of replacement. Save
                  hundreds compared to buying new headlight assemblies.
                </p>
              </div>

              <div className="benefit-card">
                <h3>🚗 Enhanced Appearance</h3>
                <p>
                  Crystal-clear headlights instantly refresh your vehicle's
                  appearance, making it look newer and well-maintained.
                </p>
              </div>

              <div className="benefit-card">
                <h3>📈 Increased Resale Value</h3>
                <p>
                  Clear, bright headlights improve your vehicle's curb appeal
                  and can increase resale value when it's time to sell or trade.
                </p>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="service-areas">
            <h2>Serving Your Local Area</h2>
            <p>
              We provide professional mobile headlight restoration services
              throughout:
            </p>
            <div className="areas-grid">
              <div className="area-card">
                <h3>Chatsworth, CA</h3>
                <p>
                  Our home base - serving all neighborhoods including Porter
                  Ranch, Granada Hills, and surrounding areas.
                </p>
              </div>
              <div className="area-card">
                <h3>Simi Valley, CA</h3>
                <p>
                  Complete coverage of Simi Valley including residential areas,
                  shopping centers, and business districts.
                </p>
              </div>
              <div className="area-card">
                <h3>Camarillo, CA</h3>
                <p>
                  Serving Camarillo and surrounding Ventura County areas with
                  convenient mobile service.
                </p>
              </div>
              <div className="area-card">
                <h3>Thousand Oaks, CA</h3>
                <p>
                  Full service coverage of Thousand Oaks, Westlake Village, and
                  nearby communities.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="service-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How long does headlight restoration take?</h3>
                <p>
                  Typically 45-60 minutes per vehicle, depending on the severity
                  of oxidation and the package selected. We work efficiently
                  while maintaining quality.
                </p>
              </div>

              <div className="faq-item">
                <h3>How long will the restoration last?</h3>
                <p>
                  With proper care and our UV protection coating, restoration
                  typically lasts 1-3 years. Premium packages include
                  longer-lasting sealants.
                </p>
              </div>

              <div className="faq-item">
                <h3>Can severely yellowed headlights be restored?</h3>
                <p>
                  Yes! Even heavily oxidized and yellowed headlights can usually
                  be restored to near-original clarity with our professional
                  techniques.
                </p>
              </div>

              <div className="faq-item">
                <h3>Do you guarantee your work?</h3>
                <p>
                  Absolutely. Our premium restoration packages include a 6-month
                  clarity warranty against defects in workmanship.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="service-cta">
            <h2>Ready to Restore Your Headlights?</h2>
            <p>
              Don't let foggy, yellowed headlights compromise your safety and
              vehicle's appearance. Contact us today for professional mobile
              headlight restoration services.
            </p>
            <div className="cta-buttons">
              <a href="tel:(818)308-0207" className="cta-button primary">
                Call (818) 308-0207
              </a>
              <a href="/contact" className="cta-button secondary">
                Get Free Quote
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
