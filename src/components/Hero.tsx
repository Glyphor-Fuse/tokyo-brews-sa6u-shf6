import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HeroProps {
  lang: 'en' | 'jp';
}

export const Hero = ({ lang }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-900">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/2775834/pexels-photo-2775834.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="A hot and aromatic pour over coffee brewing on a table, showcasing steam and a serene atmosphere."
    width="3456"
    height="5184"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/clear-glass-bottle-2775834/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Marta Dzedyshko on Pexels
    </a>
  </div>
</div>" 
          alt="Coffee Pour" 
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-between py-32">
        <div className="flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:block writing-vertical-rl rotate-180 text-white/60 text-sm tracking-[0.2em] uppercase font-light h-48"
          >
            {lang === 'en' ? 'Established 2024' : '創業 令和六年'}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-right md:text-left"
          >
             <h2 className="text-stone-300 font-serif text-lg md:text-xl mb-4 italic">
              {lang === 'en' ? 'Silence in every drop' : '静寂の一滴'}
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-7xl md:text-9xl font-serif text-white tracking-tighter leading-[0.8]"
          >
            <span className="block">SHI</span>
            <span className="block ml-12 md:ml-24 text-stone-400">BUYA</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 max-w-xs text-right md:text-left text-sm md:text-base font-light leading-relaxed"
          >
            {lang === 'en' ? (
              <p>A sanctuary for coffee purists.<br/>Slow roasted. Hand dripped.<br/>Tokyo.</p>
            ) : (
              <p>珈琲純粋主義者のための聖域。<br/>自家焙煎。ネルドリップ。<br/>東京。</p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};