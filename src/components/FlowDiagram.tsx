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
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 my-12">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 md:gap-6"
        >
          <div className="flex flex-col items-center gap-2 bg-bg-card p-6 rounded-lg shadow-sm border border-border-subtle min-w-[140px]">
            {step.icon && (
              <div className="text-accent-blue mb-2">
                {step.icon}
              </div>
            )}
            <span className="text-sm text-center text-text-primary font-medium">
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight 
              className="hidden md:block text-text-muted flex-shrink-0" 
              size={24} 
              strokeWidth={1.5} 
            />
          )}
          {index < steps.length - 1 && (
            <ArrowRight 
              className="md:hidden text-text-muted flex-shrink-0 rotate-90" 
              size={24} 
              strokeWidth={1.5} 
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FlowDiagram;
