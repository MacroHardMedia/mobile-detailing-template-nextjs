import Image from "next/image";
import Layout from "../../components/layout/Layout";
import "./interior-cleaning.scss";

export const metadata = {
  title: "Interior Car Cleaning Simi Valley CA | Professional Auto Detailing",
  description:
    "Expert interior car cleaning in Simi Valley, Northridge, West Hills, Tarzana, Winnetka, Canoga Park, Chatsworth, Thousand Oaks & Camarillo. Steam cleaning, leather conditioning, odor removal. Mobile service.",
  keywords:
    "interior car cleaning Simi Valley, auto detailing Chatsworth, car upholstery cleaning Thousand Oaks, leather conditioning Camarillo",
  alternates: {
    canonical: "https://your-domain.com/services/interior-cleaning",
  },
  openGraph: {
    title: "Professional Interior Car Cleaning - Zuma Mobile Detailing",
    description:
      "Deep interior cleaning and conditioning. Steam cleaning, leather care, and odor elimination.",
    type: "website",
    url: "https://your-domain.com/services/interior-cleaning",
  },
};

export default function InteriorCleaningPage() {
  return (
    <Layout>
      <div className="service-page">
        {/* Hero Section */}
        <section className="service-hero">
          <div className="container">
            <div className="service-hero__content">
              <nav className="breadcrumb">
                <a href="/">Home</a> &gt; <a href="/services">Services</a> &gt;{" "}
                <span>Interior Cleaning</span>
              </nav>

              <h1 className="service-hero__title">
                Deep <span className="highlight">Interior Car Cleaning</span> in
                Simi Valley, CA
              </h1>

              <p className="service-hero__subtitle">
                Restore your vehicle's interior with our comprehensive cleaning
                service. From steam cleaning to leather conditioning, we
                eliminate odors and refresh every surface.
              </p>

              <div className="service-hero__features">
                <div className="feature">✓ Steam Cleaning & Sanitization</div>
                <div className="feature">✓ Leather Conditioning</div>
                <div className="feature">✓ Odor Elimination</div>
                <div className="feature">✓ Fabric Protection Treatment</div>
              </div>

              <button className="btn btn--primary btn--large">
                Schedule Interior Cleaning
              </button>
            </div>

            <div className="service-hero__image">
              <Image
                src="/assets/interior-detail.png"
                alt="Professional interior car cleaning service in Simi Valley"
                width={600}
                height={400}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="service-details">
          <div className="container">
            <h2>Complete Interior Cleaning Process</h2>

            <div className="service-steps">
              <div className="step">
                <h3>1. Interior Inspection</h3>
                <p>
                  Thorough assessment of all interior surfaces, identifying
                  stains, odors, and wear patterns.
                </p>
              </div>

              <div className="step">
                <h3>2. Vacuum & Pre-Treatment</h3>
                <p>
                  Deep vacuuming of all surfaces followed by pre-treatment of
                  stains and high-traffic areas.
                </p>
              </div>

              <div className="step">
                <h3>3. Steam Cleaning</h3>
                <p>
                  High-temperature steam cleaning kills bacteria and removes
                  embedded dirt from seats and carpets.
                </p>
              </div>

              <div className="step">
                <h3>4. Leather Care</h3>
                <p>
                  Specialized leather cleaning and conditioning to restore
                  suppleness and prevent cracking.
                </p>
              </div>

              <div className="step">
                <h3>5. Dashboard & Trim</h3>
                <p>
                  Careful cleaning and conditioning of all interior plastics,
                  vinyl, and trim pieces.
                </p>
              </div>

              <div className="step">
                <h3>6. Final Protection</h3>
                <p>
                  Application of fabric protection and UV protectants to
                  maintain your investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="service-areas">
          <div className="container">
            <h2>Interior Cleaning Service Areas</h2>
            <div className="areas-grid">
              <div className="area">
                <h3>Simi Valley</h3>
                <p>
                  Premier interior cleaning service in Simi Valley. Eliminating
                  odors and restoring comfort.
                </p>
              </div>

              <div className="area">
                <h3>Chatsworth</h3>
                <p>
                  Professional interior detailing in Chatsworth. Steam cleaning
                  and leather conditioning.
                </p>
              </div>

              <div className="area">
                <h3>Thousand Oaks</h3>
                <p>
                  Comprehensive interior cleaning throughout Thousand Oaks.
                  Mobile convenience at its best.
                </p>
              </div>

              <div className="area">
                <h3>Camarillo</h3>
                <p>
                  Expert interior restoration in Camarillo. From pet odors to
                  coffee stains, we handle it all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="service-pricing">
          <div className="container">
            <h2>Interior Cleaning Packages</h2>

            <div className="pricing-grid">
              <div className="package">
                <h3>Basic Interior</h3>
                <div className="price">$79</div>
                <ul>
                  <li>Complete vacuuming</li>
                  <li>Dashboard cleaning</li>
                  <li>Window cleaning (interior)</li>
                  <li>Basic surface conditioning</li>
                </ul>
                <button className="btn btn--secondary">Select Package</button>
              </div>

              <div className="package featured">
                <h3>Deep Clean Interior</h3>
                <div className="price">$139</div>
                <ul>
                  <li>Everything in Basic</li>
                  <li>Steam cleaning seats</li>
                  <li>Carpet shampooing</li>
                  <li>Leather conditioning</li>
                  <li>Odor elimination</li>
                </ul>
                <button className="btn btn--primary">Most Popular</button>
              </div>

              <div className="package">
                <h3>Complete Interior</h3>
                <div className="price">$199</div>
                <ul>
                  <li>Everything in Deep Clean</li>
                  <li>Stain removal treatment</li>
                  <li>Fabric protection coating</li>
                  <li>Air vent cleaning</li>
                  <li>30-day odor warranty</li>
                </ul>
                <button className="btn btn--secondary">Ultimate Clean</button>
              </div>
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
            name: "Interior Car Cleaning",
            description:
              "Professional interior car cleaning including steam cleaning, leather conditioning, and odor elimination",
            provider: {
              "@type": "LocalBusiness",
              name: "Zuma Mobile Detailing",
              telephone: "+1-747-347-8176",
            },
            serviceArea: [
              "Simi Valley, CA",
              "Chatsworth, CA",
              "Thousand Oaks, CA",
              "Camarillo, CA",
            ],
            offers: {
              "@type": "Offer",
              priceRange: "$79-$199",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </Layout>
  );
}
