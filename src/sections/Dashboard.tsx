import { motion } from 'framer-motion';
import DashboardPreview from '../components/DashboardPreview';

const Dashboard = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="font-semibold mb-4 text-text-primary"
            style={{ 
              fontSize: 'var(--text-section)', 
              lineHeight: 'var(--leading-tight)' 
            }}
          >
            Know Your Numbers
          </h2>
        </motion.div>

        <DashboardPreview />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-text-primary text-xl font-medium mt-12"
        >
          One glance. You know if you're okay.
        </motion.p>
      </div>
    </section>
  );
};

export default Dashboard;
