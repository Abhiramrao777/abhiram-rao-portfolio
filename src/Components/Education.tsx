import { motion } from 'framer-motion';
import { GraduationCap, School, Calendar, BookOpen, Award } from 'lucide-react';

const education = [
  {
    degree: "B.Tech – Electronics and Communication Engineering",
    school: "N.M.A.M.I.T, Nitte",
    period: "August 2023 – Present",
    grade: "8.83 CGPA",
    description: "Focusing on embedded systems, digital electronics, and programming. Actively involved in technical societies and workshops.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    degree: "Second Pre University College (XII) - PCMB",
    school: "S.V.H PU College Innanje, Udupi district",
    period: "June 2021 – April 2023",
    grade: "90.6%",
    description: "Intensive focus on STEM subjects, building a strong analytical foundation.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    degree: "SSLC (X)",
    school: "S.V.H English Medium High school Innanje, Udupi district",
    period: "June 2020 – March 2021",
    grade: "96%",
    description: "Excellence in science and mathematics with a broad range of language studies.",
    icon: <Award className="w-6 h-6" />,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">EDUCATION</h2>
          <p className="text-center text-purple-600 dark:text-purple-500 mb-10">My education has been a journey of learning and development. Here are the details of my academic background.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/0 via-purple-500/40 to-purple-500/0" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-purple-500 flex items-center justify-center z-10 shadow-lg shadow-purple-500/20">
                  <div className="text-purple-600 dark:text-purple-400">
                    {edu.icon}
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`card ml-14 md:ml-0 md:w-[45%] group hover:border-purple-500/50 !bg-white/80 dark:!bg-gray-900/60`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
                      <Calendar className="w-3 h-3 mr-1" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800/30">
                      {edu.grade}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {edu.degree}
                  </h3>

                  <p className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-2 mt-1">
                    <School className="w-4 h-4" />
                    {edu.school}
                  </p>

                  <div className="mt-4 p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}