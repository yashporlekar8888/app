import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { mockData } from '../data/mock';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import ParallaxElement from './ParallaxElement';

const Hero = () => {
  const { personal } = mockData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      rotateY: -15,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <ParallaxElement speed={0.3} className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
      </ParallaxElement>
      <ParallaxElement speed={-0.2} className="absolute inset-0 -z-10">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-gray-500/10 to-transparent rounded-full blur-3xl"></div>
      </ParallaxElement>
      <ParallaxElement speed={0.1} className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-black/5 to-white/5 rounded-full blur-3xl"></div>
      </ParallaxElement>

      <motion.div 
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8">
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-4 h-4" />
              {personal.location}
            </motion.div>
            
            <div className="space-y-2">
              <AnimatedText
                className="text-5xl lg:text-7xl font-light tracking-tight"
                staggerDelay={0.1}
                delay={0.2}
              >
                Hi, I'm Yash Porlekar
              </AnimatedText>
              
              <AnimatedText
                className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed"
                delay={0.8}
                staggerDelay={0.05}
              >
                {personal.title}
              </AnimatedText>
              
              <AnimatedText
                className="text-lg text-gray-500 max-w-2xl leading-relaxed"
                delay={1.2}
                staggerDelay={0.03}
              >
                {personal.tagline}
              </AnimatedText>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-black/90 hover:bg-black text-white border-0 px-8 py-3 text-base font-medium rounded-full transition-all duration-300 hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 text-gray-700 px-8 py-3 text-base font-medium rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Content - Profile Image */}
        <motion.div 
          className="flex justify-center lg:justify-end"
          variants={imageVariants}
        >
          <div className="relative group">
            {/* Glass container for image */}
            <motion.div 
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.img 
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              
              {/* Overlay gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full border border-white/30"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/15 to-gray-500/15 backdrop-blur-md rounded-full border border-white/20"
              animate={{ 
                y: [0, 10, 0],
                x: [0, 5, 0],
                opacity: [0.7, 1, 0.7] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;