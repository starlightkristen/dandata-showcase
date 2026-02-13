import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { mockDashboardProjects } from '../data/mock-data';

const DashboardPreview = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
        return <CheckCircle className="text-accent-green" size={20} />;
      case 'watch':
        return <AlertCircle className="text-accent-amber" size={20} />;
      default:
        return <TrendingUp className="text-accent-blue" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return 'bg-gradient-to-r from-green-50 to-emerald-50 text-accent-green border-accent-green/20 shadow-green-100';
      case 'watch':
        return 'bg-gradient-to-r from-amber-50 to-yellow-50 text-accent-amber border-accent-amber/20 shadow-amber-100';
      default:
        return 'bg-gradient-to-r from-blue-50 to-indigo-50 text-accent-blue border-accent-blue/20 shadow-blue-100';
    }
  };

  const getProgressGradient = (status: string) => {
    switch (status) {
      case 'watch':
        return 'bg-gradient-to-r from-amber-400 to-orange-500';
      default:
        return 'bg-gradient-to-r from-blue-500 to-indigo-600';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        {mockDashboardProjects.map((project, index) => {
          const margin = ((project.budget - project.spent) / project.budget) * 100;
          const isSelected = selectedProject === index;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => setSelectedProject(index)}
              className={`bg-bg-card border rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                isSelected 
                  ? 'border-accent-blue ring-4 ring-accent-blue/10 shadow-xl' 
                  : 'border-border-subtle hover:border-accent-blue/40 shadow-lg hover:shadow-xl'
              }`}
              style={{
                boxShadow: isSelected ? 'var(--shadow-colored)' : 'var(--shadow-lg)'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold text-text-primary">
                  {project.name}
                </h3>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-semibold ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)}
                  {project.statusText}
                </div>
              </div>

              {project.status !== 'complete' ? (
                <>
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-text-muted text-sm mb-2 font-medium uppercase tracking-wide">Budget</p>
                      <p className="text-text-primary font-bold text-xl">
                        ${project.budget.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm mb-2 font-medium uppercase tracking-wide">Spent</p>
                      <p className="text-text-primary font-bold text-xl">
                        ${project.spent.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm mb-2 font-medium uppercase tracking-wide">Margin</p>
                      <p className="text-text-primary font-bold text-xl">
                        {Math.round(margin)}%
                      </p>
                    </div>
                  </div>

                  <div className="relative h-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(project.spent / project.budget) * 100}%` }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                      className={`absolute top-0 left-0 h-full rounded-full shadow-md ${getProgressGradient(project.status)}`}
                    />
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-3 text-text-secondary bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                  <CheckCircle className="text-accent-green" size={24} />
                  <span className="text-base font-semibold text-accent-green">Paid in full</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-text-secondary text-sm mt-8 italic font-medium"
      >
        Click any project to focus
      </motion.p>
    </div>
  );
};

export default DashboardPreview;
