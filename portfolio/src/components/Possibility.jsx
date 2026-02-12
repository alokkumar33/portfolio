import { useState } from "react";

export default function Possibility() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const moveNo = () => {
    const x = Math.random() * 260 - 130;
    const y = Math.random() * 140 - 70;
    setPos({ x, y });
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-white bg-black overflow-hidden"
    >
      {/* Full image container */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/possibility-bg.jpg')",
          backgroundSize: "contain", // FULL IMAGE NO CROP
        }}
      />

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Everything Is{" "}
          <span className="text-teal-400">Possible</span> Or Not?
        </h2>

        <p className="text-slate-200 mb-16">
          Try answering honestly 😏
        </p>

        <div className="relative flex justify-center items-center gap-16 h-[120px]">
          
          {/* YES */}
          <button
            onClick={() =>
              alert("Exactly 😎 Everything is possible!")
            }
            className="px-10 py-4 rounded-xl font-semibold text-white
            bg-gradient-to-r from-emerald-500 to-teal-500
            hover:scale-110
            hover:shadow-[0_0_40px_rgba(52,211,153,0.6)]
            transition-all duration-300"
          >
            YES
          </button>

          {/* NO */}
          <button
            onMouseEnter={moveNo}
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.x / 10}deg)`,
            }}
            className="px-10 py-4 rounded-xl font-semibold
            bg-slate-800/80 backdrop-blur-md
            text-slate-200
            transition-transform duration-300"
          >
            NO
          </button>
        </div>
      </div>
    </section>
  );
}
