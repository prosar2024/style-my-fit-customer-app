import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

export interface CarouselImage {
  src: string;
  alt?: string;
}

export interface BannerCarouselProps {
  images?: CarouselImage[];
  autoplay?: boolean;
  interval?: number;      // ms
  fadeDuration?: number;  // seconds
  startIndex?: number;
  className?: string;
  children?: React.ReactNode;
}

const defaultImages: CarouselImage[] = [];

const BannerCarousel: React.FC<BannerCarouselProps> = ({
  images = defaultImages,
  autoplay = true,
  interval = 3000,
  fadeDuration = 1.2,
  startIndex = 0,
  className = "",
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    if (!autoplay || images.length < 2) return;

    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, images.length, interval]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <motion.img
            key={img.src + index}
            src={img.src}
            alt={img.alt || `carousel-image-${index}`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            initial={{ opacity: index === startIndex ? 1 : 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{
              duration: fadeDuration,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center w-full h-full pointer-events-none">
        <div className="pointer-events-auto">{children}</div>
      </div>
    </div>
  );
};
export default BannerCarousel;