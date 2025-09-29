import React from 'react';
import { Heart, Coffee, Linkedin, Github, Mail } from 'lucide-react';
import { mockData } from '../data/mock';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  const { personal } = mockData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-100/50 to-transparent py-12 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-white/20 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <AnimatedSection delay={0.2} direction="left">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-gray-900">Yash.dev</h3>
                <p className="text-gray-600 leading-relaxed">
                  Java Full Stack Developer & AI Enthusiast passionate about building 
                  scalable applications and exploring innovative technologies.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>and lots of</span>
                  <Coffee className="w-4 h-4 text-yellow-600" />
                </div>
              </div>
            </AnimatedSection>

            {/* Quick Links */}
            <AnimatedSection delay={0.3}>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-800">Quick Links</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'About', href: '#about' },
                    { name: 'Skills', href: '#skills' },
                    { name: 'Experience', href: '#experience' },
                    { name: 'Projects', href: '#projects' },
                    { name: 'Education', href: '#education' },
                    { name: 'Contact', href: '#contact' }
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Contact & Social */}
            <AnimatedSection delay={0.4} direction="right">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-800">Get In Touch</h4>
                <div className="space-y-2">
                  <a 
                    href={`mailto:${personal.email}`}
                    className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {personal.email}
                  </a>
                  <p className="text-gray-600">{personal.location}</p>
                </div>
                <div className="flex gap-3 pt-2">
                  <a 
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/80 transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </a>
                  <a 
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/80 transition-all duration-200 hover:scale-110"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/80 transition-all duration-200 hover:scale-110"
                  >
                    <Mail className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Bottom Bar */}
        <AnimatedSection delay={0.5}>
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-600 text-sm">
                © {currentYear} Yash Porlekar. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <a 
                  href="#" 
                  className="hover:text-gray-900 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Back to Top
                </a>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>Pune, Maharashtra</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;