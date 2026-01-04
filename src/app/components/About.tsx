import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src="https://images.unsplash.com/photo-1729337531424-198f880cb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBc2lhbiUyMHdvbWFuJTIwdGhlcmFwaXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NTQ4NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Thai Therapist"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-emerald-900" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 400 }}>
              About
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-stone-600 leading-relaxed text-sm sm:text-base">
              <p>
                Welcome to Nang Thai Aroma Massage, where ancient Thai healing traditions meet modern wellness practices. 
                Our studio is a sanctuary of peace nestled in the heart of Dundalk.
              </p>
              
              <p>
                Led by our experienced Thai therapist with over 10 years of training in traditional massage techniques, 
                we bring authentic Thai healing arts to Ireland.
              </p>
              
              <p>
                Each session is tailored to your individual needs, whether you seek relief from tension, improved flexibility, 
                or simply a moment of tranquility.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-8 sm:gap-12 pt-6 sm:pt-8 border-t border-stone-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="space-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl sm:text-3xl text-emerald-900 font-bold">10+</div>
                <div className="text-stone-600 text-xs sm:text-sm">Years Experience</div>
              </motion.div>
              <motion.div 
                className="space-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl sm:text-3xl text-emerald-900 font-bold">500+</div>
                <div className="text-stone-600 text-xs sm:text-sm">Happy Clients</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
