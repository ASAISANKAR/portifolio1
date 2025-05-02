import React, { useState } from 'react';
import { Code, Server, PenTool, Database, Monitor, LineChart } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number;
  category: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills', icon: <Code size={20} /> },
    { id: 'frontend', name: 'Frontend', icon: <Monitor size={20} /> },
    { id: 'backend', name: 'Backend', icon: <Server size={20} /> },
    { id: 'database', name: 'Database', icon: <Database size={20} /> },
    { id: 'design', name: 'Design', icon: <PenTool size={20} /> },
    { id: 'analytics', name: 'Analytics', icon: <LineChart size={20} /> },
  ];
  
  const skills: Skill[] = [
    { name: 'JavaScript', proficiency: 90, category: 'frontend' },
    { name: 'TypeScript', proficiency: 85, category: 'frontend' },
    { name: 'React', proficiency: 90, category: 'frontend' },
    { name: 'HTML/CSS', proficiency: 95, category: 'frontend' },
    { name: 'Vue.js', proficiency: 75, category: 'frontend' },
    { name: 'Node.js', proficiency: 85, category: 'backend' },
    { name: 'Express', proficiency: 80, category: 'backend' },
    { name: 'Python', proficiency: 70, category: 'backend' },
    { name: 'Django', proficiency: 65, category: 'backend' },
    { name: 'GraphQL', proficiency: 75, category: 'backend' },
    { name: 'MongoDB', proficiency: 80, category: 'database' },
    { name: 'PostgreSQL', proficiency: 85, category: 'database' },
    { name: 'Firebase', proficiency: 75, category: 'database' },
    { name: 'UI/UX Design', proficiency: 70, category: 'design' },
    { name: 'Figma', proficiency: 75, category: 'design' },
    { name: 'Tailwind CSS', proficiency: 90, category: 'design' },
    { name: 'Google Analytics', proficiency: 65, category: 'analytics' },
    { name: 'SEO', proficiency: 60, category: 'analytics' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A comprehensive collection of technologies and tools I've mastered throughout my career.
          </p>
        </div>
        
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">Beginner</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.proficiency}%</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Expert</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;