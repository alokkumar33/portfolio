import { FaBrain, FaUserCheck, FaLaptopCode } from "react-icons/fa";

const projects = [
  {
    title: "Krishi Mitra (Smart India Hackathon)",
    role: "Team Lead | AI-Powered Agriculture Platform",
    description:
      "Led a 6-member team to build an AI-driven agriculture platform enabling early crop disease detection using CNN, real-time weather-based advisories, smart irrigation planning, and a farmer marketplace to reduce middlemen dependency.",
    tech: ["React", "Node.js", "Express", "MongoDB", "CNN", "Weather API"],
    icon: <FaBrain />,
  },
  {
    title: "Face Recognition Attendance System",
    role: "AI / ML Project (CTTC – Govt. of India)",
    description:
      "Developed a face recognition–based attendance system using computer vision and deep learning. The system detects and recognizes faces in real time and marks attendance automatically, reducing manual effort and errors.",
    tech: ["Python", "OpenCV", "Deep Learning", "Keras", "Face Recognition"],
    icon: <FaUserCheck />,
  },
  {
    title: "Portfolio Website",
    role: "Personal Project",
    description:
      "Designed and deployed a responsive personal portfolio website with smooth animations, glassmorphism UI, and intuitive navigation to showcase projects, skills, and experience.",
    tech: ["React", "Tailwind CSS"],
    icon: <FaLaptopCode />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 w-full">

      {/* Section glow */}
      <div className="absolute -top-32 right-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 fade-up">
            Projects
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse" />
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative
              bg-slate-800/60 backdrop-blur-xl
              border border-slate-700
              rounded-3xl p-8
              hover:-translate-y-2
              hover:border-teal-400
              hover:shadow-[0_0_40px_rgba(45,212,191,0.25)]
              transition duration-300"
            >
              {/* Animated gradient overlay */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 
                group-hover:opacity-100 transition
                bg-gradient-to-tr from-teal-500/10 to-blue-500/10"
              />

              <div className="relative space-y-4">
                
                {/* Animated icon */}
                <div className="text-4xl text-teal-400 animate-float">
                  {project.icon}
                </div>

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
                <div className="flex flex-wrap gap-2 pt-4">
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
          ))}

        </div>
      </div>
    </section>
  );
}
