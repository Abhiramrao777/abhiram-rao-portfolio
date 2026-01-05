// src/components/Projects.tsx
const projects = [
  {
    title: "Greenhouse System",
    description:
      "Green house system which monitors soil temperature, moisture, humidity and activates a water pump and a cooling fan based on relay switching.",
    tech: ["Python", "Raspberry Pi Pico 2W", "Thonny IDE", "GitHub"],
    github: "https://github.com/nnm23ec052-cpu/team3",
    screenshot: "Projects/greenhouse-screenshot.png", // add real screenshot in public/projects/
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Personal portfolio website containing my academic details, skills and projects.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub"],
    github: "https://github.com/Abhiramrao777/abhiram-rao-portfolio.git",
    screenshot: "Projects/portfolio.png",
  },
  {
    title: "Spatiometral analysis of urban expansion using NDBI from satellite imagery",
    description:
      "Attended training sessions and worked on project focused on analyzing urban expansion of banglore city from 2000 to 2024 AC",
    tech: ["QGIS Britslavia", "Google Earth Engine"],
    document: "https://drive.google.com/file/d/1ZlyyxIhkM-gzEesNiKSVKXk6bs8_iJUp/view?usp=sharing",
    screenshot: "Projects/GEE.png",
  },
  // Add more 
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-3 bg-linear-to-b from-gray-950 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">PROJECTS / INTERNSHIPS</h2>
        <p className="text-center text-purple-500 mb-12">Showcase of my work & technical projects</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="card bg-gray-900/60 backdrop-blur-sm border border-purple-900/30 rounded-2xl overflow-hidden hover:border-purple-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20"
            >
              {/* Screenshot / Project Image */}
              <div className="h-48 bg-linear-to-br from-purple-900/30 to-gray-900 relative overflow-hidden">
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-purple-400 text-xl font-medium">
                    Project {i + 1}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-700 hover:border-purple-500"
                    >
                      GitHub
                    </a>
                  )}

                  {project.document && (
                    <a
                      href={project.document}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 bg-purple-900/40 hover:bg-purple-800 text-purple-300 rounded-lg transition-colors border border-purple-700/50 hover:border-purple-500"
                    >
                    Document PDF
                    </a>
                  )}

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
