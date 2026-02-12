import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // position for Impossible button
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const moveImpossible = () => {
    const x = Math.floor(Math.random() * 120 - 60);
    const y = Math.floor(Math.random() * 80 - 40);
    setPos({ x, y });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=a7l7o3k5@gmail.com&su=Contact from Portfolio&body=
Hi Alok,%0D%0A%0D%0A
Name: ${encodeURIComponent(name)}%0D%0A
Email: ${encodeURIComponent(email)}%0D%0A%0D%0A
Message:%0D%0A${encodeURIComponent(message)}
`;

    window.open(gmailURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 w-full flex justify-center"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Contact Card */}
        <div
          className="bg-slate-900/70 backdrop-blur-xl
          border border-slate-700 rounded-3xl
          p-8 md:p-10 shadow-2xl animate-reveal"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Contact <span className="text-teal-400">Me</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl
              bg-slate-800/70 text-slate-200
              border border-slate-700
              focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30
              outline-none transition"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl
              bg-slate-800/70 text-slate-200
              border border-slate-700
              focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30
              outline-none transition"
              required
            />

            <textarea
              rows="4"
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl
              bg-slate-800/70 text-slate-200
              border border-slate-700
              focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30
              outline-none transition resize-none"
              required
            />

            {/* Buttons */}
            <div className="relative flex justify-between items-center mt-6 h-[60px]">
              
              {/* Impossible button */}
              <button
                type="button"
                onMouseEnter={moveImpossible}
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                }}
                className="px-6 py-3 rounded-xl font-semibold
                bg-slate-700 text-slate-300
                cursor-not-allowed select-none
                transition-transform duration-200"
              >
                UnSend 😜
              </button>

              {/* Possible button */}
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-blue-500 to-purple-600
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(99,102,241,0.45)]
                transition duration-300"
              >
                Send Message ✅
              </button>
            </div>
          </form>
        </div>

        {/* Social Icons (UNCHANGED) */}
        <div className="flex justify-center gap-8 mt-10">
          <a
            href="https://github.com/alokkumar33"
            target="_blank"
            className="group bg-slate-800/60 backdrop-blur-md
            border border-slate-700 p-4 rounded-full
            hover:border-teal-400 hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]
            transition duration-300"
          >
            <FaGithub className="text-2xl text-slate-200 group-hover:text-teal-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/alok-kumar-sahu-b80836291/"
            target="_blank"
            className="group bg-slate-800/60 backdrop-blur-md
            border border-slate-700 p-4 rounded-full
            hover:border-teal-400 hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]
            transition duration-300"
          >
            <FaLinkedin className="text-2xl text-slate-200 group-hover:text-blue-400" />
          </a>

          <a
            href="https://www.instagram.com/alok_kumar_z/"
            target="_blank"
            className="group bg-slate-800/60 backdrop-blur-md
            border border-slate-700 p-4 rounded-full
            hover:border-pink-400 hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]
            transition duration-300"
          >
            <FaInstagram className="text-2xl text-slate-200 group-hover:text-pink-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
