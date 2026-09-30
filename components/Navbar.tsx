"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MotionLink } from "./MotionLink";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Awards", href: "#awards" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-ink/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
        <a href="#top" className="group flex items-center gap-3" aria-label="Audrey Surya home">
          <span className="grid size-8 place-items-center rounded-full bg-lime font-display text-sm font-bold text-ink transition-transform group-hover:rotate-12">AS</span>
          <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">Audrey Surya</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-bold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-lime">
              {link.label}
            </a>
          ))}
    
        </div>
        <button type="button" className="grid size-9 place-items-center rounded-full border border-white/15 text-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-ink/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-white/10 pb-4 text-sm font-bold uppercase tracking-[0.16em] text-white/80 hover:text-lime">{link.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
