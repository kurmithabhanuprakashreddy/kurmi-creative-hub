
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "DevLoom Labs",
      location: "Remote",
      period: "Aug 2024 - Jan 2025",
      description: [
        "Analyzed and interpreted large datasets to uncover insights supporting business decisions",
        "Automated data cleaning and reporting tasks to improve workflow efficiency",
        "Successfully completed a Data Analyst Internship with certification"
      ],
      tech: ["Tableau", "SQL", "MS Excel", "Google Sheets", "Python", "Power BI"],
      certificate: "Data Analyst certificate"
    },
    {
      title: "Core and Advanced Java Developer",
      company: "Board Infinity",
      location: "Remote",
      period: "July 2024",
      description: [
        "Specialized training in Core and Advanced Java, covering OOP, multithreading, collections, JDBC, and servlets",
        "Developed hands-on projects using Java frameworks and tools like Hibernate, Spring, REST API, Maven and best coding practices",
        "Gained experience in debugging, performance optimization, and database connectivity",
        "Strengthened problem-solving skills through real-world Java applications"
      ],
      tech: ["Java", "Spring", "Hibernate", "REST API", "Maven", "JDBC", "Servlets"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and key internships that shaped my expertise
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-blue-200"></div>
              )}
              
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Calendar className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    {exp.certificate && (
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <ExternalLink size={16} />
                        {exp.certificate}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
