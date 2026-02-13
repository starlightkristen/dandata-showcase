import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ViewContainer } from '../components/ViewContainer';

export const WhatsNext: React.FC = () => {
  const upcomingFeatures = [
    'Multi-user teams & permissions',
    'Subcontractor management & payments',
    'Advanced cost forecasting',
    'QuickBooks & Xero integration',
    'Photo documentation with AI tagging',
    'Voice-to-log for daily reports',
  ];

  return (
    <ViewContainer className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-8"
      >
        <Sparkles className="w-20 h-20 text-dandata-emerald mx-auto" />
        <h1 className="text-6xl font-bold">Next Friction Points</h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          We're not done. Every frustration, every bottleneck—we're building the solution.
        </p>
        
        <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Coming Soon</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="p-4 bg-white/5 rounded-lg text-left"
              >
                <div className="flex items-start gap-2">
                  <span className="text-dandata-cyan mt-1">→</span>
                  <span className="text-slate-300">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </ViewContainer>
  );
};
