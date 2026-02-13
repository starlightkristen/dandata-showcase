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
    <section 
      className="px-6 py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #F8FAFF 0%, #FFFFFF 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
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
            Receipts
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Forward your receipt. We'll handle the rest.
          </p>
        </motion.div>

        <FlowDiagram steps={flowSteps} />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-text-primary text-4xl font-bold mb-16 gradient-text"
        >
          5 seconds.
        </motion.p>

        <ReceiptDemo />
      </div>
    </section>
  );
};

export default Receipts;
