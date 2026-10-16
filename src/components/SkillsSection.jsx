"use client";

import React, { useState } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiBootstrap,
  SiPython,
  SiNextdotjs,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";

export default function SkillsSection() {
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
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
  }, []);

  const layer1 = [
    { name: "React JS", icon: <SiReact className="w-6 h-6 text-[#00D8FF]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 text-[#5FA04E]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E] bg-black rounded-xs" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
  ];

  const layer2 = [
    { name: "Express JS", icon: <SiExpress className="w-6 h-6 text-slate-800 dark:text-slate-200" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" /> },
    { name: "Firebase", icon: <SiFirebase className="w-6 h-6 text-[#FFA000]" /> },
    { name: "Python", icon: <SiPython className="w-6 h-6 text-[#3776AB]" /> },
    { name: "Git", icon: <SiGit className="w-6 h-6 text-[#F05032]" /> },
  ];

  const layer3 = [
    { name: "HTML5", icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="w-6 h-6 text-[#1572B6]" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6 text-[#7952B3]" /> },
    { name: "VS Code", icon: <VscVscode className="w-6 h-6 text-[#007ACC]" /> },
  ];

  const renderOrbitItems = (items, diameterVar, orbitClass, counterClass, ringIndex) => {
    const total = items.length;

    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300/80 dark:border-slate-800 pointer-events-none transition-opacity duration-1000"
        style={{
          width: `var(${diameterVar})`,
          height: `var(${diameterVar})`,
          opacity: inView ? 1 : 0,
        }}
      >
        <div
          className={`w-full h-full rounded-full relative ${orbitClass}`}
          style={{
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {items.map((skill, index) => {
            const angle = (index * 360) / total;
            const rad = (angle * Math.PI) / 180;
            const cos = Math.cos(rad);
            const sin = Math.sin(rad);
            const delay = `${(ringIndex * 150) + (index * 60)}ms`;

            return (
              <div
                key={skill.name}
                className="absolute pointer-events-auto transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  left: inView
                    ? `calc(50% + calc(var(${diameterVar}) / 2 * ${cos}))`
                    : "50%",
                  top: inView
                    ? `calc(50% + calc(var(${diameterVar}) / 2 * ${sin}))`
                    : "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: inView ? 1 : 0,
                  filter: inView ? "blur(0px)" : "blur(12px)",
                  transitionDelay: delay,
                }}
              >
                <div
                  className={counterClass}
                  style={{
                    animationPlayState: paused ? "paused" : "running",
                  }}
                >
                  <div
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-md hover:shadow-xl hover:border-[#00A876] dark:hover:border-[#00A876] flex items-center justify-center transition-transform duration-300 hover:scale-125 cursor-pointer group relative"
                    title={skill.name}
                  >
                    <div className="scale-75 sm:scale-90 md:scale-100 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-slate-900/90 dark:bg-slate-100/90 text-white dark:text-slate-900 text-[10px] font-bold opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-sm z-30">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section ref={containerRef} id="skills" className="py-20 sm:py-24 bg-[#FAFDFC] dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6F7F2] dark:bg-[#00A876]/20 text-[#00A876] text-xs font-semibold tracking-wide">
            My Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            <SplitText text="Tools &amp; Technologies I Work With" inView={inView} />
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            <BlurText text="I work with modern technologies to build responsive, scalable and high-performance web applications." inView={inView} />
          </p>
        </div>

        <div className="relative w-full flex items-center justify-center min-h-[440px] sm:min-h-[580px] md:min-h-[700px] select-none py-4 sm:py-6">
          <div
            className="relative w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] md:w-[600px] md:h-[600px] flex items-center justify-center"
            style={{
              "--d1": "clamp(150px, 48vw, 220px)",
              "--d2": "clamp(220px, 72vw, 380px)",
              "--d3": "clamp(290px, 94vw, 540px)",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-radial from-[#00A876]/5 via-transparent to-transparent pointer-events-none" />

            {renderOrbitItems(layer1, "--d1", "animate-orbit-cw", "animate-counter-cw", 0)}
            {renderOrbitItems(layer2, "--d2", "animate-orbit-ccw", "animate-counter-ccw", 1)}
            {renderOrbitItems(layer3, "--d3", "animate-orbit-cw", "animate-counter-cw", 2)}

            <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white p-0.5 shadow-xl shadow-slate-900/10 dark:shadow-white/5 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white dark:bg-black flex flex-col items-center justify-center p-1 sm:p-2 text-center transition-colors">
                <SiNextdotjs className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-black dark:text-white mb-0.5" />
                <span className="text-[8px] sm:text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-slate-900 dark:text-white">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

