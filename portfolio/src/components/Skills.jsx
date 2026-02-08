import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

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
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-16 fade-up">
        Skills
      </h2>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="mx-4 min-w-[150px]
              flex flex-col items-center justify-center
              bg-slate-800/60 backdrop-blur-md
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

              <p className="text-sm text-slate-200 text-center font-medium">
                {skill.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
