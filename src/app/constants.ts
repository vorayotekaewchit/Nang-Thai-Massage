/**
 * Replace PHONE_NUMBER with your real number (no spaces, no +).
 * Example: 353871234567 for Irish mobile 087 123 4567
 */
export const PHONE_NUMBER = '353871234567';

export const TEL_LINK = `tel:+${PHONE_NUMBER}`;
/** Used for "Call or WhatsApp?" fallback on Call to Book button (no separate WhatsApp button) */
export const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}`;

/** Book now page path (e.g. for marquee CTA) */
export const BOOK_NOW_PATH = '/pages/book-now';

/** Toggle: set true only when you have real booking/spot data (schema-style) */
export const SHOW_REAL_METRICS = false;

/** Urgency & social proof — REAL DATA (keep structure, hide with .disabled until verified) */
export const SPOTS_LEFT_TODAY = 3;
export const BOOKINGS_DISPLAY = '10,247';

/** Launch-safe copy (no unverified claims) — shown when SHOW_REAL_METRICS is false */
export const LAUNCH_URGENCY_LINE = 'Opening Week Special — First 50 Get 20% Off';
export const LAUNCH_MARQUEE_TEXT = 'OPENING WEEK SPECIAL • FIRST 50 GET 20% OFF • ';
export const LAUNCH_CTA_SUFFIX = '— Opening Week';
export const LAUNCH_SOCIAL_LINE = 'New Studio — Book Early';

export const HERO_HEADLINE = "Dundalk's favourite escape. Authentic Thai massage, right here in Louth.";

/** Formatted for display (e.g. +353 87 123 4567) */
export const PHONE_DISPLAY =
  PHONE_NUMBER.length >= 10
    ? `+${PHONE_NUMBER.slice(0, 3)} ${PHONE_NUMBER.slice(3, 5)} ${PHONE_NUMBER.slice(5, 8)} ${PHONE_NUMBER.slice(8)}`
    : `+${PHONE_NUMBER}`;
