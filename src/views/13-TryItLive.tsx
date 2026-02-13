import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { ViewContainer } from '../components/ViewContainer';

export const TryItLive: React.FC = () => {
  const demoSections = [
    {
      title: 'Project Dashboard',
      description: 'See your projects, budgets, and progress',
      color: 'from-dandata-cyan to-blue-500',
    },
    {
      title: 'Expense Tracking',
      description: 'Watch AI process a receipt in real-time',
      color: 'from-dandata-emerald to-green-500',
    },
    {
      title: 'Invoice Generation',
      description: 'Create and send professional invoices',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <ViewContainer className="flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-12"
      >
        <div>
          <h1 className="text-6xl font-bold mb-4">Try It Live</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to see it in action? Jump into the live demo and experience DanData firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {demoSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="glass p-6 rounded-2xl hover:scale-105 transition-transform cursor-pointer"
            >
              <div className={`h-32 rounded-lg bg-gradient-to-br ${section.color} mb-4 flex items-center justify-center`}>
                <ExternalLink className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{section.title}</h3>
              <p className="text-slate-400 text-sm">{section.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-dandata-cyan to-dandata-emerald text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-dandata-cyan/50 transition-all duration-300 flex items-center gap-3 mx-auto">
            Launch Demo App
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>
    </ViewContainer>
  );
};
