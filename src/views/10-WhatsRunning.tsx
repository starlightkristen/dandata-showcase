import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { ViewContainer } from '../components/ViewContainer';
import { mockProjects } from '../data';

export const WhatsRunning: React.FC = () => {
  return (
    <ViewContainer className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <Zap className="w-20 h-20 text-dandata-emerald mx-auto" />
        <h1 className="text-6xl font-bold">What's Live Today</h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          Real contractors, real projects, real data flowing through the system right now.
        </p>
        <div className="glass p-8 rounded-2xl max-w-2xl mx-auto space-y-4">
          {mockProjects.filter(p => p.status === 'in_progress').map(project => (
            <div key={project.id} className="text-left p-4 bg-white/5 rounded-lg">
              <div className="font-semibold text-white">{project.name}</div>
              <div className="text-sm text-slate-400">{project.client_name}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </ViewContainer>
  );
};
