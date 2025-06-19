import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "SQL", level: 95 },
        { name: "Java", level: 85 },
        { name: "R", level: 80 }
      ]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Apache Hadoop", level: 85 },
        { name: "Tableau", level: 90 },
        { name: "Power BI", level: 88 },
        { name: "SQL Workbench", level: 92 },
        { name: "Rapid Miner", level: 80 }
      ]
    },
    {
      title: "Technologies",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "AI", level: 88 },
        { name: "Data Visualization", level: 90 },
        { name: "Database Management", level: 88 },
        { name: "Web Development", level: 82 },
        { name: "Cloud Computing", level: 78 }
      ]
    }
  ];

  const getColorClass = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-1000 ease-out ${getColorClass(skill.level)}`}
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Cloud Computing", provider: "NPTEL Swayam", year: "2025" },
              { name: "Data Analysis with Tableau", provider: "Coursera", year: "2024" },
              { name: "Data Structures & Algorithms", provider: "Udemy", year: "2024" },
              { name: "R Programming", provider: "Coursera", year: "2024" }
            ].map((cert, index) => (
              <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="text-blue-600 font-semibold mb-2">{cert.name}</div>
                <div className="text-gray-600 text-sm">{cert.provider}</div>
                <div className="text-gray-500 text-xs mt-1">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
