import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-6 mt-4 px-6 py-3 
      bg-slate-900/70 backdrop-blur-lg 
      border border-slate-800 
      rounded-2xl 
      flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Alok<span className="text-teal-400">.dev</span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setActive(item)}
                className={`capitalize transition
                ${active === item
                  ? "text-teal-400"
                  : "text-slate-300 hover:text-white"}
                `}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div className="flex items-center gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-white transition text-lg"
          >
            🐙
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            className="hidden md:inline-block px-4 py-2 text-sm 
            bg-teal-500 text-black font-semibold 
            rounded-lg hover:bg-teal-400 transition"
          >
            Resume
          </a>
        </div>

      </div>
    </nav>
  );
}
