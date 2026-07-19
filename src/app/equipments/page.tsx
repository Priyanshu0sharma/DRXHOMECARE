import React from "react";
import type { Metadata } from "next";
import EquipmentsClient from "./EquipmentsClient";
import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Medical Equipment on Rent & Sale in Jaipur | Best Caretaker & Homecare | DRx",
  description:
    "Rent or Buy ICU Hospital Beds, Oxygen Concentrators, BiPAP, CPAP, Patient Monitors, and other medical equipment at your doorstep in Jaipur. Trusted by DRx Home Care's best caretaker team.",
  keywords: [
    "medical equipment rent jaipur",
    "medical equipment jaipur",
    "ICU setup home jaipur",
    "best caretaker jaipur",
    "jaipur caretaker",
    "homecare jaipur",
    "jaipur homecare best",
  ],
  alternates: {
    canonical: "https://drxhomecare.com/equipments",
  },
  openGraph: {
    title: "Medical Equipment on Rent & Sale in Jaipur | Best Caretaker & Homecare | DRx",
    description:
      "Rent or Buy ICU Hospital Beds, Oxygen Concentrators, BiPAP, CPAP, Patient Monitors, and other medical equipment at your doorstep in Jaipur.",
    url: "https://drxhomecare.com/equipments",
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

const equipmentServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Medical Equipment Rental & Sale",
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
  "description":
    "DRx Home Care provides high-quality, sanitized, and certified medical equipment on rent and sale in Jaipur. Get hospital beds, oxygen concentrators, patient monitors, ventilators, and BiPAP at home.",
};

export default function EquipmentsPage() {
  return (
    <>
      <JsonLd schema={equipmentServiceSchema} />
      <Header />
      <EquipmentsClient />
      <Footer />
    </>
  );
}
