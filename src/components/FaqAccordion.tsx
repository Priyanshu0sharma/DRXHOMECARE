"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq__container reveal">
      <div className="faq__accordion">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div className={`faq__item ${isOpen ? "active" : ""}`} key={idx}>
              <button
                className="faq__question"
                aria-expanded={isOpen}
                onClick={() => toggleIndex(idx)}
              >
                <span>{item.question}</span>
                <span className="faq__icon">
                  <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
                </span>
              </button>
              <div
                className="faq__answer"
                style={{
                  maxHeight: isOpen ? "300px" : "0px",
                  opacity: isOpen ? 1 : 0,
                  transition: "max-height 0.4s ease, opacity 0.3s ease",
                  overflow: "hidden",
                }}
              >
                <div className="faq__answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
