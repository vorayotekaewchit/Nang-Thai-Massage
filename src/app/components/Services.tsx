import { Sparkles, HandHeart, Heart, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  index: number;
}

function ServiceCard({ icon, title, description, price, index }: ServiceCardProps) {
  return (
    <motion.div 
      className="group border border-stone-200 p-5 sm:p-8 hover:border-emerald-900 transition-colors"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <motion.div 
        className="text-emerald-900 mb-4 sm:mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-emerald-900 mb-3 sm:mb-3 text-lg sm:text-xl font-semibold leading-tight">{title}</h3>
      <p className="text-stone-600 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">{description}</p>
      <div className="text-emerald-900 text-xl sm:text-xl font-bold">{price}</div>
    </motion.div>
  );
}

export function Services() {
  const services = [
    {
      icon: <Sparkles size={28} strokeWidth={1.5} />,
      title: 'Traditional Thai Massage',
      description: 'Ancient healing techniques combining acupressure, stretching, and energy work to release tension.',
      price: '€60',
    },
    {
      icon: <Droplets size={28} strokeWidth={1.5} />,
      title: 'Aromatherapy Massage',
      description: 'Luxurious massage with essential oils to calm your mind and rejuvenate your senses.',
      price: '€70',
    },
    {
      icon: <Heart size={28} strokeWidth={1.5} />,
      title: 'Foot Reflexology',
      description: 'Therapeutic foot massage targeting pressure points to promote relaxation and wellbeing.',
      price: '€45',
    },
    {
      icon: <HandHeart size={28} strokeWidth={1.5} />,
      title: 'Deep Relaxation',
      description: 'Holistic treatment combining gentle massage and breathing techniques for stress relief.',
      price: '€75',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-2xl mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-emerald-900 mb-3 sm:mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 400 }}>
            Services
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Authentic Thai wellness treatments designed to restore balance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
