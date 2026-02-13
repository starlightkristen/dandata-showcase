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
        return 'bg-accent-green/10 text-accent-green border-accent-green/20';
      case 'watch':
        return 'bg-accent-amber/10 text-accent-amber border-accent-amber/20';
      default:
        return 'bg-accent-blue/10 text-accent-blue border-accent-blue/20';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
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
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(index)}
              className={`bg-bg-card border rounded-lg p-6 shadow-md cursor-pointer transition-all duration-300 ${
                isSelected 
                  ? 'border-accent-blue ring-2 ring-accent-blue/20' 
                  : 'border-border-subtle hover:border-accent-blue/50'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-text-primary">
                  {project.name}
                </h3>
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)}
                  {project.statusText}
                </div>
              </div>

              {project.status !== 'complete' ? (
                <>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-text-muted text-sm mb-1">Budget</p>
                      <p className="text-text-primary font-semibold">
                        ${project.budget.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm mb-1">Spent</p>
                      <p className="text-text-primary font-semibold">
                        ${project.spent.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm mb-1">Margin</p>
                      <p className="text-text-primary font-semibold">
                        {Math.round(margin)}%
                      </p>
                    </div>
                  </div>

                  <div className="relative h-2 bg-bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(project.spent / project.budget) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`absolute top-0 left-0 h-full rounded-full ${
                        project.status === 'watch' ? 'bg-accent-amber' : 'bg-accent-blue'
                      }`}
                    />
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2 text-text-secondary">
                  <CheckCircle className="text-accent-green" size={18} />
                  <span className="text-sm">Paid in full</span>
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
        className="text-center text-text-secondary text-sm mt-6 italic"
      >
        Click any project to focus
      </motion.p>
    </div>
  );
};

export default DashboardPreview;
