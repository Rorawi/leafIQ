'use client';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-cards';

type Card = {
  id: string;
  emoji: string;
  title: string;
  content: string[];
  color: string;
};

export default function WeatherCards() {
  const swiperRef = useRef(null);
  const cards: Card[] = [
    {
      id: 'weather',
      emoji: '🌦️',
      title: 'Cloudy with Rain',
      content: ['Plant root vegetables', 'Ideal for watering', 'Delay pruning'],
      color: 'bg-blue-100'
    },
    {
      id: 'crops',
      emoji: '🌽',
      title: 'Best Crops Now',
      content: ['Sweet Corn', 'Kale', 'Green Beans'],
      color: 'bg-green-100'
    },
    {
      id: 'alert',
      emoji: '⚠️',
      title: 'Heat Warning',
      content: ['Water before 10AM', 'Shade tomatoes', 'Mulch heavily'],
      color: 'bg-amber-100'
    }
  ];

  // Auto-rotate cards every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md mx-auto p-4">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-[500px] w-full"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              whileHover={{ y: -10 }}
              className={`${card.color} h-full rounded-3xl p-8 border-2 border-white/50 flex flex-col shadow-none overflow-hidden`}
            >
              {/* Animated Emoji */}
              <motion.span
                className="text-8xl mb-4 self-center"
                animate={{
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {card.emoji}
              </motion.span>

              <h3 className="text-2xl font-bold text-center mb-4">{card.title}</h3>
              
              <ul className="space-y-2 flex-1">
                {card.content.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-lg"
                  >
                    • {item}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-3 bg-white/80 rounded-full text-lg font-medium shadow-md"
              >
                View Details
              </motion.button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button 
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          aria-label="Previous card"
        >
          ←
        </button>
        <button 
          onClick={() => swiperRef.current?.slideNext()}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          aria-label="Next card"
        >
          →
        </button>
      </div>
    </div>
  );
}