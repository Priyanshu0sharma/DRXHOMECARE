"use client";

import React, { useState } from "react";

export default function HeroBookingCard() {
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [careService, setCareService] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [patientLocation, setPatientLocation] = useState("");
  const [patientDetails, setPatientDetails] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!patientName || !patientPhone || !careService || !bookingDate || !patientLocation || !patientDetails) {
      alert("Please fill in all the required fields.");
      return;
    }

    // WhatsApp message construction
    const messageText = 
      `Hello DRx Home Care,\n\nI want to book a service:\n` +
      `*Patient Name:* ${patientName}\n` +
      `*Phone Number:* ${patientPhone}\n` +
      `*Service Required:* ${careService}\n` +
      `*Preferred Date:* ${bookingDate}\n` +
      `*Location/Address:* ${patientLocation}\n` +
      `*Condition/Details:* ${patientDetails}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919352286423&text=${encodedText}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Open success modal
    setShowModal(true);
    document.body.style.overflow = "hidden";

    // Clear inputs
    setPatientName("");
    setPatientPhone("");
    setCareService("");
    setBookingDate("");
    setPatientLocation("");
    setPatientDetails("");
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <div className="booking-card">
        <div className="booking-card__header">
          <h3>
            <i className="fas fa-calendar-check"></i> Book Home Care
          </h3>
          <p>Enter details to book instantly via WhatsApp</p>
        </div>
        <form onSubmit={handleSubmit} className="booking-card__form" autoComplete="off">
          <div className="form-group">
            <label htmlFor="patientName">
              <i className="fas fa-user-circle"></i> Patient's Full Name
            </label>
            <input
              type="text"
              id="patientName"
              placeholder="Enter Full Name"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="patientPhone">
              <i className="fas fa-phone-alt"></i> WhatsApp / Phone Number
            </label>
            <input
              type="tel"
              id="patientPhone"
              placeholder="Enter 10-Digit Mobile"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="careService">
                <i className="fas fa-briefcase-medical"></i> Select Service
              </label>
              <select
                id="careService"
                value={careService}
                onChange={(e) => setCareService(e.target.value)}
                required
              >
                <option value="" disabled>
                  Choose Service
                </option>
                <option value="ICU at Home">ICU at Home</option>
                <option value="Nursing Care">Nursing Care (Nurse)</option>
                <option value="Doctor Home Visit">Doctor Home Visit</option>
                <option value="Physiotherapy">Physiotherapy</option>
                <option value="Patient Caretaker">Patient Caretaker / Attendant</option>
                <option value="Elder Care">Elder Care (Senior Care)</option>
                <option value="Mother & Baby Care">Mother & Baby Care</option>
                <option value="Medical Equipment Rent/Sale">Medical Equipment</option>
                <option value="Ambulance Service">Ambulance (24x7)</option>
                <option value="Injection at Home">Injection at Home</option>
                <option value="IV Infusion">IV Infusion</option>
                <option value="Wound Dressing">Wound Dressing</option>
                <option value="Bedridden Patient Care">Bedridden Patient Care</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="bookingDate">
                <i className="fas fa-calendar-day"></i> Preferred Date
              </label>
              <input
                type="date"
                id="bookingDate"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="patientLocation">
              <i className="fas fa-map-marker-alt"></i> Area in Jaipur (Address)
            </label>
            <input
              type="text"
              id="patientLocation"
              placeholder="e.g. Durgapura, Malviya Nagar"
              value={patientLocation}
              onChange={(e) => setPatientLocation(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="patientDetails">
              <i className="fas fa-comment-medical"></i> Patient Condition & Requirements
            </label>
            <textarea
              id="patientDetails"
              rows={2}
              placeholder="Briefly describe patient's requirements..."
              value={patientDetails}
              onChange={(e) => setPatientDetails(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-whatsapp-submit">
            <i className="fab fa-whatsapp"></i> Confirm Booking on WhatsApp
          </button>
        </form>
      </div>

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
