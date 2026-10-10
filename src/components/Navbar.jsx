import { useState } from "react";
import { NAV } from "../data";

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gradient-to-r from-red-950/70 via-purple-950/70 to-blue-950/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <button onClick={() => go("home")} className="text-xl font-extrabold tracking-tight transition hover:scale-105">
          MY<span className="text-red-400">PORTFOLIO</span>
        </button>

        <ul className="hidden gap-2 md:flex">
          {NAV.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => go(id)}
                className={`group relative rounded-lg px-4 py-2 font-medium transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white ${
                  active === id ? "text-white" : "text-white/70"
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-4 bottom-1 h-0.5 origin-left rounded bg-gradient-to-r from-red-500 to-blue-400 transition-transform duration-300 group-hover:scale-x-100 ${
                    active === id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="my-1.5 block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 px-6 pb-4 md:hidden">
          {NAV.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => go(id)}
                className="w-full rounded-lg px-3 py-3 text-left font-medium text-white/80 transition hover:translate-x-1 hover:bg-white/10 hover:text-white"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
