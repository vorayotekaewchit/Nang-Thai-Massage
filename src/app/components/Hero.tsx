import { Phone, Star } from 'lucide-react';
import { motion } from 'motion/react';
import {
  TEL_LINK,
  WHATSAPP_URL,
  BOOK_NOW_PATH,
  SPOTS_LEFT_TODAY,
  BOOKINGS_DISPLAY,
  HERO_HEADLINE,
  SHOW_REAL_METRICS,
  LAUNCH_URGENCY_LINE,
  LAUNCH_SOCIAL_LINE,
  LAUNCH_CTA_SUFFIX,
} from '../constants';
import { BookNowMarquee } from './BookNowMarquee';
import { TypewriterHeading } from './TypewriterHeading';

function handleCallToBookClick(e: React.MouseEvent<HTMLAnchorElement>) {
  if (!confirm('Call or WhatsApp?')) {
    e.preventDefault();
    window.location.href = WHATSAPP_URL;
  }
}

const HERO_IMAGE_BASE = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef';
const HERO_IMAGE_WEBP = `${HERO_IMAGE_BASE}?auto=format&fm=webp&fit=crop&w=1200&q=85`;
const HERO_IMAGE_FALLBACK = `${HERO_IMAGE_BASE}?auto=format&fit=crop&w=1200&q=85`;

export function Hero() {
  return (
    <section id="hero" className="hero-section relative flex flex-col items-stretch overflow-hidden">
      {/* Hero image: 100vh, Safari-safe object-fit, WebP + lazy for performance */}
      <div className="hero-image-wrap">
        <picture>
          <source srcSet={HERO_IMAGE_WEBP} type="image/webp" />
          <img
            src={HERO_IMAGE_FALLBACK}
            alt="Serene massage room at Nang Thai Massage — calm space for relaxation in Dundalk"
            className="hero-bg-image hero-bg-ken-burns"
            width={1200}
            height={675}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 hero-overlay-mesh pointer-events-none" />
        {/* Scrim under content for readability on bright areas of the image */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 min-h-[320px] bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" aria-hidden />
        {/* Content overlaid at bottom of hero image (inside wrap so it sits over 100vh area) */}
        <div className="hero-content-overlay absolute bottom-0 left-0 right-0 z-10 w-full swiss-container pb-24 md:pb-32">
          <div className="max-w-2xl">
          {/* Urgency bar — launch-safe when SHOW_REAL_METRICS false; real data when true */}
          <motion.div
            className="urgency-bar flex flex-wrap items-center gap-x-4 gap-y-1 text-accent text-xs font-medium uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="flex items-center gap-1">
              <span aria-hidden>⚡</span>
              {SHOW_REAL_METRICS ? (
                <>
                  <span>Only {SPOTS_LEFT_TODAY} spots left today</span>
                  <span className="text-white/80 font-normal normal-case tracking-normal">{BOOKINGS_DISPLAY} bookings</span>
                </>
              ) : (
                LAUNCH_URGENCY_LINE
              )}
            </span>
          </motion.div>

          <motion.p
            className="text-accent text-xs font-medium uppercase tracking-[0.2em] text-shadow-hero"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dundalk · Christianstown
          </motion.p>

          <motion.div className="mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <TypewriterHeading text={HERO_HEADLINE} />
          </motion.div>

          <motion.p
            className="text-white/95 text-base md:text-lg mt-4 font-normal leading-relaxed max-w-lg text-shadow-hero"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A place to slow down. Ancient Thai healing and aromatic oils in a quiet corner of Ireland—where every session is a journey from tension to calm.
          </motion.p>

          {/* Social proof: 5-star + bookings (real count hidden until verified) */}
          <motion.div
            className="flex flex-wrap items-center gap-3 mt-4 text-white/90"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span className="flex items-center gap-1 text-sm font-medium" aria-label="Rated 5 stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-thai-gold text-thai-gold" strokeWidth={1.5} aria-hidden />
              ))}
              <span className="ml-1">5.0</span>
            </span>
            <span className={`bookings-counter text-white/70 text-sm ${SHOW_REAL_METRICS ? '' : 'hidden'}`}>{BOOKINGS_DISPLAY}+ bookings</span>
            <span className={`text-white/70 text-sm ${SHOW_REAL_METRICS ? 'hidden' : ''}`}>{LAUNCH_SOCIAL_LINE}</span>
          </motion.div>

          <motion.div
            className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-white/25"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-white/90 text-xs font-medium uppercase tracking-wider mb-4 text-shadow-hero">
              Book now
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={TEL_LINK}
                onClick={handleCallToBookClick}
                className="call-to-book-btn cta-primary inline-flex items-center justify-center gap-2.5 bg-thai-gold text-thai-maroon px-6 py-4 text-sm font-semibold rounded-2xl hover:bg-thai-gold-muted hover:text-thai-maroon transition-all duration-200 min-h-[60px] sm:min-h-[48px] w-full sm:max-w-[280px] shadow-lg text-shadow-section active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-transparent cta-lift"
                aria-label="Call or WhatsApp to book"
              >
                <Phone size={20} strokeWidth={2} aria-hidden />
                Call to Book (Call or WhatsApp)
              </a>
              <a
                href={BOOK_NOW_PATH}
                className="cta-urgency inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-6 py-4 text-sm font-semibold rounded-2xl hover:opacity-95 transition-all duration-200 min-h-[60px] sm:min-h-[48px] w-full sm:max-w-[240px] cta-pulse focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-transparent cta-lift"
              >
                {SHOW_REAL_METRICS ? `Book now (${SPOTS_LEFT_TODAY} spots left)` : `Book now ${LAUNCH_CTA_SUFFIX}`}
              </a>
            </div>
            <p className="text-white/80 text-xs mt-4 max-w-md text-shadow-hero">
              Weekends 9AM–9PM · Weekdays higher rate to be discussed · Christianstown, Dundalk
            </p>
          </motion.div>
        </div>
      </div>
      </div>

      <BookNowMarquee />
    </section>
  );
}
