
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      value: "bhanureddy4@gmail.com",
      link: "mailto:bhanureddy4@gmail.com"
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      title: "Phone",
      value: "+91-6305408838",
      link: "tel:+916305408838"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      title: "Location",
      value: "Jalandhar, Punjab, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-blue-600" size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bhanu-prakash-reddy-kurmitha",
      handle: "bhanu-prakash-reddy-kurmitha"
    },
    {
      icon: <Github className="text-gray-800" size={24} />,
      name: "GitHub",
      url: "https://github.com/kurmithabhanuprakashreddy",
      handle: "kurmithabhanuprakashreddy"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and data science.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">{info.title}</div>
                      {info.link !== "#" ? (
                        <a 
                          href={info.link} 
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-600">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Connect With Me</CardTitle>
                <CardDescription>Find me on social media and professional networks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex-shrink-0">{social.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {social.name}
                      </div>
                      <div className="text-gray-600 text-sm">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Send Me a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 mb-4">
              Thank you for visiting my portfolio! I'm excited to hear from you and discuss potential opportunities.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/bhanu-prakash-reddy-kurmitha" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
              >
                <Linkedin className="text-blue-600" size={24} />
              </a>
              <a 
                href="https://github.com/kurmithabhanuprakashreddy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Github className="text-gray-800" size={24} />
              </a>
              <a 
                href="mailto:bhanureddy4@gmail.com"
                className="p-3 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
              >
                <Mail className="text-green-600" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
