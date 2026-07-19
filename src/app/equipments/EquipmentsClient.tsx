"use client";

import React, { useState, useMemo } from "react";

interface EquipmentItem {
  category: string;
  iconClass: string;
  badge: string;
  title: string;
  desc: string;
  priceVal: string;
  phone: string;
  whatsappUrl: string;
}

const equipmentsData: EquipmentItem[] = [
  {
    "category": "respiratory",
    "iconClass": "fa-solid fa-lungs",
    "badge": "Best Seller",
    "title": "Oxygen Concentrator (5L / 10L)",
    "desc": "High-purity continuous oxygen flow machines from top brands (Philips, Nidek) for critical respiratory support.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Oxygen%20Concentrator."
  },
  {
    "category": "respiratory",
    "iconClass": "fa-solid fa-wind",
    "badge": "Emergency",
    "title": "Oxygen Cylinder",
    "desc": "Portable and large-sized medical oxygen cylinders with flowmeter, key, and mask for emergency back-up.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20an%20Oxygen%20Cylinder."
  },
  {
    "category": "respiratory",
    "iconClass": "fa-solid fa-head-side-mask",
    "badge": "Standard",
    "title": "BiPAP Machine",
    "desc": "Non-invasive two-level positive airway pressure ventilation devices for respiratory support.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20BiPAP%20Machine."
  },
  {
    "category": "respiratory",
    "iconClass": "fa-solid fa-head-side-mask",
    "badge": "Sleep Care",
    "title": "CPAP Machine",
    "desc": "Continuous positive airway pressure machines to treat sleep apnea and sleep-related breathing disorders.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20CPAP%20Machine."
  },
  {
    "category": "respiratory",
    "iconClass": "fa-solid fa-lungs",
    "badge": "Critical Care",
    "title": "ICU-Grade Ventilator",
    "desc": "Advanced respiration support ventilators for critical ICU setup patients at home.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Ventilator."
  },
  {
    "category": "respiratory",
    "iconClass": "fa-solid fa-wind",
    "badge": "Standard",
    "title": "Nebulizer Machine",
    "desc": "Highly portable compressor nebulizer systems for liquid medication inhalation therapy.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Nebulizer%20Machine."
  },
  {
    "category": "respiratory",
    "iconClass": "fa-solid fa-pump-medical",
    "badge": "Standard",
    "title": "Suction Machine",
    "desc": "High-power medical phlegm suction pumps (single/double jar) for clearing patient airways.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Suction%20Machine."
  },
  {
    "category": "respiratory",
    "iconClass": "fa-solid fa-fingerprint",
    "badge": "Compact",
    "title": "Pulse Oximeter",
    "desc": "Fingertip SpO2 pulse oximeters to accurately track oxygen saturation and heart rates instantly.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Pulse%20Oximeter."
  },
  {
    "category": "respiratory",
    "iconClass": "fa-solid fa-head-side-mask",
    "badge": "High Flow",
    "title": "HFNC Machine",
    "desc": "High Flow Nasal Cannula oxygen therapy machines for delivery of heated and humidified respiratory gas.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20HFNC%20Machine."
  },
  {
    "category": "monitoring",
    "iconClass": "fa-solid fa-chart-line",
    "badge": "ICU Care",
    "title": "Multipara Vitals Monitor",
    "desc": "Real-time parameters monitoring (ECG, SpO2, NIBP, Respiration, Temp) on a bright digital screen.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Multipara%20Monitor."
  },
  {
    "category": "monitoring",
    "iconClass": "fa-solid fa-heart-pulse",
    "badge": "Standard",
    "title": "Cardiac Monitor",
    "desc": "Continuous electrocardiography monitoring units to record heart rhythms and vitals for cardiac patients.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Cardiac%20Monitor."
  },
  {
    "category": "monitoring",
    "iconClass": "fa-solid fa-syringe",
    "badge": "Infusion",
    "title": "Syringe Pump",
    "desc": "Highly accurate micro-processor controlled syringe pumps to deliver precise fluid volumes/medication.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Syringe%20Pump."
  },
  {
    "category": "monitoring",
    "iconClass": "fa-solid fa-plug",
    "badge": "Standard",
    "title": "Infusion Pump / Machine",
    "desc": "Advanced volumetric infusion pumps to administer controlled amounts of medical fluids intravenously.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20an%20Infusion%20Pump."
  },
  {
    "category": "monitoring",
    "iconClass": "fa-solid fa-shoe-prints",
    "badge": "DVT Therapy",
    "title": "DVT Pump",
    "desc": "Intermittent pneumatic compression pumps and sleeves to prevent deep vein thrombosis in bedridden patients.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20DVT%20Pump."
  },
  {
    "category": "monitoring",
    "iconClass": "fa-solid fa-bolt",
    "badge": "Emergency",
    "title": "Defibrillator (AED)",
    "desc": "Portable clinical external defibrillators to deliver therapeutic shock for cardiac arrest emergencies.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Defibrillator."
  },
  {
    "category": "monitoring",
    "iconClass": "fa-solid fa-wave-square",
    "badge": "Diagnostic",
    "title": "ECG Machine",
    "desc": "Portable multi-channel electrocardiograph machines to record cardiac electrical activity at home.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20ECG%20Machine."
  },
  {
    "category": "beds",
    "iconClass": "fa-solid fa-bed",
    "badge": "1 / 2 Function",
    "title": "Manual Hospital Bed",
    "desc": "Standard clinic-grade manual mechanical hospital beds with adjustable backrest and leg elevations.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Manual%20Hospital%20Bed."
  },
  {
    "category": "beds",
    "iconClass": "fa-solid fa-bed-pulse",
    "badge": "Adjustable",
    "title": "Fowler Bed",
    "desc": "Multi-position ergonomic manual fowler beds with side railings and saline stand provisions.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Fowler%20Bed."
  },
  {
    "category": "beds",
    "iconClass": "fa-solid fa-bed",
    "badge": "3 / 5 Function",
    "title": "ICU Electric Bed",
    "desc": "Fully motorized remote-controlled hospital beds for back, leg, height, trendelenburg alignments.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20an%20ICU%20Electric%20Bed."
  },
  {
    "category": "beds",
    "iconClass": "fa-solid fa-chair",
    "badge": "Motorized",
    "title": "Motorized Recliner Bed",
    "desc": "Home-style motorized recliner beds for patients requiring simple head/leg lift support.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Motorized%20Recliner."
  },
  {
    "category": "beds",
    "iconClass": "fa-solid fa-wheelchair",
    "badge": "Foldable",
    "title": "Foldable Wheelchair",
    "desc": "Lightweight, heavy-duty foldable patient wheelchairs (manual/electric models available).",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Wheelchair."
  },
  {
    "category": "beds",
    "iconClass": "fa-solid fa-person-walking-with-cane",
    "badge": "Mobility",
    "title": "Patient Walker",
    "desc": "Sturdy height-adjustable folding walkers (standard/wheels model) to support daily mobility.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Patient%20Walker."
  },
  {
    "category": "beds",
    "iconClass": "fa-solid fa-toilet",
    "badge": "Hygiene",
    "title": "Commode Chair",
    "desc": "Highly portable, foldable bedside commode chairs with removable waste buckets for senior care.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Commode%20Chair."
  },
  {
    "category": "beds",
    "iconClass": "fa-solid fa-mattress-pillow",
    "badge": "Anti-Decubitus",
    "title": "Air Mattress (Bubble)",
    "desc": "Alternating pressure bubble air pads with electric pumps to actively prevent bedsores.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Air%20Mattress."
  },
  {
    "category": "beds",
    "iconClass": "fa-solid fa-people-arrows",
    "badge": "Transfer Assist",
    "title": "Patient Lift",
    "desc": "Hydraulic or electric patient hoist lifts to safely transfer bedridden patients to chairs/washrooms.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Patient%20Lift."
  },
  {
    "category": "elderly",
    "iconClass": "fa-solid fa-prescription-bottle-medical",
    "badge": "Enteral Nutrition",
    "title": "Feeding Pump",
    "desc": "Electronic enteral nutrition feeding pumps for precise nutrition administration to critical care patients.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Feeding%20Pump."
  },
  {
    "category": "elderly",
    "iconClass": "fa-solid fa-couch",
    "badge": "Comfort",
    "title": "Recliner Chair",
    "desc": "Comfortable medical recliner chairs to assist senior citizens with easy sitting and standing postures.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Recliner%20Chair."
  },
  {
    "category": "elderly",
    "iconClass": "fa-solid fa-bed",
    "badge": "Comfort",
    "title": "Adjustable Back Rest",
    "desc": "Portable metal-framed backrests with mesh support to place on standard beds for upright seating support.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20an%20Adjustable%20Back%20Rest."
  },
  {
    "category": "elderly",
    "iconClass": "fa-solid fa-dumbbell",
    "badge": "Rehab",
    "title": "Traction Equipment",
    "desc": "Cervical and lumbar traction kits to help relieve neck and back pain at home under professional guidance.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Traction%20Equipment."
  },
  {
    "category": "elderly",
    "iconClass": "fa-solid fa-hand-holding-hand",
    "badge": "Rehab",
    "title": "Physiotherapy Equipment",
    "desc": "TENS, muscle stimulator, and ultrasound units for pain relief and rehabilitation exercises at home.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20Physiotherapy%20Equipment."
  },
  {
    "category": "setup",
    "iconClass": "fa-solid fa-lungs",
    "badge": "Hygiene",
    "title": "Tracheostomy Care Setup",
    "desc": "Complete sanitization, inner cannula, suction tubes, and dressing kit for tracheostomy care.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Tracheostomy%20Care%20Setup."
  },
  {
    "category": "setup",
    "iconClass": "fa-solid fa-pump-medical",
    "badge": "Airway Care",
    "title": "Portable Suction Setup",
    "desc": "Suction catheters, connectors, jar filters, and suction pumps for clinical phlegm management.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20want%20to%20rent%2Fbuy%20Portable%20Suction%20Setup."
  },
  {
    "category": "setup",
    "iconClass": "fa-solid fa-wind",
    "badge": "Oxygen Therapy",
    "title": "Complete Oxygen Setup",
    "desc": "Nasal cannula, nebulizer mask, oxygen flowmeter, key, and high-purity cylinder setup combos.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Complete%20Oxygen%20Setup."
  },
  {
    "category": "setup",
    "iconClass": "fa-solid fa-kit-medical",
    "badge": "Emergency",
    "title": "Emergency Medical Kit",
    "desc": "BVM Resuscitator (Ambu bag), pulse oximeter, blood pressure monitor, and emergency medication box.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20an%20Emergency%20Medical%20Kit."
  },
  {
    "category": "setup",
    "iconClass": "fa-solid fa-hospital",
    "badge": "Complete ICU",
    "title": "Full Home ICU Setup Combo",
    "desc": "Electric ICU bed, multipara monitor, oxygen concentrator, ventilator or BiPAP, syringe pump, and DVT pump.",
    "priceVal": "Rent & Sale",
    "phone": "8690888306",
    "whatsappUrl": "https://api.whatsapp.com/send?phone=919352286423&text=Hello%20DRx%20Home%20Care%2C%20I%20need%20a%20Full%20Home%20ICU%20Setup%20Combo."
  }
];

