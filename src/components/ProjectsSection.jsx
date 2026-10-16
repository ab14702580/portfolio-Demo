"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Code2, X } from "lucide-react";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import CircularCarousel from "@/components/CircularCarousel";

export default function ProjectsSection() {
  const [carouselInView, setCarouselInView] = React.useState(false);
  const carouselContainerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCarouselInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentEl = carouselContainerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  const projects = [
    {
      src: "/zorvique.png",
      title: "Zorvique",
      subtitle: "Modern Digital Solution & Web App",
      preview: "https://zorvique.vercel.app/",
      code: "https://github.com/ab14702580/Zorvique",
    },
    {
      src: "/wonderly.png",
      title: "Wanderly",
      subtitle: "Tourist Booking & Exploration Platform",
      preview: "https://wanderly-tourist.vercel.app/",
      code: "https://github.com/ab14702580/tourist-frontent",
    },
    {
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      title: "Travel & Tourism",
      subtitle: "Booking & Trip Planner Solution",
      preview: "https://wanderly-tourist.vercel.app/",
      code: "https://github.com/ab14702580/tourist-frontent",
    },
    {
      src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      title: "Portfolio Website",
      subtitle: "Modern Responsive Showcase",
      preview: "https://github.com",
      code: "https://github.com",
    },
    {
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      title: "SaaS Analytics Dashboard",
      subtitle: "Real-time Metrics & KPI Insights",
      link: "https://github.com",
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      title: "Team Collaboration Workspace",
      subtitle: "Agile Task Board & Chat System",
      link: "https://github.com",
    },
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      title: "Healthcare Portal",
      subtitle: "Doctor Appointments & Telemedicine",
      link: "https://github.com",
    },
    {
      src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
      title: "FinTech Banking App",
      subtitle: "Secure Transfers & Smart Wallets",
      link: "https://github.com",
    },
    {
      src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      title: "E-Learning Education Hub",
      subtitle: "Courses, Quizzes & Certification",
      link: "https://github.com",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      title: "Food Delivery & Restaurant",
      subtitle: "Real-time Order & Rider Tracking",
      link: "https://github.com",
    },
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      title: "Real Estate Marketplace",
      subtitle: "Property Listings & Virtual Tours",
      link: "https://github.com",
    },
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      title: "AI Creative Studio",
      subtitle: "Generative Content & Asset Creator",
      link: "https://github.com",
    },
  ];

  const [selectedProject, setSelectedProject] = React.useState(null);
  const [panelExpanded, setPanelExpanded] = React.useState(false);
  const [modalTextReady, setModalTextReady] = React.useState(false);

  React.useEffect(() => {
    let expandTimer;
    let textTimer;
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      setPanelExpanded(false);
      setModalTextReady(false);
      expandTimer = setTimeout(() => {
        setPanelExpanded(true);
      }, 180);
      textTimer = setTimeout(() => {
        setModalTextReady(true);
      }, 380);
    } else {
      document.body.style.overflow = "";
      setPanelExpanded(false);
      setModalTextReady(false);
    }
    return () => {
      document.body.style.overflow = "";
      if (expandTimer) clearTimeout(expandTimer);
      if (textTimer) clearTimeout(textTimer);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 bg-[#FBFCFD] dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#DCFCE7]/70 dark:bg-[#00A876]/20 border border-[#A7F3D0]/50 dark:border-[#00A876]/30 text-[#059669] dark:text-[#34D399] text-xs font-bold uppercase tracking-wider">
              Featured Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              <SplitText text="My Latest MERN Stack Projects" />
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              <BlurText text="Explore some of my featured full-stack projects, all developed with modern MERN Stack technologies and clean architecture." />
            </p>
          </div>
        </div>

        <div ref={carouselContainerRef} className="w-full h-[540px] sm:h-[640px] relative">
          <CircularCarousel
            items={projects}
            cardWidth={240}
            aspectRatio={16 / 10}
            gap={20}
            tilt={-15}
            curve={0.6}
            perspective={2200}
            scale={0.88}
            speed={12}
            momentum={0.65}
            pauseOnHover={true}
            focusOnClick={true}
            cornerRadius={16}
            depthFade={0.3}
            captions={true}
            inView={carouselInView}
            onCardClick={setSelectedProject}
          />
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-[94vw] sm:max-w-xl md:max-w-4xl rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch max-h-[88vh] sm:max-h-[90vh] overflow-y-auto transform-gpu animate-modal-zoom"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer z-30"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="w-full md:w-1/2 md:min-w-[50%] md:max-w-[50%] h-48 sm:h-64 md:h-auto min-h-[190px] sm:min-h-[260px] md:min-h-[440px] relative overflow-hidden shrink-0">
              <Image
                src={selectedProject.src}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>

            <div
              className={`w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-3 sm:space-y-4 overflow-hidden transform-gpu transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                panelExpanded
                  ? "opacity-100 max-h-[700px] translate-x-0"
                  : "opacity-0 max-h-0 md:max-h-full md:w-0 translate-x-4 pointer-events-none"
              }`}
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#00A876]/10 text-[#00A876] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                  Project Details
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  <SplitText
                    key={`modal-title-${selectedProject.title}`}
                    text={selectedProject.title}
                    inView={modalTextReady}
                    delay={20}
                    duration={0.4}
                  />
                </h3>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1 sm:mt-2 leading-relaxed">
                  <SplitText
                    key={`modal-sub-${selectedProject.title}`}
                    text={selectedProject.subtitle}
                    inView={modalTextReady}
                    delay={14}
                    duration={0.35}
                  />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-3 leading-relaxed">
                  <SplitText
                    key={`modal-desc-${selectedProject.title}`}
                    text="Developed with clean, modular architecture using modern full-stack web technologies. Features responsive layouts, optimized performance, and seamless user experiences."
                    inView={modalTextReady}
                    delay={8}
                    duration={0.25}
                  />
                </div>
              </div>

              <div
                className={`flex flex-wrap items-center gap-2.5 sm:gap-4 pt-3 sm:pt-4 border-t border-slate-100 dark:border-slate-800 transition-all duration-500 ${
                  modalTextReady
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none"
                }`}
              >
                <a
                  href={selectedProject.preview || selectedProject.link || "https://github.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-[#00A876] hover:bg-[#009367] text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
                <a
                  href={selectedProject.code || selectedProject.link || "https://github.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold transition-colors cursor-pointer border border-slate-200/80 dark:border-slate-700"
                >
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
