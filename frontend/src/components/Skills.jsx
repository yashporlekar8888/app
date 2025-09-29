import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import * as Icons from 'lucide-react';
import { mockData } from '../data/mock';

const Skills = () => {
  const { skills } = mockData;

  const renderSkillIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : <Icons.Code className="w-5 h-5" />;
  };

  const SkillCard = ({ title, skillList, showProgress = false }) => (
    <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
      <h3 className="text-xl font-medium text-gray-800 mb-6">{title}</h3>
      <div className="space-y-4">
        {skillList.map((skill, index) => (
          <div key={index} className="group">
            {showProgress ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {renderSkillIcon(skill.icon)}
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-2 bg-gray-200/50"
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {renderSkillIcon(skill.icon)}
                <Badge 
                  variant="outline" 
                  className="bg-white/10 border-gray-300 text-gray-700 hover:bg-white/20 transition-colors duration-200 group-hover:scale-105"
                >
                  {skill.name}
                </Badge>
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <section id="skills" className="py-20 px-4 relative bg-gradient-to-b from-transparent via-gray-50/30 to-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-white/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-tl from-gray-400/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Technical{" "}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <SkillCard 
            title="Core Technologies" 
            skillList={skills.core} 
            showProgress={true} 
          />
          
          <SkillCard 
            title="Exploring" 
            skillList={skills.beginner} 
            showProgress={true} 
          />
          
          <SkillCard 
            title="Other Technologies" 
            skillList={skills.other} 
            showProgress={false} 
          />
        </div>

        {/* Additional Tech Stack Display */}
        <div className="mt-12">
          <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">Full Stack Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <Icons.Server className="w-8 h-8 mx-auto text-gray-600" />
                <div className="text-sm font-medium text-gray-700">Backend</div>
                <div className="text-xs text-gray-500">Java, Spring Boot</div>
              </div>
              <div className="space-y-2">
                <Icons.Globe className="w-8 h-8 mx-auto text-gray-600" />
                <div className="text-sm font-medium text-gray-700">Frontend</div>
                <div className="text-xs text-gray-500">React, Material UI</div>
              </div>
              <div className="space-y-2">
                <Icons.Database className="w-8 h-8 mx-auto text-gray-600" />
                <div className="text-sm font-medium text-gray-700">Database</div>
                <div className="text-xs text-gray-500">MySQL, PostgreSQL</div>
              </div>
              <div className="space-y-2">
                <Icons.Cloud className="w-8 h-8 mx-auto text-gray-600" />
                <div className="text-sm font-medium text-gray-700">Tools</div>
                <div className="text-xs text-gray-500">Git, Docker, SonarQube</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;