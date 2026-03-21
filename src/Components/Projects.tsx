import { motion } from 'framer-motion';
import { Github, FileText, ExternalLink } from 'lucide-react'; // Added icons

const projects = [
  {
    title: "Greenhouse System",
    description: "Green house system which monitors soil temperature, moisture, humidity and activates a water pump and a cooling fan based on relay switching.",
    tech: ["Python", "Raspberry Pi Pico 2W", "Thonny IDE", "Hardware"],
    github: "https://github.com/nnm23ec052-cpu/team3",
    screenshot: "Projects/greenhouse-screenshot.png",
  },
  {
    title: "Personal Portfolio Website",
    description: "A highly interactive personal portfolio website containing my academic details, technical skills, and projects.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Abhiramrao777/abhiram-rao-portfolio.git",
    screenshot: "Projects/portfolio.png",
  },
  {
    title: "Spatiotemporal Analysis of Urban Expansion",
    description: "Analyzed the urban expansion of Bangalore city from 2000 to 2024 using NDBI from satellite imagery.",
    tech: ["QGIS", "Google Earth Engine", "Data Analysis"],
    document: "https://drive.google.com/file/d/1ZlyyxIhkM-gzEesNiKSVKXk6bs8_iJUp/view?usp=sharing",
    screenshot: "Projects/GEE.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } // Slightly faster stagger
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-3 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">PROJECTS / INTERNSHIPS</h2>
          <p className="text-center text-purple-600 dark:text-purple-500 mb-12">
            Showcase of my work & technical projects
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              // Added 'group' here for hover effects on children, and flex/flex-col to manage height
              className="group flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="h-56 relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                {project.screenshot ? (
                  <>
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle gradient overlay to make image blend into card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-purple-50 dark:bg-purple-900/20 text-purple-400 font-medium">
                    Image Unavailable
                  </div>
                )}
              </div>

              {/* Content Container - flex-grow ensures this stretches to fill space */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 text-xs rounded-md font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons - mt-auto pushes them strictly to the bottom */}
                <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg transition-colors font-medium text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}

                  {project.document && (
                    <a
                      href={project.document}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-800/50 text-purple-700 dark:text-purple-300 rounded-lg transition-colors font-medium text-sm"
                    >
                      <FileText className="w-4 h-4" />
                      Report
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}