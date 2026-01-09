import { Star } from 'lucide-react';
import { motion } from 'motion/react';

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  date: string;
  index: number;
}

function ReviewCard({ name, review, rating, date, index }: ReviewCardProps) {
  return (
    <motion.div 
      className="border border-stone-200 p-6 sm:p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
    >
      <div className="flex gap-1 mb-4 sm:mb-6">
        {[...Array(rating)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
          >
            <Star size={16} className="fill-emerald-900 text-emerald-900" />
          </motion.div>
        ))}
      </div>

      <p className="text-stone-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
        {review}
      </p>

      <div className="pt-4 sm:pt-6 border-t border-stone-200">
        <div className="text-emerald-900 font-semibold text-sm sm:text-base">{name}</div>
        <div className="text-xs sm:text-sm text-stone-600">{date}</div>
      </div>
    </motion.div>
  );
}

export function Reviews() {
  const reviews = [
    {
      name: 'Sarah Murphy',
      review: 'Absolutely amazing experience! The Thai massage was exactly what I needed after weeks of stress. The therapist was professional and skilled.',
      rating: 5,
      date: 'December 2025',
    },
    {
      name: 'James O\'Connor',
      review: 'Best massage I\'ve ever had in Ireland. The authentic Thai techniques combined with aromatherapy oils created a truly transformative experience.',
      rating: 5,
      date: 'November 2025',
    },
    {
      name: 'Emma Byrne',
      review: 'I visit regularly for foot reflexology and it never disappoints. The attention to detail and genuine care make this place special.',
      rating: 5,
      date: 'January 2026',
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-emerald-900 mb-3 sm:mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 400 }}>
            Reviews
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Real experiences from our valued clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
