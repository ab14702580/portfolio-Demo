"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, Layers } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-[#ECFDF5] dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-[#00A876] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5 text-white stroke-[2.3]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1E293B] dark:text-white">
            Abdullah <span className="text-[#00A876]">Fahad</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-3.5 py-2 text-sm font-medium transition-colors cursor-pointer ${
                link.active
                  ? "text-[#00A876] font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:text-[#00A876] dark:hover:text-[#00A876]"
              }`}
            >
              {link.name}
              {link.active && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#00A876] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#00A876] hover:bg-[#009367] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </Link>

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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                link.active
                  ? "bg-[#E6F7F2] dark:bg-[#00A876]/20 text-[#00A876] font-semibold"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
