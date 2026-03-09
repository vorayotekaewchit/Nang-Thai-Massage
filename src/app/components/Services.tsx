import React from 'react';
import { Sparkles, HandHeart, Droplets } from 'lucide-react';
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
    <motion.article
      className="border border-border bg-card/95 rounded-2xl pt-8 pb-6 px-6 relative service-card-grain shadow-lg hover:shadow-xl hover:border-accent/50 transition-all duration-200 focus-within:ring-2 focus-within:ring-accent/50 focus-within:ring-offset-2 focus-within:ring-offset-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
    >
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="text-primary-foreground text-lg font-semibold tracking-tight text-shadow-section">{title}</h3>
      <p className="text-primary-foreground/85 text-sm mt-2 leading-relaxed text-shadow-section">{description}</p>
      <p className="text-thai-gold text-sm font-semibold mt-4 text-shadow-section">{price}</p>
    </motion.article>
  );
}

export function Services() {
  const services = [
    {
      icon: <Droplets size={24} strokeWidth={1.5} />,
      title: 'Aroma Oil Massage',
      description: 'You’ll leave feeling deeply soothed and unwound—warm oil and slow strokes ease tension so your shoulders drop and your mind quiets.',
      price: '€55 / 75 min',
    },
    {
      icon: <Sparkles size={24} strokeWidth={1.5} />,
      title: 'Traditional Thai Massage',
      description: 'Afterwards you feel longer, lighter and more open—acupressure and gentle stretching release what’s been holding you back.',
      price: '€60',
    },
    {
      icon: <HandHeart size={24} strokeWidth={1.5} />,
      title: 'Deep Relaxation',
      description: 'You’ll walk out restored and centred—gentle pressure and breath work help you switch off and leave the day behind.',
      price: '€75',
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="swiss-container">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
            <h2 className="text-primary-foreground section-heading text-shadow-section">Services</h2>
            <p className="text-primary-foreground/80 text-sm mt-2 max-w-sm text-shadow-section">
              Three ways to unwind—each rooted in Thai tradition and tailored to you.
            </p>
            <div className="mt-12 hidden lg:block aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=85"
                alt="Aromatherapy oils for Thai massage in Dundalk"
                className="w-full h-full object-cover object-center"
                width={600}
                height={800}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
