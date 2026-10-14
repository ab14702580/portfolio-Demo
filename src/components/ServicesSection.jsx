import React from "react";
import { Monitor, LayoutTemplate, ShieldAlert, ShieldCheck } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Build fast, responsive and modern websites using React, JS & Tailwind CSS.",
      icon: <Monitor className="w-6 h-6 text-[#00B67A]" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Clean, simple and user-friendly designs that create great experiences.",
      icon: <LayoutTemplate className="w-6 h-6 text-[#00B67A]" />,
    },
    {
      title: "Bug Fixing & Optimization",
      description:
        "Fix issues and improve performance for a smoother experience.",
      icon: <ShieldAlert className="w-6 h-6 text-[#00B67A]" />,
    },
    {
      title: "Website Maintenance",
      description:
        "Keep your website secure, updated and running smoothly.",
      icon: <ShieldCheck className="w-6 h-6 text-[#00B67A]" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900/60 border-t border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#DCFCE7]/70 dark:bg-[#00A876]/20 border border-[#A7F3D0]/50 dark:border-[#00A876]/30 text-[#059669] dark:text-[#34D399] text-xs font-bold uppercase tracking-wider">
            My Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What I Offer
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            I provide modern web solutions to help your business stand out and grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-xs hover:border-[#00B67A]/50 dark:hover:border-[#00B67A]/60 hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] dark:bg-[#00B67A]/20 border border-[#D1FAE5] dark:border-[#00B67A]/30 flex items-center justify-center mb-4 group-hover:bg-[#DCFCE7] dark:group-hover:bg-[#00B67A]/30 transition-colors cursor-pointer">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
