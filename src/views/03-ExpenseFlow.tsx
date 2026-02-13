import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Brain, Target, Tag, Play, RotateCcw } from 'lucide-react';
import { ViewContainer } from '../components/ViewContainer';

export const ExpenseFlow: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const steps = [
    {
      icon: Mail,
      title: 'Email Arrives',
      description: 'Receipt from Home Depot',
      details: '$1,247.83 • Feb 10, 2026',
      color: 'text-blue-400',
      duration: 2000,
    },
    {
      icon: Brain,
      title: 'AI Extracts Data',
      description: 'Vendor, amount, date identified',
      details: 'Home Depot • $1,247.83 • 2026-02-10',
      color: 'text-purple-400',
      duration: 3000,
    },
    {
      icon: Target,
      title: 'Project Match',
      description: 'Wilson Kitchen Remodel',
      details: '87% confidence',
      color: 'text-dandata-cyan',
      duration: 2000,
    },
    {
      icon: Tag,
      title: 'Tax Category',
      description: 'Materials - Schedule C Line 27a',
      details: '95% confidence',
      color: 'text-dandata-emerald',
      duration: 1000,
    },
  ];

  const runDemo = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setElapsedTime(0);

    let totalTime = 0;
    steps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, totalTime);
      totalTime += step.duration;
    });

    const timer = setInterval(() => {
      setElapsedTime((prev) => {
        if (prev >= 8) {
          clearInterval(timer);
          return 8;
        }
        return prev + 0.1;
      });
    }, 100);

    setTimeout(() => {
      setIsRunning(false);
    }, totalTime);
  };

  const reset = () => {
    setCurrentStep(0);
    setElapsedTime(0);
    setIsRunning(false);
  };

  return (
    <ViewContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Receipt to Recorded: 8 Seconds</h1>
          <p className="text-xl text-slate-400">
            Watch how DanData processes an expense in real-time
          </p>
        </div>

        <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              {!isRunning && currentStep === 0 ? (
                <button
                  onClick={runDemo}
                  className="flex items-center gap-2 px-6 py-3 bg-dandata-cyan text-white rounded-lg font-semibold hover:bg-dandata-cyan/80 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  Run Demo
                </button>
              ) : (
                <button
                  onClick={reset}
                  disabled={isRunning}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-colors disabled:opacity-50"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              )}
            </div>

            <div className="text-right">
              <div className="text-sm text-slate-400">Elapsed Time</div>
              <div className="text-4xl font-bold font-mono text-dandata-cyan">
                {elapsedTime.toFixed(1)}s
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.3, scale: 0.95 }}
                animate={{
                  opacity: currentStep > index ? 1 : 0.3,
                  scale: currentStep > index ? 1 : 0.95,
                }}
                transition={{ duration: 0.3 }}
                className={`relative p-6 rounded-xl border-2 ${
                  currentStep > index
                    ? 'bg-white/5 border-white/20'
                    : 'bg-transparent border-slate-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      currentStep > index ? 'bg-white/10' : 'bg-slate-800'
                    }`}
                  >
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-slate-400 mb-2">{step.description}</p>
                    
                    <AnimatePresence>
                      {currentStep > index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-sm font-mono text-dandata-emerald"
                        >
                          {step.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <AnimatePresence>
                    {currentStep > index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="w-6 h-6 rounded-full bg-dandata-emerald flex items-center justify-center"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {currentStep === steps.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-gradient-to-r from-dandata-cyan/20 to-dandata-emerald/20 rounded-xl border border-dandata-cyan/30"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-dandata-emerald mb-2">
                  ✓ Complete
                </div>
                <div className="text-slate-300">
                  Expense recorded and categorized. You never left the job site.
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </ViewContainer>
  );
};
