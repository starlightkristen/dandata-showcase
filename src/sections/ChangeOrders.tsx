import { motion } from 'framer-motion';
import { MessageSquare, FileText, Mail, TrendingUp } from 'lucide-react';
import FlowDiagram from '../components/FlowDiagram';

const ChangeOrders = () => {
  const flowSteps = [
    { icon: <MessageSquare size={24} />, label: 'Client asks' },
    { icon: <MessageSquare size={24} />, label: '30-second voice note' },
    { icon: <FileText size={24} />, label: 'Change order generated' },
    { icon: <Mail size={24} />, label: 'Client approves via email' },
    { icon: <TrendingUp size={24} />, label: 'Budget updates' },
  ];

  return (
    <section 
      className="px-6 py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #FEFEFE 0%, #F8FAFF 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
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
            Change Orders
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Voice note to approved change order in minutes.
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
          Protected. Paid.
        </motion.p>
      </div>
    </section>
  );
};

export default ChangeOrders;
