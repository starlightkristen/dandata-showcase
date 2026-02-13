import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertCircle, Zap } from 'lucide-react';
import { ViewContainer } from '../components/ViewContainer';

export const TheGap: React.FC = () => {
  const traditionalSteps = [
    { time: '0:00', task: 'Job complete, pack up tools' },
    { time: '5:00', task: 'Drive to office or home' },
    { time: '15:00', task: 'Find receipts in truck/wallet' },
    { time: '20:00', task: 'Log into accounting software' },
    { time: '22:00', task: 'Manually enter vendor, amount, date' },
    { time: '25:00', task: 'Match to project, categorize for taxes' },
    { time: '30:00', task: 'Save and file physical receipt' },
  ];

  const dandataSteps = [
    { time: '0:00', task: 'Receipt email arrives' },
    { time: '2:00', task: 'AI extracts all data' },
    { time: '5:00', task: 'Matches to project (87% confidence)' },
    { time: '7:00', task: 'Tax category assigned (95% confidence)' },
    { time: '8:00', task: 'Done. Back to work.' },
  ];

  return (
    <ViewContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">The Gap</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            That gap between doing and recording? That's where momentum dies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl border-2 border-red-500/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-red-500" />
              <h2 className="text-3xl font-bold text-red-400">Traditional Way</h2>
            </div>
            
            <div className="space-y-4">
              {traditionalSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="text-red-400 font-mono text-sm font-bold w-12">
                    {step.time}
                  </div>
                  <div className="text-slate-300 flex-1">{step.task}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-red-500/30">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Total Time:</span>
                <span className="text-3xl font-bold text-red-400">30+ min</span>
              </div>
            </div>
          </motion.div>

          {/* DanData Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl border-2 border-dandata-cyan/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-dandata-cyan" />
              <h2 className="text-3xl font-bold text-dandata-cyan">DanData Way</h2>
            </div>
            
            <div className="space-y-4">
              {dandataSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="text-dandata-cyan font-mono text-sm font-bold w-12">
                    {step.time}
                  </div>
                  <div className="text-slate-300 flex-1">{step.task}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-dandata-cyan/30">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Total Time:</span>
                <span className="text-3xl font-bold text-dandata-cyan">8 sec</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 glass px-8 py-4 rounded-xl">
            <Clock className="w-6 h-6 text-dandata-emerald" />
            <div className="text-left">
              <div className="text-sm text-slate-400">Time Saved per Expense</div>
              <div className="text-2xl font-bold text-dandata-emerald">29 minutes, 52 seconds</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </ViewContainer>
  );
};
