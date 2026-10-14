import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Multi-Vendor Marketplace",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Bill Management System",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Travel & Tourism",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Portfolio Website",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#FBFCFD] dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#DCFCE7]/70 dark:bg-[#00A876]/20 border border-[#A7F3D0]/50 dark:border-[#00A876]/30 text-[#059669] dark:text-[#34D399] text-xs font-bold uppercase tracking-wider">
              Featured Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              My Latest MERN Stack Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Explore some of my featured full-stack projects, all developed with modern MERN Stack technologies and clean architecture.
            </p>
          </div>

          <Link
            href="#projects"
            className="inline-flex items-center gap-1.5 text-[#00B67A] hover:text-[#009367] font-bold text-sm tracking-wide transition-colors cursor-pointer self-start md:self-end"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:border-[#00B67A]/50 dark:hover:border-[#00B67A]/60 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="relative w-full h-[230px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
