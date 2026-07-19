"use client";

import React, { useState, useEffect, useRef } from "react";

interface StatsCounterProps {
  target: number;
  label: string;
  suffix?: string;
}

export default function StatsCounter({ target, label, suffix = "+" }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          startCountAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  const startCountAnimation = () => {
    let start = 0;
    const duration = 1500; // Animation duration in ms
    const incrementTime = 16; // Time between increments (~60fps)
    const steps = duration / incrementTime;
    const stepValue = target / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);
  };

  return (
    <div className="stats__item reveal-scale" ref={elementRef}>
      <span>{count}</span>
      <span>{suffix}</span>
      <p>{label}</p>
    </div>
  );
}
