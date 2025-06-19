
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/lovable-uploads/a353ad89-7dc6-4de2-9b0e-d2a7a247ca97.png"
                  alt="Kurmitha Bhanu Prakash Reddy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600">Kurmitha</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
              Data Analyst & AI Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Passionate about transforming data into insights and building innovative web solutions. 
              Experienced in Python, Java, SQL, and modern web technologies with a strong background 
              in data analysis and software development.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a 
                href="mailto:bhanureddy4@gmail.com" 
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={18} />
                bhanureddy4@gmail.com
              </a>
              <a 
                href="tel:+916305408838" 
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone size={18} />
                +91-6305408838
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a 
                href="https://www.linkedin.com/in/bhanu-prakash-reddy-kurmitha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="text-blue-600" size={24} />
              </a>
              <a 
                href="https://github.com/kurmithabhanuprakashreddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Github className="text-gray-800" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
