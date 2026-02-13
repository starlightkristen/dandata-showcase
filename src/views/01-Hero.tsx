import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { ViewContainer } from '../components/ViewContainer';
import { mockProjects, mockExpenses } from '../data';

export const Hero: React.FC = () => {
  const activeProjects = mockProjects.filter(p => p.status === 'in_progress').length;
  const totalExpenses = mockExpenses.length;
  const avgProcessingTime = 8;

  const stats = [
    { label: 'Active Projects', value: activeProjects, icon: TrendingUp },
    { label: 'Expenses Tracked', value: totalExpenses, icon: DollarSign },
    { label: 'Avg Processing Time', value: `${avgProcessingTime} sec`, icon: Clock },
  ];

  return (
    <ViewContainer className="flex items-center justify-center">
      <div className="text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            DanData
          </h1>
          <p className="text-4xl text-slate-400 font-light">
            Built for Momentum
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="glass p-8 rounded-2xl"
            >
              <stat.icon className="w-8 h-8 text-dandata-cyan mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-dandata-cyan to-dandata-emerald text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-dandata-cyan/50 transition-all duration-300 flex items-center gap-3 mx-auto">
            See How It Works
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </ViewContainer>
  );
};
