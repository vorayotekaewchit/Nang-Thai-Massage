import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-stone-200 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <motion.div 
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-emerald-900 font-bold text-base sm:text-lg">Nang Thai Aroma Massage</span>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Authentic Thai massage and aromatherapy in the heart of Dundalk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-emerald-900 mb-4 sm:mb-4 font-semibold text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-3 text-sm sm:text-sm">
              <li>
                <motion.a 
                  href="#services" 
                  className="text-stone-600 hover:text-emerald-900 active:text-emerald-800 transition-colors block py-2 -ml-2 pl-2 rounded-md hover:bg-stone-50 active:bg-stone-100 touch-manipulation min-h-[44px] flex items-center"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Services
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#about" 
                  className="text-stone-600 hover:text-emerald-900 active:text-emerald-800 transition-colors block py-2 -ml-2 pl-2 rounded-md hover:bg-stone-50 active:bg-stone-100 touch-manipulation min-h-[44px] flex items-center"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#reviews" 
                  className="text-stone-600 hover:text-emerald-900 active:text-emerald-800 transition-colors block py-2 -ml-2 pl-2 rounded-md hover:bg-stone-50 active:bg-stone-100 touch-manipulation min-h-[44px] flex items-center"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reviews
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#contact" 
                  className="text-stone-600 hover:text-emerald-900 active:text-emerald-800 transition-colors block py-2 -ml-2 pl-2 rounded-md hover:bg-stone-50 active:bg-stone-100 touch-manipulation min-h-[44px] flex items-center"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-emerald-900 mb-3 sm:mb-4 font-semibold text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
              <li>Christianstown, Readypenny</li>
              <li>Dundalk, Co. Louth, Ireland</li>
              <li className="pt-2">
                <motion.a 
                  href="tel:+353" 
                  className="hover:text-emerald-900 active:text-emerald-800 transition-colors inline-block py-2 px-3 -ml-3 rounded-md hover:bg-stone-50 active:bg-stone-100 touch-manipulation min-h-[44px] flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +353 XX XXX XXXX
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="pt-6 sm:pt-8 border-t border-stone-200 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-stone-500 text-xs sm:text-sm">
            © {currentYear} Nang Thai Aroma Massage
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
