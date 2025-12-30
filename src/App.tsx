import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education'; 
import Contact from './Components/contact';     
import Footer from './Components/Footer';       

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-20 md:pt-24">  {/* ← this line fixes overlap */}
      <Navbar />  
      <main>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}



export default App;