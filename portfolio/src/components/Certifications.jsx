import certificate1 from "../assets/cttc-certificate.jpg";
import certificate2 from "../assets/google-certificate.jpg";

const certifications = [
  {
    img: certificate1,
    title: "Artificial Intelligence & Machine Learning",
    org: "Central Tool Room & Training Centre (CTTC), Govt. of India",
  },
  {
    img: certificate2,
    title: "Google Student Ambassador",
    org: "Google · Student Ambassador Program",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6 w-full">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-up">
          Certifications
        </h2>

        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mb-16" />

        {/* Certificates */}
        <div className="grid md:grid-cols-2 gap-12 place-items-center">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                group relative
                bg-slate-800/60 backdrop-blur-xl
                border border-slate-700 rounded-3xl p-8
                w-full max-w-md
                hover:border-teal-400
                hover:shadow-[0_0_50px_rgba(45,212,191,0.35)]
                hover:-translate-y-3 hover:rotate-[0.3deg]
                transition-all duration-700
                animate-reveal
              "
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              {/* Image container (equal size) */}
              <div className="
                w-full h-[260px]
                flex items-center justify-center mb-6
                rounded-xl bg-slate-900/40 overflow-hidden
              ">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="
                    max-h-full max-w-full object-contain
                    group-hover:scale-105 transition duration-500
                  "
                />
              </div>

              <h3 className="text-xl font-semibold">
                {cert.title}
              </h3>

              <p className="text-slate-300 mt-2 text-sm">
                {cert.org}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
