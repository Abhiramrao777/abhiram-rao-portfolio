import { useState, useEffect } from 'react';
import { ArrowUp, Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">

            {/* Theme Toggle Button - scales up when scrolled down */}
            <motion.button
                onClick={toggleTheme}
                initial={{ scale: 1 }}
                animate={{ scale: isVisible ? 1.15 : 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                whileHover={{ y: -4, scale: isVisible ? 1.2 : 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md text-gray-900 dark:text-gray-100 shadow-xl dark:shadow-2xl border border-gray-200/50 dark:border-purple-500/30 group hover:border-purple-300 dark:hover:border-purple-500/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-shadow duration-300 z-50"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-90 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                ) : (
                    <Moon className="w-5 h-5 text-purple-600 group-hover:-rotate-12 transition-transform duration-500" />
                )}
            </motion.button>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 30 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
                        onClick={scrollToTop}
                        className="p-3.5 rounded-full bg-gradient-to-tr from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:from-purple-500 hover:to-purple-400 border border-purple-400/50 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-shadow"
                        aria-label="Scroll to top"
                        whileHover={{ y: -4, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.button>
                )}
            </AnimatePresence>

        </div>
    );
}