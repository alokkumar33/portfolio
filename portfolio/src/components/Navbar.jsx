import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  /* ===============================
     3D Tilt Effect
  =============================== */
  const handleMouseMove = (e) => {
    const nav = navRef.current;
    const rect = nav.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 25;
    const rotateY = (x - centerX) / 25;

    nav.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const resetTilt = () => {
    navRef.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };

  /* ===============================
     Smooth Scroll
  =============================== */
  const scrollToSection = (id) => {
    setMenuOpen(false);
    setActive(id);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const top =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const links = [
    { id: "home", label: "home" },
    { id: "about", label: "about" },
    { id: "education", label: "education" },
    { id: "experience", label: "experience" },
    { id: "projects", label: "projects" },
    { id: "skills", label: "skills & tools" },
    { id: "contact", label: "contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6">
        <div
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          className="
          relative
          flex justify-between items-center
          px-8 py-4
          rounded-2xl
          backdrop-blur-3xl
          bg-white/5
          border border-white/10
          shadow-[0_20px_80px_rgba(0,0,0,0.6)]
          transition-transform duration-300
          overflow-hidden
          "
        >
          {/* ✨ Moving Light Reflection */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 animate-lightMove" />
          </div>

          {/* LOGO */}
          <h1
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold cursor-pointer tracking-wide
            text-white hover:text-teal-400 transition duration-300"
          >
            Alok<span className="text-teal-400">.dev</span>
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {links.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`capitalize transition duration-300 ${
                    active === item.id
                      ? "text-teal-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-2xl text-white"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm z-[80]
        bg-slate-900 border-l border-slate-700
        transform transition-transform duration-500
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-2xl text-slate-300"
          >
            <FiX />
          </button>

          <ul className="mt-10 flex flex-col gap-6 text-lg font-medium">
            {links.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="capitalize text-slate-300 hover:text-white transition"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
