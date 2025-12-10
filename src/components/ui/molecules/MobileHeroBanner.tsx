import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import AnimatedButton from "@/components/ui/atoms/AnimatedButton";

interface MobileHeroBannerProps {
  onFindMyStyle?: () => void;
  title: string;
  buttonTitle: string;
  images: { src: string; alt?: string }[];
}

const MobileHeroBanner: React.FC<MobileHeroBannerProps> = ({
  onFindMyStyle,
  title,
  buttonTitle,
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[732px] min-w-[320px] overflow-hidden bg-[#f5f5f5]">
      <div className="absolute inset-0">
        {images.map((image, i) => (
          <motion.div
            key={i}
            animate={{ opacity: currentIndex === i ? 1 : 0 }}
            transition={{ duration: 1.4 }}
            className="absolute inset-0"
          >
            <img
              src={image.src}
              alt={image.alt || `banner-${i}`}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
        <div className="flex flex-col gap-6 max-w-[420px]">
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Playfair_Display'] text-[42px] leading-[48px] sm:text-[50px] sm:leading-[55px]"
            style={{
              background:
                "linear-gradient(135deg, #222222 0%, #b2833a 50%, #D38436 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </motion.h1>

          <motion.div
            key={`button-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedButton onClick={onFindMyStyle} buttonTitle={buttonTitle} />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex justify-center gap-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`transition-all rounded-full ${
              currentIndex === i
                ? "w-10 h-2 bg-[#b2833a]"
                : "w-2 h-2 bg-black/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileHeroBanner;
