"use client";

import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MotionLink } from "./MotionLink";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[720px] items-end overflow-hidden px-6 pb-20 pt-40 sm:min-h-[800px] sm:px-10 lg:px-16">
      <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-lime/10 blur-[110px]" aria-hidden="true" />
      <div className="absolute -right-32 top-48 size-[300px] rounded-full border border-aqua/10" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl items-end gap-14 lg:grid-cols-[1fr_0.38fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl">
          <motion.div variants={item} className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-lime"><Sparkles size={15} /> Informatics Engineering Graduate</motion.div>
          <motion.h1 variants={item} className="max-w-5xl font-display text-[clamp(3.2rem,8vw,7rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white">Turning ideas into <span className="text-lime">working code.</span></motion.h1>
          <motion.div variants={item} className="mt-10 flex flex-col justify-between gap-8 border-t border-white/15 pt-7 sm:flex-row sm:items-end">
            <p className="max-w-md text-base leading-7 text-white/60 sm:text-lg">Informatics Engineering graduate with a strong passion for web development, dedicated to building reliable and user-friendly applications.</p>
            <div className="flex flex-wrap gap-3">
              <MotionLink href="#projects" className="flex items-center gap-3 rounded-full bg-lime px-5 py-3 text-sm font-bold text-ink transition-colors hover:bg-white">See my work <ArrowDownRight size={17} /></MotionLink>
              <MotionLink href="/CV_Audrey Surya Nanditama Hernanto.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:border-lime hover:text-lime">Download CV <ArrowUpRight size={17} /></MotionLink>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-lime/10 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/20 bg-white/[0.06] p-2 shadow-2xl shadow-black/30 backdrop-blur-md">
            <div className="absolute inset-2 flex items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-lime/25 via-white/10 to-aqua/20 font-display text-7xl text-white/80" aria-hidden="true">AS</div>
            <Image
              src="/Surya.jpg"
              alt="Portrait of Audrey Surya"
              fill
              priority
              className="rounded-[1.25rem] object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105"
              sizes="(min-width: 1024px) 28vw, 280px"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
            <div className="pointer-events-none absolute inset-2 rounded-[1.25rem] border border-white/15" />
          </div>
          <p className="mt-4 text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/35">Portrait / Audrey Surya</p>
        </motion.div>
        <div className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/35"><span className="h-px w-12 bg-white/20" /> Scroll to explore</div>
      </div>
    </section>
  );
}
