"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 bg-[#ECFDF5]/40 dark:bg-slate-950/70 border-t border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#DCFCE7]/70 dark:bg-[#00A876]/20 border border-[#A7F3D0]/50 dark:border-[#00A876]/30 text-[#059669] dark:text-[#34D399] text-xs font-bold uppercase tracking-wider">
              Get in Touch
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let&apos;s Work Together
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base max-w-lg leading-relaxed">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#D1FAE5]/80 dark:bg-[#00A876]/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#059669] dark:text-[#34D399]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">Email</span>
                  <a
                    href="mailto:abdullahfahad14701470@gmail.com"
                    className="block text-xs text-slate-500 dark:text-slate-400 hover:text-[#00B67A] transition-colors cursor-pointer"
                  >
                    abdullahfahad14701470@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#D1FAE5]/80 dark:bg-[#00A876]/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#059669] dark:text-[#34D399]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">Phone</span>
                  <a
                    href="tel:01410147013"
                    className="block text-xs text-slate-500 dark:text-slate-400 hover:text-[#00B67A] transition-colors cursor-pointer"
                  >
                    01410147013
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#D1FAE5]/80 dark:bg-[#00A876]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#059669] dark:text-[#34D399]" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">Location</span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-white/95 dark:bg-slate-900 backdrop-blur-xs border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-[#00B67A] dark:focus:border-[#00B67A] focus:ring-1 focus:ring-[#00B67A] outline-none text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white dark:bg-slate-800/80 text-slate-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-[#00B67A] dark:focus:border-[#00B67A] focus:ring-1 focus:ring-[#00B67A] outline-none text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white dark:bg-slate-800/80 text-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-[#00B67A] dark:focus:border-[#00B67A] focus:ring-1 focus:ring-[#00B67A] outline-none text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 bg-white dark:bg-slate-800/80 text-slate-800 dark:text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#00B67A] hover:bg-[#009367] text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
