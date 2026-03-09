import { motion } from 'motion/react';
import { TEL_LINK, PHONE_DISPLAY } from '../constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="swiss-container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <p className="text-accent text-xs font-semibold uppercase tracking-wider text-shadow-section">Nang Thai Massage</p>
            <p className="text-primary-foreground/85 text-sm mt-2 max-w-xs text-shadow-section">
              Authentic Thai massage and aromatherapy in the heart of Dundalk. A place to slow down and restore.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col md:items-end gap-4">
            <a href="#services" className="text-primary-foreground/85 hover:text-accent text-sm font-medium transition-colors text-shadow-section py-1 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary">
              Services
            </a>
            <a href="#about" className="text-primary-foreground/85 hover:text-accent text-sm font-medium transition-colors text-shadow-section py-1 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary">
              About
            </a>
            <a href="#contact" className="text-primary-foreground/85 hover:text-accent text-sm font-medium transition-colors text-shadow-section py-1 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary">
              Contact
            </a>
            <a href={TEL_LINK} className="text-primary-foreground/85 hover:text-accent text-sm font-medium transition-colors text-shadow-section py-1 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/70 text-xs text-shadow-section">© {year} Nang Thai Massage</p>
        </div>
      </div>
    </footer>
  );
}
