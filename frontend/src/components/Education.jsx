import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { mockData } from '../data/mock';

const Education = () => {
  const { education, certifications } = mockData;

  return (
    <section id="education" className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-bl from-gray-400/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Education &{" "}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic foundation and professional certifications that drive my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-800 mb-8 text-center lg:text-left">Academic Background</h3>
            
            {education.map((edu) => (
              <Card 
                key={edu.id} 
                className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-gray-700" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    
                    <Badge className="bg-gray-600 hover:bg-gray-700 text-white">
                      {edu.result}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-800 mb-8 text-center lg:text-left">Professional Certifications</h3>
            
            {certifications.map((cert) => (
              <Card 
                key={cert.id} 
                className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-gray-700" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">{cert.name}</h4>
                      <p className="text-gray-600">{cert.issuer}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                    
                    <Badge 
                      variant="outline" 
                      className="bg-white/10 border-gray-300 text-gray-700 hover:bg-white/20 transition-colors duration-200"
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}

            {/* Additional Learning */}
            <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center mx-auto">
                  <GraduationCap className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Continuous Learning</h4>
                  <p className="text-gray-600 text-sm mt-2">
                    Always exploring new technologies, attending workshops, and participating in online courses to stay current with industry trends and best practices.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center pt-2">
                  {['Online Courses', 'Tech Workshops', 'Industry Conferences', 'Open Source'].map((item, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="bg-white/10 border-gray-300 text-gray-700 hover:bg-white/20 transition-colors duration-200 text-xs"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;