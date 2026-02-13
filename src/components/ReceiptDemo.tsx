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
              className="btn-primary text-xl px-10 py-5"
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
            className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                <Mail className="text-white flex-shrink-0" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-text-primary text-lg">{mockReceipt.vendor}</span>
                  <span className="text-text-secondary text-sm font-medium">{mockReceipt.date}</span>
                </div>
                <p className="text-text-secondary text-sm mb-4 font-medium">Receipt for your purchase</p>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-text-primary font-bold text-lg">Total: ${mockReceipt.total.toFixed(2)}</p>
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
            className="bg-gradient-to-br from-white to-indigo-50 border-2 border-indigo-100 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="animate-spin rounded-full h-6 w-6 border-b-3 border-accent-blue"></div>
              <span className="text-text-primary font-semibold text-lg">Reading receipt...</span>
            </div>
            <div className="space-y-3">
              {mockReceipt.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex justify-between text-sm bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
                >
                  <span className="text-text-primary font-medium">{item.description}</span>
                  <span className="text-text-secondary font-semibold">${item.amount.toFixed(2)}</span>
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
            className="bg-gradient-to-br from-white to-green-50 border-2 border-green-100 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="animate-spin rounded-full h-6 w-6 border-b-3 border-accent-green"></div>
              <span className="text-text-primary font-semibold text-lg">Categorizing for taxes...</span>
            </div>
            <div className="space-y-3">
              {mockReceipt.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex justify-between items-center text-sm bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
                >
                  <div className="flex-1">
                    <span className="text-text-primary block font-medium">{item.description}</span>
                    <span className="text-text-secondary text-xs font-medium mt-1 block">{item.category} - Line {item.taxLine}</span>
                  </div>
                  <div className="p-2 bg-green-50 rounded-lg">
                    <CheckCircle className="text-accent-green" size={20} />
                  </div>
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
            className="bg-gradient-to-br from-white to-purple-50 border-2 border-purple-100 rounded-2xl p-8 shadow-xl"
          >
            <div className="mb-6">
              <label className="block text-text-primary font-bold text-lg mb-4">
                Which project is this for?
              </label>
              <div className="relative">
                <select
                  value={selectedProject}
                  onChange={(e) => handleProjectSelect(e.target.value)}
                  className="w-full px-5 py-4 border-2 border-purple-200 rounded-xl appearance-none bg-white text-text-primary font-semibold focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400 cursor-pointer shadow-sm hover:border-purple-300 transition-all"
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
            className="bg-gradient-to-br from-green-50 to-emerald-50 border-3 border-green-200 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                <CheckCircle className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-text-primary font-bold text-2xl">Done. Tax-ready.</h3>
                <p className="text-text-secondary text-base font-medium mt-1">Added to {selectedProject}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-green-200">
              <p className="text-text-secondary text-base">
                Time: <span className="font-bold text-text-primary text-lg">5 seconds</span>
                <span className="text-text-muted ml-2">(was 15 minutes)</span>
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-3 text-accent-blue hover:bg-blue-50 rounded-xl font-semibold transition-all duration-300 border-2 border-blue-200 hover:border-blue-400 shadow-sm hover:shadow-md"
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
