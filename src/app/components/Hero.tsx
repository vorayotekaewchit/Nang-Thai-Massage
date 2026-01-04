import { Phone, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaGFpJTIwbWFzc2FnZSUyMHNwYSUyMHJlbGF4aW5nfGVufDF8fHx8MTc2NzU0ODU0OHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Thai Massage Spa"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-stone-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <div className="space-y-6 sm:space-y-8">
          <motion.div 
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-white px-2" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              Nang Thai Aroma Massage
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">
              Authentic Thai Aroma Massage in Dundalk – relax, unwind, and restore your energy
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="tel:+353"
              className="w-full sm:w-auto bg-white text-emerald-900 px-6 sm:px-8 py-3 rounded-md hover:bg-stone-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={18} />
              <span>Book by Call</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="w-full sm:w-auto bg-emerald-900 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={18} />
              <span>Book Online</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
