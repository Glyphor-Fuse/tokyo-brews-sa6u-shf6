import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GlyphorBadge = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hidden = localStorage.getItem('glyphor_badge_hidden');
    if (!hidden) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    localStorage.setItem('glyphor_badge_hidden', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50 flex items-center gap-3 bg-zinc-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10"
        >
          <a
            href="https://glyphor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium tracking-wide hover:opacity-80 transition-opacity"
          >
            <span className="opacity-70">Made with</span>
            <img 
              src="/glyphor-logo-white.png" 
              alt="Glyphor" 
              className="h-3 w-auto object-contain" 
            />
            <span className="font-semibold">Fuse</span>
          </a>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close badge"
          >
            <X className="w-3 h-3 opacity-70" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};