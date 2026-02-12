import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaCode,          // ✅ Safe VS Code fallback
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiKaggle,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
  { icon: <FaCss3Alt />, name: "CSS", color: "text-blue-500" },
  { icon: <FaJs />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaReact />, name: "React", color: "text-cyan-400" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-sky-400" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
  { icon: <SiExpress />, name: "Express.js", color: "text-gray-300" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-600" },
  { icon: <FaGitAlt />, name: "Git", color: "text-orange-600" },
  { icon: <FaGithub />, name: "GitHub", color: "text-slate-200" },

  // Tools
  { icon: <FaCode />, name: "VS Code", color: "text-blue-500" }, // SAFE
  { icon: <SiFirebase />, name: "Firebase", color: "text-yellow-400" },
  { icon: <SiKaggle />, name: "Kaggle", color: "text-blue-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full overflow-hidden">

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Skills & Tools</h2>
        <div className="mx-auto mt-4 w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
      </div>

      <div className="overflow-hidden relative w-full">
        <div className="flex gap-8 animate-marquee">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="min-w-[180px]
              flex flex-col items-center justify-center
              bg-slate-800/70 backdrop-blur-md
              border border-slate-700
              rounded-2xl p-6
              hover:-translate-y-2 hover:scale-110
              hover:border-teal-400
              hover:shadow-[0_0_30px_rgba(45,212,191,0.25)]
              transition duration-300"
            >
              <div className={`text-5xl mb-3 ${skill.color}`}>
                {skill.icon}
              </div>

              <p className="text-sm text-slate-200 font-medium text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
