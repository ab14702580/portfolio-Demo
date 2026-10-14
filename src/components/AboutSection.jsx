import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, Phone, Briefcase } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6F7F2] dark:bg-[#00A876]/20 text-[#00A876] text-xs font-semibold tracking-wide">
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              A Passionate MERN Stack Developer
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              I&apos;m Abdullah Fahad, a passionate MERN Stack developer with a strong interest in building fast, responsive and modern web applications. I enjoy solving problems, learning new technologies and creating smooth user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#F8FAFC] dark:bg-slate-800/60 border border-[#F1F5F9] dark:border-slate-700/60 rounded-xl p-3.5 flex items-center gap-3 hover:border-[#00A876]/40 transition-colors cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-[#E6F7F2] dark:bg-[#00A876]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#00A876]" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">Location</span>
                  <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">Bangladesh</span>
                </div>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-slate-800/60 border border-[#F1F5F9] dark:border-slate-700/60 rounded-xl p-3.5 flex items-center gap-3 hover:border-[#00A876]/40 transition-colors cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-[#E6F7F2] dark:bg-[#00A876]/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#00A876]" />
                </div>
                <div className="truncate">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">Email</span>
                  <a
                    href="mailto:abdullahfahad14701470@gmail.com"
                    className="block text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A876] truncate cursor-pointer"
                    title="abdullahfahad14701470@gmail.com"
                  >
                    abdullahfahad14701470@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-slate-800/60 border border-[#F1F5F9] dark:border-slate-700/60 rounded-xl p-3.5 flex items-center gap-3 hover:border-[#00A876]/40 transition-colors cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-[#E6F7F2] dark:bg-[#00A876]/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#00A876]" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">Phone</span>
                  <a
                    href="tel:01410147013"
                    className="block text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-[#00A876] cursor-pointer"
                  >
                    01410147013
                  </a>
                </div>
              </div>

              <div className="bg-[#F8FAFC] dark:bg-slate-800/60 border border-[#F1F5F9] dark:border-slate-700/60 rounded-xl p-3.5 flex items-center gap-3 hover:border-[#00A876]/40 transition-colors cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-[#E6F7F2] dark:bg-[#00A876]/20 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 text-[#00A876]" />
                </div>
                <div>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">Experience</span>
                  <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">1+ Years</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="#about"
                className="inline-flex items-center gap-2 bg-[#00A876] hover:bg-[#009367] text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px]">
              <Image
                src="/workingBanner.png"
                alt="Working workspace banner"
                width={520}
                height={380}
                className="w-full h-auto object-contain rounded-2xl block dark:hidden"
              />
              <Image
                src="/darkWorkingbanner.png"
                alt="Working workspace banner"
                width={520}
                height={380}
                className="w-full h-auto object-contain rounded-2xl hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
