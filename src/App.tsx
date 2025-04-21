import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import DataFlowDiagram from './components/FlowDiagram/DataFlowDiagram';

function App() {
  useEffect(() => {
    document.title = 'Data Flow Animation';
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-transparent flex flex-col items-center justify-center px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl w-full">
        <DataFlowDiagram />
      </div>
    </motion.div>
  );
}

export default App;