import { useEffect, useRef, useState } from "react";

export default function SkillBar({ name, level, delay = 0 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        const duration = 1400;
        let start;
        const tick = (t) => {
          if (start === undefined) start = t + delay;
          const p = Math.min(Math.max((t - start) / duration, 0), 1);
          setValue(Math.round(level * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [level, delay]);

  return (
    <div
      ref={ref}
      className="skill-card group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-xl hover:shadow-fuchsia-500/20"
    >
      <div className="mb-3 flex items-baseline justify-between">
        <span className="font-semibold text-white">{name}</span>
        <span className="text-2xl font-extrabold tabular-nums text-white transition duration-300 group-hover:scale-110 group-hover:text-fuchsia-300">
          {value}%
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-purple-950/70">
        <div
          className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-fuchsia-400 to-blue-400 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-fuchsia-400/50"
          style={{ width: `${value}%` }}
        >
          <div className="shimmer absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/50" />
        </div>
      </div>
    </div>
  );
}
