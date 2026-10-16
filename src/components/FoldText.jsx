"use client";

import React from "react";
import { useTheme } from "next-themes";

export default function FoldText({
  text = "",
  className = "",
  duration = 0.6,
  delay = 0.05,
  baseDelay = 0,
}) {
  const { resolvedTheme } = useTheme();
  const characters = Array.from(text);

  return (
    <span
      key={`${resolvedTheme || "default"}-${text}`}
      className={`inline-flex flex-wrap items-baseline select-none ${className}`}
      style={{ perspective: "1000px" }}
    >
      {characters.map((char, index) => {
        const isSpace = char === " ";
        const charDelay = `${baseDelay + index * delay}s`;
        return (
          <span
            key={`${index}-${char}`}
            className="animate-fold-char"
            style={{
              "--fold-duration": `${duration}s`,
              "--fold-delay": charDelay,
              minWidth: isSpace ? "0.3em" : "auto",
            }}
          >
            {isSpace ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}
