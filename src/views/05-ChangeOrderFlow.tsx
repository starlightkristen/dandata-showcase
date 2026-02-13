import React from 'react';
import { motion } from 'framer-motion';
import { FileEdit } from 'lucide-react';
import { ViewContainer } from '../components/ViewContainer';

export const ChangeOrderFlow: React.FC = () => {
  return (
    <ViewContainer className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <FileEdit className="w-20 h-20 text-dandata-emerald mx-auto" />
        <h1 className="text-6xl font-bold">Scope Changes. Document It. Move On.</h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          Client wants something different? Create a change order, get approval, update the budget. Done.
        </p>
        <div className="glass p-8 rounded-2xl max-w-lg mx-auto">
          <div className="text-slate-400">Coming in full demo...</div>
        </div>
      </motion.div>
    </ViewContainer>
  );
};
