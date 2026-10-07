const FOCUS = [
  ["Responsive websites", "Layouts that adapt from phone to desktop."],
  ["React apps", "Reusable components and clear state."],
  ["Interface polish", "Hover states, motion, and details that feel good."],
];

export default function About() {
  return (
    <section id="about" className="flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-8 text-4xl font-extrabold">About Me</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-purple-950/50 p-8 backdrop-blur">
            <p className="leading-relaxed text-white/85">
              I'm John Rey Hautea Balsomo, a student from Western Institution of technology, and I have a dream to become a Frontend Developer. I have a passion for creating beautiful, functional websites and applications. I enjoy learning new technologies and improving my skills.
            </p>
            <p className="mt-4 leading-relaxed text-white/85">
              When I'm not coding, I'm learning something new, working on side projects, or improving
              past ones and i joy listening to music while doing some work.
            </p>
          </div>
          <ul className="space-y-4">
            {FOCUS.map(([title, text]) => (
              <li
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:translate-x-2 hover:border-fuchsia-400/60 hover:bg-white/10"
              >
                <p className="font-bold">{title}</p>
                <p className="text-white/70">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
