import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import FaqAccordion from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";

interface ServicePageProps {
  params: {
    service: string;
  };
}

// 1. Generate Static Params for all 13 services
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    service: slug,
  }));
}

// 2. Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData[params.service];
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://drxhomecare.com/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://drxhomecare.com/services/${service.slug}`,
      type: "website",
      siteName: "DRx Home Care",
      images: [
        {
          url: "/images/Drx_logo-removebg-preview.png",
          width: 1200,
          height: 630,
          alt: `${service.title} Logo`,
        },
      ],
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData[params.service];

  // Triggers Next.js 404 page if path doesn't exist
  if (!service) {
    notFound();
  }

  // 3. Compile schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "DRx Home Care",
      "telephone": "+917568858357",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Jaipur",
    },
    "description": service.metaDescription,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Inject Structured Data */}
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={faqSchema} />

      <Header />
      {/* ============ SERVICE HERO ============ */}
        <section className="catalog-hero" style={{ padding: "60px 0 40px", background: "rgba(10, 106, 191, 0.04)", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span className="section-label" style={{ margin: "0 auto 12px" }}>Professional Home Healthcare</span>
            <h1 className="section-title">{service.h1}</h1>
            <p className="section-desc" style={{ maxWidth: "800px", margin: "0 auto" }}>{service.metaDescription}</p>
          </div>
        </section>

        {/* ============ SERVICE CONTENT BODY ============ */}
        <section className="service-details-section" style={{ padding: "60px 0" }}>
          <div className="container" style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            
            {/* Left Column: Extensive Copy (1500+ Words Structure) */}
            <div className="service-details__left" style={{ flex: "2", minWidth: "320px", display: "flex", flexDirection: "column", gap: "35px" }}>
              
              {/* Introduction */}
              <div>
                <h2 style={{ fontSize: "24px", color: "#33C77A", marginBottom: "15px", fontWeight: "700" }}>Service Overview</h2>
                <p style={{ color: "#94a3b8", lineHeight: "1.7", fontSize: "16px" }}>{service.introduction}</p>
              </div>

              {/* Clinical Importance */}
              <div>
                <h2 style={{ fontSize: "24px", color: "#33C77A", marginBottom: "15px", fontWeight: "700" }}>Clinical Standard & Quality Care</h2>
                <p style={{ color: "#94a3b8", lineHeight: "1.7", fontSize: "16px" }}>{service.clinicalImportance}</p>
              </div>

              {/* Who Needs This */}
              <div>
                <h2 style={{ fontSize: "24px", color: "#33C77A", marginBottom: "15px", fontWeight: "700" }}>Who Needs This Service?</h2>
                <ul style={{ listStyleType: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {service.whoNeedsThis.map((need, idx) => (
                    <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#94a3b8", lineHeight: "1.6" }}>
                      <span style={{ color: "#33C77A", fontSize: "16px" }}>✓</span>
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 style={{ fontSize: "24px", color: "#33C77A", marginBottom: "15px", fontWeight: "700" }}>Key Benefits & Advantages</h2>
                <ul style={{ listStyleType: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {service.benefits.map((benefit, idx) => {
                    const [title, desc] = benefit.split(": ");
                    return (
                      <li key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start", color: "#94a3b8", lineHeight: "1.6" }}>
                        <span style={{ color: "#33C77A", fontSize: "16px" }}>★</span>
                        <div>
                          <strong style={{ color: "#ffffff" }}>{title}:</strong> {desc}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Procedures and Safety Checklists */}
              <div>
                <h2 style={{ fontSize: "24px", color: "#33C77A", marginBottom: "15px", fontWeight: "700" }}>Standard Operating Procedures & Safety Checklist</h2>
                <p style={{ color: "#94a3b8", marginBottom: "15px", lineHeight: "1.6" }}>
                  To ensure patient safety, DRx Home Care follows strict healthcare protocols for all procedures. Here is the operational checklist followed by our specialists:
                </p>
                <ol style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "12px", color: "#94a3b8", lineHeight: "1.6" }}>
                  {service.proceduresAndChecklist.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

            </div>

            {/* Right Column: Sticky Booking Widget & Price Matrix */}
            <div className="service-details__right" style={{ flex: "1", minWidth: "300px", display: "flex", flexDirection: "column", gap: "40px" }}>
              
              {/* Form */}
              <div style={{ background: "rgba(10, 106, 191, 0.05)", borderRadius: "18px", padding: "30px", border: "1px solid rgba(10, 106, 191, 0.15)" }}>
                <h3 style={{ fontSize: "20px", color: "#ffffff", marginBottom: "20px", fontWeight: "700", textAlign: "center" }}>
                  <i className="fas fa-calendar-check" style={{ color: "#33C77A", marginRight: "10px" }}></i>
                  Quick Appointment
                </h3>
                <BookingForm defaultService={service.title} />
              </div>

              {/* Pricing Grid */}
              <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "18px", padding: "30px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h3 style={{ fontSize: "20px", color: "#ffffff", marginBottom: "20px", fontWeight: "700", textAlign: "center" }}>
                  <i className="fas fa-tags" style={{ color: "#33C77A", marginRight: "10px" }}></i>
                  Estimated Pricing Table
                </h3>
                {service.pricing.map((plan, idx) => (
                  <div key={idx} style={{ padding: "15px 0", borderBottom: idx < service.pricing.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                      <h4 style={{ color: "#ffffff", fontSize: "15px", fontWeight: "600" }}>{plan.planName}</h4>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ color: "#33C77A", fontSize: "16px", fontWeight: "700" }}>{plan.price}</span>
                        <small style={{ color: "#94a3b8", display: "block", fontSize: "11px" }}>{plan.duration}</small>
                      </div>
                    </div>
                    <ul style={{ listStyleType: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "4px", margin: 0 }}>
                      {plan.features.slice(0, 3).map((feat, fidx) => (
                        <li key={fidx} style={{ fontSize: "12px", color: "#94a3b8", display: "flex", gap: "6px" }}>
                          <span style={{ color: "#33C77A" }}>•</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Areas Served List */}
              <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: "18px", padding: "30px", border: "1px solid rgba(255,255,255,0.05)" }}>
                <h3 style={{ fontSize: "18px", color: "#ffffff", marginBottom: "15px", fontWeight: "700" }}>
                  <i className="fas fa-map-marker-alt" style={{ color: "#33C77A", marginRight: "10px" }}></i>
                  Active Service Areas
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {service.areasServed.map((area, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: "6px 12px",
                        background: "rgba(10, 106, 191, 0.06)",
                        border: "1px solid rgba(10, 106, 191, 0.15)",
                        borderRadius: "15px",
                        fontSize: "12px",
                        color: "#ffffff"
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============ CLIENT REVIEWS ============ */}
        <section className="testimonials" style={{ background: "rgba(0,0,0,0.15)", padding: "60px 0" }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="section-label" style={{ margin: "0 auto 12px" }}>Testimonials</span>
              <h2 className="section-title">What Our <em>Patients</em> Say</h2>
            </div>
            <div className="testimonials__slider" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
              {service.testimonials.map((test, idx) => (
                <div className="testimonial-card visible" key={idx}>
                  <div className="testimonial-card__quote">&quot;</div>
                  <div className="testimonial-card__stars">
                    {Array.from({ length: test.stars }).map((_, sidx) => (
                      <i className="fas fa-star" key={sidx}></i>
                    ))}
                  </div>
                  <p className="testimonial-card__text">&quot;{test.quote}&quot;</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">{test.author.split(" ").map(w => w[0]).join("")}</div>
                    <div>
                      <div className="testimonial-card__name">{test.author}</div>
                      <div className="testimonial-card__role">{test.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ SECTION ============ */}
        <section className="faq" style={{ padding: "60px 0" }}>
          <div className="container">
            <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="section-label" style={{ margin: "0 auto 12px" }}>Frequently Asked Questions</span>
              <h2 className="section-title">Common Queries About <em>{service.title}</em></h2>
            </div>
            <FaqAccordion items={service.faqs} />
          </div>
        </section>

        {/* ============ CONTACT & DIRECT MAP ============ */}
        <section className="contact" style={{ padding: "60px 0" }}>
          <div className="container">
            <div className="reveal-left">
              <span className="section-label" style={{ justifyContent: "flex-start" }}>Contact Desk</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>Get In <em>Touch</em></h2>
              <p className="section-desc" style={{ textAlign: "left", marginBottom: "32px" }}>Reach out to us 24x7. We are always available for clinical support.</p>
              
              <div className="contact__info">
                <div className="contact__item">
                  <div className="contact__item-icon"><i className="fas fa-phone-alt"></i></div>
                  <div className="contact__item-text">
                    <h4>Emergency Helpline</h4>
                    <p><a href="tel:7568858357">7568858357</a> &nbsp;|&nbsp; <a href="tel:7742688357">7742688357</a></p>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__item-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="contact__item-text">
                    <h4>Clinical Center</h4>
                    <p>7, Bajrang Vihar Road, Near CK Birla Hospital, Durgapura, Jaipur</p>
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
                title="DRx Home Care Map Location"
              ></iframe>
            </div>
          </div>
        </section>

      <Footer />
    </>
  );
}
