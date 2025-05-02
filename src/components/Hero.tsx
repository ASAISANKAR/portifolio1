import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer";
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-24 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6">
            <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium animate-fadeIn">
              Available for hire
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Akula Sai Sankar</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 flex items-center">
              <span className="mr-2">I'm a</span>
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{typedText}</span>
              <span className="animate-blink ml-1">|</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
             Bridging software and hardware to build secure, scalable, and intelligent applications. I specialize in full-stack development, IoT solutions, and cloud-native architectures using React, Spring Boot, and AWS.
           </p>

            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button 
                 onClick={() => {
                  const link = document.createElement("a");
                  link.href = "https://drive.google.com/file/d/1-WqaqxFDPNq7wm4Z_1C-YyvpUkJIslIx/view?usp=sharing";
                  // link.download = "AkulaSaiSankar_Resume.pdf";
                  link.click();
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Download Resume
              </button>
              <button
                onClick={scrollToAbout}
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;