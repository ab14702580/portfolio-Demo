import React from "react";
import Link from "next/link";
import { Layers, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: <FaGithub className="w-4 h-4 text-slate-700 dark:text-slate-300" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: <FaLinkedinIn className="w-4 h-4 text-slate-700 dark:text-slate-300" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: <FaXTwitter className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />,
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: <FaFacebookF className="w-4 h-4 text-slate-700 dark:text-slate-300" />,
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: <FaYoutube className="w-4 h-4 text-slate-700 dark:text-slate-300" />,
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Bug Fixing", href: "#services" },
    { name: "Website Maintenance", href: "#services" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100 dark:border-slate-800">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-[#00B67A] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                <Layers className="w-5 h-5 text-white stroke-[2.3]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0F172A] dark:text-white">
                Abdullah Fahad
              </span>
              <span className="font-mono text-[#00B67A] font-bold text-base">
                &lt;/&gt;
              </span>
            </Link>

            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              Building digital experiences, one line at a time.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-all hover:scale-110 shadow-xs cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-[#00B67A] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-[#00B67A] transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
              Get In Touch
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a
                  href="tel:01410147013"
                  className="hover:text-[#00B67A] transition-colors cursor-pointer"
                >
                  01410147013
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a
                  href="mailto:abdullahfahad14701470@gmail.com"
                  className="hover:text-[#00B67A] transition-colors cursor-pointer truncate max-w-[150px]"
                  title="abdullahfahad14701470@gmail.com"
                >
                  abdullahfahad14701470@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
              Subscribe to Newsletter
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Get the latest updates and project news.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full pl-3.5 pr-10 py-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-[#00B67A] bg-white dark:bg-slate-900 text-slate-800 dark:text-white"
              />
              <button
                type="button"
                className="absolute right-1 top-1 bottom-1 w-8 rounded-lg bg-[#00B67A] hover:bg-[#009367] flex items-center justify-center text-white transition-all cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-400 dark:text-slate-500">
          <p>© 2025 Abdullah Fahad. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="#"
              className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
