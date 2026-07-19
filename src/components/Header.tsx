"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Scroll handler for navbar background opacity transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    if (!menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setMenuActive(false);
    document.body.style.overflow = "";
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    closeMenu();

    if (pathname === "/") {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = document.getElementById("header")?.offsetHeight || 0;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const getLinkHref = (anchor: string) => {
    return pathname === "/" ? `#${anchor}` : `/#${anchor}`;
  };

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`header ${scrolled || !isHome ? "scrolled" : ""}`}
        id="header"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <div className="container">
          <Link href="/" className="header__logo" onClick={closeMenu}>
            <img src="/images/Drx_logo-removebg-preview.png" alt="DRx Home Care" />
            <div className="header__logo-text">
              DRx Home Care
              <small>Complete I.C.U. Care at Home</small>
            </div>
          </Link>

          <nav className={`header__nav ${menuActive ? "active" : ""}`} id="navMenu">
            <Link
              href={pathname === "/" ? "#home" : "/"}
              className={pathname === "/" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "home")}
            >
              Home
            </Link>
            <Link
              href={getLinkHref("services")}
              onClick={(e) => handleLinkClick(e, "services")}
            >
              Services
            </Link>
            <Link
              href={getLinkHref("about")}
              onClick={(e) => handleLinkClick(e, "about")}
            >
              About Us
            </Link>
            <Link
              href={getLinkHref("doctor")}
              onClick={(e) => handleLinkClick(e, "doctor")}
            >
              Our Doctor
            </Link>
            <Link
              href={getLinkHref("testimonials")}
              onClick={(e) => handleLinkClick(e, "testimonials")}
            >
              Testimonials
            </Link>
            <Link
              href={getLinkHref("contact")}
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              Contact
            </Link>
            <Link href="/equipments" onClick={closeMenu}>
              Equipments
            </Link>
            <Link href="/card" onClick={closeMenu}>
              Digital Card
            </Link>
          </nav>

          <div className="header__cta">
            <Link href="/#whatsappBookingForm" className="btn-primary" onClick={closeMenu}>
              <i className="fas fa-calendar-check"></i>
              Book Appointment
            </Link>
          </div>

          <button
            className={`header__burger ${menuActive ? "active" : ""}`}
            id="burgerBtn"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${menuActive ? "active" : ""}`}
        id="mobileOverlay"
        onClick={closeMenu}
      ></div>
    </>
  );
}
