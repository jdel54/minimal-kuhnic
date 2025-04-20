import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FlowNodeProps {
  title: string;
  icon: LucideIcon;
  description?: string[];
  delay: number;
  isActive?: boolean;
}

const FlowNode: React.FC<FlowNodeProps> = ({ title, icon: Icon, description, delay, isActive = false }) => {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div 
        className={`w-32 h-32 flex flex-col items-center justify-center p-4 bg-black border border-gray-800 rounded-lg shadow-lg transition-all duration-500 ${
          isActive ? 'shadow-[0_0_30px_rgba(6,182,212,0.5)] border-cyan-500' : ''
        }`}
        whileHover={{ scale: 1.05 }}
        animate={isActive ? {
          scale: [1, 1.05, 1],
          transition: { duration: 1 }
        } : {}}
      >
        <Icon size={28} className={`mb-3 transition-colors duration-500 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
        <h3 className={`font-medium text-center text-sm transition-colors duration-500 ${isActive ? 'text-cyan-100' : 'text-gray-500'}`}>{title}</h3>
      </motion.div>
      
      {description && (
        <motion.div 
          className="mt-4 text-xs text-center text-gray-400 w-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {description.map((line, index) => (
            <p key={index} className="mb-1">{line}</p>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default FlowNode;