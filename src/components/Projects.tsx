import React, { useState } from 'react';
import { Github, ExternalLink, Code, Monitor } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  liveUrl?: string;
  category: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
  ];
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, and payment processing.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/username/ecommerce",
      liveUrl: "https://ecommerce-example.com",
      category: "web"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity app for managing daily tasks and projects. Features include drag-and-drop interface, task categorization, and progress tracking.",
      image: "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/taskmanager",
      liveUrl: "https://taskmanager-example.com",
      category: "web"
    },
    {
      id: 3,
      title: "Fitness Tracker Mobile App",
      description: "A cross-platform mobile app for tracking workouts and nutrition. Includes custom exercise plans, progress graphs, and social sharing.",
      image: "https://images.pexels.com/photos/3927387/pexels-photo-3927387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React Native", "TypeScript", "GraphQL"],
      github: "https://github.com/username/fitnesstracker",
      category: "mobile"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts for multiple locations. Uses geolocation and third-party weather APIs.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["JavaScript", "API Integration", "CSS3"],
      github: "https://github.com/username/weatherapp",
      liveUrl: "https://weather-example.com",
      category: "web"
    },
    {
      id: 5,
      title: "Finance App UI Design",
      description: "A modern UI/UX design for a personal finance management application. Includes dashboard, transaction screens, and analytics views.",
      image: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Figma", "UI/UX", "Design System"],
      liveUrl: "https://dribbble.com/username",
      category: "design"
    },
    {
      id: 6,
      title: "Travel Companion App",
      description: "A mobile application for travelers to plan trips, discover local attractions, and document their journeys with photos and notes.",
      image: "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React Native", "Firebase", "Google Maps API"],
      github: "https://github.com/username/travelapp",
      category: "mobile"
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Explore some of my recent work and personal projects.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;