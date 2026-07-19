import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Business Card | DRx Home Care | Best Caretaker & Homecare Jaipur",
  description:
    "Access DRx Home Care digital business card. Quick links to call the best caretaker, homecare, and patient attendant services in Jaipur.",
  keywords: [
    "caretaker",
    "caretaker jaipur",
    "best caretaker jaipur",
    "best caretaker in jaipur",
    "jaipur caretaker",
    "jaipur homecare best",
  ],
  alternates: {
    canonical: "https://drxhomecare.com/card",
  },
  openGraph: {
    title: "Digital Business Card | DRx Home Care | Best Caretaker & Homecare Jaipur",
    description: "Access DRx Home Care digital business card.",
    url: "https://drxhomecare.com/card",
    type: "website",
    siteName: "DRx Home Care",
    images: [
      {
        url: "/images/Drx_logo-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "DRx Home Care Logo",
      },
    ],
  },
};

export default function DigitalCardPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Premium Scoped Mockup Styling for Standalone Card */
        .card-body-wrapper {
          background: radial-gradient(circle at center, #071f14 0%, #030e09 100%) !important;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          margin: 0;
          padding: 0;
          color: #ffffff;
          min-height: 100vh;
          overflow-x: hidden;
          width: 100%;
        }

        .card-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          box-sizing: border-box;
          background-image: 
            radial-gradient(circle at top right, rgba(0, 168, 89, 0.15) 0%, transparent 60%),
            radial-gradient(circle at bottom left, rgba(10, 106, 191, 0.1) 0%, transparent 60%),
            radial-gradient(rgba(51, 199, 122, 0.05) 1.5px, transparent 0);
          background-size: 100% 100%, 100% 100%, 28px 28px;
        }

        .floating-cross {
          position: absolute;
          color: #33C77A;
          font-size: 36px;
          pointer-events: none;
          z-index: 0;
          animation: floatCross 6s ease-in-out infinite alternate;
        }

        @keyframes floatCross {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          100% { transform: translateY(-20px) rotate(15deg); opacity: 0.2; }
        }

        .leaf-decoration {
          position: absolute;
          pointer-events: none;
          z-index: 0;
          opacity: 0.35;
          filter: drop-shadow(0 0 10px rgba(0, 168, 89, 0.2));
        }

        .leaf-top-right {
          top: -20px;
          right: -20px;
          transform: rotate(15deg);
          animation: gentleWind 8s ease-in-out infinite alternate;
        }

        .leaf-bottom-left {
          bottom: -30px;
          left: -30px;
          transform: rotate(-135deg);
          animation: gentleWind 9s ease-in-out infinite alternate-reverse;
        }

        @keyframes gentleWind {
          0% { transform: rotate(15deg) scale(1); }
          100% { transform: rotate(20deg) scale(1.03); }
        }

        .card-wrapper {
          max-width: 440px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
          text-align: center;
        }

        .card-logo-container {
          margin-bottom: 12px;
          position: relative;
        }

        .card-logo-img {
          width: 140px;
          height: 140px;
          object-fit: contain;
          filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4));
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card-logo-container:hover .card-logo-img {
          transform: scale(1.06);
        }

        .card-main-title {
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .heartbeat-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 12px 0;
          width: 100%;
        }

        .heartbeat-divider .line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(51, 199, 122, 0) 0%, rgba(51, 199, 122, 0.5) 100%);
        }

        .heartbeat-divider .line:last-child {
          background: linear-gradient(90deg, rgba(51, 199, 122, 0.5) 0%, rgba(51, 199, 122, 0) 100%);
        }

        .heartbeat-svg {
          filter: drop-shadow(0 0 5px rgba(51, 199, 122, 0.8));
        }

        .heartbeat-svg path {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawPulse 2.5s linear infinite;
        }

        @keyframes drawPulse {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }

        .card-main-tagline {
          font-size: 15px;
          color: #94A3B8;
          font-weight: 500;
          margin: 0 0 32px;
          letter-spacing: 0.5px;
        }

        .card-main-tagline span {
          color: #33C77A;
          font-weight: 700;
        }

        .capsules-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .card-capsule {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: linear-gradient(180deg, rgba(8, 24, 17, 0.7) 0%, rgba(4, 15, 10, 0.8) 100%);
          border: 1px solid rgba(51, 199, 122, 0.22);
          border-radius: 18px;
          padding: 14px 18px;
          text-decoration: none;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-sizing: border-box;
        }

        .card-capsule:hover {
          border-color: #33C77A;
          box-shadow: 0 0 20px rgba(51, 199, 122, 0.35);
          transform: translateY(-2px);
        }

        .capsule-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .capsule-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #092e1b 0%, #00A859 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 18px;
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .card-capsule:hover .capsule-icon-wrapper {
          transform: scale(1.05);
        }

        .capsule-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .capsule-title {
          font-size: 14.5px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2px;
          letter-spacing: 0.2px;
        }

        .capsule-value {
          font-size: 12px;
          color: #33C77A;
          font-weight: 500;
        }

        .capsule-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94A3B8;
          font-size: 10px;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .card-capsule:hover .capsule-arrow {
          border-color: #33C77A;
          background: #33C77A;
          color: #ffffff;
          transform: scale(1.05);
        }

        .bottom-branding {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 15px;
        }

        .bottom-shield {
          position: relative;
          font-size: 30px;
          color: #33C77A;
          margin-bottom: 8px;
          filter: drop-shadow(0 0 6px rgba(51, 199, 122, 0.5));
        }

        .bottom-shield .cross-inner {
          position: absolute;
          font-size: 11px;
          color: #030e09;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: bold;
        }

        .bottom-tagline {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: 18px;
          color: #ffffff;
          margin: 0;
        }

        .bottom-tagline span {
          color: #33C77A;
          font-weight: 600;
        }

        /* Animations for entrance */
        .anim-left { animation: slideInLeft 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .anim-right { animation: slideInRight 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .anim-up { animation: slideInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .anim-scale { animation: popIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-45px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(45px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(45px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 480px) {
          .card-page { padding: 40px 16px; }
          .card-logo-img { width: 120px; height: 120px; }
          .card-main-title { font-size: 23px; }
          .card-capsule { padding: 12px 14px; border-radius: 16px; }
          .capsule-icon-wrapper { width: 44px; height: 44px; font-size: 16px; }
          .capsule-title { font-size: 13.5px; }
          .capsule-value { font-size: 11.5px; }
        }
      ` }} />

      <div className="card-body-wrapper">
        <main className="card-page">
          {/* Top Right Leaves SVG */}
          <svg className="leaf-decoration leaf-top-right" width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 140C65 95 105 75 145 60C140 85 125 125 80 150C60 160 40 150 40 140Z" fill="url(#leafGrad1)"/>
            <path d="M5 110C35 75 80 60 115 50C108 75 88 115 50 130C35 135 15 125 5 110Z" fill="url(#leafGrad2)"/>
            <path d="M80 80C100 45 135 30 155 10C150 35 135 70 100 90C85 98 70 90 80 80Z" fill="url(#leafGrad1)"/>
            <defs>
              <linearGradient id="leafGrad1" x1="40" y1="140" x2="145" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#004d26" />
                <stop offset="50%" stopColor="#00A859" />
                <stop offset="100%" stopColor="#33C77A" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="leafGrad2" x1="5" y1="110" x2="115" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#022d17" />
                <stop offset="100%" stopColor="#008744" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Bottom Left Leaves SVG */}
          <svg className="leaf-decoration leaf-bottom-left" width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 140C65 95 105 75 145 60C140 85 125 125 80 150C60 160 40 150 40 140Z" fill="url(#leafGrad3)"/>
            <path d="M5 110C35 75 80 60 115 50C108 75 88 115 50 130C35 135 15 125 5 110Z" fill="url(#leafGrad4)"/>
            <defs>
              <linearGradient id="leafGrad3" x1="40" y1="140" x2="145" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#004d26" />
                <stop offset="100%" stopColor="#33C77A" />
              </linearGradient>
              <linearGradient id="leafGrad4" x1="5" y1="110" x2="115" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#022d17" />
                <stop offset="100%" stopColor="#008744" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Background Crosses */}
          <div className="floating-cross" style={{ top: "15%", left: "8%", transform: "scale(0.6)" }}>
            <i className="fas fa-plus"></i>
          </div>
          <div className="floating-cross" style={{ top: "50%", right: "6%", transform: "scale(0.85)" }}>
            <i className="fas fa-plus"></i>
          </div>
          <div className="floating-cross" style={{ top: "80%", left: "7%", transform: "scale(0.5)" }}>
            <i className="fas fa-plus"></i>
          </div>

          <div className="card-wrapper">
            <div className="card-logo-container anim-scale">
              <img src="/images/Drx_logo-removebg-preview.png" alt="DRx Home Care Logo" className="card-logo-img" />
            </div>

            <h1 className="card-main-title anim-up">DRx Home Care</h1>

            <div className="heartbeat-divider anim-scale">
              <div className="line"></div>
              <svg className="heartbeat-svg" viewBox="0 0 100 30" width="80" height="24" fill="none">
                <path d="M0,15 L35,15 L40,5 L45,25 L50,12 L55,17 L60,15 L100,15" stroke="#33C77A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="line"></div>
            </div>

            <p className="card-main-tagline anim-up">Care <span>Beyond</span> Boundaries</p>

            <div className="capsules-list">
              {/* 📞 Mobile Number */}
              <a href="tel:+917568858357" className="card-capsule anim-left">
                <div className="capsule-left">
                  <div className="capsule-icon-wrapper">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="capsule-info">
                    <span className="capsule-title">Mobile Number</span>
                    <span className="capsule-value">+91 75688 58357</span>
                  </div>
                </div>
                <div className="capsule-arrow">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </a>

              {/* 💬 WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="card-capsule anim-right"
              >
                <div className="capsule-left">
                  <div className="capsule-icon-wrapper">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="capsule-info">
                    <span className="capsule-title">WhatsApp</span>
                    <span className="capsule-value">Chat with us on WhatsApp</span>
                  </div>
                </div>
                <div className="capsule-arrow">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </a>

              {/* 🌐 Website */}
              <Link href="/" className="card-capsule anim-left">
                <div className="capsule-left">
                  <div className="capsule-icon-wrapper">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div className="capsule-info">
                    <span className="capsule-title">Website</span>
                    <span className="capsule-value">www.drxhomecare.com</span>
                  </div>
                </div>
                <div className="capsule-arrow">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </Link>
            </div>

            <div className="bottom-branding anim-up">
              <div className="bottom-shield">
                <i className="fas fa-shield-alt"></i>
                <i className="fas fa-plus cross-inner"></i>
              </div>
              <p className="bottom-tagline">We Care Like <span>Family</span> ♡</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
