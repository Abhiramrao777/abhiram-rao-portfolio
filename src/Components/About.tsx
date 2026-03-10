// src/components/About.tsx
import { useState, useEffect } from 'react';
import { personalInfo } from '../data/personalData';

// Rotating taglines (optional – remove if you don't want it)
const taglines = [
  "Electronics Enthusiast • Creating solutions to modern world problems",
  "Passionate about circuits & code • Building tomorrow today",
  "Hardware + Software • Turning ideas into reality",
  "Exploring embedded systems • Innovating one project at a time",
  "From schematics to software • Making tech that matters",
];

export default function About() {
  // State for rotating tagline (remove these lines if you don't want rotation)
  const [currentTagline, setCurrentTagline] = useState(taglines[0]);
  const [fade, setFade] = useState(true);

  // Auto-rotate taglines (remove this block if not wanted)
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const nextIndex = (taglines.indexOf(currentTagline) + 1) % taglines.length;
        setCurrentTagline(taglines[nextIndex]);
        setFade(true);
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentTagline]);

  // Initialize Vanilla Tilt on profile picture
  useEffect(() => {
    const tiltElement = document.querySelector('.profile-tilt') as HTMLElement | null;
    if (tiltElement && window.VanillaTilt) {
      window.VanillaTilt.init(tiltElement, {
        max: 21,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        scale: 1.05,
        transition: true,
        gyroscope: true,
      });
    }
  }, []);

  return (
    <section id="about" className="flex items-center pt-16 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
        {/* Profile picture FIRST on mobile */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative">
            <div
              className="profile-tilt w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[rgba(147,51,234,0.4)] glow-purple transition-transform duration-200"
            >
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="text-center md:text-left space-y-6 order-2 md:order-1 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I am <span className="text-purple-600 dark:text-purple-500">{personalInfo.name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-purple-600 dark:text-purple-500 font-medium">
            {personalInfo.role}
          </p>

          {/* Animated tagline (remove <p> below if you don't want rotation) */}
          <p
            className={`text-lg md:text-xl text-yellow-600 dark:text-yellow-300 max-w-xl mx-auto md:mx-0 leading-relaxed transition-opacity duration-600 ${fade ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {currentTagline}
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0 font font-large">
            {personalInfo.bio}
          </p>

          <div className="pt-8">
            <a
              href={personalInfo.cvLink}
              download
              className="inline-block px-8 py-4 bg-linear-to-r from-purple-600 to-purple-500 rounded-full text-white font-semibold text-lg hover:from-[var(--color-purple-500)] hover:to-[var(--color-purple-400)] transition-all duration-300 glow-purple"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}