import { motion } from 'framer-motion';
import ScrollIndicator from '../components/ScrollIndicator';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ background: 'var(--bg-gradient-hero)' }}
    >
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0) 70%)' }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 70%)' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <motion.h1 
          className="font-bold mb-6 gradient-text"
          style={{ 
            fontSize: 'var(--text-hero)', 
            lineHeight: 'var(--leading-tight)',
            fontWeight: 'var(--weight-bold)'
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          DanData
        </motion.h1>
        <motion.p 
          className="text-text-secondary text-xl mb-8"
          style={{ 
            fontSize: '1.375rem',
            lineHeight: 'var(--leading-relaxed)',
            fontWeight: 'var(--weight-medium)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Built for the way you actually work.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary">
            See it in action
          </button>
          <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-accent-blue rounded-xl font-semibold text-lg border-2 border-accent-blue/20 hover:border-accent-blue/40 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg">
            Learn more
          </button>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
