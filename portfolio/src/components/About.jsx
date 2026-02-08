export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 w-full overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-32 left-1/3 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-up">
            About <span className="text-teal-400">Me</span>
          </h2>

          {/* Animated underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse" />
        </div>

        {/* Glass Card */}
        <div
          className="bg-white/5 backdrop-blur-xl 
          border border-white/10 
          rounded-3xl 
          p-10 md:p-14 
          grid md:grid-cols-2 gap-12
          shadow-xl"
        >
          {/* LEFT TEXT */}
          <div className="space-y-6 fade-up">
            <p className="text-slate-300 leading-relaxed text-lg">
              I’m a motivated and curious developer who loves building modern,
              clean, and interactive web applications. I enjoy exploring new
              technologies and constantly improving my skills.
            </p>

            <p className="text-slate-300 leading-relaxed text-lg">
              My focus is on creating user-friendly interfaces, writing clean
              code, and learning best practices that help me grow as a frontend
              engineer.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6 fade-up">

            <div
              className="bg-slate-800/60 backdrop-blur-md
              border border-slate-700
              rounded-2xl p-6
              hover:border-teal-400
              hover:shadow-[0_0_30px_rgba(45,212,191,0.25)]
              transition duration-300"
            >
              <h3 className="text-3xl font-bold text-teal-400">10+</h3>
              <p className="text-slate-300 mt-2">Projects Built</p>
            </div>

            <div
              className="bg-slate-800/60 backdrop-blur-md
              border border-slate-700
              rounded-2xl p-6
              hover:border-teal-400
              hover:shadow-[0_0_30px_rgba(45,212,191,0.25)]
              transition duration-300"
            >
              <h3 className="text-3xl font-bold text-teal-400">1+</h3>
              <p className="text-slate-300 mt-2">Years Learning</p>
            </div>

            <div
              className="bg-slate-800/60 backdrop-blur-md
              border border-slate-700
              rounded-2xl p-6
              hover:border-teal-400
              hover:shadow-[0_0_30px_rgba(45,212,191,0.25)]
              transition duration-300"
            >
              <h3 className="text-3xl font-bold text-teal-400">React</h3>
              <p className="text-slate-300 mt-2">Primary Focus</p>
            </div>

            <div
              className="bg-slate-800/60 backdrop-blur-md
              border border-slate-700
              rounded-2xl p-6
              hover:border-teal-400
              hover:shadow-[0_0_30px_rgba(45,212,191,0.25)]
              transition duration-300"
            >
              <h3 className="text-3xl font-bold text-teal-400">∞</h3>
              <p className="text-slate-300 mt-2">Learning Mindset</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

