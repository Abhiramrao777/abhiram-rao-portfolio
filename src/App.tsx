import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { ThemeProvider } from './ThemeContext';
import FloatingActions from './Components/FloatingActions';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white pt-20 md:pt-24 transition-colors duration-300">
        <Navbar />
        <main>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </main>
        <FloatingActions />
      </div>
    </ThemeProvider>
  );
}

export default App;