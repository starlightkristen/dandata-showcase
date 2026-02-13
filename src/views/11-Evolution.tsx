import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { ViewContainer } from '../components/ViewContainer';
import { developmentTimeline } from '../data';

export const Evolution: React.FC = () => {
  return (
    <ViewContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="text-center">
          <Clock className="w-16 h-16 text-dandata-cyan mx-auto mb-4" />
          <h1 className="text-6xl font-bold mb-4">How It Got Here</h1>
          <p className="text-xl text-slate-400">Built in phases. Each one solving a real pain point.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {developmentTimeline.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`glass p-6 rounded-xl ${
                phase.status === 'completed' ? 'border-2 border-dandata-emerald/30' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{phase.phase}</h3>
                  <div className="text-slate-400">{phase.period}</div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm ${
                    phase.status === 'completed'
                      ? 'bg-dandata-emerald/20 text-dandata-emerald'
                      : 'bg-slate-700 text-slate-400'
                  }`}
                >
                  {phase.status === 'completed' ? '✓ Complete' : 'Planned'}
                </div>
              </div>
              <ul className="space-y-2">
                {phase.features.map((feature, i) => (
                  <li key={i} className="text-slate-300 flex items-center gap-2">
                    <span className="text-dandata-cyan">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ViewContainer>
  );
};
