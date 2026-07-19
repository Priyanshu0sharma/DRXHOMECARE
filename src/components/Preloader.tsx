"use client";

import React, { useState, useEffect } from "react";

export default function Preloader() {
  const [fadeContent, setFadeContent] = useState(false);
  const [slideUp, setSlideUp] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Stage 1: Wait 400ms, then fade content (logo and text)
    const timer1 = setTimeout(() => {
      setFadeContent(true);
    }, 450);

    // Stage 2: Wait 650ms, then trigger panels staircase slide up
    const timer2 = setTimeout(() => {
      setSlideUp(true);
      document.body.classList.remove("loading");
    }, 700);

    // Stage 3: Wait 1500ms, completely hide preloader from DOM
    const timer3 = setTimeout(() => {
      setHidden(true);
    }, 1550);

    // Lock body scroll during preloader
    document.body.classList.add("loading");

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
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
