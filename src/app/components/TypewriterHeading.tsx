import { motion } from 'motion/react';

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}

/** Typing animation headline — character-by-character, single block. */
export function TypewriterHeading({
  text,
  className = '',
  duration = 1.8,
  delay = 0.2,
}: TypewriterHeadingProps) {
  const chars = text.split('');

  return (
    <h1 className={`hero-heading typewriter-heading tracking-tight text-white text-shadow-hero ${className}`.trim()}>
      {chars.map((char, i) => (
        <motion.span
          key={`${i}-${char}`}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.03,
            delay: delay + (i * duration) / chars.length,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      <motion.span
        className="typewriter-cursor inline-block w-0.5 h-[0.9em] bg-accent ml-0.5 align-middle"
        aria-hidden
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.2 }}
      />
    </h1>
  );
}
