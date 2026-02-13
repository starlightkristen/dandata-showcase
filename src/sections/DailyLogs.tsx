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
    <section 
      className="px-6 py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #F0F4FF 0%, #FFFFFF 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-40 right-1/3 w-72 h-72 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-indigo-200 rounded-full blur-3xl"></div>
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
            Daily Logs
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Document your day. Protect yourself from disputes.
          </p>
        </motion.div>

        <FlowDiagram steps={flowSteps} />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-text-primary text-4xl font-bold mt-16 gradient-text"
        >
          60 seconds. Permanent protection.
        </motion.p>
      </div>
    </section>
  );
};

export default DailyLogs;
