"use client";

import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, MapPin, Building2, ExternalLink } from "lucide-react";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";

export default function ExperienceSection() {
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentEl = sectionRef.current;
    if (!currentEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const experiences = [
    {
      role: "Senior MERN Stack Developer",
      company: "TechNova Solutions",
      period: "2023 - Present",
      location: "Dhaka, Bangladesh (Remote)",
      type: "Full-Time",
      description: "Architecting end-to-end MERN stack web applications with React, Next.js, Node.js, Express, and MongoDB. Optimized database aggregations, Redux state, and real-time socket communications.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      role: "MERN Stack Engineer",
      company: "DevCraft Studio",
      period: "2022 - 2023",
      location: "Dhaka, Bangladesh",
      type: "Full-Time",
      description: "Engineered scalable RESTful APIs, designed reusable UI component architectures, and built custom admin dashboards with automated authentication workflows and payment gateways.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit", "JWT", "Stripe"],
    },
    {
      role: "Junior MERN Stack Developer",
      company: "PixelWorks Agency",
      period: "2021 - 2022",
      location: "Remote",
      type: "Contract",
      description: "Developed responsive full-stack features using React frontends and Node/Express backends with MongoDB data persistence, clean API endpoints, and modern UI interactions.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript (ES6+)", "Tailwind CSS", "Git"],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-[#FBFCFD] dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7]/70 dark:bg-[#00A876]/20 border border-[#A7F3D0]/50 dark:border-[#00A876]/30 text-[#059669] dark:text-[#34D399] text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Project Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            <SplitText text="MERN Stack Project Experience" />
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            <BlurText text="A showcase of real-world full-stack projects, enterprise architecture implementations, and modern web applications delivered with high performance." />
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#00A876] via-[#00A876]/40 to-transparent" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  sectionInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="hidden md:flex relative z-10 w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[#00A876] shadow-lg items-center justify-center shrink-0 group hover:scale-110 transition-transform">
                  <div className="w-7 h-7 rounded-lg bg-[#00A876]/10 text-[#00A876] flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="w-full flex-1 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 hover:border-[#00A876]/40 group cursor-pointer hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-[#00A876]/10 text-[#00A876] text-xs font-bold uppercase tracking-wider mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#00A876] transition-colors">
                        <SplitText
                          text={exp.role}
                          inView={sectionInView}
                          delay={18}
                          duration={0.35}
                        />
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {exp.company}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#00A876]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold shrink-0 self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-[#00A876]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    <p className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

