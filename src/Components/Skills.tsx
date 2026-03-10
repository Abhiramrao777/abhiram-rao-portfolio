// src/components/Skills.tsx
const skillGroups = [
  {
    title: "Languages & Skills",
    skills: [
      { name: "C", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/c.svg" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python?viewbox=auto&size=20" },
      { name: "Javascript", icon: "https://cdn.simpleicons.org/javascript?viewbox=auto&size=20" },
      { name: "Circuit Design", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/circuitverse.svg" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "KiCad", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/kicad.svg" },
      { name: "LTSpice", icon: "https://cdn.simpleicons.org/LTSpice?viewbox=auto&size=20" },
      { name: "Keil µVision", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/arm.svg" },
      { name: "Arduino IDE", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/arduino.svg" },
      { name: "VS Code", icon: "/vscode.png" },
      { name: "Git hub", icon: "https://cdn.simpleicons.org/github?viewbox=auto&size=20" },
    ]
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">SKILLS</h2>
        <p className="text-center text-purple-600 dark:text-purple-500 mb-12">
          Programming languages, circuit design & development tools
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {skillGroups.map((group) => (
            <div key={group.title} className="space-y-6">
              <h3 className="text-3xl font-semibold text-purple-600 dark:text-purple-500 text-center">
                {group.title}
              </h3>

              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3 group">
                    <div className="w-20 h-20 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-[rgba(147,51,234,0.2)] 
                                   group-hover:border-purple-500 dark:group-hover:border-purple-500 group-hover:scale-110 
                                   transition-all duration-300 flex items-center justify-center shadow-md dark:shadow-lg">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-base font-medium text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}