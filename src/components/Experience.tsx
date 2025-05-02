import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechNova Solutions",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      description: [
        "Led the development of a customer portal application that increased user engagement by 35%",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted technical interviews for new hires",
        "Refactored legacy code to modern architecture, improving performance by 45%"
      ],
      skills: ["React", "Node.js", "AWS", "MongoDB", "TypeScript"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "DataSync Inc.",
      location: "Boston, MA",
      period: "Mar 2019 - Dec 2021",
      description: [
        "Developed and maintained multiple web applications for financial services clients",
        "Created a real-time analytics dashboard using React and D3.js",
        "Collaborated with UX designers to implement responsive, accessible interfaces",
        "Integrated third-party APIs and services for payment processing and data analysis"
      ],
      skills: ["JavaScript", "React", "Express", "PostgreSQL", "Redux"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "WebVision Startup",
      location: "Seattle, WA",
      period: "Jun 2017 - Feb 2019",
      description: [
        "Built interactive user interfaces for a SaaS platform using Vue.js",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Participated in Agile development processes with two-week sprint cycles",
        "Worked closely with backend teams to integrate REST APIs"
      ],
      skills: ["HTML/CSS", "Vue.js", "Sass", "Webpack", "Jest"]
    }
  ];
  
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Work <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My professional journey in the software development industry.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline line */}
            <div className="absolute top-0 left-0 sm:left-12 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 group-last:h-6"></div>
            
            {experiences.map((experience, index) => (
              <div key={experience.id} className="mb-10 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-12 h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-md transform -translate-x-1/2 flex items-center justify-center">
                  <Briefcase size={16} className="text-white" />
                </div>
                
                <div className="flex flex-col sm:flex-row">
                  {/* Time period (left side on desktop) */}
                  <div className="hidden sm:block sm:w-28 font-medium text-blue-500 dark:text-blue-400 mb-2 sm:mb-0">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {experience.period.split(' - ')[0]}
                    </div>
                    <div className="mt-1">to</div>
                    <div>{experience.period.split(' - ')[1]}</div>
                  </div>
                  
                  {/* Experience content (right side) */}
                  <div className="sm:ml-8 bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="sm:hidden flex items-center text-blue-500 dark:text-blue-400 text-sm font-medium mb-2">
                      <Calendar size={15} className="mr-1" />
                      <span>{experience.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 mt-1 mb-4">
                      <span className="font-medium">{experience.company}</span>
                      <span className="hidden sm:block mx-2">•</span>
                      <span>{experience.location}</span>
                    </div>
                    
                    <ul className="mb-4 space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;