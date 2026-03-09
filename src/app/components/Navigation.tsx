import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 64;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: Math.max(0, elementPosition - navHeight), behavior: 'smooth' });
      }
    });
  };

  return (
    <header>
      <nav
        className="nav-safe-top fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/80 shadow-sm transition-colors"
      >
        <div className="swiss-container">
          <div className="flex justify-between items-center h-16">
            <a href="#hero" className="text-primary-foreground font-semibold text-sm tracking-tight uppercase text-shadow-section">
              Nang Thai Massage
            </a>

            <div className="hidden md:flex items-center gap-8">
              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className="text-primary-foreground/90 hover:text-accent text-sm font-medium transition-colors text-shadow-section py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('about')}
                className="text-primary-foreground/90 hover:text-accent text-sm font-medium transition-colors text-shadow-section py-2 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium rounded-xl hover:opacity-90 transition-colors shadow-md min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                Contact
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary-foreground hover:text-accent transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-primary-foreground/15 bg-background"
            >
              <div className="swiss-container py-4 space-y-1">
                <button
                  type="button"
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left py-3 text-primary-foreground/90 hover:text-accent text-sm font-medium text-shadow-section"
                >
                  Services
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left py-3 text-primary-foreground/90 hover:text-accent text-sm font-medium text-shadow-section"
                >
                  About
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left py-3 min-h-[48px] bg-primary text-primary-foreground -mx-4 px-4 mt-2 text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
