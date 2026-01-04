import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-emerald-900 mb-3 sm:mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 400 }}>
            Visit Us
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Located in the heart of Dundalk
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div 
            className="space-y-8 sm:space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="space-y-3"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2 text-emerald-900">
                <MapPin size={20} strokeWidth={1.5} />
                <span className="font-semibold">Location</span>
              </div>
              <p className="text-stone-600 leading-relaxed pl-7 text-sm sm:text-base">
                Christianstown, Readypenny<br />
                Dundalk, Co. Louth<br />
                Ireland
              </p>
            </motion.div>

            <motion.div 
              className="space-y-3"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2 text-emerald-900">
                <Phone size={20} strokeWidth={1.5} />
                <span className="font-semibold">Phone</span>
              </div>
              <div className="pl-7">
                <motion.a 
                  href="tel:+353"
                  className="text-stone-600 hover:text-emerald-900 transition-colors text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +353 XX XXX XXXX
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-3"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center gap-2 text-emerald-900">
                <Clock size={20} strokeWidth={1.5} />
                <span className="font-semibold">Hours</span>
              </div>
              <div className="space-y-2 text-stone-600 pl-7 text-sm sm:text-base">
                <div className="flex justify-between max-w-xs">
                  <span>Monday - Friday</span>
                  <span className="font-medium">10:00 - 20:00</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>Sunday</span>
                  <span className="font-medium">12:00 - 18:00</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="border border-stone-200 h-[300px] sm:h-[400px] lg:h-full lg:min-h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-full h-full bg-stone-100 flex items-center justify-center">
              <div className="text-center p-6 sm:p-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                <MapPin size={48} className="text-stone-400 mx-auto mb-4" strokeWidth={1.5} />
                </motion.div>
                <p className="text-stone-500 text-sm sm:text-base">
                  Christianstown, Readypenny<br />
                  Dundalk, Co. Louth
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
