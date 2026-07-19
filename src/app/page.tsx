import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroBookingCard from "@/components/HeroBookingCard";
import StatsCounter from "@/components/StatsCounter";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 1. MedicalBusiness Schema Object
const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "DRx Home Care",
  "alternateName": "DRx ICU Care & Caretaker at Home",
  "description":
    "DRx Home Care provides the best caretaker and home care services in Jaipur. 24/7 home ICU setup, professional nursing care, physiotherapy, patient caretaker, elder care, doctor home visits, and medical equipment rent & sale.",
  "logo": "https://drxhomecare.com/images/Drx_logo-removebg-preview.png",
  "image": "https://drxhomecare.com/images/Drx_logo-removebg-preview.png",
  "url": "https://drxhomecare.com",
  "telephone": "+917568858357",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7, Bajrang Vihar Road, Near CK Birla Hospital, Shanti Nagar, Durgapura",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN",
    "postalCode": "302018",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.8524",
    "longitude": "75.7925",
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59",
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Jaipur",
  },
  "sameAs": ["https://api.whatsapp.com/send?phone=919352286423"],
};

// 2. FAQ Page Schema Object
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who provides the best caretaker services in Jaipur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DRx Home Care is recognized as the leading provider of the best caretaker services in Jaipur. We provide highly trained, verified, and compassionate caretakers, nursing attendants, and medical staff for complete patient care at the comfort of your home.",
      },
    },
    {
      "@type": "Question",
      "name": "What types of homecare services does DRx Home Care offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We provide a comprehensive range of premium homecare services in Jaipur, including complete ICU setup at home, professional nursing care, 24x7 doctor consultations, patient caretaker and attendant services, physiotherapy, elder care, mother & baby care, medical equipment on rent/sale, and emergency ambulance services.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide 24/7 patient caretakers and home care support in Jaipur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes, DRx Home Care offers 24/7 round-the-clock homecare caretaker and patient attendant services in Jaipur. Whether you require a daytime caregiver, a nighttime attendant, or 24-hour continuous ICU-level care, our team is always available to assist you.",
      },
    },
    {
      "@type": "Question",
      "name": "Why is DRx Home Care considered the top choice for jaipur homecare best?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "DRx Home Care is rated as the best homecare in Jaipur because of our hospital-quality treatments, 10+ years of healthcare experience, verified and certified caretakers, affordable transparent pricing, and 24x7 immediate medical coordination under specialized doctors.",
      },
    },
    {
      "@type": "Question",
      "name": "Are the home care caretakers and attendants background-verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Absolutely. Security and quality of care are our top priorities. Every patient caretaker and nurse in our team undergoes strict background verification, professional training, and routine clinical checks to guarantee absolute safety and comfort for your loved ones.",
      },
    },
  ],
};

