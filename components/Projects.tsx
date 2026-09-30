"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, FolderKanban, Github, X } from "lucide-react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { SectionReveal } from "./SectionReveal";

const projects = [
  { 
    number: "01", 
    title: "SIPBIBU - Baby Blues Prevention System",  
    year: "2024", 
    className: "thumb-morrow", 
    tags: ["React.js", "CodeIgniter", "Bootstrap", "MySQL"], 
    techStack: ["React.js", "CodeIgniter", "Bootstrap", "MySQL"], 
    description: "A digital maternal care platform focused on the early detection and prevention of baby blues. Its screening tools are scientifically validated Antepartum and Postpartum questionnaires developed by a Universitas Indonesia academic. The platform also includes a Twitter style forum for mothers to share and support each other, guided audio-visual meditation, and online consultations with professionals.", 
    problemSolution: "Baby blues syndrome is common among new mothers, but it often goes undetected because early screening is not easily accessible. SIPBIBU was built to address this by offering validated questionnaires, a supportive community, and professional consultation. To keep a platform like this running smoothly, the team needed a reliable way for administrators to manage its content and data, along with a stable backend to support both the admin side and the user side.",
    role: "Developed the admin dashboard interface and implemented several backend features that support platform management. Wrote and tested RESTful API endpoints using Postman to make sure data flowed correctly and reliably between the backend and the application.",
    photos: ["/projects/sipbibu1.webp", "/projects/sipbibu2.webp", "/projects/sipbibu3.webp", "/projects/sipbibu4.webp", "/projects/sipbibu5.webp"], 
    github: "https://github.com/AudreySurya123/FE_SIPBIBU", 
    demo: "https://sipbibu.tifpsdku.com/beranda" 
  },
  { 
    number: "02", 
    title: "PT KAI Inventory Catalog System", 
    year: "2025", 
    className: "thumb-nori", 
    tags: ["Laravel", "Bootstrap", "MySQL"], 
    techStack: ["Laravel", "Bootstrap", "MySQL"], 
    description: "A Laravel-based inventory management system for tracking items, managing stock, and generating reports. It provides a clear and structured way to record and monitor equipment data, complete with PDF and Excel export for reporting needs.", 
    problemSolution: "PT KAI Daop 7 Madiun did not have a system to record and manage its equipment and inventory data, making it difficult to track item availability, monitor stock, and generate accurate reports. To solve this, I built a Laravel-based inventory management system that centralizes equipment data, stock tracking, and reporting in one place, complete with PDF and Excel export features to make sharing reports easier for the team.",
    role: "Handled the project end-to-end, including API design and testing, frontend and backend development, database structuring, and building the core business logic for inventory and stock management.",
    photos: ["/projects/kai1.webp", "/projects/kai2.webp", "/projects/kai3.webp", "/projects/kai4.webp", "/projects/kai5.webp", "/projects/kai6.webp", "/projects/kai7.webp"], 
    github: "https://github.com/AudreySurya123/Katalog-Barang", 
    demo: "https://katalogbarang.tifpsdku.com/login" 
  },
  { 
    number: "03", 
    title: "ExamVision - Online Exam Proctoring Application",  
    year: "2025", 
    className: "thumb-field", 
    tags: ["Flask", "MysQL", "Yolov11", "Roboflow", "Google Colab"], 
    techStack: ["Flask", "MySQL", "Yolov11", "Roboflow", "Google Colab"], 
    description: "Online exam system with YOLOv11 integration for real-time cheating detection and exam session management. It helps institutions monitor exam sessions automatically, flagging suspicious behavior as it happens instead of relying on manual supervision alone.", 
    problemSolution: "Online exams are prone to cheating, as students can easily exploit the lack of direct, in-person supervision. ExamVision was built to address this by integrating YOLOv11, a real-time object detection model, to automatically monitor exam sessions. Whenever suspicious behavior is detected, the system captures a screenshot and labels it with the type of violation detected, giving proctors clear, documented evidence to review without needing to watch every session manually.",
    role: "Managed the end-to-end AI model development pipeline, from building and annotating the dataset in Roboflow to training the YOLOv11 model in Google Colab for real-time cheating detection. Additionally, developed the admin dashboard, lecturer portal, and student page, enabling seamless exam session management, and result reviews across all three user roles.",
    photos: ["/projects/ujian1.webp", "/projects/ujian2.webp", "/projects/ujian3.webp", "/projects/ujian4.webp", "/projects/ujian5.webp"], 
    github: "https://github.com/AudreySurya123/ExamVision", 
    demo: "https://examvision.tifpsdku.com/" 
  },
  { 
    number: "04", 
    title: "LSP Perhutani - Lembaga Sertifikasi Profesi", 
    year: "2026", 
    className: "thumb-morrow", 
    tags: ["Laravel", "Tailwind CSS", "MySQL"], 
    techStack: ["Laravel", "Tailwind CSS", "MySQL"], 
    description: "A web-based certification management system for handling participant registration, assessments, certification workflows, and reporting processes. It supports the end-to-end certification process at Perhutani, from participant (asesi) registration and data verification, assessor management, and assessment execution, to document uploads and the preparation of certification result reports, all in one integrated platform.",
    problemSolution: "LSP Perhutani did not yet have its own website and relied on a third-party platform to support its competency certification process. This created limitations in system management and development, particularly around feature flexibility, control over data, and adapting the system to the organization's internal operational needs. Relying on an external system also introduced risks to data security and consistency in managing certification records. To address this, a dedicated web-based certification management system was built to replace the third-party platform, giving Perhutani full ownership and control over its certification data and processes, from participant registration and assessment to reporting.",
    role: "Prepared key project documentation, including the SRS (Software Requirements Specification), BRD (Business Requirements Document), CBA (Cost-Benefit Analysis), and Project Charter. Also rebuilt the website from the ground up, replicating the third-party platform's existing functionality into a new, independently owned system.",
    photos: ["/projects/lsp1.webp", "/projects/lsp2.webp", "/projects/lsp3.webp", "/projects/lsp4.webp", "/projects/lsp5.webp"], 
    github: "https://github.com/AudreySurya123/LSP-Perhutani", 
    demo: null 
  },
  { 
    number: "05", 
    title: "Bawang Nusantara - Garlic Product Landing Page", 
    year: "2026", 
    className: "thumb-nori", 
    tags: ["Next.js", "Tailwind CSS"], 
    techStack: ["Next.js", "Tailwind CSS"], 
    description: "A modern landing page for Bawang Nusantara garlic products, featuring product showcases and integrated WhatsApp chat for direct ordering. It gives the business a simple, professional online presence to help customers discover the products and order directly with just a few clicks.", 
    problemSolution: "Bawang Nusantara did not have a website to promote and sell its products online, limiting its reach to customers beyond word of mouth and offline sales. To address this, I built a modern landing page that showcases the products clearly and integrates a direct WhatsApp chat feature, making it easy for potential customers to browse and place orders instantly, with the goal of increasing sales and reach.",
    role: "Designed and developed the landing page user interface, focusing on a clean, modern layout with clear product showcases and a seamless WhatsApp integration for direct ordering.",
    photos: ["/projects/bawang1.webp", "/projects/bawang2.webp", "/projects/bawang3.webp", "/projects/bawang4.webp", "/projects/bawang5.webp"], 
    github: "https://github.com/AudreySurya123/bawang-nusantara", 
    demo: "https://bawang-nusantara.vercel.app/" 
  },
  { 
    number: "06", 
    title: "Habitmu - Habit Tracking Web Application", 
    year: "2026", 
    className: "thumb-nori", 
    tags: ["Next.js", "Golang", "Tailwind CSS", "PostgreSQL"], 
    techStack: ["Next.js", "Golang", "Tailwind CSS", "PostgreSQL"], 
    description: "A habit tracking web application with a Neobrutalism-styled interface. It offers JWT-based authentication, full habit management (CRUD), a daily check-in system with automatic validation, streak and progress statistics, and an interactive calendar to review habit history by date.", 
    problemSolution: "Many people struggle to stay consistent with habits due to a lack of simple, motivating ways to track their progress. Habitmu was built to solve this by letting users manage their habits, check in daily with built-in validation, and monitor progress through streaks and statistics, along with an interactive calendar to review their history.",
    role: "Developed the application end-to-end, covering the Neobrutalism UI/UX design, JWT-based authentication, complete habit CRUD operations, automated daily check-ins, logic for streak calculations, and an interactive history calendar.",
    photos: ["/projects/habit1.webp", "/projects/habit2.webp", "/projects/habit3.webp"], 
    github: "https://github.com/AudreySurya123/FE_Habitmu", 
    demo: null 
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const detailsScrollRef = useRef<HTMLDivElement>(null);
  const selected = selectedProject === null ? null : projects[selectedProject];

  useLayoutEffect(() => {
    if (selectedProject === null || !galleryRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const panel = galleryRef.current?.querySelector("[data-gallery-panel]");
      gsap.fromTo(galleryRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, ease: "power2.out" });
      if (panel) gsap.fromTo(panel, { autoAlpha: 0, y: 28, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.65, ease: "power3.out" });
    }, galleryRef.current);

    return () => context.revert();
  }, [selectedProject]);

  useEffect(() => {
    const detailsScroll = detailsScrollRef.current;
    if (!selected || !detailsScroll || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      wrapper: detailsScroll,
      content: detailsScroll,
      autoRaf: false,
      smoothWheel: true,
    });
    const update = (time: number) => lenis.raf(time * 1000);

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, [selected]);

  useEffect(() => {
    if (!selected) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const openProject = (index: number) => {
    setActivePhoto(0);
    setSelectedProject(index);
  };

  const showPrevious = () => {
    if (!selected) return;
    setActivePhoto((current) => (current - 1 + selected.photos.length) % selected.photos.length);
  };

  const showNext = () => {
    if (!selected) return;
    setActivePhoto((current) => (current + 1) % selected.photos.length);
  };

  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-5">
          <div>
            <div className="flex items-center gap-3 text-lime">
              <FolderKanban size={18} />
              <p className="section-kicker">07 / Projects</p>
            </div>
            <h2 className="mt-5 font-display text-4xl tracking-tight text-white sm:text-5xl">A few things I&apos;ve made.</h2>
          </div>
        </div>
        
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button 
              key={project.title} 
              type="button" 
              onClick={() => openProject(index)} 
              whileHover={{ scale: 1.02 }} 
              transition={{ type: "spring", stiffness: 300, damping: 25 }} 
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-3 text-left shadow-glow transition-colors hover:border-white/20"
            >
              <div className={`project-thumb relative w-full aspect-video overflow-hidden rounded-xl ${project.className}`}>
                <img 
                  src={project.photos[0]} 
                  alt={project.title} 
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-100 grayscale transition-[filter,transform] duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105" 
                  onError={(event) => { event.currentTarget.style.display = "none"; }} 
                />
                <span className="absolute left-4 top-4 z-20 font-mono text-xs text-white/55">
                  {project.number}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-3 pb-2 pt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl text-white transition-colors group-hover:text-lime line-clamp-2">
                      {project.title}
                    </h3>
                    {/* Menggunakan project.description di sini agar paragrafnya muncul di card seperti kode awal Anda */}
                    <p className="mt-1 text-sm text-white/45 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-xs text-white/35 shrink-0">
                    {project.year}
                  </span>
                </div>
                
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/45 transition-colors group-hover:border-white/20 group-hover:text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-colors group-hover:border-lime group-hover:text-lime">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </SectionReveal>

      {selected && (
        <div 
          ref={galleryRef} 
          className="fixed inset-0 z-[60] grid place-items-center overflow-hidden overscroll-none bg-ink/90 p-3 backdrop-blur-md sm:p-5" 
          role="dialog" 
          aria-modal="true" 
          aria-label={`${selected.title} project details`} 
          onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}
        >
          <div data-gallery-panel className="relative grid max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl grid-rows-[auto_minmax(0,1fr)] gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#10151a] p-3 shadow-2xl sm:max-h-[calc(100dvh-2.5rem)] sm:gap-8 sm:p-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,.9fr)] lg:grid-rows-1 lg:p-8">
            <button type="button" onClick={(event) => { event.stopPropagation(); setSelectedProject(null); }} className="absolute right-4 top-4 z-30 grid size-9 place-items-center rounded-full border border-white/15 bg-ink/90 text-white transition-colors hover:border-lime hover:text-lime" aria-label="Close project details"><X size={18} /></button>
            
            {/* Bagian Kiri: Gambar */}
            <div>
              <div className={`project-thumb aspect-[1.6] sm:aspect-[1.3] ${selected.className}`}>
                <img src={selected.photos[activePhoto]} alt={`${selected.title} screenshot ${activePhoto + 1}`} className="relative z-10 size-full object-contain object-center bg-black/20 rounded-lg" onError={(event) => { event.currentTarget.style.display = "none"; }} />
                <span className="absolute left-4 top-4 z-20 font-mono text-xs text-white/70">{selected.number} / {activePhoto + 1}</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button type="button" onClick={showPrevious} className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:text-lime" aria-label="Previous project photo"><ChevronLeft size={20} /></button>
                <div className="flex gap-2 flex-wrap justify-center mx-4">
                  {selected.photos.map((photo, index) => <button key={photo} type="button" onClick={() => setActivePhoto(index)} className={`size-2.5 rounded-full ${index === activePhoto ? "bg-lime" : "bg-white/25"}`} aria-label={`Show photo ${index + 1}`} />)}
                </div>
                <button type="button" onClick={showNext} className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:text-lime" aria-label="Next project photo"><ChevronRight size={20} /></button>
              </div>
            </div>

            {/* Bagian Kanan: Teks & Detail (Scrollable) */}
            <div className="flex min-h-0 flex-col">
            <div 
              ref={detailsScrollRef}
              className="custom-scrollbar min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2 lg:pr-4"
              onWheel={(e) => e.stopPropagation()} 
              onTouchMove={(e) => e.stopPropagation()}
            >
              <h3 className="mt-4 font-display text-4xl text-white sm:text-5xl">{selected.title}</h3>
              <div className="mt-8 space-y-8">
                {/* Deskripsi */}
                {selected.description && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40 mb-3">Description</p>
                    <p className="text-sm leading-relaxed text-white/80">{selected.description}</p>
                  </div>
                )}

                {/* Problem & Solution */}
                {selected.problemSolution && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40 mb-3">Problem & Solution</p>
                    <p className="text-sm leading-relaxed text-white/80">{selected.problemSolution}</p>
                  </div>
                )}

                {/* My Role */}
                {selected.role && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40 mb-3">My Role</p>
                    <p className="text-sm leading-relaxed text-white/80">{selected.role}</p>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Tech stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.techStack.map((technology) => <span key={technology} className="rounded-full border border-lime/25 px-3 py-1.5 text-xs text-lime/85">{technology}</span>)}
                </div>
              </div>

            </div>

              <div className="mt-3 flex shrink-0 flex-wrap gap-3 border-t border-white/10 pt-3 sm:mt-5 sm:pt-4">
                <a href={selected.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-lime hover:text-lime"><Github size={16} />GitHub repo</a>
                {selected.demo && <a href={selected.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-lime px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-white"><ExternalLink size={16} />Live demo</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}