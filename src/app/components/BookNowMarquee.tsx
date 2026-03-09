import { BOOK_NOW_PATH, SHOW_REAL_METRICS, LAUNCH_MARQUEE_TEXT } from '../constants';

/** Real-data copy (use when SHOW_REAL_METRICS is true) */
const MARQUEE_TEXT_REAL = 'BOOK NOW (3 spots left) • ';
const REPEAT_REAL = MARQUEE_TEXT_REAL.repeat(8);
const REPEAT_LAUNCH = LAUNCH_MARQUEE_TEXT.repeat(4);
const CONTENT = SHOW_REAL_METRICS ? REPEAT_REAL : REPEAT_LAUNCH;

export interface BookNowMarqueeProps {
  speed?: number;
  paddingBlock?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export function BookNowMarquee({
  speed = 65,
  paddingBlock = '16px',
  backgroundColor,
  textColor,
  className = '',
}: BookNowMarqueeProps) {
  const style: React.CSSProperties = {
    ['--marquee-speed' as string]: `${speed}s`,
    ['--marquee-padding-top' as string]: paddingBlock,
    ['--marquee-padding-bottom' as string]: paddingBlock,
  };
  if (backgroundColor != null) (style as Record<string, string>)['--marquee-background-color'] = backgroundColor;
  if (textColor != null) (style as Record<string, string>)['--marquee-text-color'] = textColor;

  return (
    <div
      className={`marquee-section ${className}`.trim()}
      role="region"
      aria-label="Book now"
      style={style}
    >
      <a
        href={BOOK_NOW_PATH}
        className="marquee marquee-link"
        tabIndex={0}
        aria-label="Go to book now page"
      >
        <span className="marquee__content marquee-container">
          <span>{CONTENT}</span>
          <span aria-hidden>{CONTENT}</span>
        </span>
      </a>
    </div>
  );
}
