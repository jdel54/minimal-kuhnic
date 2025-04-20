import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.div 
      className="mt-16 text-center pb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.6, duration: 0.5 }}
    >
      <motion.div
        className="inline-flex items-center justify-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <CheckCircle size={20} className="text-green-500" />
        <span className="font-medium">Seamless Integration Flow</span>
      </motion.div>
    </motion.div>
  );
};

export default Footer;