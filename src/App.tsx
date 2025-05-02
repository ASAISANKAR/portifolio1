import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const titles = [
      "Akula Sai Sankar | Full Stack Developer",
      "Akula Sai Sankar | IoT Developer"
    ];
    let i = 0;
    const interval = setInterval(() => {
      document.title = titles[i % titles.length];
      i++;
    }, 2000); 
  
    return () => clearInterval(interval); 
  }, []);
  

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;