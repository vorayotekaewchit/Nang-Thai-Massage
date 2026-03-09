import { Phone } from 'lucide-react';
import { TEL_LINK, WHATSAPP_URL, BOOK_NOW_PATH, SPOTS_LEFT_TODAY, SHOW_REAL_METRICS, LAUNCH_CTA_SUFFIX } from '../constants';

function handleCallToBookClick(e: React.MouseEvent<HTMLAnchorElement>) {
  if (!confirm('Call or WhatsApp?')) {
    e.preventDefault();
    window.location.href = WHATSAPP_URL;
  }
}

export function BookingBar() {
  return (
    <div
      className="mobile-sticky-cta fixed bottom-0 left-0 right-0 z-[1000] md:hidden bg-primary/98 backdrop-blur-sm border-t border-primary/15 booking-bar-safe-bottom booking-bar-shadow"
      role="complementary"
      aria-label="Book your appointment"
    >
      <div className="swiss-container px-4 py-3 flex flex-col sm:flex-row gap-3">
        <a
          href={TEL_LINK}
          onClick={handleCallToBookClick}
          className="call-to-book-btn cta-sticky flex-1 flex items-center justify-center gap-2 min-h-[60px] py-3 px-4 rounded-xl bg-thai-gold text-thai-maroon text-sm font-semibold hover:opacity-95 cta-glow active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Call or WhatsApp to book"
        >
          <Phone size={20} strokeWidth={2} aria-hidden />
          Call to Book
        </a>
        <a
          href={BOOK_NOW_PATH}
          className="cta-sticky flex-1 flex items-center justify-center gap-2 min-h-[60px] py-3 px-4 rounded-xl bg-background text-foreground border border-border text-sm font-semibold hover:bg-muted/50 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        >
          {SHOW_REAL_METRICS ? `Book now (${SPOTS_LEFT_TODAY} spots left)` : `Book now ${LAUNCH_CTA_SUFFIX}`}
        </a>
      </div>
    </div>
  );
}
