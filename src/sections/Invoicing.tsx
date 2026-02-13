import { motion } from 'framer-motion';
import { CheckSquare, FileText, Send, CreditCard, Zap } from 'lucide-react';
import FlowDiagram from '../components/FlowDiagram';

const Invoicing = () => {
  const flowSteps = [
    { icon: <CheckSquare size={24} />, label: 'Mark complete' },
    { icon: <FileText size={24} />, label: 'Invoice generated' },
    { icon: <Send size={24} />, label: 'One click send' },
    { icon: <CreditCard size={24} />, label: 'Client pays online' },
    { icon: <Zap size={24} />, label: 'Money in 3 days' },
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
            Get Paid Faster
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
          No chasing. No floating costs.
        </motion.p>
      </div>
    </section>
  );
};

export default Invoicing;
