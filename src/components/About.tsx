import React from 'react';
import { Users, Map, BookOpen, Coffee } from 'lucide-react';
import mypic from './image.png'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Innovative full-stack developer crafting seamless digital experiences with a focus on IoT, performance, and clean design.
              </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h3>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
             I began my coding journey driven by curiosity and a passion for solving real-world problems with technology. As a Computer Science student specializing in Cyber Security and Blockchain, I've built impactful full-stack and IoT projects, earned global certifications, and collaborated on innovative solutions that bridge software and hardware.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm passionate about clean code, user-centered design, and continuous learning. When I'm not coding,
              you'll find me  experimenting with new recipes.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 rounded-lg">
                  <Users size={22} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Collaborative</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Team player</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-500 dark:text-purple-400 rounded-lg">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Continuous Learner</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Always growing</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 bg-green-100 dark:bg-green-900/30 text-green-500 dark:text-green-400 rounded-lg">
                  <Map size={22} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Problem Solver</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Strategic thinker</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 rounded-lg">
                  <Coffee size={22} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Passionate</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Love what I do</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-[600px] bg-gray-100 dark:bg-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
            <div 
            className="w-full h-full flex justify-center items-center bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${mypic})`, backgroundSize: 'contain', backgroundPosition: 'center' }}
          >
          </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-2">Akula Sai Sankar</h3>
                <p className="text-gray-300">Full Stack Developer </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;