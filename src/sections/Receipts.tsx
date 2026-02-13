import { motion } from 'framer-motion';
import { Mail, Search, Tag, FolderCheck, CheckCircle } from 'lucide-react';
import FlowDiagram from '../components/FlowDiagram';
import ReceiptDemo from '../components/ReceiptDemo';

const Receipts = () => {
  const flowSteps = [
    { icon: <Mail size={24} />, label: 'Email arrives' },
    { icon: <Search size={24} />, label: 'System reads it' },
    { icon: <Tag size={24} />, label: 'Categorizes for taxes' },
    { icon: <FolderCheck size={24} />, label: 'Pick project' },
    { icon: <CheckCircle size={24} />, label: 'Done' },
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
            Receipts
          </h2>
        </motion.div>

        <FlowDiagram steps={flowSteps} />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-text-primary text-2xl font-medium mb-12"
        >
          5 seconds.
        </motion.p>

        <ReceiptDemo />
      </div>
    </section>
  );
};

export default Receipts;
