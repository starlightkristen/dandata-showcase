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
    <section 
      className="px-6 py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #FFFFFF 0%, #F0FDF4 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-emerald-200 rounded-full blur-3xl"></div>
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
            Get Paid Faster
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            One click to send. Three days to cash.
          </p>
        </motion.div>

        <FlowDiagram steps={flowSteps} />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mt-16"
          style={{ 
            background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          No chasing. No floating costs.
        </motion.p>
      </div>
    </section>
  );
};

export default Invoicing;
