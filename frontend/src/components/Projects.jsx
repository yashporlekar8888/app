import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Calendar, FolderOpen } from 'lucide-react';
import { mockData } from '../data/mock';

const Projects = () => {
  const { projects } = mockData;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-gray-600 hover:bg-gray-700 text-white';
      case 'Planning': return 'bg-gray-400 hover:bg-gray-500 text-white';
      default: return 'bg-gray-300 hover:bg-gray-400 text-gray-700';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 relative bg-gradient-to-b from-transparent via-gray-50/30 to-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-bl from-white/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-tr from-gray-400/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            Featured{" "}
            <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my work in full-stack development and system architecture
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="space-y-6">
                {/* Project Header */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <FolderOpen className="w-8 h-8 text-gray-600 group-hover:text-gray-800 transition-colors" />
                    <div className="flex gap-2">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-800">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="bg-white/10 border-gray-300 text-gray-700 hover:bg-white/20 transition-colors duration-200 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                {project.status === 'Completed' && (
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 bg-white/10 border-gray-300 hover:bg-white/20 text-gray-700 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 bg-white/10 border-gray-300 hover:bg-white/20 text-gray-700 transition-all duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                )}

                {project.status === 'Planning' && (
                  <div className="pt-2">
                    <Badge variant="outline" className="bg-gray-100/50 border-gray-300 text-gray-600 text-xs">
                      Coming Soon - Stay Tuned!
                    </Badge>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and exploring innovative technologies. 
              Check back regularly or connect with me to stay updated on my latest work.
            </p>
            <Button 
              className="bg-black/90 hover:bg-black text-white border-0 px-8 py-2 font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              View All Work
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;