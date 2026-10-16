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
      { threshold: 0.15 }
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
            className="inline-block mr-1.5 transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              filter: inView ? "blur(0px)" : "blur(10px)",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
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

