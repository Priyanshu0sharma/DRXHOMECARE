"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-logo">
              <img src="/images/Drx_logo-removebg-preview.png" alt="DRx Home Care Logo" />
              <h3>DRx Home Care</h3>
            </div>
            <p>Complete I.C.U. Care at Home. Bringing hospital-quality healthcare to your doorstep in Jaipur — 24×7.</p>
            <div className="footer__social">
              <a href="https://api.whatsapp.com/send?phone=919352286423" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="tel:7568858357" aria-label="Phone">
                <i className="fas fa-phone-alt"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/"><i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i> Home</Link></li>
              <li><Link href="/#services"><i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i> Services</Link></li>
              <li><Link href="/#about"><i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i> About Us</Link></li>
              <li><Link href="/#doctor"><i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i> Our Doctor</Link></li>
              <li><Link href="/#contact"><i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i> Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Our Services</h4>
            <ul>
              <li><Link href="/services/icu-at-home"><i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i> ICU at Home</Link></li>
              <li><Link href="/services/nursing-care"><i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i> Nursing Care</Link></li>
              <li><Link href="/services/doctor-visit"><i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i> Doctor Visit</Link></li>
              <li><Link href="/services/physiotherapy"><i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i> Physiotherapy</Link></li>
              <li><Link href="/services/elder-care"><i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i> Elder Care</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact Info</h4>
            <ul>
              <li><a href="tel:7568858357"><i className="fas fa-phone-alt" style={{ fontSize: "12px" }}></i> 7568858357</a></li>
              <li><a href="tel:7742688357"><i className="fas fa-phone-alt" style={{ fontSize: "12px" }}></i> 7742688357</a></li>
              <li><Link href="/#contact"><i className="fas fa-map-marker-alt" style={{ fontSize: "12px" }}></i> Durgapura, Jaipur</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 DRx Home Care. All Rights Reserved.</p>
          <div className="footer__bottom-developer">
            <span>Website designed & developed by</span>
            <a href="https://www.rootofweb.in" target="_blank" rel="noopener noreferrer" className="developer-link">
              <img src="/images/ROOTOFWEB_LOGO.jpeg" alt="ROOT OF WEB Logo" className="developer-logo" />
              <span>ROOT OF WEB</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
