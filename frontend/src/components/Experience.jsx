import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';
import { mockData } from '../data/mock';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';

const Experience = () => {
  const { experience } = mockData;

  return (
    <section id="experience" className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-gray-300/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <AnimatedText 
            className="text-4xl lg:text-5xl font-light tracking-tight mb-6"
            staggerDelay={0.1}
          >
            Professional Experience
          </AnimatedText>
          <AnimatedText 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            delay={0.3}
            staggerDelay={0.05}
          >
            My journey in software development and the impact I've made
          </AnimatedText>
        </AnimatedSection>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <AnimatedSection 
              key={exp.id} 
              delay={0.2 + (index * 0.2)}
              direction="up"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card 
                  className={`p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 ${
                    exp.current ? 'ring-1 ring-gray-300/50' : ''
                  }`}
                >
                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Company & Role */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start gap-3">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center flex-shrink-0"
                          whileHover={{ 
                            rotate: 360,
                            transition: { duration: 0.5 }
                          }}
                        >
                          <span className="text-gray-700 font-medium text-lg">
                            {exp.company.charAt(0)}
                          </span>
                        </motion.div>
                        <div className="space-y-1">
                          <motion.h3 
                            className="text-xl font-medium text-gray-800"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                          >
                            {exp.role}
                          </motion.h3>
                          <motion.p 
                            className="text-lg text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            {exp.company}
                          </motion.p>
                          {exp.current && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
                            >
                              <Badge className="bg-gray-600 hover:bg-gray-700 text-white text-xs">
                                Current Position
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      <motion.p 
                        className="text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        {exp.description}
                      </motion.p>

                      {exp.achievements && (
                        <motion.div 
                          className="space-y-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        >
                          <h4 className="font-medium text-gray-800">Key Achievements:</h4>
                          <div className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.div 
                                key={idx} 
                                className="flex items-start gap-2"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ 
                                  delay: 0.5 + (idx * 0.1), 
                                  duration: 0.4 
                                }}
                              >
                                <CheckCircle className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Timeline & Location */}
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      <h4 className="font-medium text-gray-800">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: 0.1 * idx, 
                              duration: 0.3,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge 
                              variant="outline" 
                              className="bg-white/10 border-gray-300 text-gray-700 hover:bg-white/20 transition-colors duration-200 text-xs"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Timeline connector for visual appeal */}
        <AnimatedSection delay={0.8} className="mt-12">
          <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 text-center">
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-medium text-gray-800">Career Timeline:</span> From intern to full-stack developer, 
              continuously growing and making impact in the software development industry.
            </motion.p>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;