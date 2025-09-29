import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../data/mock';

const About = () => {
  const { personal } = mockData;

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-bl from-gray-400/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            About{" "}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-gray-800">My Journey</h3>
                <p className="text-gray-600 leading-relaxed">
                  {personal.bio}
                </p>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="text-3xl font-light text-gray-800">2+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </Card>
              <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="text-3xl font-light text-gray-800">10+</div>
                <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
              </Card>
            </div>
          </div>

          {/* Interests & Values */}
          <div className="space-y-6">
            <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Innovation</h4>
                    <p className="text-sm text-gray-600">Always exploring new technologies and approaches</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Quality</h4>
                    <p className="text-sm text-gray-600">Writing clean, maintainable, and scalable code</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Learning</h4>
                    <p className="text-sm text-gray-600">Continuous improvement and staying updated</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-medium text-gray-800 mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['AI & Machine Learning', 'Microservices', 'Cloud Computing', 'Open Source', 'Problem Solving', 'System Design'].map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="bg-white/10 border-gray-300 text-gray-700 hover:bg-white/20 transition-colors duration-200"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;