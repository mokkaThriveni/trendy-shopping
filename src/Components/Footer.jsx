import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-column">
          <h4>TrendyMart</h4>
          <p>Your one-stop shop for electronics, fashion, and more.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/mobiles">Mobiles</a></li>
            <li><a href="/laptop">Laptops</a></li>
            <li><a href="/men">Men Fashion</a></li>
            <li><a href="/women">Women Fashion</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} TrendyMart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
