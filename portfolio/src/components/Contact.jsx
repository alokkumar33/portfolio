import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 max-w-6xl mx-auto text-center"
    >
      {/* Section glow */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 
        w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[120px]"
      />

      <h2 className="text-4xl font-bold mb-4 fade-up">
        Let’s <span className="text-teal-400">Connect</span>
      </h2>

      <p className="text-slate-300 mb-2 fade-up">
        Open to internships, frontend roles, and collaborations.
      </p>

      <p className="text-slate-400 mb-8 fade-up">
        📍 India · Available for remote opportunities
      </p>

      {/* Email (Gmail opens directly) */}
     <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=a7l7o3k5@gmail.com&su=Contact from Portfolio&body=Hi Alok,%0D%0A%0D%0A"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 mb-12
  text-slate-300 hover:text-teal-400 transition fade-up"
>
  <FaEnvelope />
  <span className="underline">a7l7o3k5@gmail.com</span>
</a>

      {/* Social Icons */}
      <div className="flex justify-center gap-8">

        {/* GitHub */}
        <a
          href="https://github.com/alokkumar33"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-slate-800/60 backdrop-blur-md
          border border-slate-700
          p-4 rounded-full
          hover:border-teal-400
          hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]
          hover:-translate-y-2
          animate-float
          transition duration-300"
        >
          <FaGithub className="text-2xl text-slate-200 group-hover:text-teal-400 transition" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alok-kumar-sahu-b80836291/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-slate-800/60 backdrop-blur-md
          border border-slate-700
          p-4 rounded-full
          hover:border-teal-400
          hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]
          hover:-translate-y-2
          animate-float delay-200
          transition duration-300"
        >
          <FaLinkedin className="text-2xl text-slate-200 group-hover:text-blue-400 transition" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/alok_kumar_z/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-slate-800/60 backdrop-blur-md
          border border-slate-700
          p-4 rounded-full
          hover:border-pink-400
          hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]
          hover:-translate-y-2
          animate-float delay-500
          transition duration-300"
        >
          <FaInstagram className="text-2xl text-slate-200 group-hover:text-pink-400 transition" />
        </a>

      </div>
    </section>
  );
}
