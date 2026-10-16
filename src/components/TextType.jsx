"use client";

import React, { useEffect, useState } from "react";

export default function TextType({
  texts = ["MERN Stack Developer"],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDelay = 1600,
  className = "",
  cursorClassName = "text-[#00A876]",
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = texts[textIndex % texts.length];

    if (!isDeleting && displayedText === currentFullText) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
      return () => clearTimeout(timer);
    }

    if (isDeleting && displayedText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 200);
      return () => clearTimeout(timer);
    }

    const nextSpeed = isDeleting ? deletingSpeed : typingSpeed;
    timer = setTimeout(() => {
      const targetLength = isDeleting
        ? displayedText.length - 1
        : displayedText.length + 1;
      setDisplayedText(currentFullText.slice(0, targetLength));
    }, nextSpeed);

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
  ]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>
      <span
        className={`inline-block font-mono ml-0.5 select-none animate-cursor-blink ${cursorClassName}`}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}
