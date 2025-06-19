
import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      period: "August 2023 - Present",
      cgpa: "CGPA: 6.73",
      status: "Ongoing",
      description: "Focused on computer science fundamentals, data structures, algorithms, and software engineering principles."
    },
    {
      degree: "Diploma - Civil Engineering",
      institution: "Jaya Prakash Narayan College of Engineering",
      location: "Mahabubagar, Telangana",
      period: "August 2020 - March 2023",
      cgpa: "Percentage: 67.7%",
      status: "Completed",
      description: "Strong foundation in engineering principles, mathematics, and analytical thinking."
    },
    {
      degree: "Secondary Education",
      institution: "Telangana State Model School",
      location: "Pebhair, Telangana",
      period: "June 2019 - March 2020",
      cgpa: "Percentage: 100%",
      status: "Completed",
      description: "Excellent academic performance with perfect scores in secondary education."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My educational journey that built the foundation for my technical expertise
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-24 bg-blue-200"></div>
              )}
              
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                      <h4 className="text-xl text-blue-600 font-semibold mb-4">{edu.institution}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {edu.period}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{edu.description}</p>
                    </div>

                    <div className="lg:ml-8 lg:text-right">
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-2 ${
                        edu.status === 'Ongoing' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {edu.status}
                      </div>
                      <div className="text-lg font-bold text-gray-800">
                        {edu.cgpa}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Academic Achievements */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Secondary Education Score</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">6.73</div>
              <div className="text-gray-600">Current CGPA</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">4+</div>
              <div className="text-gray-600">Certifications Earned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
