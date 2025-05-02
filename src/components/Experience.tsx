import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  course: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Backend Developer",
      course: "Java Full Stack Development",
      location: "KLU",
      period: "July 2024 - December 2024",
      description: [
        "Developed and integrated RESTful APIs using Spring Boot for a multi-role user platform",
        "Connected backend services to AWS RDS and implemented secure data handling practices",
        "Collaborated with frontend and DevOps teams for end-to-end deployment and testing",
        "Optimized database queries and application logic, improving response time by 40%"
      ],
      skills: ["Spring Boot", "MySQL", "AWS RDS", "Postman", "JWT", "Git"]
    },
    {
      id: 2,
      title: "Backend Developer",
      course: "Python Full Stack Web Development",
      location: "KLU",
      period: "Mar 2024 - Dec 2023",
      description: [
        "Developed a full-stack Airline Reservation System using Django for seamless flight booking and ticket management",
        "Designed and implemented relational models for users, flights, and bookings using Django ORM",
        "Integrated secure user authentication, admin dashboard, and booking cancellation features",
        "Deployed the application with a responsive UI and PostgreSQL database for robust data handling"
      ],
      skills: ["Python", "Django", "HTML", "CSS", "PostgreSQL", "Django ORM"]
    },
    {
      id: 3,
      title: "Full Stack Web Developer",
      course: "MERN Stack Web Developer",
      location: "KLU",
      period: "July 2023 - December 2023",
      description: [
        "Developed a Tourism and Hospitality web application enabling users to explore, book, and review travel services",
        "Built dynamic front-end interfaces using React and styled them with Tailwind CSS for responsive design",
        "Implemented backend services using Node.js and Express with MongoDB for data storage and retrieval",
        "Integrated third-party APIs for location-based search and enhanced user experience"
      ],
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Bootstrap"]
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
          Showcasing hands-on projects in full-stack development and cloud technologies
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
                      <span className="font-medium">{experience.course}</span>
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