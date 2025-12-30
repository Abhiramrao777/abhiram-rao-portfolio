// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-gray-950 border-t border-[rgba(76,29,149,0.3)] text-center">
      <div className="max-w-6xl mx-auto">
        {/* Social Icons – small, centered row */}
        <div className="flex justify-center gap-8 mb-6">
          {/* Gmail / Email */}
          <a
            href="mailto:rao.abhiram18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 text-xl"
          >
            <i className="fas fa-envelope"></i>
          </a>

          {/* Twitter/X */}
          <a
            href="https://twitter.com/ABHIRAM_RAO_777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 text-xl"
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/abhiram-rao-5b227928a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 text-xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/__abhiramrao__"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 text-xl"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Abhiramrao777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 text-xl"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2025 Abhiram Rao. All rights reserved.
        </p>
      </div>
    </footer>
  );
}