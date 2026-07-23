"use client";

import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [fadeContent, setFadeContent] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Stage 1: Fade content quickly (150ms)
    const timer1 = setTimeout(() => {
      setFadeContent(true);
    }, 150);

    // Stage 2: Trigger panels slide up (300ms)
    const timer2 = setTimeout(() => {
      setSlideUp(true);
      document.body.classList.remove("loading");
    }, 300);

    // Stage 3: Completely hide preloader from DOM (600ms)
    const timer3 = setTimeout(() => {
      setHidden(true);
    }, 600);

    // Failsafe: Guarantee preloader disappears within 700ms max under all conditions
    const timer4 = setTimeout(() => {
      setHidden(true);
      document.body.classList.remove("loading");
    }, 700);

    // Lock body scroll during preloader briefly
    document.body.classList.add("loading");

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      document.body.classList.remove("loading");
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`preloader ${fadeContent ? "fade-content" : ""} ${
        slideUp ? "slide-up" : ""
      }`}
      id="preloader"
    >
      <div className="preloader__bg-panels">
        <div className="preloader__panel"></div>
        <div className="preloader__panel"></div>
        <div className="preloader__panel"></div>
        <div className="preloader__panel"></div>
        <div className="preloader__panel"></div>
      </div>
      <div className="preloader__content" id="preloaderContent">
        <div className="preloader__glow"></div>
        <div className="preloader__logo">
          <img src="/images/Drx_logo-removebg-preview.png" alt="DRx Home Care Logo" />
        </div>
        <div className="preloader__text">
          DR<span>x</span> Home Care
        </div>
      </div>
    </div>
  );
}
