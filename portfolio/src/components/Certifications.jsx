import certificate from "../assets/cttc-certificate.jpg";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6 w-full">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Certifications
        </h2>

        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mb-16" />

        <div className="flex justify-center">
          <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8
          hover:border-teal-400 hover:shadow-[0_0_40px_rgba(45,212,191,0.25)] transition max-w-md">

            <img
              src={certificate}
              alt="CTTC Certificate"
              className="rounded-xl mb-6 hover:scale-105 transition"
            />

            <h3 className="text-xl font-semibold">
              Artificial Intelligence & Machine Learning
            </h3>
            <p className="text-slate-300 mt-2">
              Central Tool Room & Training Centre (CTTC), Govt. of India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
