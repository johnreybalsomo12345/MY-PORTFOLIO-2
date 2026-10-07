import { useState } from "react";

const EMAIL = "you@example.com"; // change to your email

const field =
  "w-full rounded-xl border border-white/20 bg-purple-950/50 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/40";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Portfolio message from " + (form.name || "a visitor")
  )}&body=${encodeURIComponent(form.message)}`;

  return (
    <section id="contact" className="flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto w-full max-w-2xl">
        <h2 className="mb-2 text-4xl font-extrabold">Contact</h2>
        <p className="mb-8 text-white/75">Have a project or a question? Send me a message.</p>
        <div className="space-y-4 rounded-2xl border border-white/10 bg-purple-950/50 p-8 backdrop-blur">
          <input className={field} placeholder="Your name" value={form.name} onChange={update("name")} />
          <textarea className={field} rows={5} placeholder="Your message" value={form.message} onChange={update("message")} />
          <a
            href={mailto}
            className="inline-block rounded-xl bg-gradient-to-r from-red-600 to-blue-600 px-8 py-3 font-semibold shadow-lg transition duration-200 hover:-translate-y-1 hover:brightness-110 hover:shadow-fuchsia-500/50"
          >
            Send message
          </a>
        </div>
      </div>
    </section>
  );
}
