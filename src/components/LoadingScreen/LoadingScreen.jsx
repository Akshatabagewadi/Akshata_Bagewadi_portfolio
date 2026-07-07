import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="loading-blob loading-blob-1" />
          <div className="loading-blob loading-blob-2" />
          <motion.div
            className="loading-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="loading-ring">
              <span>AB</span>
            </div>
            <p className="loading-text">crafting the experience...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
