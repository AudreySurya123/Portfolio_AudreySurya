"use client";

import { useLayoutEffect, useRef } from "react";
import { BriefcaseBusiness } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionReveal } from "./SectionReveal";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  { period: "Feb 2024 - Jun 2024", role: "Fullstack Web Developer Intern", company: "PT Garapan Indonesia Sukses", text: "Designed and developed a full-stack web platform using CodeIgniter and React.js to support mental wellness among new mothers. The system empowers users to prevent baby blues through personalized questionnaires, virtual consultations, and interactive learning content." },
  { period: "Aug 2024 - Dec 2024", role: "Fullstack Web Developer Intern", company: "PT Garapan Indonesia Sukses", text: "Developed an online exam proctoring website using Flask and YOLOv8 technology for real-time cheating detection via webcam. Built the system into a standalone executable (.exe) application to enhance accessibility and ease of deployment." },
  { period: "Dec 2024 - Feb 2025", role: "Software Developer Intern", company: "PT KAI Indonesia", text: "Developed a web-based inventory catalog system using Laravel 10 and MySQL as the database. Implemented CRUD features, stock management, and export functionalities for item reports (PDF/XLSX). Collaborated with the IT team to improve backend performance and enhance the admin dashboard with responsive UI and data visualization." },
  { period: "Nov 2025 - May 2026", role: "Software Developer Intern", company: "Perum Perhutani", text: "Developed a web-based Lembaga Sertifikasi Profesi (LSP) to streamline certification management and assessment processes. Implemented secure authentication, role-based access control, and certification workflow modules. Designed and maintained relational databases to ensure data integrity and efficient data retrieval. Conducted testing, debugging, and performance optimization to enhance system reliability and user experience." },
];

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const items = timeline.querySelectorAll<HTMLElement>("[data-experience-item]");

      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timeline,
            start: "top 76%",
            once: true,
          },
        },
      );
    }, timeline);

    return () => context.revert();
  }, []);

  return (
    <section id="experience" className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <SectionReveal className="mx-auto max-w-7xl"><div className="border-t border-white/10 pt-6"><div className="flex items-center gap-3 text-lime"><BriefcaseBusiness size={18} /><p className="section-kicker">04 / Experience</p></div>
        <div ref={timelineRef} className="relative mt-10 pl-8 sm:pl-12">
          <div className="absolute bottom-2 left-2 top-2 w-px bg-lime/25 sm:left-4" aria-hidden="true" />
          <div className="space-y-12">
            {experience.map((item) => <article key={`${item.period}-${item.role}`} data-experience-item className="relative">
              <span className="absolute -left-[2.05rem] top-1.5 size-2.5 rounded-full bg-lime shadow-[0_0_0_5px_rgba(190,242,100,0.12)] sm:-left-[2.05rem]" aria-hidden="true" />
              <p className="text-xs uppercase tracking-[0.16em] text-lime/75">{item.period}</p>
              <h3 className="mt-2 font-display text-2xl text-white">{item.role}</h3>
              <p className="mt-1 text-sm text-white/45">{item.company}</p>
              <p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p>
            </article>)}
          </div>
        </div>
      </div></SectionReveal>
    </section>
  );
}
