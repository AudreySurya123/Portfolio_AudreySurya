import { GraduationCap } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

const education = [{ period: "2022 - 2025", title: "Associate Degree of Informatics Engineering", place: "Universitas Sebelas Maret", gpa: "GPA: 3.76 / 4.00" }];

export function Education() {
  return (
    <section id="education" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="border-t border-white/10 pt-6"><div className="flex items-center gap-3 text-lime"><GraduationCap size={18} /><p className="section-kicker">02 / Education</p></div>
          <div className="mt-6 max-w-2xl">{education.map((item) => <div key={item.period}><p className="text-xs uppercase tracking-[0.16em] text-lime/75">{item.period}</p><h3 className="mt-2 font-display text-2xl text-white">{item.title}</h3><p className="mt-2 text-sm text-white/50">{item.place}</p><p className="mt-3 text-sm font-medium text-lime/80">{item.gpa}</p></div>)}</div>
        </div>
      </SectionReveal>
    </section>
  );
}
