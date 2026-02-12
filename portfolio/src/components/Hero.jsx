import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaReact, FaNodeJs, FaBrain } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-screen flex items-center justify-center overflow-hidden text-white">

      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-teal-500/20 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[620px] h-[620px] bg-blue-600/20 rounded-full blur-[160px] animate-pulse" />

      {/* Main Card */}
      <div
        className="relative z-10 max-w-6xl w-[92%]
        bg-white/5 backdrop-blur-2xl
        border border-white/10
        rounded-3xl
        shadow-2xl
        grid md:grid-cols-2
        p-10 md:p-16 gap-14"
      >

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-6">

          <span className="inline-flex items-center gap-2 w-fit px-4 py-1 rounded-full text-sm font-semibold
          bg-gradient-to-r from-teal-400 to-blue-500 text-black animate-float">
            <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
            Developer Mode
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold">
            Alok <span className="text-teal-400">Kumar</span>
          </h1>

          <TypeAnimation
            sequence={[
              "React Developer", 1500,
              "Full Stack Web Developer", 1500,
              "AI / ML Enthusiast", 1500,
              "Building cool stuff for the web_", 1500,
            ]}
            speed={55}
            repeat={Infinity}
            className="text-xl md:text-2xl
            bg-gradient-to-r from-teal-400 to-blue-400
            bg-clip-text text-transparent font-semibold"
          />

          <p className="text-slate-300 max-w-md">
            Building skills today for a better tomorrow
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-teal-500 text-black font-semibold
              hover:scale-105 hover:shadow-[0_0_30px_rgba(45,212,191,0.6)]
              transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/20 
              hover:border-teal-400 hover:text-teal-400 
              transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center">
          <div className="relative group">

            {/* Pulsing Glow */}
            <div className="absolute -inset-10 rounded-full 
              bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500
              blur-2xl opacity-40 animate-pulse" />

            {/* Rotating Dashed Ring */}
            <div className="absolute -inset-6 rounded-full border-2 border-dashed border-teal-400/40 animate-spin-slow" />

            {/* Floating Tech Icons */}
            <div className="absolute -top-10 left-10 animate-float text-teal-400 text-2xl">
              <FaReact />
            </div>

            <div className="absolute bottom-8 -left-8 animate-float delay-300 text-blue-400 text-2xl">
              <FaNodeJs />
            </div>

            <div className="absolute top-20 -right-10 animate-float delay-500 text-purple-400 text-2xl">
              <FaBrain />
            </div>

            {/* Profile Image */}
            <img
              src={profile}
              alt="Alok Kumar"
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover
              border-4 border-white/30
              shadow-[0_0_60px_rgba(45,212,191,0.45)]
              group-hover:scale-110 group-hover:-rotate-2
              transition duration-700"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
