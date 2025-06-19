
import React from 'react';
import { Award, Users, Code, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Database className="text-blue-600" size={32} />,
      title: "Data Analysis Expert",
      description: "Specialized in analyzing large datasets to uncover business insights"
    },
    {
      icon: <Code className="text-green-600" size={32} />,
      title: "Full Stack Developer",
      description: "Proficient in both frontend and backend development"
    },
    {
      icon: <Award className="text-purple-600" size={32} />,
      title: "Certified Professional",
      description: "Multiple certifications in cloud computing and data analysis"
    },
    {
      icon: <Users className="text-orange-600" size={32} />,
      title: "Team Player",
      description: "Strong leadership and project management skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Data Analyst and Full Stack Developer with expertise in transforming 
            complex data into actionable insights and building scalable web applications. 
            Currently pursuing my Bachelor's in Computer Science and Engineering at Lovely Professional University.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">My Journey</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey in technology began with a fascination for data and its potential to solve 
                real-world problems. Through various internships and projects, I've developed expertise 
                in data analysis, machine learning, and full-stack development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My goal is to leverage data science and software development to create innovative 
                solutions that make a positive impact.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Problem Solving</h4>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Leadership</h4>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Adaptability</h4>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-600 h-3 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Critical Thinking</h4>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-orange-600 h-3 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
