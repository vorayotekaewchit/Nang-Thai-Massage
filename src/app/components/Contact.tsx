import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { TEL_LINK, WHATSAPP_URL, PHONE_DISPLAY } from '../constants';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="swiss-container px-6 md:px-8">
        <header className="mb-12">
          <h2 className="text-primary-foreground text-3xl md:text-5xl font-bold tracking-tight mb-3 text-shadow-section">
            Visit
          </h2>
          <p className="text-lg text-primary-foreground/85 max-w-xl text-shadow-section">
            Find us in Christianstown, Readypenny. Calls only.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: address + buttons */}
          <motion.div
            className="flex flex-col order-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <p className="text-primary-foreground text-xl font-semibold mb-3 text-shadow-section">Nang Thai Massage</p>
            <div className="space-y-1 text-base text-primary-foreground/90 text-shadow-section">
              <p>Christianstown, Readypenny</p>
              <p>Dundalk, Co. Louth</p>
              <p>Ireland (A91 W582)</p>
              <p className="pt-1">Free parking available</p>
              <p>5 minutes from Dundalk town centre</p>
            </div>

            <div className="mt-6">
              <a
                href={TEL_LINK}
                className="text-base text-primary-foreground/90 hover:text-accent font-medium transition-colors text-shadow-section hover:underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-thai-gold text-thai-maroon px-8 py-3 text-base font-semibold rounded-2xl hover:bg-thai-gold-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background shadow-md text-shadow-section min-h-[48px] active:scale-[0.98]"
              >
                <MessageCircle size={20} strokeWidth={2} aria-hidden />
                WhatsApp
              </a>
              <a
                href={TEL_LINK}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-3 text-base font-semibold rounded-2xl hover:bg-primary-foreground/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background text-shadow-section min-h-[48px] active:scale-[0.98]"
              >
                <Phone size={20} strokeWidth={2} aria-hidden />
                Call
              </a>
            </div>

            <div className="mt-6 mb-6">
              <p className="text-sm font-medium text-primary-foreground mb-1 text-shadow-section">Hours</p>
              <p className="text-base text-primary-foreground/90 text-shadow-section">Weekends: 9:00 – 21:00</p>
              <p className="text-base text-primary-foreground/90 mt-1 text-shadow-section">Weekdays: Higher rate, to be discussed</p>
            </div>
          </motion.div>

          {/* Right: map only */}
          <div className="flex flex-col order-2">
            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg mb-8 h-64 md:h-72"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            >
              <iframe
                title="Nang Thai Massage — Christianstown, Readypenny, Dundalk (A91 W582)"
                src="https://www.google.com/maps?q=A91+W582+Ireland&z=16&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <p className="text-base text-primary-foreground/80 font-medium text-shadow-section">Calls only.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
