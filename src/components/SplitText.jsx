"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SplitText({
  text = "",
  className = "",
  delay = 25,
  duration = 0.5,
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
  let globalCharIndex = 0;

  return (
    <span ref={containerRef} className={`inline-block overflow-hidden ${className}`}>
      {words.map((word, wIdx) => {
        const letters = Array.from(word);
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-2.5">
            {letters.map((letter, lIdx) => {
              const charDelay = `${globalCharIndex * delay}ms`;
              globalCharIndex++;
              return (
                <span
                  key={lIdx}
                  className="inline-block transform-gpu transition-all ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: inView ? "translateY(0)" : "translateY(110%)",
                    opacity: inView ? 1 : 0,
                    transitionDuration: `${duration}s`,
                    transitionDelay: charDelay,
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}

