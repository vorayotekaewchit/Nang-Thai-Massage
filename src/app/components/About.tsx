import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card/80">
      <div className="swiss-container">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <h2 className="text-primary-foreground section-heading text-shadow-section">Our story</h2>
            <p className="text-primary-foreground/85 text-sm mt-2 max-w-sm text-shadow-section">
              From Thailand to Dundalk — a small space with a big tradition.
            </p>
            <motion.div
              className="mt-8 space-y-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: 'easeOut', staggerChildren: 0.1 }}
            >
              <motion.p
                className="text-primary-foreground/90 text-sm leading-relaxed text-shadow-section"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                Nang trained in Chiang Mai for over 10 years before bringing authentic Thai technique to Co. Louth. Today, in a peaceful studio in Christianstown, she offers the same care and craft you’d find in a Thai temple town—no rush, no noise—just skilled hands, warm oils, and time to breathe. With more than 500 clients welcomed, every visit is shaped around you: whether you need deep release, gentle stretching, or a moment of stillness away from the everyday.
              </motion.p>
            </motion.div>
          </div>
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <motion.div
              className="aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                alt="Serene Thai massage studio in Dundalk — candles and calm at Nang Thai Massage"
                className="w-full h-full object-cover"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
