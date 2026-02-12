import nistLogo from "../assets/nist-logo.png"; 

export default function Education() {
  return (
    <section id="education" className="py-24 w-full flex justify-center">

      {/* Section Title */}
      <div className="absolute -mt-20 text-center">
        <h2 className="text-3xl font-bold">Education</h2>
        <div className="mx-auto mt-4 w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
      </div>

      {/* Flip Card Container */}
      <div className="group w-[380px] h-[420px] perspective">

        <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">

          {/* FRONT SIDE */}
          <div className="absolute w-full h-full backface-hidden 
                          bg-slate-800/70 backdrop-blur-md
                          border border-slate-700
                          rounded-2xl p-8 flex flex-col justify-center items-center
                          shadow-xl">

            <img
              src={nistLogo}
              alt="NIST University"
              className="w-24 h-24 object-contain mb-6"
            />

            <h3 className="text-xl font-semibold text-center">
              Bachelor of Technology (B.Tech)
            </h3>

            <p className="text-teal-400 mt-2 text-center">
              Information Technology
            </p>

            <p className="mt-4 text-slate-300 text-center">
              NIST University
            </p>

            <p className="text-slate-400 mt-2">2023 – 2027</p>

            <p className="mt-3 text-sm text-green-400 font-medium">
              Currently in 3rd Year
            </p>
          </div>

          {/* BACK SIDE */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180
                          bg-slate-900/80 backdrop-blur-md
                          border border-teal-500
                          rounded-2xl p-8 flex items-center
                          shadow-xl">

            <p className="text-slate-300 text-sm leading-relaxed">
              Pursuing B.Tech in Information Technology with a strong foundation
              in Data Structures, Algorithms, Operating Systems, Database
              Management Systems, and Software Development.
              <br /><br />
              Alongside academics, actively building practical skills in
              Full Stack Development and Artificial Intelligence & Machine Learning.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
