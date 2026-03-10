import { Mail, Twitter, Linkedin, Instagram, Github, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// Extracting social links into an array keeps the JSX clean and DRY (Don't Repeat Yourself)
const socialLinks = [
  { icon: Mail, href: "mailto:rao.abhiram18@gmail.com", label: "Email" },
  { icon: Twitter, href: "https://twitter.com/ABHIRAM_RAO_777", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/in/abhiram-rao-5b227928a", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/__abhiramrao__", label: "Instagram" },
  { icon: Github, href: "https://github.com/Abhiramrao777", label: "GitHub" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-12 px-6 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800/50 transition-colors duration-300 text-center">

      {/* Decorative top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-24 bg-purple-500/5 dark:bg-purple-500/10 blur-3xl rounded-t-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">

        {/* Branding / Name */}
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6">
          Abhiram Rao
        </h2>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-colors duration-300 group"
              >
                <Icon className="w-5 h-5 group-hover:animate-pulse" />
              </motion.a>
            );
          })}
        </div>

        {/* Footer Text */}
        <div className="flex flex-col gap-3 items-center mt-2">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-gray-600 dark:text-gray-400 text-sm font-medium">

            <div className="flex items-center gap-3 ml-1 bg-gray-100 dark:bg-gray-900/50 py-1.5 px-3 rounded-full border border-gray-200 dark:border-gray-800">
              <span>Designed & Built with</span>
              <span className="flex items-center gap-1.5" title="React">
                <svg viewBox="-10.5 -9.45 21 18.9" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#61DAFB]">
                  <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="10" ry="4.5"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                    <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                  </g>
                </svg>
                <span className="hidden sm:inline">React</span>
              </span>

              <span className="text-gray-300 dark:text-gray-700">•</span>

              <span className="flex items-center gap-1.5" title="Tailwind CSS">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#38BDF8]">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.62C13.666 10.61 15.025 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.62C16.337 6.21 14.978 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.62 1.177 1.19 2.536 2.58 5.512 2.58 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.62C10.337 13.41 8.978 12 6.001 12z" fill="currentColor" />
                </svg>
                <span className="hidden sm:inline">Tailwind</span>
              </span>

              <span className="text-gray-300 dark:text-gray-700">•</span>

              <span className="flex items-center gap-1.5" title="Framer Motion">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 21" className="w-3.5 h-3.5 text-black dark:text-white" fill="currentColor">
                  <path d="M0 0h14v7H7zm0 7h7l7 7H0zm0 7h7v7z"></path>
                </svg>
                <span className="hidden sm:inline">Framer</span>
              </span>

              <span className="text-gray-300 dark:text-gray-700">•</span>

              <span className="flex items-center gap-1.5" title="TypeScript">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <rect x="2" y="2" width="28" height="28" rx="1.312" fill="#3178C6" />
                  <path
                    d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
                    fill="#FFFFFF"
                    fillRule="evenodd"
                  />
                </svg>

                <span className="hidden sm:inline">TypeScript</span>
              </span>

              <span className="text-gray-300 dark:text-gray-700">•</span>

              <span className="flex items-center gap-1.5" title="Vite">
                <svg viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <path d="M399.641 53.6062L215.118 396.963C211.235 404.184 200.865 404.184 196.982 396.963L12.459 53.6062C7.9406 45.2014 15.3045 35.8087 24.3204 38.4552L206.05 91.7925L387.78 38.4552C396.795 35.8087 404.159 45.2014 399.641 53.6062Z" fill="url(#paint0_linear)" />
                  <path d="M288.75 32.7486L206.05 91.7925L24.3204 38.4552C15.3045 35.8087 7.9406 45.2014 12.459 53.6062L196.982 396.963C200.865 404.184 211.235 404.184 215.118 396.963L243.087 344.921L288.75 32.7486Z" fill="url(#paint1_linear)" />
                  <path d="M288.75 32.7486L206.05 91.7925L387.78 38.4552C396.795 35.8087 404.159 45.2014 399.641 53.6062L215.118 396.963C211.235 404.184 200.865 404.184 196.982 396.963L243.087 344.921L288.75 32.7486Z" fill="url(#paint2_linear)" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="5.35645" y1="41.5284" x2="279.167" y2="447.199" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#41D1FF" />
                      <stop offset="1" stopColor="#BD34FE" />
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="33.8055" y1="48.1061" x2="264.499" y2="351.684" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFEA83" />
                      <stop offset="0.0833333" stopColor="#FFDD35" />
                      <stop offset="1" stopColor="#FFA800" />
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="373.125" y1="38.7735" x2="218.674" y2="333.376" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#41D1FF" stopOpacity="0" />
                      <stop offset="1" stopColor="#41D1FF" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="hidden sm:inline">Vite</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 dark:text-gray-500 mt-2">
            <span>Last updated: March 10, 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}