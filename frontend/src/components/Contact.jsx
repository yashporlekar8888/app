import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ExternalLink } from 'lucide-react';
import { mockData } from '../data/mock';

const Contact = () => {
  const { personal } = mockData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 relative bg-gradient-to-b from-transparent via-gray-50/30 to-gray-100/50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-gray-400/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Let's{" "}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-medium text-gray-800 mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Feel free to reach out if you're looking for a developer, have a question, 
                or just want to connect. I'm always happy to chat about technology, 
                career opportunities, or potential collaborations.
              </p>

              <div className="space-y-6">
                {/* Contact Details */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <a 
                      href={`mailto:${personal.email}`} 
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <a 
                      href={`tel:${personal.phone}`} 
                      className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Location</p>
                    <p className="text-gray-600">{personal.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-medium text-gray-800 mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  <a 
                    href={personal.linkedin} 
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </a>
                  <a 
                    href={personal.github} 
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-medium text-gray-800 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-gray-400 focus:ring-gray-400/20"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-gray-400 focus:ring-gray-400/20"
                    />
                  </div>
                </div>

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-gray-400 focus:ring-gray-400/20"
                />

                <Textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-white/50 backdrop-blur-sm border-white/30 focus:border-gray-400 focus:ring-gray-400/20 resize-none"
                />

                <Button 
                  type="submit" 
                  className="w-full bg-black/90 hover:bg-black text-white border-0 py-3 font-medium rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="text-sm text-gray-600">
                  Prefer email? Reach out directly at{" "}
                  <a 
                    href={`mailto:${personal.email}`} 
                    className="text-gray-800 hover:text-black transition-colors font-medium"
                  >
                    {personal.email}
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="mt-16">
          <Card className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 text-center">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Download My Resume</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get a comprehensive overview of my experience, skills, and achievements in a downloadable format.
            </p>
            <Button 
              className="bg-black/90 hover:bg-black text-white border-0 px-8 py-3 font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;