import { SKILLS } from "../data";
import SkillBar from "./SkillBar";

export default function Skills() {
  return (
    <section id="skills" className="flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-2 text-4xl font-extrabold">Skills</h2>
        <p className="mb-8 text-white/75">Hover over a skill to see it light up.</p>
        <div className="grid gap-5 sm:grid-cols-2">
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
