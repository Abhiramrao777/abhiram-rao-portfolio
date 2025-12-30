// src/components/Education.tsx
const education = [
  {
    degree: "B.Tech – Electronics and Communication Engineering",
    school: "N.M.A.M.I.T, Nitte",
    period: "August 2023 – Present",
    grade: "8.83 CGPA",
    description:
      "Gained strong foundation in programming, Circuit design, Digital electronics and participated in various workshops and technical events.",
  },
  {
    degree: "Second Pre University College (XII) - PCMB",
    school: "S.V.H PU College Innanje, Udupi district",
    period: "June 2021 – April 2023",
    grade: "90.6%",
    description:
      "Completed Pre University Education with focus on Physics, Chemistry, Mathematics and Biology.",
  },
  {
    degree: "SSLC (X) – Science, Mathematics, Kannada,Social Studies, Sanskrit, English",
    school: "S.V.H English Medium High school Innanje, Udupi district",
    period: "June 2020 – March 2021",
    grade: "96%",
    description: "Studied Basics about Mathematics,Science and Languages",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-linear-to-b from-gray-950 to-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">EDUCATION</h2>
        <p className="text-center text-purple-500 mb-2">—</p>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>

        <div className="space-y-12 md:space-y-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div
                className={`card w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                <p className="text-purple-500 font-medium">{edu.school}</p>
                <p className="text-gray-400 text-sm mt-1">
                  {edu.period} • {edu.grade}
                </p>
                {edu.description && (
                  <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>

              {/* Circle marker (still visible on desktop, but no connecting line) */}
              <div className="w-14 h-14 rounded-full bg-[rgba(147,51,234,0.2)] border-4 border-purple-600 items-center justify-center relative z-10 hidden md:flex shrink-0">
                <div className="w-6 h-6 bg-purple-500 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}