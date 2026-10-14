import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiBootstrap,
  SiPython,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

export default function SkillsSection() {
  const skills = [
    {
      name: "React JS",
      icon: <SiReact className="w-7 h-7 text-[#00D8FF]" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-7 h-7 text-[#F7DF1E] bg-black rounded-xs" />,
    },
    {
      name: "HTML",
      icon: <SiHtml5 className="w-7 h-7 text-[#E34F26]" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="w-7 h-7 text-[#1572B6]" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-7 h-7 text-[#5FA04E]" />,
    },
    {
      name: "Express JS",
      icon: <SiExpress className="w-7 h-7 text-slate-800 dark:text-slate-200" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-7 h-7 text-[#47A248]" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="w-7 h-7 text-[#7952B3]" />,
    },
    {
      name: "Python",
      icon: <SiPython className="w-7 h-7 text-[#3776AB]" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="w-7 h-7 text-[#FFA000]" />,
    },
    {
      name: "Git",
      icon: <SiGit className="w-7 h-7 text-[#F05032]" />,
    },
    {
      name: "VS Code",
      icon: <VscVscode className="w-7 h-7 text-[#007ACC]" />,
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#FAFDFC] dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E6F7F2] dark:bg-[#00A876]/20 text-[#00A876] text-xs font-semibold tracking-wide">
            My Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tools &amp; Technologies I Work With
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            I work with modern technologies to build responsive, scalable and high-performance web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70 hover:border-[#00A876]/40 dark:hover:border-[#00A876]/60 rounded-2xl p-5 flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] dark:bg-slate-900 group-hover:bg-[#E6F7F2]/60 dark:group-hover:bg-[#00A876]/20 flex items-center justify-center mb-3 transition-colors cursor-pointer">
                {skill.icon}
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
