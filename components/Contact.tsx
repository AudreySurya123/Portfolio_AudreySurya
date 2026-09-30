"use client";

import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { FormEvent } from "react";
import { SectionReveal } from "./SectionReveal";
import { MotionLink } from "./MotionLink";

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:audreysurya16@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-6 pb-10 pt-12 sm:px-10 lg:px-16">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-lime/20 bg-lime p-6 sm:p-10 lg:p-14">
          <div className="absolute -right-16 -top-20 size-72 rounded-full border-[50px] border-ink/10" aria-hidden="true" />
          <div className="flex items-center gap-3 text-ink/70"><Mail size={18} /><p className="section-kicker text-ink/60">08 / Contact</p></div>
          <div className="relative mt-10 grid gap-12 lg:grid-cols-[minmax(0,.85fr)_minmax(24rem,1.15fr)] lg:items-start lg:gap-16">
            <div>
              <h2 className="max-w-xl font-display text-5xl leading-[0.95] tracking-[-0.04em] text-ink sm:text-6xl">Have a good idea?<br /><span className="text-ink/50">Let&apos;s make it real.</span></h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-ink/65">Tell me a little about what you are building, and I&apos;ll get back to you soon.</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="https://github.com/AudreySurya123" target="_blank" rel="noreferrer" aria-label="Audrey on GitHub" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-white"><Github size={16} />GitHub</a>
                <a href="https://www.linkedin.com/in/audreysurya/" target="_blank" rel="noreferrer" aria-label="Audrey on LinkedIn" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-white"><Linkedin size={16} />LinkedIn</a>
              </div>
              <MotionLink href="mailto:audreysurya16@gmail.com" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-ink/60">audreysurya16@gmail.com <ArrowUpRight size={17} /></MotionLink>
            </div>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-ink p-5 shadow-2xl sm:p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/45">Name<input required name="name" type="text" placeholder="Your name" className="border-b border-white/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/25 focus:border-lime" /></label>
                <label className="grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/45">Email<input required name="email" type="email" placeholder="you@example.com" className="border-b border-white/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/25 focus:border-lime" /></label>
              </div>
              <label className="mt-6 grid gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/45">Message<textarea required name="message" rows={5} placeholder="Tell me about your project..." className="resize-none border-b border-white/20 bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/25 focus:border-lime" /></label>
              <button type="submit" className="mt-7 inline-flex items-center gap-3 bg-lime px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-white"><Send size={16} />Send message</button>
            </form>
          </div>
        </div>
        <footer className="flex flex-col justify-between gap-4 py-7 text-xs text-white/35 sm:flex-row"><span>© 2026 Audrey Surya</span><span>Designed & built with intention.</span></footer>
      </SectionReveal>
    </section>
  );
}
