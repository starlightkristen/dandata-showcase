import { motion } from 'framer-motion';

const Closing = () => {
  return (
    <section className="px-6 py-32 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="font-semibold mb-12 text-text-primary"
            style={{ 
              fontSize: 'var(--text-section)', 
              lineHeight: 'var(--leading-tight)' 
            }}
          >
            Your paperwork happens while you work.
          </h2>

          <div className="space-y-4 mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-text-secondary text-lg"
            >
              Receipts filed automatically.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-text-secondary text-lg"
            >
              Change orders captured and approved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-text-secondary text-lg"
            >
              Daily logs saved in 60 seconds.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-text-secondary text-lg"
            >
              Numbers tracked in real-time.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-text-secondary text-lg"
            >
              Invoices sent in one click.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-text-primary text-xl font-medium mb-2">
              You build.
            </p>
            <p className="text-text-primary text-xl font-medium">
              Everything else is handled.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="border-t border-border-subtle pt-8">
              <p className="text-text-secondary mb-4">Want to see it work?</p>
              <a
                href="mailto:hello@dandata.com"
                className="inline-block px-8 py-4 bg-accent-blue text-white rounded-lg font-medium text-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
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
