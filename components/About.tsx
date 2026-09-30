import { Code2, Layers3, UserRound, WandSparkles } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const principles = [
  { icon: Code2, title: "Built with care", text: "Thoughtful code, accessible defaults, and details that hold up beyond the first impression." },
  { icon: Layers3, title: "Clear by design", text: "I make space for the important idea, then shape the interface around it." },
  { icon: WandSparkles, title: "Always curious", text: "The best work lives at the intersection of craft, context, and a little experimentation." },
];

export function About() {
  return (
    <section id="about" className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><div className="flex items-center gap-3 text-lime"><UserRound size={18} /><p className="section-kicker">01 / About</p></div><h2 className="mt-5 max-w-sm font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">The story behind the code.</h2></div>
          <div><p className="max-w-2xl text-xl leading-9 text-white/70 sm:text-2xl">I'm Audrey Surya Nanditama Hernanto, an Informatics Engineering graduate from Universitas Sebelas Maret with a strong interest in website development, machine learning, and artificial intelligence. I enjoy turning ideas into functional applications, and I'm always excited to explore how AI can make software smarter and more meaningful.</p><div className="mt-12 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">{principles.map(({ icon: Icon, title, text }) => <div key={title}><Icon className="text-lime" size={22} strokeWidth={1.5} /><h3 className="mt-5 font-display text-lg text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-white/45">{text}</p></div>)}</div></div>
        </div>
      </SectionReveal>
    </section>
  );
}
