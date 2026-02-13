import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      className="flex justify-center mt-16"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        delay: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <ChevronDown className="text-text-muted" size={32} strokeWidth={1.5} />
    </motion.div>
  );
};

export default ScrollIndicator;
