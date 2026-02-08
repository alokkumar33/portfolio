import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden text-white">

     
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[140px]" />

      
      <div
        className="relative z-10 max-w-6xl w-[90%] h-[75%]
        bg-white/5 backdrop-blur-2xl
        border border-white/10
        rounded-3xl
        shadow-2xl
        grid md:grid-cols-2
        p-10 md:p-16 gap-10"
      >

        <div className="flex flex-col justify-center space-y-6">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Alok <span className="text-teal-400">Kumar</span>
          </h1>

          <TypeAnimation
            sequence={[
              "React Developer", 1500,
              "Full Stack Web Developer", 1500,
              "AIML", 1500,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="p"
            className="text-xl md:text-2xl
            bg-gradient-to-r from-teal-400 to-blue-400
            bg-clip-text text-transparent font-semibold"
          />

          <p className="text-slate-300 max-w-md">
            I build modern, scalable, and visually engaging web applications
            using React and Tailwind CSS.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl
              bg-teal-500 text-black font-semibold
              hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl
              border border-white/20
              hover:border-teal-400 hover:text-teal-400 transition"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative group rounded-full overflow-hidden">

            
            <div
              className="absolute -inset-3 rounded-full
              border-2 border-teal-400/40
              animate-spin-slow"
            ></div>

            
            <img
              src={profile}
              alt="Alok"
              className="relative w-72 h-72 md:w-80 md:h-80
              object-cover rounded-full
              border-4 border-white/30
              group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
