"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Award, ChevronLeft, ChevronRight, X } from "lucide-react";
import gsap from "gsap";
import { SectionReveal } from "./SectionReveal";

const award = {
  title: "Olimpiade Vokasi 2024",
  description:
    "Achieved 3rd Place in the Web Technologies category at a prestigious competition for vocational students across Indonesia, organized by the Forum Pendidikan Tinggi Vokasi Indonesia (FPTVI) in Makassar.",
  photos: [
    "/awards/olimpiade-vokasi-2024-1.jpg",
    "/awards/olimpiade-vokasi-2024-2.jpg",
  ],
};

export function Awards() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!galleryOpen || !galleryRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const panel = galleryRef.current?.querySelector("[data-gallery-panel]");
      gsap.fromTo(galleryRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, ease: "power2.out" });
      if (panel) gsap.fromTo(panel, { autoAlpha: 0, y: 28, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.65, ease: "power3.out" });
    }, galleryRef.current);

    return () => context.revert();
  }, [galleryOpen]);

  useEffect(() => {
    if (!galleryOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGalleryOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [galleryOpen]);

  const openGallery = () => {
    setActivePhoto(0);
    setGalleryOpen(true);
  };

  const showPrevious = () => {
    setActivePhoto((current) => (current - 1 + award.photos.length) % award.photos.length);
  };

  const showNext = () => {
    setActivePhoto((current) => (current + 1) % award.photos.length);
  };

  return (
    <section id="awards" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="border-t border-white/10 pt-6">
          <div className="flex items-center gap-3 text-lime">
            <Award size={18} />
            <p className="section-kicker">05 / Awards</p>
          </div>
          <div className="mt-6 grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12">
            <button
              type="button"
              onClick={openGallery}
              className="group w-full text-left transition-colors"
              aria-haspopup="dialog"
              aria-label={`Open photos for ${award.title}`}
            >
              <div className="flex items-start gap-3">
                <Award className="mt-1 shrink-0 text-aqua" size={17} />
                <div className="w-full">
                  <h3 className="font-display text-2xl text-white transition-colors group-hover:text-lime">{award.title}</h3>
                  <p className="mt-3 w-full text-sm leading-6 text-white/65">{award.description}</p>
                  <span className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.16em] text-lime/75">View photos</span>
                </div>
              </div>
            </button>
            <div className="border-l border-lime/30 pl-5 lg:pt-1">
              <p className="font-display text-5xl leading-none text-lime">3rd</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/55">Place</p>
              <div className="mt-6 space-y-2 text-xs uppercase tracking-[0.14em] text-white/45">
                <p>Web Technologies</p>
                <p>FPTVI · Makassar</p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      {galleryOpen && (
        <div
          ref={galleryRef}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-5 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${award.title} photos`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setGalleryOpen(false);
          }}
        >
          <div data-gallery-panel className="relative w-full max-w-4xl">
            <button type="button" onClick={() => setGalleryOpen(false)} className="absolute -right-2 -top-12 grid size-9 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:text-lime" aria-label="Close photos">
              <X size={18} />
            </button>
            <div className="overflow-hidden border border-white/10 bg-black/30">
              <img
                src={award.photos[activePhoto]}
                alt={`${award.title} photo ${activePhoto + 1}`}
                className="max-h-[72vh] w-full object-contain"
                onError={(event) => {
                  event.currentTarget.src = "/profile-placeholder.svg";
                }}
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-white">
              <button type="button" onClick={showPrevious} className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-lime hover:text-lime" aria-label="Previous photo">
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs uppercase tracking-[0.16em] text-white/50">{activePhoto + 1} / {award.photos.length}</span>
              <button type="button" onClick={showNext} className="grid size-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-lime hover:text-lime" aria-label="Next photo">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
