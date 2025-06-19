
import React from 'react';
import { Github, ExternalLink, Calendar, Code2, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Face Glow Market - E-Commerce Website",
      description: "A comprehensive skincare product website built with Lovable no-code platform, featuring clean UI, product showcases, and responsive design for enhanced user engagement.",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
      features: [
        "Built a skincare product website using Lovable no-code platform with a focus on clean UI and ease of use",
        "Designed sections for featured items and product highlights to improve user engagement",
        "Integrated GitHub for source control and project tracking",
        "Ensured the site was fully responsive across devices for better accessibility"
      ],
      liveLink: "https://kurmithabhanupraka.wixsite.com/nothing",
      githubLink: "https://github.com/kurmithabhanuprakashreddy/face-glow-market",
      date: "May 2025",
      category: "Web Development"
    },
    {
      title: "AI-Powered Leave Management System (MCP Server)",
      description: "Developed an AI-based leave management system using MCP framework to handle employee leave requests through intelligent automation and natural language processing.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      technologies: ["Python", "MCP CLI", "Typer", "Claude Desktop", "Virtual Environments"],
      features: [
        "Developed an AI-based leave management system using MCP framework to handle employee leave requests",
        "Implemented intelligent automation to streamline HR processes and reduce manual workload",
        "Integrated natural language processing to understand and template HR query responses",
        "Tested and refined the agent logic to ensure accurate understanding of natural language leave queries"
      ],
      liveLink: "#",
      githubLink: "https://github.com/kurmithabhanuprakashreddy/mcp-server",
      date: "April 2025",
      category: "AI/ML"
    },
    {
      title: "Data Analysis & Dashboarding Project",
      description: "Comprehensive data analysis project involving CSV dataset processing, exploratory data analysis using MS Excel and Tableau, with interactive dashboards for data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["MS Excel", "Tableau", "Data Analysis", "Data Visualization", "Statistical Analysis"],
      features: [
        "Collected and preprocessed a CSV dataset",
        "Performed comprehensive exploratory data analysis using MS Excel and Tableau",
        "Created interactive dashboards in Tableau to visualize KPIs, trends, and anomalies",
        "Designed pivot tables, charts, and conditional formatting in Excel to complement Tableau insights"
      ],
      liveLink: "#",
      githubLink: "#",
      date: "November 2024",
      category: "Data Analysis"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development":
        return <Globe className="text-blue-600" size={20} />;
      case "AI/ML":
        return <Code2 className="text-purple-600" size={20} />;
      case "Data Analysis":
        return <Database className="text-green-600" size={20} />;
      default:
        return <Code2 className="text-gray-600" size={20} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development":
        return "bg-blue-100 text-blue-800";
      case "AI/ML":
        return "bg-purple-100 text-purple-800";
      case "Data Analysis":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work in web development, data analysis, and AI/ML projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {getCategoryIcon(project.category)}
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2 text-white bg-black/50 px-2 py-1 rounded text-xs">
                  <Calendar size={12} />
                  {project.date}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 line-clamp-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/*Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveLink !== "#" && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubLink !== "#" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-gray-300 hover:bg-gray-50"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 px-8"
            onClick={() => window.open('https://github.com/kurmithabhanuprakashreddy', '_blank')}
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
