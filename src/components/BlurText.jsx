"use client";

import React, { useEffect, useRef, useState } from "react";

export default function BlurText({
  text = "",
  className = "",
  delay = 50,
  duration = 0.6,
  inView: inViewProp,
}) {
  const [internalInView, setInternalInView] = useState(false);
  const containerRef = useRef(null);
  const inView = inViewProp !== undefined ? inViewProp : internalInView;

  useEffect(() => {
    if (inViewProp !== undefined) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInternalInView(true);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [inViewProp]);

  const words = text.split(" ");

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, index) => {
        const wordDelay = `${index * delay}ms`;
        return (
          <span
            key={index}
            className="inline-block mr-1.5 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 14px, 0)",
              transitionDuration: `${duration}s`,
              transitionDelay: wordDelay,
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}

