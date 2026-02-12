import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ===============================
     Scroll handling
  =============================== */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((scrollTop / docHeight) * 100);
      setScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  /* 🔥 Updated Links */
  const links = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "education", label: "education" },
    { id: "experience", label: "experience & training" },
    { id: "projects", label: "projects" },
    { id: "skills", label: "skill & tools" },
    { id: "contact", label: "contact" },
  ];

  return (
    <>
      {/* 🔥 Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 🌊 Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50
        transition-all duration-500
        ${scrolled ? "backdrop-blur-xl" : ""}`}
      >
        <div
          className={`mx-4 md:mx-6 mt-4 px-6 py-3 rounded-2xl
          flex justify-between items-center
          transition-all duration-500
          ${
            scrolled
              ? "bg-slate-900/80 border border-slate-700 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
              : "bg-slate-900/60 border border-slate-800"
          }`}
        >
          {/* 🔷 Logo */}
          <h1
            className="text-xl font-bold tracking-wide cursor-pointer
            hover:text-teal-400 transition duration-300"
          >
            Alok<span className="text-teal-400">.dev</span>
          </h1>

          {/* 🖥️ Desktop Links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium relative">
            {links.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={() => setActive(item.id)}
                  className={`capitalize transition-colors duration-300
                  ${
                    active === item.id
                      ? "text-teal-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>

                {/* Animated underline */}
                {active === item.id && (
                  <span
                    className="absolute -bottom-2 left-0 w-full h-[2px]
                    bg-gradient-to-r from-teal-400 to-blue-500
                    rounded-full animate-pulse"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* 📄 Resume (Desktop) */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold rounded-lg
              bg-gradient-to-r from-teal-500 to-blue-500
              text-black hover:scale-105
              hover:shadow-[0_0_25px_rgba(45,212,191,0.6)]
              transition"
            >
              Resume
            </a>
          </div>

          {/* 📱 Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl text-slate-200 hover:text-teal-400 transition"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[70]
        bg-black/60 backdrop-blur-sm
        transition-opacity duration-300
        ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* 📱 Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm z-[80]
        bg-slate-900 border-l border-slate-700
        transform transition-transform duration-500
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close */}
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-2xl text-slate-300 hover:text-teal-400 transition"
          >
            <FiX />
          </button>

          {/* Links */}
          <ul className="mt-10 flex flex-col gap-6 text-lg font-medium">
            {links.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => {
                    setActive(item.id);
                    setMenuOpen(false);
                  }}
                  className={`capitalize transition
                  ${
                    active === item.id
                      ? "text-teal-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto px-5 py-3 text-center font-semibold rounded-xl
            bg-gradient-to-r from-teal-500 to-blue-500
            text-black hover:shadow-[0_0_30px_rgba(45,212,191,0.6)]
            transition"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
