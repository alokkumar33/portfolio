import metabriq from "../assets/metabriq.png";
import google from "../assets/google.png";
import cttc from "../assets/cttc.png";
import sih from "../assets/sih.png";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 w-full">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-teal-400">Training</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse" />
        </div>

        <div className="space-y-10">

          {/* METABRIQ Internship */}
          <div className="group bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8
          hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] transition">

            <div className="flex items-center gap-4 mb-4">
              <img src={metabriq} alt="METABRIQ" className="w-12 h-12 rounded-md bg-white p-1" />
              <div>
                <h3 className="text-2xl font-semibold">Web Development Intern</h3>
                <p className="text-teal-400 text-sm">
                  METABRIQ · Internship · Jun 2025 – Aug 2025
                </p>
                <p className="text-slate-400 text-sm">
                  Bhubaneswar, Odisha, India · Hybrid
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Worked as a Frontend Developer Intern, contributing to real-world web applications.
              Built responsive UI components, improved user experience, and collaborated with the
              development team using modern frontend technologies.
            </p>
          </div>

          {/* Google Student Ambassador */}
          <div className="group bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8
          hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] transition">

            <div className="flex items-center gap-4 mb-4">
              <img src={google} alt="Google" className="w-12 h-12 rounded-md bg-white p-1" />
              <div>
                <h3 className="text-2xl font-semibold">Google Student Ambassador</h3>
                <p className="text-teal-400 text-sm">
                  Google · Part-time · Sep 2025 – Present
                </p>
                <p className="text-slate-400 text-sm">
                  Berhampur, Odisha, India (NIST University) · Remote
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Selected as a Google Student Ambassador to lead AI initiatives, organize workshops,
              and inspire peers through Google Gemini. Focused on driving innovation, collaboration,
              and community growth on campus.
            </p>
          </div>

          {/* CTTC Training */}
          <div className="group bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8
          hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] transition">

            <div className="flex items-center gap-4 mb-4">
              <img src={cttc} alt="CTTC" className="w-12 h-12 rounded-md bg-white p-1" />
              <div>
                <h3 className="text-2xl font-semibold">
                  AI & Machine Learning Training – CTTC
                </h3>
                <p className="text-teal-400 text-sm">
                  Govt. of India · Jun 2025 – Jul 2025
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Completed hands-on training in Artificial Intelligence and Machine Learning,
              covering Python, supervised & unsupervised learning, computer vision,
              deep learning using Keras, and a real-time face recognition attendance system.
            </p>
          </div>

          {/* Smart India Hackathon */}
          <div className="group bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-8
          hover:border-teal-400 hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] transition">

            <div className="flex items-center gap-4 mb-4">
              <img src={sih} alt="Smart India Hackathon" className="w-12 h-12 rounded-md bg-white p-1" />
              <div>
                <h3 className="text-2xl font-semibold">
                  Smart India Hackathon – Team Lead
                </h3>
                <p className="text-teal-400 text-sm">
                  National Hackathon
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Led a team of 6 members to design and develop an AI-powered agriculture platform
              (Krishi Mitra), focusing on crop disease detection, smart irrigation, and farmer
              empowerment using modern AI techniques.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
