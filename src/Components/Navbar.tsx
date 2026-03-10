import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-[rgba(214,208,224,0.3)] shadow-sm' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          <span className="text-purple-700">&lt;</span>
          Abhiram
          <span className="text-purple-700">/Rao</span>
          <span className="text-purple-700">&gt;</span>
        </a>


        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-500 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-purple-500 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-[rgba(76,29,149,0.3)] shadow-xl">
          <div className="flex flex-col items-center py-6 gap-5">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-500 font-medium transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}