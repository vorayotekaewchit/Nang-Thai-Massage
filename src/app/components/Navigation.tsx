import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    // Use requestAnimationFrame to ensure layout has settled after menu closes
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 80; // Height of the fixed navbar
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative values
          behavior: 'smooth'
        });
      }
    });
  };

  return (
    <header>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-stone-200 z-50"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
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
            className="md:hidden p-3 text-stone-600 touch-manipulation"
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
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
              <div className="pb-4 pt-4 space-y-2">
                <motion.button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-5 py-4 text-stone-600 hover:bg-stone-50 active:bg-stone-100 transition-colors touch-manipulation min-h-[48px] flex items-center text-base"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Services
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-5 py-4 text-stone-600 hover:bg-stone-50 active:bg-stone-100 transition-colors touch-manipulation min-h-[48px] flex items-center text-base"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  About
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('reviews')}
                  className="block w-full text-left px-5 py-4 text-stone-600 hover:bg-stone-50 active:bg-stone-100 transition-colors touch-manipulation min-h-[48px] flex items-center text-base"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Reviews
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full bg-emerald-900 text-white px-5 py-4 rounded-md hover:bg-emerald-800 active:bg-emerald-700 transition-colors touch-manipulation min-h-[48px] flex items-center justify-center text-base font-medium mt-2"
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
    </header>
  );
}
