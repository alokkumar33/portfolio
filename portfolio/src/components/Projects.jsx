import { FaBrain, FaUserCheck, FaLaptopCode } from "react-icons/fa";

const projects = [
  {
    title: "Krishi Mitra (Smart India Hackathon)",
    role: "Team Lead | AI-Powered Agriculture Platform",
    description:
      "Led a 6-member team to build an AI-driven agriculture platform enabling early crop disease detection using CNN, real-time advisories, and smart irrigation planning.",
    tech: ["React", "Node.js", "MongoDB", "CNN", "Weather API"],
    icon: <FaBrain />,
  },
  {
    title: "Face Recognition Attendance System",
    role: "AI / ML Project (CTTC – Govt. of India)",
    description:
      "Built a real-time face recognition attendance system using computer vision and deep learning to automate attendance.",
    tech: ["Python", "OpenCV", "Keras", "Deep Learning"],
    icon: <FaUserCheck />,
  },
  {
    title: "Portfolio Website",
    role: "Personal Project",
    description:
      "Designed and deployed a modern portfolio website with smooth animations, glassmorphism UI, and responsive layout.",
    tech: ["React", "Tailwind CSS"],
    icon: <FaLaptopCode />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 w-full">
      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 
        w-[520px] h-[520px] bg-teal-500/10 blur-[160px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-up">
            Projects
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px]
            -translate-x-1/2
            bg-gradient-to-b from-teal-400/30 via-teal-400/60 to-blue-500/30" />

          <div className="space-y-32">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex w-full items-start
                  ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  {/* Timeline Icon */}
                  <div
                    className="absolute left-1/2 top-6
                    -translate-x-1/2
                    z-20
                    w-14 h-14 rounded-full
                    bg-slate-900
                    border-2 border-teal-400
                    flex items-center justify-center
                    text-teal-400 text-xl
                    shadow-[0_0_30px_rgba(45,212,191,0.8)]
                    animate-float"
                  >
                    {project.icon}
                  </div>

                  {/* Connector line */}
                  <div
                    className={`absolute top-[52px] h-[2px] w-16
                    ${isLeft ? "right-1/2 mr-14" : "left-1/2 ml-14"}
                    bg-gradient-to-r from-teal-400/40 to-transparent`}
                  />

                  {/* Card */}
                  <div
                    className={`relative w-full max-w-xl
                    ${
                      isLeft
                        ? "pr-20 text-left animate-slide-in-left"
                        : "pl-20 text-left animate-slide-in-right"
                    }
                    bg-slate-800/60 backdrop-blur-xl
                    border border-slate-700
                    rounded-3xl p-8
                    hover:-translate-y-2
                    hover:border-teal-400
                    hover:shadow-[0_0_50px_rgba(45,212,191,0.35)]
                    transition-all duration-700`}
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold">
                        {project.title}
                      </h3>

                      <p className="text-teal-400 text-sm font-medium">
                        {project.role}
                      </p>

                      <p className="text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 pt-4 justify-start">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm rounded-full
                            bg-white/5 border border-white/10
                            text-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
