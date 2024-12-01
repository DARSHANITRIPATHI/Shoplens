import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-about">
          <h4>About Us</h4>
          <p>
            We are dedicated to providing the best products at the best prices,
            ensuring quality and satisfaction for all our customers.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <img src="/assets/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/assets/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/assets/instagram-icon.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/assets/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 ShopLens. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
