import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import { ViewContainer } from '../components/ViewContainer';

export const MobileFirst: React.FC = () => {
  return (
    <ViewContainer className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <Smartphone className="w-20 h-20 text-dandata-cyan mx-auto" />
        <h1 className="text-6xl font-bold">Built for Where You Actually Are</h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          On the job site. In your truck. At the supply house. Works everywhere you work.
        </p>
        <div className="glass p-8 rounded-2xl max-w-lg mx-auto">
          <div className="text-slate-400">Coming in full demo...</div>
        </div>
      </motion.div>
    </ViewContainer>
  );
};
