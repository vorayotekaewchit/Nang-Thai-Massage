import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-stone-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-emerald-900 font-bold text-lg sm:text-xl">Nang Thai Aroma</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <motion.button
              onClick={() => scrollToSection('services')}
              className="text-stone-600 hover:text-emerald-900 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Services
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-stone-600 hover:text-emerald-900 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              About
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('reviews')}
              className="text-stone-600 hover:text-emerald-900 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Reviews
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-900 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-stone-600"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-stone-200"
            >
              <div className="pb-4 pt-4 space-y-1">
                <motion.button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-4 py-3 text-stone-600 hover:bg-stone-50 transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Services
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-3 text-stone-600 hover:bg-stone-50 transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  About
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('reviews')}
                  className="block w-full text-left px-4 py-3 text-stone-600 hover:bg-stone-50 transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Reviews
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full bg-emerald-900 text-white px-4 py-3 rounded-md hover:bg-emerald-800 transition-colors mt-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  Contact
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
