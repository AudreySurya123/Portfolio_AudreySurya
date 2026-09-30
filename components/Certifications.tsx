"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, X } from "lucide-react";
import gsap from "gsap";
import { SectionReveal } from "./SectionReveal";

const certifications = [
  {
    name: "Programmer Certification from BNSP",
    validFrom: "May 2025",
    validUntil: "May 2028",
    photos: ["/certifications/Programmer1.jpg", "/certifications/Programmer2.jpg"],
  },
  {
    name: "Menjadi Front-End Web Developer Expert from Dicoding",
    validFrom: "Jan 2025",
    validUntil: "Jan 2028",
    photos: ["/certifications/FE1.jpg", "/certifications/FE2.jpg", "/certifications/FE3.jpg"],
  },
  {
    name: "Belajar Dasar AI from Dicoding",
    validFrom: "Des 2024",
    validUntil: "Des 2027",
    photos: ["/certifications/AI1.jpg", "/certifications/AI2.jpg"],
  },
  {
    name: "Memulai Pemrograman dengan Python from Dicoding",
    validFrom: "Des 2024",
    validUntil: "Des 2027",
    photos: ["/certifications/Python1.jpg", "/certifications/Python2.jpg", "/certifications/Python3.jpg"],
  },
  {
    name: "Internship Certificate from Maganghub Kemnaker Batch 2",
    validFrom: "May 2026",
    photos: ["/certifications/Maganghub.jpg"],
    hasValidity: false,
  },
];

export function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<number | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const selected = selectedCertification === null ? null : certifications[selectedCertification];

  useLayoutEffect(() => {
    if (selectedCertification === null || !galleryRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const panel = galleryRef.current?.querySelector("[data-gallery-panel]");
      gsap.fromTo(galleryRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, ease: "power2.out" });
      if (panel) gsap.fromTo(panel, { autoAlpha: 0, y: 28, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.65, ease: "power3.out" });
    }, galleryRef.current);

    return () => context.revert();
  }, [selectedCertification]);

  useEffect(() => {
    if (!selected) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCertification(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const openGallery = (index: number) => {
    setActivePhoto(0);
    setSelectedCertification(index);
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
    <section id="certifications" className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="border-t border-white/10 pt-6">
          <div className="flex items-center gap-3 text-lime">
            <BadgeCheck size={18} />
            <p className="section-kicker">06 / Certifications</p>
          </div>
          <div className="mt-6 w-full space-y-10">
            {certifications.map((certification, index) => (
              <button
                key={certification.name}
                type="button"
                onClick={() => openGallery(index)}
                className="group w-full border-b border-white/10 pb-8 text-left transition-colors hover:border-lime/60"
                aria-haspopup="dialog"
                aria-label={`Open photos for ${certification.name}`}
              >
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-1 shrink-0 text-aqua" size={17} />
                  <div className="w-full">
                    <h3 className="font-display text-2xl text-white transition-colors group-hover:text-lime">{certification.name}</h3>
                    {certification.hasValidity === false ? null : (
                      <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/50">
                        <span>Valid {certification.validFrom} - {certification.validUntil}</span>
                      </div>
                    )}
                    <span className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.16em] text-lime/75">View photos</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </SectionReveal>

      {selected && (
        <div ref={galleryRef} className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-5 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`${selected.name} photos`} onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedCertification(null);
        }}>
          <div data-gallery-panel className="relative w-full max-w-4xl">
            <button type="button" onClick={() => setSelectedCertification(null)} className="absolute -right-2 -top-12 grid size-9 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:text-lime" aria-label="Close photos">
              <X size={18} />
            </button>
            <div>
              <div className="overflow-hidden border border-white/10 bg-black/30">
                <img src={selected.photos[activePhoto]} alt={`${selected.name} photo ${activePhoto + 1}`} className="max-h-[72vh] w-full object-contain" onError={(event) => {
                  event.currentTarget.src = "/profile-placeholder.svg";
                }} />
              </div>
              <div className="mt-4 flex items-center justify-between text-white">
                <button type="button" onClick={showPrevious} className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-lime hover:text-lime" aria-label="Previous photo"><ChevronLeft size={20} /></button>
                <span className="text-xs uppercase tracking-[0.16em] text-white/50">{activePhoto + 1} / {selected.photos.length}</span>
                <button type="button" onClick={showNext} className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-lime hover:text-lime" aria-label="Next photo"><ChevronRight size={20} /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
