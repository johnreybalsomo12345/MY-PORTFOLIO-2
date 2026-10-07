import profile from "../assets/profile.jpg";
export default function Home({ onNavigate }) {
  return (
    <section id="home" className="flex min-h-screen items-center px-6 pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="mb-3 text-lg text-white/80">Hi, I'm John Rey Hautea Balsomo.</p>
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
            I build fast, clean websites with React.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80">
            Frontend developer who turns ideas into responsive, easy-to-use interfaces.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate("skills")}
              className="rounded-xl bg-white px-6 py-3 font-semibold text-purple-900 shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-purple-100 hover:shadow-purple-500/40"
            >
              See my skills
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="rounded-xl border border-white/40 px-6 py-3 font-semibold transition duration-200 hover:-translate-y-1 hover:border-white hover:bg-white/10"
            >
              Contact me
            </button>
          </div>
        </div>

        <div className="flex justify-center md:col-span-2">
          <div className="flex h-100 w-100 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-blue-600 p-1.5 shadow-2xl shadow-black/40 transition duration-500 hover:rotate-6 hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-950 text-6xl font-extrabold">
            <img
  src={profile}
  alt="John Rey Hautea Balsomo"
  className="h-full w-full rounded-full object-cover"
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
