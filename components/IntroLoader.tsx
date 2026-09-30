"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export function IntroLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const loader = loaderRef.current;
    const progress = progressRef.current;
    if (!loader || !progress) return;

    const counter = { value: 0 };
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          setVisible(false);
        },
      });

      timeline.to(counter, {
        value: 100,
        duration: 1.7,
        ease: "power2.inOut",
        onUpdate: () => {
          progress.textContent = `${Math.round(counter.value)}`;
        },
      });
      timeline.to(loader.querySelector("[data-intro-copy]"), { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" }, "-=0.2");
      timeline.to(loader, { yPercent: -100, duration: 0.85, delay: 0.7, ease: "power4.inOut" });
    }, loader);

    return () => context.revert();
  }, []);

  if (!visible) return null;

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink p-6 text-white sm:p-10 lg:p-16" aria-live="polite" aria-label="Loading portfolio">
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-white/45">
        <span>AS / Portfolio</span>
        <span><span ref={progressRef}>0</span>%</span>
      </div>
      <div data-intro-copy className="translate-y-5 opacity-0">
        <p className="max-w-3xl font-display text-4xl leading-[0.95] sm:text-6xl lg:text-8xl">Hello everyone, I&apos;m <span className="text-lime">Audrey Surya Nanditama Hernanto.</span></p>
      </div>
      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/35"><span className="h-px w-16 bg-lime" /> Building useful digital experiences</div>
    </div>
  );
}
