import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../data/mock';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';

const About = () => {
  const { personal } = mockData;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-bl from-gray-400/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <AnimatedText 
            className="text-4xl lg:text-5xl font-light tracking-tight mb-6"
            staggerDelay={0.1}
          >
            About Me
          </AnimatedText>
          <AnimatedText 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            delay={0.3}
            staggerDelay={0.05}
          >
            Passionate about creating innovative solutions and continuous learning
          </AnimatedText>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <AnimatedSection delay={0.2} direction="left">
            <div className="space-y-6">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, threshold: 0.3 }}
              >
                <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium text-gray-800">My Journey</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {personal.bio}
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <AnimatedSection delay={0.4} direction="scale">
                  <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                    <motion.div 
                      className="text-3xl font-light text-gray-800"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
                      viewport={{ once: true }}
                    >
                      2+
                    </motion.div>
                    <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                  </Card>
                </AnimatedSection>
                <AnimatedSection delay={0.5} direction="scale">
                  <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                    <motion.div 
                      className="text-3xl font-light text-gray-800"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5, ease: "backOut" }}
                      viewport={{ once: true }}
                    >
                      10+
                    </motion.div>
                    <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>

          {/* Interests & Values */}
          <AnimatedSection delay={0.3} direction="right">
            <div className="space-y-6">
              <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">Core Values</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Innovation",
                      description: "Always exploring new technologies and approaches"
                    },
                    {
                      title: "Quality", 
                      description: "Writing clean, maintainable, and scalable code"
                    },
                    {
                      title: "Learning",
                      description: "Continuous improvement and staying updated"
                    }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 * index, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-medium text-gray-800">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Interests */}
              <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-medium text-gray-800 mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {['AI & Machine Learning', 'Microservices', 'Cloud Computing', 'Open Source', 'Problem Solving', 'System Design'].map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        delay: 0.1 * index, 
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      <Badge 
                        variant="outline" 
                        className="bg-white/10 border-gray-300 text-gray-700 hover:bg-white/20 transition-colors duration-200"
                      >
                        {interest}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;