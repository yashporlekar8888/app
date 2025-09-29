import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { mockData } from '../data/mock';

const Hero = () => {
  const { personal } = mockData;

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-gray-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-black/5 to-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-gray-700">
              <MapPin className="w-4 h-4" />
              {personal.location}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight">
              Hi, I'm{" "}
              <span className="font-medium bg-gradient-to-r from-gray-900 via-black to-gray-700 bg-clip-text text-transparent">
                Yash Porlekar
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
              {personal.title}
            </p>
            
            <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
              {personal.tagline}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-black/90 hover:bg-black text-white border-0 px-8 py-3 text-base font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              View Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 text-gray-700 px-8 py-3 text-base font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Glass container for image */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
              <img 
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full border border-white/30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/15 to-gray-500/15 backdrop-blur-md rounded-full border border-white/20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;