// 3. Homepage FAQs array
const faqs = [
  {
    question: "Who provides the best caretaker services in Jaipur?",
    answer:
      "DRx Home Care is recognized as the leading provider of the best caretaker services in Jaipur. We provide highly trained, verified, and compassionate caretakers, nursing attendants, and medical staff for complete patient care at the comfort of your home.",
  },
  {
    question: "What types of homecare services does DRx Home Care offer?",
    answer:
      "We provide a comprehensive range of premium homecare services in Jaipur, including complete ICU setup at home, professional nursing care, 24x7 doctor consultations, patient caretaker and attendant services, physiotherapy, elder care, mother & baby care, medical equipment on rent/sale, and emergency ambulance services.",
  },
  {
    question: "Do you provide 24/7 patient caretakers and home care support in Jaipur?",
    answer:
      "Yes, DRx Home Care offers 24/7 round-the-clock homecare caretaker and patient attendant services in Jaipur. Whether you require a daytime caregiver, a nighttime attendant, or 24-hour continuous ICU-level care, our team is always available to assist you.",
  },
  {
    question: "Why is DRx Home Care considered the top choice for jaipur homecare best?",
    answer:
      "DRx Home Care is rated as the best homecare in Jaipur because of our hospital-quality treatments, 10+ years of healthcare experience, verified and certified caretakers, affordable transparent pricing, and 24x7 immediate medical coordination under specialized doctors.",
  },
  {
    question: "Are the home care caretakers and attendants background-verified?",
    answer:
      "Absolutely. Security and quality of care are our top priorities. Every patient caretaker and nurse in our team undergoes strict background verification, professional training, and routine clinical checks to guarantee absolute safety and comfort for your loved ones.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Dynamic JSON-LD SEO Schema Injection */}
      <JsonLd schema={medicalBusinessSchema} />
      <JsonLd schema={faqSchema} />

      <Header />
      {/* ============ HERO SECTION ============ */}
      <section className="hero" id="home">
        <div className="hero__bg">
          <Image
            src="/images/hero_homecare.png"
            alt="DRx Home Care Background"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero__overlay"></div>

        <div className="hero__content">
          <div className="container">
            <div className="hero__left">
              <div className="hero__badge">
                <span className="dot"></span>
                24×7 Available
              </div>
              <h1 className="hero__title">
                Hospital-Quality Care
                <br />
                Right at <span>Your Home</span>
              </h1>
              <p className="hero__subtitle">
                DRx Home Care provides complete ICU care, nursing services, doctor home visits,
                physiotherapy, elder care, and ambulance services — all at the comfort of your home in
                Jaipur.
              </p>
              <div className="hero__actions">
                <a href="tel:7568858357" className="btn-primary">
                  <i className="fas fa-phone-alt"></i>
                  Call Now — 7568858357
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20healthcare%20services."
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp Us
                </a>
              </div>
              <div className="hero__stats" style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
                <div className="hero__stat">
                  <div className="hero__stat-num">5000+</div>
                  <div className="hero__stat-label">Patients Served</div>
                </div>
                <div className="hero__stat">
                  <div className="hero__stat-num">24/7</div>
                  <div className="hero__stat-label">Always Available</div>
                </div>
                <div className="hero__stat">
                  <div className="hero__stat-num">50+</div>
                  <div className="hero__stat-label">Healthcare Experts</div>
                </div>
              </div>
            </div>

            <div className="hero__right">
              <HeroBookingCard />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SCROLLING MARQUEE ============ */}
      <div className="marquee">
        <div className="marquee__track">
          <div className="marquee__item">
            <span className="sep"></span> 24×7 Doctor Consultation
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Complete ICU at Home
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Nursing Care
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Physiotherapy
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Elder Care
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Ambulance Services
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Medical Equipment Rent & Sale
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Mother & Baby Care
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Nursing Attendant
          </div>
          {/* Duplicate for infinite scroll */}
          <div className="marquee__item">
            <span className="sep"></span> 24×7 Doctor Consultation
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Complete ICU at Home
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Nursing Care
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Physiotherapy
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Elder Care
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Ambulance Services
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Medical Equipment Rent & Sale
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Mother & Baby Care
          </div>
          <div className="marquee__item">
            <span className="sep"></span> Nursing Attendant
          </div>
        </div>
      </div>

      {/* ============ SERVICES Grid SECTION ============ */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">
              All Hospital Facilities <em>At Your Home</em>
            </h2>
            <p className="section-desc">
              We bring world-class healthcare services directly to your doorstep — ensuring comfort,
              safety, and professional care 24 hours a day, 7 days a week.
            </p>
          </div>

          <div className="services__grid stagger-children">
            {/* Service 1: ICU Care */}
            <div className="service-card reveal">
              <div className="service-card__img">
                <img src="/images/icu_homecare.png?v=1" alt="ICU & Critical Care at Home" />
                <span className="service-card__badge">Premium</span>
              </div>
              <div className="service-card__body">
                <div className="service-card__icon">🏥</div>
                <h3 className="service-card__title">
                  <Link href="/services/icu-at-home">ICU & Critical Care</Link>
                </h3>
                <p className="service-card__desc">
                  Complete ICU setup at your home with ventilators, monitors, and round-the-clock trained
                  ICU staff and doctors.
                </p>
                <Link href="/services/icu-at-home" className="service-card__link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Service 2: Nursing Care */}
            <div className="service-card reveal">
              <div className="service-card__img">
                <img src="/images/nursing_care.png?v=1" alt="Nursing Care at Home" />
              </div>
              <div className="service-card__body">
                <div className="service-card__icon">👩‍⚕️</div>
                <h3 className="service-card__title">
                  <Link href="/services/nursing-care">Nursing Care</Link>
                </h3>
                <p className="service-card__desc">
                  Qualified and experienced nurses available for post-surgical care, wound dressing,
                  injections, and routine nursing tasks.
                </p>
                <Link href="/services/nursing-care" className="service-card__link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Service 3: Doctor Home Visit */}
            <div className="service-card reveal">
              <div className="service-card__img">
                <img src="/images/doctor_visit.png?v=1" alt="Doctor Home Visit" />
                <span className="service-card__badge">24×7</span>
              </div>
              <div className="service-card__body">
                <div className="service-card__icon">🩺</div>
                <h3 className="service-card__title">
                  <Link href="/services/doctor-visit">Doctor Home Visit</Link>
                </h3>
                <p className="service-card__desc">
                  Expert doctors available for home consultations — general physicians, specialists, and
                  emergency medical support anytime.
                </p>
                <Link href="/services/doctor-visit" className="service-card__link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Service 4: Physiotherapy */}
            <div className="service-card reveal">
              <div className="service-card__img">
                <img src="/images/physiotherapy.png?v=1" alt="Physiotherapy at Home" />
              </div>
              <div className="service-card__body">
                <div className="service-card__icon">💪</div>
                <h3 className="service-card__title">
                  <Link href="/services/physiotherapy">Physiotherapy</Link>
                </h3>
                <p className="service-card__desc">
                  Professional physiotherapists providing rehabilitation, pain management, and mobility
                  exercises in the comfort of your home.
                </p>
                <Link href="/services/physiotherapy" className="service-card__link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Service 5: Elder Care & Caretaker */}
            <div className="service-card reveal">
              <div className="service-card__img">
                <img
                  src="/images/elder_care.png?v=1"
                  alt="Best Caretaker for Elder Care at Home in Jaipur"
                />
              </div>
              <div className="service-card__body">
                <div className="service-card__icon">👴</div>
                <h3 className="service-card__title">
                  <Link href="/services/elder-care">Elder Care & Caretaker</Link>
                </h3>
                <p className="service-card__desc">
                  Compassionate elder care caretakers providing daily assistance, companionship, medicine
                  management, and dedicated support for senior citizens in Jaipur.
                </p>
                <Link href="/services/elder-care" className="service-card__link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Service 6: Patient Caretaker & Attendant */}
            <div className="service-card reveal">
              <div className="service-card__img">
                <img
                  src="/images/hero_homecare.png?v=1"
                  alt="Best Patient Caretaker and Attendant in Jaipur"
                />
              </div>
              <div className="service-card__body">
                <div className="service-card__icon">🤝</div>
                <h3 className="service-card__title">
                  <Link href="/services/caretaker">Patient Caretaker & Attendant</Link>
                </h3>
                <p className="service-card__desc">
                  Trained patient caretakers and nursing attendants in Jaipur for 24x7 monitoring,
                  medication, personal hygiene, and daily care support.
                </p>
                <Link href="/services/caretaker" className="service-card__link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Service 7: Medical Equipment */}
            <div className="service-card reveal">
              <div className="service-card__img">
                <img src="/images/medical_equipment.png?v=1" alt="Medical Equipment Rent & Sale" />
              </div>
              <div className="service-card__body">
                <div className="service-card__icon">🔬</div>
                <h3 className="service-card__title">
                  <Link href="/services/medical-equipment">Medical Equipment</Link>
                </h3>
                <p className="service-card__desc">
                  Hospital beds, wheelchairs, oxygen concentrators, BiPAP, CPAP, and all medical equipment
                  available for rent and sale.
                </p>
                <Link href="/services/medical-equipment" className="service-card__link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Service 8: Ambulance Service */}
            <div className="service-card reveal">
              <div className="service-card__img">
                <img src="/images/ambulance_service.png?v=1" alt="Ambulance Service" />
                <span className="service-card__badge">Emergency</span>
              </div>
              <div className="service-card__body">
                <div className="service-card__icon">🚑</div>
                <h3 className="service-card__title">
                  <Link href="/services/ambulance">Ambulance Service</Link>
                </h3>
                <p className="service-card__desc">
                  24×7 Emergency ambulance service with fully equipped vehicles and trained paramedics for
                  immediate medical transport.
                </p>
                <Link href="/services/ambulance" className="service-card__link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Service 9: Bedridden Patient Care */}
            <div className="service-card reveal">
              <div className="service-card__img">
                <img src="/images/nursing_care.png?v=1" alt="Bedridden Patient Care" />
              </div>
              <div className="service-card__body">
                <div className="service-card__icon">🛌</div>
                <h3 className="service-card__title">
                  <Link href="/services/bedridden-care">Bedridden Patient Care</Link>
                </h3>
                <p className="service-card__desc">
                  Specialized clinical care, positioning, pressure sore prevention, feeding support, and hygiene
                  maintenance for bedridden patients.
                </p>
                <Link href="/services/bedridden-care" className="service-card__link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COUNTERS SECTION ============ */}
      <section className="counter-section">
        <div className="container">
          <div className="counter-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px" }}>
            <StatsCounter target={5000} label="Happy Patients" />
            <StatsCounter target={50} label="Healthcare Experts" />
            <StatsCounter target={10} label="Years of Trust" />
            <StatsCounter target={15} label="Services Offered" />
          </div>
        </div>
      </section>

      {/* ============ MEDICAL EQUIPMENT FOR RENT ============ */}
      <section className="equipment-rent" id="equipment-rent">
        <div className="container">
          <div className="equipment-rent__content reveal-left">
            <span className="section-label">Medical Equipment for Rent & Sale</span>
            <h2 className="section-title">
              Hospital-Grade <em>Medical Equipment</em> at Your Home
            </h2>
            <p className="section-desc">
              DRx Home Care provides high-quality, sanitized, and fully certified medical equipment on
              rent and sale in Jaipur. Get free home delivery, expert installation, and demonstration.
            </p>
            <div className="equipment-rent__list">
              <div className="equipment-rent__item">
                <span className="bullet">
                  <i className="fas fa-check-circle"></i>
                </span>
                <div>
                  <h4>ICU Hospital Beds</h4>
                  <p>Manual & Electric multi-function hospital beds for patient comfort and safety.</p>
                </div>
              </div>
              <div className="equipment-rent__item">
                <span className="bullet">
                  <i className="fas fa-check-circle"></i>
                </span>
                <div>
                  <h4>Oxygen Concentrators</h4>
                  <p>Certified 5 Litre & 10 Litre high-purity continuous oxygen flow machines.</p>
                </div>
              </div>
              <div className="equipment-rent__item">
                <span className="bullet">
                  <i className="fas fa-check-circle"></i>
                </span>
                <div>
                  <h4>Cardiac Monitors & BiPAP</h4>
                  <p>Advanced multi-para patient monitors, ventilators, and respiratory support systems.</p>
                </div>
              </div>
            </div>
            <div className="equipment-rent__actions" style={{ marginTop: "30px" }}>
              <Link href="/equipments" className="btn-primary">
                View All Equipments
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="equipment-rent__image-wrap reveal-right">
            <img src="/images/medical_equipment.png?v=1" alt="DRx Home Care Medical Equipment" />
          </div>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section className="about" id="about">
        <div className="container">
          <div className="about__images reveal-left">
            <div className="about__img-main">
              <img src="/images/doctor_visit.png?v=1" alt="DRx Home Care Team" />
            </div>
            <div className="about__img-secondary">
              <img src="/images/elder_care.png?v=1" alt="Elder Care DRx" />
            </div>
            <div className="about__experience">
              <h3>10+</h3>
              <p>
                Years of
                <br />
                Experience
              </p>
            </div>
          </div>

          <div className="about__content reveal-right">
            <span className="section-label">About DRx Home Care</span>
            <h2 className="section-title">
              Complete <em>Healthcare</em> at Your Doorstep
            </h2>
            <p className="about__text">
              DRx Home Care is Jaipur&apos;s trusted home healthcare provider, bringing hospital-quality
              medical services directly to your home. Located near CK Birla Hospital in Shanti Nagar,
              Durgapura, we are committed to delivering compassionate, professional, and affordable
              healthcare 24×7.
            </p>
            <p className="about__text">
              Our team of experienced doctors, trained nurses, physiotherapists, and caregivers ensures
              that patients receive the best possible care without stepping out of their homes.
            </p>
            <div className="about__features">
              <div className="about__feature">
                <div className="check">
                  <i className="fas fa-check"></i>
                </div>
                <span>24×7 Availability</span>
              </div>
              <div className="about__feature">
                <div className="check">
                  <i className="fas fa-check"></i>
                </div>
                <span>Trained Medical Staff</span>
              </div>
              <div className="about__feature">
                <div className="check">
                  <i className="fas fa-check"></i>
                </div>
                <span>Affordable Pricing</span>
              </div>
              <div className="about__feature">
                <div className="check">
                  <i className="fas fa-check"></i>
                </div>
                <span>ICU Setup at Home</span>
              </div>
              <div className="about__feature">
                <div className="check">
                  <i className="fas fa-check"></i>
                </div>
                <span>Emergency Services</span>
              </div>
              <div className="about__feature">
                <div className="check">
                  <i className="fas fa-check"></i>
                </div>
                <span>Trusted by 5000+</span>
              </div>
            </div>
            <a href="tel:7568858357" className="btn-primary" style={{ marginTop: "20px", display: "inline-block" }}>
              <i className="fas fa-phone-alt"></i>
              Contact Us — 7568858357
            </a>
          </div>
        </div>
      </section>

      {/* ============ DOCTOR SECTION ============ */}
      <section className="doctor-section" id="doctor">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Our Expert</span>
            <h2 className="section-title">
              Meet Our <em>Specialist Doctor</em>
            </h2>
            <p className="section-desc">Get expert medical consultation at home from experienced specialists.</p>
          </div>

          <div className="doctor-card reveal-scale">
            <div className="doctor-card__image">
              <img src="/images/doctor_kapil.png?v=1" alt="Dr. Kapil Khandelwal" />
              <div className="doctor-card__image-overlay">
                <div className="doctor-card__exp">
                  <i className="fas fa-award"></i>
                  9+ Years Experience
                </div>
              </div>
            </div>
            <div className="doctor-card__info">
              <span className="doctor-card__dept">Neurology</span>
              <h3 className="doctor-card__name">Dr. Kapil Khandelwal</h3>
              <p className="doctor-card__role">Senior Consultant — Department of Neurology</p>
              <p className="doctor-card__bio">
                With an MD in Medicine from NB Medical College, Darjeeling and DM in Neurology from SMS
                Medical College, Jaipur, Dr. Khandelwal is especially interested in the treatment of Stroke,
                Epilepsy, Multiple Sclerosis, Headache, and Parkinson&apos;s & Movement Disorders. He is a
                member of the Indian Academy of Neurology.
              </p>
              <div className="doctor-card__actions" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <a
                  href="#whatsappBookingForm"
                  className="doctor-card__btn doctor-card__btn--book"
                  style={{ maxWidth: "280px", margin: "0 auto", display: "block" }}
                >
                  <i className="fas fa-calendar-check"></i>
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="why-us" id="why-us">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">
              Why Choose <em>Us</em>
            </h2>
            <p className="section-desc">
              DRx Home Care is built on trust, expertise, and a genuine commitment to your health and
              comfort.
            </p>
          </div>

          <div className="why-us__grid stagger-children">
            <div className="why-card reveal">
              <div className="why-card__icon">🕐</div>
              <h3 className="why-card__title">24×7 Available</h3>
              <p className="why-card__desc">
                Round-the-clock healthcare support — day or night, we&apos;re always just a phone call away.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-card__icon">👨‍⚕️</div>
              <h3 className="why-card__title">Expert Medical Team</h3>
              <p className="why-card__desc">
                Highly trained doctors, nurses, and caregivers with years of clinical experience.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-card__icon">💰</div>
              <h3 className="why-card__title">Affordable Care</h3>
              <p className="why-card__desc">
                Premium healthcare services at transparent and pocket-friendly prices.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-card__icon">🏠</div>
              <h3 className="why-card__title">Comfort of Home</h3>
              <p className="why-card__desc">
                Hospital-quality treatment in the familiar, comfortable environment of your own home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="cta-banner">
        <div className="cta-banner__bg">
          <img src="/images/icu_homecare.png?v=1" alt="ICU Care at Home Background" />
        </div>
        <div className="container">
          <div className="cta-banner__content">
            <h2>
              Need Immediate Healthcare
              <br />
              at Your Home?
            </h2>
            <p>
              Don&apos;t wait — call us now for 24×7 doctor consultation, ICU setup, nursing care, and
              emergency ambulance services.
            </p>
          </div>
          <div className="cta-banner__actions">
            <a href="tel:7568858357" className="btn-white">
              <i className="fas fa-phone-alt"></i>
              Call 7568858357
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20urgent%20healthcare%20services."
              className="btn-glass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">
              What Our <em>Patients</em> Say
            </h2>
            <p className="section-desc">Real stories from families who trust DRx Home Care for their loved ones.</p>
          </div>

          <div className="testimonials__slider stagger-children">
            <div className="testimonial-card reveal">
              <div className="testimonial-card__quote">&quot;</div>
              <div className="testimonial-card__stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-card__text">
                &quot;DRx Home Care set up the ICU at home for my father. The staff is extremely caring and
                professional. We are highly satisfied with their services.&quot;
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">RS</div>
                <div>
                  <div className="testimonial-card__name">Rajesh Sharma</div>
                  <div className="testimonial-card__role">Durgapura, Jaipur</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal">
              <div className="testimonial-card__quote">&quot;</div>
              <div className="testimonial-card__stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-card__text">
                &quot;We needed nursing care for my mother. The nurse from DRx was excellent, arrived on
                time, and carried out her duties with complete responsibility. Thank you DRx!&quot;
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">PK</div>
                <div>
                  <div className="testimonial-card__name">Priya Kumari</div>
                  <div className="testimonial-card__role">Shanti Nagar, Jaipur</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal">
              <div className="testimonial-card__quote">&quot;</div>
              <div className="testimonial-card__stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p className="testimonial-card__text">
                Physiotherapy sessions at home were excellent. The therapist was very knowledgeable and my
                knee recovery was much faster than expected. Highly recommend!
              </p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">AJ</div>
                <div>
                  <div className="testimonial-card__name">Anil Joshi</div>
                  <div className="testimonial-card__role">Bajrang Vihar, Jaipur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ SECTION ============ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Frequently Asked Questions</span>
            <h2 className="section-title">
              Common Queries About <em>Caretaker & Homecare</em>
            </h2>
            <p className="section-desc">
              Find answers to the most common questions about our professional homecare and patient
              caretaker services in Jaipur.
            </p>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="reveal-left">
            <span className="section-label" style={{ justifyContent: "flex-start" }}>
              Contact Us
            </span>
            <h2 className="section-title" style={{ textAlign: "left" }}>
              Get In <em>Touch</em>
            </h2>
            <p className="section-desc" style={{ textAlign: "left", marginBottom: "32px" }}>
              We&apos;re here to help you 24×7. Reach out to us for any healthcare needs.
            </p>

            <div className="contact__info">
              <div className="contact__item">
                <div className="contact__item-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact__item-text">
                  <h4>Phone Numbers</h4>
                  <p>
                    <a href="tel:7568858357">7568858357</a> &nbsp;|&nbsp;{" "}
                    <a href="tel:7742688357">7742688357</a>
                  </p>
                </div>
              </div>

              <div className="contact__item">
                <div className="contact__item-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact__item-text">
                  <h4>Our Address</h4>
                  <p>7, Bajrang Vihar Road, Near CK Birla Hospital, Shanti Nagar, Durgapura, Jaipur</p>
                </div>
              </div>

              <div className="contact__item">
                <div className="contact__item-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact__item-text">
                  <h4>Working Hours</h4>
                  <p>24 Hours, 7 Days a Week — Always Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__map reveal-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.118991471714!2d75.78407127521876!3d26.86002817667822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50053ea94d1%3A0xd0ba419ccd218fd0!2sDRX%20Home%20care!5e0!3m2!1sen!2sin!4v1716886475306!5m2!1sen!2sin"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DRx Home Care Location"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
