"use client";

import React, { useState } from "react";

interface BookingFormProps {
  defaultService?: string;
}

export default function BookingForm({ defaultService = "General Homecare Inquiry" }: BookingFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    // 1. WhatsApp redirect text compilation
    const baseText = `Hello DRx Home Care,\n\nI want to book a service:\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}`;
    const fullText = message ? `${baseText}\n*Details:* ${message}` : baseText;
    const encodedText = encodeURIComponent(fullText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919352286423&text=${encodedText}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // 2. Trigger success modal
    setShowModal(true);
    document.body.style.overflow = "hidden";

    // 3. Clear inputs
    setName("");
    setPhone("");
    setService(defaultService);
    setMessage("");
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="booking-card__form" id="whatsappBookingForm">
        <div className="booking-card__group">
          <label htmlFor="form-name">
            <i className="fas fa-user"></i> Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="form-name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="booking-card__group">
          <label htmlFor="form-phone">
            <i className="fas fa-phone-alt"></i> Phone Number <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="form-phone"
            placeholder="Enter mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="booking-card__group">
          <label htmlFor="form-service">
            <i className="fas fa-hand-holding-medical"></i> Select Service
          </label>
          <select
            id="form-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="General Homecare Inquiry">General Inquiry</option>
            <option value="ICU at Home">ICU Setup & Critical Care at Home</option>
            <option value="Nursing Care">Professional Nursing Care</option>
            <option value="Caretaker">Patient Caretaker & Attendant</option>
            <option value="Elder Care">Elderly Care & Caretaker</option>
            <option value="Doctor Visit">Specialist Doctor Home Visit</option>
            <option value="Physiotherapy">Physiotherapy at Home</option>
            <option value="Ambulance">24x7 Emergency Ambulance</option>
            <option value="Lab Test">Blood & Diagnostic Lab Tests</option>
            <option value="Medical Equipment">Medical Equipment Rental/Sale</option>
            <option value="Injection at Home">Injection Administration</option>
            <option value="IV Infusion">IV Infusion Setup</option>
            <option value="Wound Dressing">Surgical Wound Dressing</option>
            <option value="Bedridden Care">Bedridden Patient Care</option>
          </select>
        </div>

        <div className="booking-card__group">
          <label htmlFor="form-message">
            <i className="fas fa-comment-medical"></i> Details (Optional)
          </label>
          <textarea
            id="form-message"
            rows={3}
            placeholder="Tell us about the patient's condition..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="booking-card__btn">
          <i className="fab fa-whatsapp"></i> Confirm & Book via WhatsApp
        </button>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="success-modal active" id="successModal" style={{ zIndex: 1100 }}>
          <div className="success-modal__content">
            <div className="success-modal__icon">✓</div>
            <h3>Booking Submitted!</h3>
            <p>
              Thank you for choosing DRx Home Care. Your details have been submitted.
              Our team will contact you shortly on your phone number.
            </p>
            <button className="success-modal__btn" onClick={closeModal} id="closeSuccessBtn">
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
