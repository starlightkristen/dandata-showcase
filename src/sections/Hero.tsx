import { motion } from 'framer-motion';
import ScrollIndicator from '../components/ScrollIndicator';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 
          className="font-semibold mb-8 text-text-primary"
          style={{ 
            fontSize: 'var(--text-hero)', 
            lineHeight: 'var(--leading-tight)' 
          }}
        >
          DanData
        </h1>
        <p 
          className="text-text-secondary"
          style={{ 
            fontSize: 'var(--text-body)', 
            lineHeight: 'var(--leading-relaxed)' 
          }}
        >
          Built for the way you actually work.
        </p>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
