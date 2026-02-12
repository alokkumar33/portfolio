import { useEffect, useRef, useState } from "react";
import { FaCode, FaRocket, FaLayerGroup, FaInfinity } from "react-icons/fa";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 1500;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(timer);
    }, [target]);

    return <span>{count}+</span>;
  };

  const stats = [
    { value: 5, label: "Projects Built", icon: <FaCode /> },
    { value: 1, label: "Years of Learning", icon: <FaRocket /> },
    { value: null, custom: "Full Stack", label: "Primary Focus", icon: <FaLayerGroup /> },
    { value: null, custom: "∞", label: "Learning Mindset", icon: <FaInfinity /> },
  ];

  return (
    <section
      id="about"
      className="relative py-36 px-6 w-full overflow-hidden"
    >
      {/* 🔥 Animated Code Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="code-lines" />
      </div>

      <div
        ref={sectionRef}
        className="relative max-w-6xl mx-auto
        opacity-0 translate-y-10
        transition-all duration-1000"
      >
        {/* Title */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            About <span className="text-teal-400">Me</span>
          </h2>
          <div className="mx-auto w-32 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
        </div>

        {/* Glass Card */}
        <div
          className="relative
          bg-slate-900/70 backdrop-blur-3xl
          border border-teal-400/20
          rounded-3xl
          p-12 md:p-20
          grid md:grid-cols-2 gap-20
          shadow-[0_0_100px_rgba(45,212,191,0.15)]
          transition-all duration-500"
        >
          {/* LEFT TEXT */}
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-slate-300">
              I’m a motivated and curious developer passionate about building
              modern, clean, and interactive web applications that create
              meaningful user experiences.
            </p>

            <p className="text-slate-300">
              My focus is on writing clean, scalable code and continuously
              improving my skills in Full Stack Development and Artificial Intelligence.
            </p>

            <p className="text-teal-400 italic">
              “Consistency beats motivation.”
            </p>

            {/* Floating Tech Tags */}
            <div className="flex flex-wrap gap-3 pt-6">
              {["React", "Node.js", "AI/ML", "MongoDB"].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm rounded-full
                  bg-teal-400/10 border border-teal-400/30
                  text-teal-300
                  animate-floatTag"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/60 backdrop-blur-md
                border border-slate-700
                rounded-2xl p-8
                hover:scale-110
                hover:border-teal-400
                hover:shadow-[0_0_60px_rgba(45,212,191,0.3)]
                transition-all duration-300"
              >
                <div className="text-2xl text-teal-400 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold text-teal-400">
                  {item.value !== null ? (
                    <Counter target={item.value} />
                  ) : (
                    item.custom
                  )}
                </h3>

                <p className="text-slate-300 mt-3 text-sm tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
