"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

import { useTheme } from "next-themes";
import FoldText from "@/components/FoldText";
import TextType from "@/components/TextType";

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ab14702580",
      icon: <FaGithub className="w-5 h-5 text-slate-700 dark:text-slate-300" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <FaLinkedinIn className="w-5 h-5 text-slate-700 dark:text-slate-300" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: <FaXTwitter className="w-4 h-4 text-slate-700 dark:text-slate-300" />,
    },
    {
      name: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=%2B8801984301320",
      icon: <FaWhatsapp className="w-5 h-5 text-slate-700 dark:text-slate-300" />,
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6F7F2] dark:bg-[#00A876]/20 text-[#00A876] text-xs font-semibold tracking-wide">
              Hello, I&apos;m
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] flex flex-wrap items-baseline gap-x-3">
              <FoldText text="Abdullah" className="text-slate-900 dark:text-white" delay={0.05} />
              <FoldText text="Fahad" className="text-[#00A876]" delay={0.05} baseDelay={0.4} />
            </h1>

            <div className="text-base sm:text-lg lg:text-xl font-bold font-mono tracking-wide text-slate-800 dark:text-slate-200 uppercase min-h-[32px] flex items-center">
              <TextType
                key={resolvedTheme || "default"}
                texts={[
                  "MERN Stack Developer",
                  "Full Stack Web Developer",
                  "React & Next.js Specialist",
                  "MERN Stack Developer",
                ]}
                typingSpeed={70}
                deletingSpeed={40}
                pauseDelay={1600}
              />
            </div>

            <p
              key={resolvedTheme || "default"}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed animate-slide-up-blur"
            >
              I craft modern, responsive and user-friendly web applications using React.js and Tailwind CSS. I love turning ideas into beautiful digital experiences.
            </p>

            <div
              key={`buttons-${resolvedTheme || "default"}`}
              className="flex flex-wrap items-center gap-4 pt-2"
              style={{ perspective: "1000px" }}
            >
              <div
                className="animate-fold-char"
                style={{ "--fold-duration": "0.6s", "--fold-delay": "0.15s" }}
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-[#00A876] hover:bg-[#009367] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md shadow-[#00A876]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </Link>
              </div>

              <div
                className="animate-fold-char"
                style={{ "--fold-duration": "0.6s", "--fold-delay": "0.25s" }}
              >
                <a
                  href="/CV.pdf"
                  download="CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 hover:bg-emerald-50/50 dark:hover:bg-slate-800 text-[#00A876] border-2 border-[#00A876] px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <span>Download CV</span>
                  <Download className="w-4 h-4 stroke-[2.2]" />
                </a>
              </div>
            </div>

            <div
              key={`socials-${resolvedTheme || "default"}`}
              className="flex items-center gap-3 pt-4"
              style={{ perspective: "1000px" }}
            >
              {socialLinks.map((social, index) => (
                <div
                  key={social.name}
                  className="animate-fold-char"
                  style={{
                    "--fold-duration": "0.55s",
                    "--fold-delay": `${0.35 + index * 0.08}s`,
                  }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-[#F1F5F9] dark:bg-slate-800/80 hover:bg-[#E2E8F0] dark:hover:bg-slate-700 flex items-center justify-center transition-all hover:scale-110 shadow-xs cursor-pointer"
                  >
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] lg:max-w-[620px]">
              <Image
                src="/profileBanner.png"
                alt="Abdullah Fahad Profile Banner"
                width={720}
                height={720}
                priority
                className="w-full h-auto object-contain rounded-2xl block dark:hidden"
              />
              <Image
                src="/darkthemeBanner.png"
                alt="Abdullah Fahad Profile Banner"
                width={720}
                height={720}
                priority
                className="w-full h-auto object-contain rounded-2xl hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
