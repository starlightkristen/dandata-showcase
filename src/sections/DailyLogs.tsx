import { motion } from 'framer-motion';
import { MessageSquare, Image, CloudSun, Save } from 'lucide-react';
import FlowDiagram from '../components/FlowDiagram';

const DailyLogs = () => {
  const flowSteps = [
    { icon: <MessageSquare size={24} />, label: 'Voice note' },
    { icon: <Image size={24} />, label: 'Pick photos' },
    { icon: <CloudSun size={24} />, label: 'Weather auto-added' },
    { icon: <Save size={24} />, label: 'Saved' },
  ];

  return (
    <section className="px-6 py-24 bg-bg-secondary">
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
            Daily Logs
          </h2>
        </motion.div>

        <FlowDiagram steps={flowSteps} />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-text-primary text-2xl font-medium mt-12"
        >
          60 seconds. Permanent protection.
        </motion.p>
      </div>
    </section>
  );
};

export default DailyLogs;
