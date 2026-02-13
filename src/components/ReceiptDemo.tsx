import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, ChevronDown } from 'lucide-react';
import { mockReceipt, mockProjects } from '../data/mock-data';

type DemoState = 'idle' | 'email' | 'extracting' | 'categorizing' | 'selecting' | 'complete';

const ReceiptDemo = () => {
  const [state, setState] = useState<DemoState>('idle');
  const [selectedProject, setSelectedProject] = useState<string>('');

  useEffect(() => {
    if (state === 'idle') return;

    const timings: Record<DemoState, number> = {
      idle: 0,
      email: 800,
      extracting: 1200,
      categorizing: 1000,
      selecting: 0, // User controlled
      complete: 0,
    };

    if (state !== 'selecting' && state !== 'complete') {
      const timer = setTimeout(() => {
        const nextState: Record<DemoState, DemoState> = {
          idle: 'email',
          email: 'extracting',
          extracting: 'categorizing',
          categorizing: 'selecting',
          selecting: 'selecting',
          complete: 'complete',
        };
        setState(nextState[state]);
      }, timings[state]);

      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleStart = () => {
    setState('email');
  };

  const handleProjectSelect = (project: string) => {
    setSelectedProject(project);
    setState('complete');
  };

  const handleReset = () => {
    setState('idle');
    setSelectedProject('');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {state === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center"
          >
            <button
              onClick={handleStart}
              className="px-8 py-4 bg-accent-blue text-white rounded-lg font-medium text-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Try it
            </button>
          </motion.div>
        )}

        {state === 'email' && (
          <motion.div
            key="email"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-bg-card border border-border-subtle rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-start gap-4">
              <Mail className="text-accent-blue flex-shrink-0" size={24} />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-text-primary">{mockReceipt.vendor}</span>
                  <span className="text-text-secondary text-sm">{mockReceipt.date}</span>
                </div>
                <p className="text-text-secondary text-sm mb-4">Receipt for your purchase</p>
                <div className="bg-bg-secondary p-4 rounded">
                  <p className="text-text-primary font-semibold">Total: ${mockReceipt.total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {state === 'extracting' && (
          <motion.div
            key="extracting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-bg-card border border-border-subtle rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-blue"></div>
              <span className="text-text-primary font-medium">Reading receipt...</span>
            </div>
            <div className="space-y-2">
              {mockReceipt.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex justify-between text-sm bg-bg-secondary p-3 rounded"
                >
                  <span className="text-text-primary">{item.description}</span>
                  <span className="text-text-secondary">${item.amount.toFixed(2)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {state === 'categorizing' && (
          <motion.div
            key="categorizing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-bg-card border border-border-subtle rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-blue"></div>
              <span className="text-text-primary font-medium">Categorizing for taxes...</span>
            </div>
            <div className="space-y-2">
              {mockReceipt.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex justify-between items-center text-sm bg-bg-secondary p-3 rounded"
                >
                  <div className="flex-1">
                    <span className="text-text-primary block">{item.description}</span>
                    <span className="text-text-secondary text-xs">{item.category} - Line {item.taxLine}</span>
                  </div>
                  <CheckCircle className="text-accent-green" size={18} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {state === 'selecting' && (
          <motion.div
            key="selecting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-bg-card border border-border-subtle rounded-lg p-6 shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-text-primary font-medium mb-3">
                Which project is this for?
              </label>
              <div className="relative">
                <select
                  value={selectedProject}
                  onChange={(e) => handleProjectSelect(e.target.value)}
                  className="w-full px-4 py-3 border border-border-subtle rounded-lg appearance-none bg-white text-text-primary font-medium focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent cursor-pointer"
                >
                  <option value="">Select a project...</option>
                  {mockProjects.map((project) => (
                    <option key={project} value={project}>
                      {project}
                    </option>
                  ))}
                </select>
                <ChevronDown 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-muted pointer-events-none" 
                  size={20} 
                />
              </div>
            </div>
          </motion.div>
        )}

        {state === 'complete' && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-accent-green/10 border-2 border-accent-green rounded-lg p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-accent-green" size={32} />
              <div>
                <h3 className="text-text-primary font-semibold text-lg">Done. Tax-ready.</h3>
                <p className="text-text-secondary text-sm">Added to {selectedProject}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-accent-green/20">
              <p className="text-text-secondary text-sm">
                Time: <span className="font-semibold text-text-primary">5 seconds</span>
                <span className="text-text-muted ml-2">(was 15 minutes)</span>
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 text-accent-blue hover:bg-accent-blue/10 rounded-lg font-medium transition-colors"
              >
                Try again
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReceiptDemo;