export default function EquipmentsClient() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Equipments", icon: "fa-hospital" },
    { id: "respiratory", label: "Oxygen & Respiratory", icon: "fa-lungs" },
    { id: "monitoring", label: "ICU & Monitoring", icon: "fa-heart-pulse" },
    { id: "beds", label: "Beds & Mobility", icon: "fa-bed" },
    { id: "elderly", label: "Elderly & Rehab", icon: "fa-hands-helping" },
    { id: "setup", label: "Home ICU Setup", icon: "fa-hospital" },
  ];

  // Filters items based on selected category and text search query
  const filteredEquipments = useMemo(() => {
    return equipmentsData.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <section className="catalog" style={{ padding: "120px 0 80px" }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div className="breadcrumbs" style={{ marginBottom: "32px", fontSize: "14px", color: "#94A3B8", display: "flex", gap: "8px", alignItems: "center" }}>
          <a href="/" style={{ color: "#0ea5e9", fontWeight: "500" }}>Home</a>
          <i className="fas fa-chevron-right" style={{ fontSize: "10px" }}></i>
          <span>Medical Equipment Rent & Sale</span>
        </div>

        {/* Section Header */}
        <div className="section-header" style={{ textAlign: "left", maxWidth: "100%", marginBottom: "40px" }}>
          <span className="section-label" style={{ justifyContent: "flex-start" }}>Equipment Catalog</span>
          <h1 className="section-title" style={{ textAlign: "left", color: "#ffffff" }}>
            Rent & Buy <em style={{ fontStyle: "normal", color: "#0ea5e9" }}>Medical Equipments</em> in Jaipur
          </h1>
          <p className="section-desc" style={{ textAlign: "left", marginLeft: 0, color: "#94A3B8" }}>
            We provide certified, sanitized, and hospital-grade equipment with free doorstep delivery, installation, and demonstration by trained professionals.
          </p>
        </div>

        {/* Search Bar Section */}
        <div className="search-container" style={{ marginBottom: "30px" }}>
          <div className="search-wrapper" style={{ position: "relative" }}>
            <i className="fas fa-search search-icon" style={{ position: "absolute", left: "20px", top: "16px", color: "#94a3b8" }}></i>
            <input
              type="text"
              id="equipment-search"
              placeholder="Search medical equipment (e.g. Oxygen, Bed, BiPAP, Monitor, Walker...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 45px 14px 50px",
                borderRadius: "30px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(15, 34, 55, 0.7)",
                color: "#ffffff",
                fontSize: "15px",
                outline: "none",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)"
              }}
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "14px",
                  background: "none",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  fontSize: "14px"
                }}
              >
                <i className="fas fa-times-circle"></i>
              </button>
            )}
          </div>
        </div>

        {/* Category Navigation - Floating Translucent Pill */}
        <div
          className="category-nav"
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "40px",
            position: "relative",
            zIndex: 2
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: "10px 20px",
                borderRadius: "20px",
                border: "1px solid",
                borderColor: selectedCategory === cat.id ? "#33C77A" : "rgba(255, 255, 255, 0.08)",
                background: selectedCategory === cat.id ? "linear-gradient(135deg, #0A6ABF, #00A859)" : "rgba(15, 34, 55, 0.7)",
                color: "#ffffff",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease"
              }}
            >
              <i className={`fas ${cat.icon}`}></i>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active filter counters */}
        <div className="search-results-info" style={{ marginBottom: "30px", color: "#94a3b8", fontSize: "14px" }}>
          Showing <strong>{filteredEquipments.length}</strong> medical items
          {searchQuery && (
            <span>
              {" "}
              matching &quot;<strong>{searchQuery}</strong>&quot;
            </span>
          )}
        </div>

        {filteredEquipments.length > 0 ? (
          <div
            className="catalog__grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {filteredEquipments.map((item, idx) => (
              <div className="catalog-card" key={idx}>
                <div className={`catalog-card__header header-${item.category}`}>
                  <div className="catalog-card__icon-wrapper">
                    <i className={item.iconClass}></i>
                  </div>
                  <span className="catalog-card__badge">{item.badge}</span>
                </div>
                <div className="catalog-card__body">
                  <h3 className="catalog-card__title">{item.title}</h3>
                  <p className="catalog-card__desc">{item.desc}</p>
                  <div className="catalog-card__price">
                    <span className="catalog-card__price-label">Available for</span>
                    <span className="catalog-card__price-val">{item.priceVal}</span>
                  </div>
                  <div className="catalog-card__actions">
                    <a href={`tel:${item.phone}`} className="catalog-card__btn catalog-card__btn--call">
                      <i className="fas fa-phone-alt"></i> Call
                    </a>
                    <a
                      href={item.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="catalog-card__btn catalog-card__btn--whatsapp"
                    >
                      <i className="fab fa-whatsapp"></i> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results" style={{ textAlign: "center", padding: "60px 20px" }}>
            <i className="fas fa-search-minus" style={{ fontSize: "48px", color: "#94a3b8", marginBottom: "15px" }}></i>
            <h4>No Equipments Found</h4>
            <p>We couldn&apos;t find any medical equipment matching your search. Please check spelling or try another term.</p>
          </div>
        )}

      </div>
    </section>
  );
}
