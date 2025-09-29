import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mock';

const Experience = () => {
  const { experience } = mockData;

  return (
    <section id="experience" className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-gray-300/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Professional{" "}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My journey in software development and the impact I've made
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card 
              key={exp.id} 
              className={`p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] ${
                exp.current ? 'ring-1 ring-gray-300/50' : ''
              }`}
            >
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Company & Role */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-700 font-medium text-lg">
                        {exp.company.charAt(0)}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-medium text-gray-800">{exp.role}</h3>
                      <p className="text-lg text-gray-600">{exp.company}</p>
                      {exp.current && (
                        <Badge className="bg-gray-600 hover:bg-gray-700 text-white text-xs">
                          Current Position
                        </Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>

                  {exp.achievements && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-800">Key Achievements:</h4>
                      <div className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Timeline & Location */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-800">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="bg-white/10 border-gray-300 text-gray-700 hover:bg-white/20 transition-colors duration-200 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline connector for visual appeal */}
        <div className="relative mt-12">
          <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 text-center">
            <p className="text-gray-600">
              <span className="font-medium text-gray-800">Career Timeline:</span> From intern to full-stack developer, 
              continuously growing and making impact in the software development industry.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;