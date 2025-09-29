import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import * as Icons from 'lucide-react';
import { mockData } from '../data/mock';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const { skills } = mockData;

  const renderSkillIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : <Icons.Code className="w-5 h-5" />;
  };

  const SkillCard = ({ title, skillList, showProgress = false, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    return (
      <AnimatedSection delay={delay}>
        <Card 
          ref={ref}
          className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 h-full"
        >
          <h3 className="text-xl font-medium text-gray-800 mb-6">{title}</h3>
          <div className="space-y-4">
            {skillList.map((skill, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ 
                  delay: delay + (index * 0.1), 
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {showProgress ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <motion.div
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={isInView ? { rotate: 0, opacity: 1 } : { rotate: -90, opacity: 0 }}
                          transition={{ delay: delay + (index * 0.1) + 0.2, duration: 0.4 }}
                        >
                          {renderSkillIcon(skill.icon)}
                        </motion.div>
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                      </div>
                      <motion.span 
                        className="text-sm text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: delay + (index * 0.1) + 0.5 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={0}
                        className="h-2 bg-gray-200/50"
                      />
                      <motion.div
                        className="absolute top-0 left-0 h-2 bg-gray-600 rounded-full"
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
                        transition={{ 
                          delay: delay + (index * 0.1) + 0.3, 
                          duration: 1.2,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ 
                        delay: delay + (index * 0.05), 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {renderSkillIcon(skill.icon)}
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="bg-white/10 border-gray-300 text-gray-700 hover:bg-white/20 transition-colors duration-200"
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Card>
      </AnimatedSection>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 relative bg-gradient-to-b from-transparent via-gray-50/30 to-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tl from-gray-400/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <AnimatedText 
            className="text-4xl lg:text-5xl font-light tracking-tight mb-6"
            staggerDelay={0.1}
          >
            Technical Skills
          </AnimatedText>
          <AnimatedText 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            delay={0.3}
            staggerDelay={0.05}
          >
            Technologies and tools I work with to build amazing applications
          </AnimatedText>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          <SkillCard 
            title="Core Technologies" 
            skillList={skills.core} 
            showProgress={true} 
            delay={0.2}
          />
          
          <SkillCard 
            title="Exploring" 
            skillList={skills.beginner} 
            showProgress={true} 
            delay={0.4}
          />
          
          <SkillCard 
            title="Other Technologies" 
            skillList={skills.other} 
            showProgress={false} 
            delay={0.6}
          />
        </div>

        {/* Additional Tech Stack Display */}
        <AnimatedSection delay={0.8} className="mt-12">
          <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">Full Stack Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Icons.Server, title: "Backend", desc: "Java, Spring Boot" },
                { icon: Icons.Globe, title: "Frontend", desc: "React, Material UI" },
                { icon: Icons.Database, title: "Database", desc: "MySQL, PostgreSQL" },
                { icon: Icons.Cloud, title: "Tools", desc: "Git, Docker, SonarQube" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.2 * index, 
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    initial={{ rotate: -90, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ delay: 0.2 * index + 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="w-8 h-8 mx-auto text-gray-600" />
                  </motion.div>
                  <div className="text-sm font-medium text-gray-700">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;