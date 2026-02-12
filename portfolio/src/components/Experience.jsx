import metabriq from "../assets/metabriq.png";
import google from "../assets/google.png";
import cttc from "../assets/cttc.png";
import sih from "../assets/sih.png";
import oscg from "../assets/oscg.png";

const experiences = [
  {
    logo: google,
    title: "Google Student Ambassador",
    meta: "Google · Part-time · Sep 2025 – Present",
    location: "Berhampur, Odisha, India (NIST University) · Remote",
    desc:
      "Selected as a Google Student Ambassador to lead AI initiatives, organize workshops, and inspire peers through Google Gemini. Focused on driving innovation and community growth on campus.",
  },
  {
    logo: sih,
    title: "Smart India Hackathon – Team Lead",
    meta: "National Hackathon",
    desc:
      "Led a team of 6 members to design and develop an AI-powered agriculture platform (Krishi Mitra) focusing on crop disease detection, smart irrigation, and farmer empowerment.",
  },
  {
    logo: oscg,
    title: "Open Source Connect Global 2026 – Contributor",
    meta: "OSCG · Global Open Source Initiative · 2026",
    desc:
      "Selected as an official Contributor for Open Source Connect Global 2026, one of the world's largest collaborative open-source initiatives. Contributing to community-driven projects and global developer collaboration through NexFellow platform.",
  },
  {
    logo: metabriq,
    title: "Web Development Intern",
    meta: "METABRIQ · Internship · Jun 2025 – Aug 2025",
    location: "Bhubaneswar, Odisha, India · Hybrid",
    desc:
      "Worked as a Frontend Developer Intern, contributing to real-world web applications. Built responsive UI components, improved user experience, and collaborated with the development team using modern frontend technologies.",
  },
  {
    logo: cttc,
    title: "AI & Machine Learning Training – CTTC",
    meta: "Govt. of India · Jun 2025 – Jul 2025",
    desc:
      "Completed hands-on training in AI & ML covering Python, supervised & unsupervised learning, computer vision, deep learning using Keras, and real-time face recognition systems.",
  },
];

export default function Experience() {

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `
      perspective(1000px)
      rotateX(${-rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section id="experience" className="relative py-28 px-6 w-full">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-teal-400">Training</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
        </div>

        {/* Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="flex justify-center">

              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="w-full max-w-4xl
                bg-slate-800/60 backdrop-blur-xl
                border border-slate-700 rounded-2xl p-8
                transition-transform duration-300 ease-out
                hover:border-teal-400
                hover:shadow-[0_0_40px_rgba(45,212,191,0.35)]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={exp.logo}
                    alt={exp.title}
                    className="w-12 h-12 rounded-md bg-white p-1 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {exp.title}
                    </h3>
                    <p className="text-teal-400 text-sm">
                      {exp.meta}
                    </p>
                    {exp.location && (
                      <p className="text-slate-400 text-sm">
                        {exp.location}
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {exp.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
