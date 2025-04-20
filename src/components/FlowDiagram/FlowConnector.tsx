import React from 'react';
import { motion } from 'framer-motion';

interface FlowConnectorProps {
  delay: number;
  type?: 'straight' | 'curved';
  isMobile?: boolean;
  isActive?: boolean;
}

const FlowConnector: React.FC<FlowConnectorProps> = ({ delay, type = 'straight', isMobile = false, isActive = false }) => {
  if (isMobile) {
    return (
      <motion.div 
        className="h-12 w-px bg-gray-800 relative overflow-hidden"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay }}
      >
        {isActive && (
          <motion.div
            className="absolute top-0 left-0 w-full bg-cyan-500"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.5 }}
            style={{ boxShadow: '0 0 10px rgba(6,182,212,0.5)' }}
          />
        )}
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="w-24 h-px bg-gray-800 relative overflow-hidden"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {isActive && (
        <motion.div
          className="absolute top-0 left-0 h-full bg-cyan-500"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5 }}
          style={{ boxShadow: '0 0 10px rgba(6,182,212,0.5)' }}
        />
      )}
    </motion.div>
  );
};

export default FlowConnector;