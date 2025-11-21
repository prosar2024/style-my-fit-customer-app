import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Import the 3 banner images
import bannerImage1 from 'figma:asset/5694b70d22ecf827090ffeba01eab75fb192e07e.png';
import bannerImage2 from 'figma:asset/7458b11fbcd7ce75bc1e297f3751755b665ce04b.png';
import bannerImage3 from 'figma:asset/663ca8bff2506f734940c72f8d820452114c901f.png';

interface BannerCarouselProps {
  children?: React.ReactNode;
  className?: string;
}

const bannerImages = [
  { src: bannerImage1, alt: 'Fashion Banner 1' },
  { src: bannerImage2, alt: 'Fashion Banner 2' },
  { src: bannerImage3, alt: 'Fashion Banner 3' }
];

/**
 * BannerCarousel - Seamless image crossfade carousel
 * 
 * Features:
 * - 3 banner images with continuous loop
 * - Smooth crossfade transitions (no white flash)
 * - 3 second display time per image
 * - Premium, modern aesthetic
 * - Desktop and tablet only
 */
export default function BannerCarousel({ children, className }: BannerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      {/* Stacked images with crossfade - no white flash */}
      <div className="absolute inset-0 overflow-hidden">
        {bannerImages.map((image, index) => (
          <motion.img
            key={index}
            alt={image.alt}
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={image.src}
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ 
              opacity: currentIndex === index ? 1 : 0
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="flex flex-row items-center justify-center min-w-inherit overflow-clip rounded-[inherit] size-full relative z-10">
        {children}
      </div>
    </div>
  );
}
