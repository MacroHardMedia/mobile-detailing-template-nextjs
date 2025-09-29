import Layout from "../components/layout/Layout";
import "./privacy-policy.scss";

export const metadata = {
  title: "Privacy Policy | Zuma Mobile Detailing",
  description:
    "Privacy policy for Zuma Mobile Detailing. Learn how we collect, use, and protect your personal information when you use our mobile detailing services.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zumamobiledetailing.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="privacy-policy">
        <div className="container">
          <div className="privacy-content">
            <nav className="breadcrumb">
              <a href="/">Home</a> &gt; <span>Privacy Policy</span>
            </nav>

            <h1>Privacy Policy</h1>
            <p className="last-updated">
              <strong>Last Updated:</strong> September 27, 2025
            </p>

            <div className="privacy-section">
              <h2>1. Information We Collect</h2>

              <h3>Personal Information</h3>
              <p>
                When you use our services or contact us, we may collect the
                following personal information:
              </p>
              <ul>
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  phone number, and mailing address
                </li>
                <li>
                  <strong>Service Information:</strong> Vehicle details (make,
                  model, year), service preferences, and special instructions
                </li>
                <li>
                  <strong>Location Information:</strong> Service address and
                  general location for mobile service delivery
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing information,
                  though we do not store complete credit card numbers
                </li>
                <li>
                  <strong>Communication Records:</strong> Messages, emails, and
                  phone conversations for service coordination
                </li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect:</p>
              <ul>
                <li>IP address and general location information</li>
                <li>Browser type and version</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>2. How We Use Your Information</h2>
              <p>
                We use your personal information for the following purposes:
              </p>
              <ul>
                <li>
                  <strong>Service Delivery:</strong> To provide mobile detailing
                  services, schedule appointments, and coordinate service visits
                </li>
                <li>
                  <strong>Communication:</strong> To respond to inquiries, send
                  service confirmations, and provide customer support
                </li>
                <li>
                  <strong>Payment Processing:</strong> To process payments and
                  maintain billing records
                </li>
                <li>
                  <strong>Service Improvement:</strong> To understand customer
                  preferences and improve our services
                </li>
                <li>
                  <strong>Marketing:</strong> To send promotional offers and
                  service updates (with your consent)
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with applicable
                  laws and regulations
                </li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, rent, or trade your personal information to
                third parties. We may share your information in the following
                limited circumstances:
              </p>

              <h3>Service Providers</h3>
              <ul>
                <li>
                  <strong>Payment Processors:</strong> To process payments
                  securely
                </li>
                <li>
                  <strong>Scheduling Systems:</strong> To manage appointments
                  and service coordination
                </li>
                <li>
                  <strong>Communication Tools:</strong> To send service
                  notifications and confirmations
                </li>
              </ul>

              <h3>Legal Requirements</h3>
              <p>
                We may disclose your information if required by law, court
                order, or government regulation, or to protect our rights,
                property, or safety.
              </p>

              <h3>Business Transfers</h3>
              <p>
                In the event of a business sale, merger, or acquisition,
                customer information may be transferred as part of the business
                assets.
              </p>
            </div>

            <div className="privacy-section">
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your
                personal information:
              </p>
              <ul>
                <li>
                  <strong>Encryption:</strong> Sensitive data is encrypted
                  during transmission and storage
                </li>
                <li>
                  <strong>Access Controls:</strong> Limited access to personal
                  information on a need-to-know basis
                </li>
                <li>
                  <strong>Secure Systems:</strong> Regular security updates and
                  monitoring of our systems
                </li>
                <li>
                  <strong>Employee Training:</strong> Staff training on privacy
                  and security best practices
                </li>
              </ul>
              <p>
                However, no method of transmission over the internet is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="privacy-section">
              <h2>5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to:
              </p>
              <ul>
                <li>Provide ongoing services and customer support</li>
                <li>Comply with legal obligations and tax requirements</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Maintain business records for operational purposes</li>
              </ul>
              <p>
                Typically, we retain customer information for 7 years after the
                last service date, unless a longer retention period is required
                by law.
              </p>
            </div>

            <div className="privacy-section">
              <h2>6. Your Rights and Choices</h2>
              <p>
                You have the following rights regarding your personal
                information:
              </p>

              <h3>Access and Correction</h3>
              <ul>
                <li>Request access to your personal information</li>
                <li>
                  Request correction of inaccurate or incomplete information
                </li>
                <li>Update your contact preferences</li>
              </ul>

              <h3>Marketing Communications</h3>
              <ul>
                <li>
                  Opt-out of promotional emails by clicking unsubscribe links
                </li>
                <li>
                  Contact us to remove your information from marketing lists
                </li>
                <li>
                  Adjust communication preferences for service-related messages
                </li>
              </ul>

              <h3>Data Deletion</h3>
              <p>
                You may request deletion of your personal information, subject
                to legal and business requirements. Some information may need to
                be retained for tax, legal, or safety purposes.
              </p>
            </div>

            <div className="privacy-section">
              <h2>7. Cookies and Tracking Technologies</h2>
              <p>Our website uses cookies and similar technologies to:</p>
              <ul>
                <li>Remember your preferences and improve user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide relevant content and advertisements</li>
                <li>Enable social media features and functionality</li>
              </ul>
              <p>
                You can control cookie settings through your browser
                preferences, though this may affect website functionality.
              </p>
            </div>

            <div className="privacy-section">
              <h2>8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or
                services. This privacy policy does not apply to third-party
                sites, and we are not responsible for their privacy practices.
                We encourage you to read the privacy policies of any third-party
                sites you visit.
              </p>
            </div>

            <div className="privacy-section">
              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13 years of age.
                We do not knowingly collect personal information from children
                under 13. If you believe we have collected information from a
                child under 13, please contact us immediately.
              </p>
            </div>

            <div className="privacy-section">
              <h2>10. California Privacy Rights</h2>
              <p>
                California residents have additional rights under the California
                Consumer Privacy Act (CCPA):
              </p>
              <ul>
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>
                  Right to non-discrimination for exercising privacy rights
                </li>
              </ul>
              <p>
                <strong>Note:</strong> We do not sell personal information to
                third parties.
              </p>
            </div>

            <div className="privacy-section">
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you
                of significant changes by:
              </p>
              <ul>
                <li>Posting the updated policy on our website</li>
                <li>
                  Updating the "Last Updated" date at the top of this policy
                </li>
                <li>
                  Sending email notifications for material changes (when
                  appropriate)
                </li>
              </ul>
              <p>
                Your continued use of our services after any changes constitutes
                acceptance of the updated privacy policy.
              </p>
            </div>

            <div className="privacy-section">
              <h2>12. Contact Information</h2>
              <p>
                If you have questions about this privacy policy or wish to
                exercise your privacy rights, please contact us:
              </p>

              <div className="contact-info">
                <p>
                  <strong>Zuma Mobile Detailing</strong>
                </p>
                <p>
                  Phone: <a href="tel:(818)308-0207">(818) 308-0207</a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:privacy@zumamobiledetailing.com">
                    privacy@zumamobiledetailing.com
                  </a>
                </p>
                <p>Address: Chatsworth, CA 91311</p>
              </div>

              <p>
                We will respond to your privacy-related requests within 30 days
                of receipt.
              </p>
            </div>

            <div className="privacy-footer">
              <h3>Summary</h3>
              <p>
                We are committed to protecting your privacy and handling your
                personal information responsibly. This policy explains our
                practices in clear, understandable terms. If you have any
                concerns or questions, please don't hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
