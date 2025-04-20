import React from 'react';
import { motion } from 'framer-motion';

interface PulsingDotProps {
  delay: number;
  color?: string;
}

const PulsingDot: React.FC<PulsingDotProps> = ({ delay, color = '#3B82F6' }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ scale: 0.1, opacity: 1 }}
        animate={{ 
          scale: [0.1, 1.5, 0.1],
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          delay,
        }}
      />
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }}></div>
    </motion.div>
  );
};

export default PulsingDot;