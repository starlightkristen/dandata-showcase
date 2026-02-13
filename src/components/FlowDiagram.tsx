import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FlowStep {
  icon?: ReactNode;
  label: string;
}

interface FlowDiagramProps {
  steps: FlowStep[];
}

const FlowDiagram = ({ steps }: FlowDiagramProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 my-16">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 md:gap-4"
        >
          <div className="flex flex-col items-center gap-3 bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 min-w-[160px] hover:shadow-xl hover:scale-105 transition-all duration-300">
            {step.icon && (
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-md">
                <div className="text-white">
                  {step.icon}
                </div>
              </div>
            )}
            <span className="text-sm text-center text-text-primary font-semibold">
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight 
              className="hidden md:block text-accent-blue flex-shrink-0" 
              size={28} 
              strokeWidth={2.5} 
            />
          )}
          {index < steps.length - 1 && (
            <ArrowRight 
              className="md:hidden text-accent-blue flex-shrink-0 rotate-90" 
              size={28} 
              strokeWidth={2.5} 
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FlowDiagram;
