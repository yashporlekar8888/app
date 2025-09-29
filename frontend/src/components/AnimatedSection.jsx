import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  direction = "up",
  duration = 0.8,
  threshold = 0.1 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold,
    once: true,
    margin: "-100px 0px -100px 0px"
  });

  const directionVariants = {
    up: { y: 60, opacity: 0 },
    down: { y: -60, opacity: 0 },
    left: { x: -60, opacity: 0 },
    right: { x: 60, opacity: 0 },
    scale: { scale: 0.8, opacity: 0 },
    fade: { opacity: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={isInView ? { 
        y: 0, 
        x: 0, 
        scale: 1, 
        opacity: 1 
      } : directionVariants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Apple's preferred easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;