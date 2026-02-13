import { motion } from 'framer-motion';
import DashboardPreview from '../components/DashboardPreview';

const Dashboard = () => {
  return (
    <section 
      className="px-6 py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #F0F4FF 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="font-bold mb-6 text-text-primary"
            style={{ 
              fontSize: 'var(--text-section)', 
              lineHeight: 'var(--leading-tight)' 
            }}
          >
            Know Your Numbers
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real-time project tracking. Every dollar accounted for.
          </p>
        </motion.div>

        <DashboardPreview />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-text-primary text-2xl font-bold mt-16 gradient-text"
        >
          One glance. You know if you're okay.
        </motion.p>
      </div>
    </section>
  );
};

export default Dashboard;
