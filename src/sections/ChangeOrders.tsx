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
            Change Orders
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
          Protected. Paid.
        </motion.p>
      </div>
    </section>
  );
};

export default ChangeOrders;
