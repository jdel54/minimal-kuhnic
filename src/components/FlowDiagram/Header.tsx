import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-3xl md:text-4xl font-bold text-gray-100 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        How It Works
      </motion.h1>
      <motion.div 
        className="h-1 w-24 bg-cyan-500 mx-auto rounded"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      />
    </motion.div>
  );
};

export default Header;