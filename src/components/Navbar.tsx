import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  lang: 'en' | 'jp';
  toggleLang: () => void;
}

export const Navbar = ({ lang, toggleLang }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { en: 'Concept', jp: 'こだわり' },
    { en: 'Menu', jp: 'お品書き' },
    { en: 'Access', jp: '店舗情報' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || isMenuOpen
            ? 'bg-stone-50/80 backdrop-blur-xl border-b border-stone-200 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="relative z-50 group">
            <h1 className={`font-serif text-2xl tracking-tighter transition-colors ${isMenuOpen ? 'text-stone-900' : 'text-stone-900'}`}>
              KISSA <span className="text-stone-400">TEN</span>
            </h1>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all group-hover:w-full" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.en}
                href={`#${link.en.toLowerCase()}`}
                className="text-sm font-medium tracking-widest uppercase hover:text-stone-500 transition-colors"
              >
                <span className="block text-xs text-stone-400 mb-0.5 font-serif">{link.jp}</span>
                {link.en}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="ml-4 px-4 py-1 border border-stone-300 rounded-full text-xs font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all"
            >
              {lang === 'en' ? '日本語' : 'ENGLISH'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-stone-50 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.en}
                href={`#${link.en.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-center group"
              >
                <span className="block text-sm text-stone-400 font-serif mb-2">{link.jp}</span>
                <span className="text-3xl font-light tracking-tight group-hover:text-stone-500 transition-colors">
                  {link.en}
                </span>
              </a>
            ))}
            <button
              onClick={() => {
                toggleLang();
                setIsMenuOpen(false);
              }}
              className="mt-8 px-8 py-3 bg-stone-900 text-white rounded-full"
            >
              {lang === 'en' ? 'Switch to Japanese' : 'Switch to English'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};