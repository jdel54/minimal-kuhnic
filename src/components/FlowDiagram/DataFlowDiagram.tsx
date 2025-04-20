import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Brain, User, Database, MessageSquare } from 'lucide-react';
import FlowNode from './FlowNode';
import FlowConnector from './FlowConnector';

interface StepLabel {
  text: string;
  nodeIndex: number;
}

const DataFlowDiagram: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLabel, setActiveLabel] = useState<StepLabel | null>(null);

  const labels = [
    { text: "We take your CRM, ERP, Analytics, Email, Calendar", nodeIndex: 0 },
    { text: "We bring it all together for you", nodeIndex: 1 },
    { text: "LLMs make sense of your data and generate answers", nodeIndex: 2 },
    { text: "Your users can talk to it — by chat or voice", nodeIndex: 3 },
    { text: "And they get what they need — fast", nodeIndex: 4 }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    let currentStepIndex = 0; // Index 0 to 8
    const durations = [1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500, 1500]; // Duration for each step
    const totalSteps = durations.length;
    let timeoutId: NodeJS.Timeout | null = null; 
    
    const advance = () => {
      // Set the active step index (for rendering)
      setCurrentStep(currentStepIndex);

      // Determine node index and if it's a node step
      const isNodeStep = currentStepIndex % 2 === 0;
      const nodeIndex = Math.floor(currentStepIndex / 2);

      // Set the active label if it's a node step
      if (isNodeStep && nodeIndex < labels.length) {
        setActiveLabel(labels[nodeIndex]);
      }

      // Calculate next step index and delay
      const nextStepIndex = (currentStepIndex + 1) % totalSteps;
      const delay = durations[currentStepIndex];

      currentStepIndex = nextStepIndex; // Update index for the next cycle

      // Schedule the next advance call
      timeoutId = setTimeout(advance, delay);
    };

    // Initial setup
    setCurrentStep(0); // Start showing node 0
    setActiveLabel(labels[0]); // Show label 0
    timeoutId = setTimeout(advance, durations[0]); // Schedule the first transition (to step 1)

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const Label: React.FC<{ text: string; isVisible: boolean }> = ({ text, isVisible }) => (
    <motion.div
      initial={false}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 10, 
        transition: { duration: 0.3 } 
      }}
      className="absolute -top-16 -left-20 transform -translate-x-1/2 bg-cyan-900/50 text-cyan-300 px-4 py-2 rounded-lg text-sm whitespace-nowrap"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      {text}
    </motion.div>
  );

  if (isMobile) {
    return (
      <div className="flex flex-col items-center py-10 px-4 space-y-8">
        {[Building2, Database, Brain, MessageSquare, User].map((Icon, index) => (
          <React.Fragment key={index}>
            <div className="relative">
              <FlowNode
                title={[
                  "Business Systems",
                  "Data Aggregation",
                  "LLM Models",
                  "Chat & Voice Agents",
                  "Human Being"
                ][index]}
                icon={Icon}
                delay={0}
                isActive={currentStep === index * 2}
              />
              <Label 
                text={labels[index]?.text || ''} 
                isVisible={currentStep === index * 2}
              />
            </div>
            {index < 4 && (
              <FlowConnector
                delay={0}
                isMobile={true}
                isActive={currentStep === index * 2 + 1}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-16">
      <div className="flex flex-row items-center justify-center flex-wrap md:flex-nowrap gap-0">
        {[Building2, Database, Brain, MessageSquare, User].map((Icon, index) => (
          <React.Fragment key={index}>
            <div className="relative">
              <FlowNode
                title={[
                  "Business Systems",
                  "Data Aggregation",
                  "LLM Models",
                  "Chat & Voice Agents",
                  "Human Being"
                ][index]}
                icon={Icon}
                delay={0}
                isActive={currentStep === index * 2}
              />
              <Label 
                text={labels[index]?.text || ''} 
                isVisible={currentStep === index * 2}
              />
            </div>
            {index < 4 && (
              <div className="flex items-center">
                <FlowConnector
                  delay={0}
                  isActive={currentStep === index * 2 + 1}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DataFlowDiagram;