import { Code2, Database, Globe2, Palette, Server, Wrench } from "lucide-react";
import type { IconType } from "react-icons";
import { SiCodeigniter, SiExpress, SiFigma, SiFlask, SiGit, SiJavascript, SiLaravel, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPostman, SiPostgresql, SiPython, SiReact, SiTailwindcss, SiTypescript, SiSqlite, SiBootstrap, SiVuedotjs, SiGo } from "react-icons/si";
import { SectionReveal } from "./SectionReveal";

const skillGroups: { title: string; icon: IconType; skills: { name: string; icon: IconType }[] }[] = [
  { title: "Languages", icon: Code2, skills: [{ name: "TypeScript", icon: SiTypescript }, { name: "JavaScript", icon: SiJavascript }, { name: "PHP", icon: SiPhp }, { name: "Python", icon: SiPython }] },
  { title: "Frontend", icon: Globe2, skills: [{ name: "React.js", icon: SiReact }, { name: "Vue.js", icon: SiVuedotjs }, { name: "Next.js", icon: SiNextdotjs }, { name: "Tailwind CSS", icon: SiTailwindcss }, { name: "Bootstrap", icon: SiBootstrap },] },
  { title: "Backend", icon: Server, skills: [{ name: "Node.js", icon: SiNodedotjs }, { name: "Express", icon: SiExpress }, { name: "CodeIgniter", icon: SiCodeigniter }, { name: "Laravel", icon: SiLaravel }, { name: "Flask", icon: SiFlask }, { name: "Golang", icon: SiGo }] },
  { title: "Database", icon: Database, skills: [{ name: "MySQL", icon: SiMysql }, { name: "PostgreSQL", icon: SiPostgresql }, { name: "SQLite", icon: SiSqlite }] },
  { title: "Design", icon: Palette, skills: [{ name: "Figma", icon: SiFigma }] },
  { title: "Tools", icon: Wrench, skills: [{ name: "Git", icon: SiGit }, { name: "Postman", icon: SiPostman }] },
];

export function Skills() {
  return (
    <section id="skills" className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 text-lime">
          <Code2 size={18} />
          <p className="section-kicker">03 / Skills</p>
        </div>
        
        {/* Class max-w-xl dihapus pada baris di bawah ini */}
        <h2 className="mt-5 font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">
          Tools for turning ideas into useful products.
        </h2>
        
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: GroupIcon, skills }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-lime/40 hover:bg-white/[0.06]">
              <div className="flex items-center gap-3 text-lime">
                <GroupIcon size={20} />
                <h3 className="font-display text-lg text-white">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map(({ name, icon: SkillIcon }) => (
                  <span key={name} className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-xs font-semibold text-white/65 transition-colors hover:border-lime hover:text-lime">
                    <SkillIcon size={14} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}