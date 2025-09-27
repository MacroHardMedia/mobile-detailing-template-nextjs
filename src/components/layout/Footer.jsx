function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3>Elite Mobile Detailing</h3>
            <p>Transform your vehicle, preserve its value.</p>
          </div>

          <div className="footer__links">
            <div className="footer__section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#exterior-detailing">Exterior Detailing</a>
                </li>
                <li>
                  <a href="#interior-detailing">Interior Detailing</a>
                </li>
                <li>
                  <a href="#ceramic-coating">Ceramic Coating</a>
                </li>
                <li>
                  <a href="#paint-correction">Paint Correction</a>
                </li>
              </ul>
            </div>

            <div className="footer__section">
              <h4>Contact</h4>
              <ul>
                <li>Email: info@elitemobiledetailing.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Service Area: Los Angeles County</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2025 Elite Mobile Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
