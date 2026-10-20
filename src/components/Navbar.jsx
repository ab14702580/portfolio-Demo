"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Layers } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navContainerRef = React.useRef(null);
  const linkRefs = React.useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    // { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const updateIndicator = React.useCallback((id) => {
    const activeEl = linkRefs.current[id];
    const container = navContainerRef.current;
    if (activeEl && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = activeEl.getBoundingClientRect();
      const left = elRect.left - containerRect.left + 14;
      const width = Math.max(0, elRect.width - 28);
      setIndicatorStyle({ left, width, opacity: 1 });
    }
  }, []);

  React.useEffect(() => {
    updateIndicator(activeSection);
  }, [activeSection, updateIndicator]);

  React.useEffect(() => {
    const handleResize = () => updateIndicator(activeSection);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection, updateIndicator]);

  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 160;
          for (const link of navLinks) {
            const el = document.getElementById(link.id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(link.id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    updateIndicator(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-[#ECFDF5] dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="#home" onClick={() => handleNavClick("home")} className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-[#00A876] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5 text-white stroke-[2.3]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1E293B] dark:text-white">
            Abdullah <span className="text-[#00A876]">Fahad</span>
          </span>
        </Link>

        <nav ref={navContainerRef} className="hidden md:flex items-center gap-1 lg:gap-2 relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                ref={(el) => {
                  linkRefs.current[link.id] = el;
                }}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "text-[#00A876] font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-[#00A876] dark:hover:text-[#00A876]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <span
            className="absolute bottom-0 h-[2.5px] bg-[#00A876] rounded-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
            }}
          />
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className="hidden sm:inline-flex items-center gap-2 bg-[#00A876] hover:bg-[#009367] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                  isActive
                    ? "bg-[#E6F7F2] dark:bg-[#00A876]/20 text-[#00A876] font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 pb-1">
            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className="flex items-center justify-center gap-2 bg-[#00A876] hover:bg-[#009367] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer w-full"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
