import { motion } from 'framer-motion';

const Closing = () => {
  return (
    <section 
      className="px-6 py-32 min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #F8FAFF 0%, #EEF2FF 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="font-bold mb-16 text-text-primary"
            style={{ 
              fontSize: 'var(--text-section)', 
              lineHeight: 'var(--leading-tight)' 
            }}
          >
            Your paperwork happens while you work.
          </h2>

          <div className="space-y-6 mb-20">
            {[
              { text: 'Receipts filed automatically.', delay: 0.1 },
              { text: 'Change orders captured and approved.', delay: 0.2 },
              { text: 'Daily logs saved in 60 seconds.', delay: 0.3 },
              { text: 'Numbers tracked in real-time.', delay: 0.4 },
              { text: 'Invoices sent in one click.', delay: 0.5 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-blue-100 shadow-sm"
              >
                <p className="text-text-primary text-lg font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-text-primary text-2xl font-bold mb-3 gradient-text">
              You build.
            </p>
            <p className="text-text-primary text-2xl font-bold gradient-text">
              Everything else is handled.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm border-2 border-blue-100 rounded-2xl p-8 shadow-xl">
              <p className="text-text-secondary mb-6 text-lg font-medium">Want to see it work?</p>
              <a
                href="mailto:hello@dandata.com"
                className="btn-primary inline-block text-xl px-12 py-5"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Closing;
