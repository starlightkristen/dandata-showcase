import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList } from 'lucide-react';
import { ViewContainer } from '../components/ViewContainer';

export const DailyLogFlow: React.FC = () => {
  return (
    <ViewContainer className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <ClipboardList className="w-20 h-20 text-dandata-emerald mx-auto" />
        <h1 className="text-6xl font-bold">Cover Yourself in 60 Seconds</h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          Daily logs. Weather, crew, hours, what got done. Documentation that holds up when things go sideways.
        </p>
        <div className="glass p-8 rounded-2xl max-w-lg mx-auto">
          <div className="text-slate-400">Coming in full demo...</div>
        </div>
      </motion.div>
    </ViewContainer>
  );
};
