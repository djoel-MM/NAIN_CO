export default function Hero() {
  return (
    <section className="min-h-[60vh]  flex items-center px-3 md:px-12">
      <div className="max-w-3xl">
        <p className="text-sm tracking-widest text-slate-500 mb-3">
          FRONTEND DEVELOPER
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
          Dzulqarnain
        </h1>

        <p className="text-slate-600 text-lg md:text-xl mb-8">
          I build clean, responsive, and modern web interfaces using React and
          Tailwind CSS.
        </p>

        <div className="flex gap-4">
          <a
            href="#Experiece"
            className="px-6 py-3 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
