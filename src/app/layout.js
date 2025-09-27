import "./globals.css";
import "../styles/globals.scss";

export const metadata = {
  title:
    "Zuma Mobile Detailing - Professional Car Care Services | We Come To You",
  description:
    "Professional mobile car detailing services. Expert interior cleaning, exterior detailing, and headlight restoration. Convenient service at your location.",
  keywords:
    "mobile car detailing, professional car care, auto detailing, car wash service, mobile detailing near me, interior cleaning, exterior detailing, headlight restoration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Zuma Mobile Detailing" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Zuma Mobile Detailing - Professional Car Care Services"
        />
        <meta
          property="og:description"
          content="Professional mobile car detailing services. Interior cleaning, exterior detailing, and headlight restoration. We come to you!"
        />
        <meta property="og:type" content="website" />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Zuma Mobile Detailing",
              description: "Professional mobile car detailing services",
              telephone: "+1-747-347-8176",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chatsworth",
                addressRegion: "California",
                postalCode: "91311",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
