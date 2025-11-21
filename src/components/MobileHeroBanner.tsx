import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import image1 from 'figma:asset/0689d981d5f05e38320dab90c9780bddda863f57.png';
import image2 from 'figma:asset/d9f49fb1be4b0bc87bdb3938b2706158429220b4.png';
import image3 from 'figma:asset/e97af6bae840cf54dfd15863d7ec6a1587f431b6.png';
import svgPaths from '../imports/svg-j2xruh9mgf';
import { EnhancedFindMyStyleButton } from './EnhancedFindMyStyleButton';

const images = [image1, image2, image3];

interface MobileHeroBannerProps {
  onFindMyStyle?: () => void;
}

export default function MobileHeroBanner({ onFindMyStyle }: MobileHeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[732px] min-w-[440px] overflow-hidden bg-[#f5f5f5]">
      {/* All images stacked with absolute positioning to prevent white flashes */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ 
              opacity: currentIndex === index ? 1 : 0,
            }}
            transition={{ 
              duration: 1.5,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="absolute inset-0"
            style={{ willChange: 'opacity' }}
          >
            <img
              src={image}
              alt={`Fashion banner ${index + 1}`}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-row items-center justify-center">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[327px] pr-[193px] py-[10px] relative w-full">
          <div className="basis-0 content-stretch flex flex-col gap-[22px] grow items-start justify-center max-w-[600px] min-h-px min-w-[274px] relative shrink-0">
            {/* Heading */}
            <motion.p 
              key={`title-${currentIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-['Playfair_Display:700',serif] leading-[53px] min-w-full not-italic relative shrink-0 text-[50px] w-[min-content]"
              style={{
                background: 'linear-gradient(135deg, #222222 0%, #b2833a 50%, #D38436 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 2px 20px rgba(178, 131, 58, 0.3)',
              }}
            >
              Where Style Meets the Perfect Fit.
            </motion.p>
            
            {/* Button Container */}
            <motion.div 
              key={`button-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="content-stretch flex gap-[16px] items-center relative shrink-0"
            >
              <div 
                className="scale-90"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (onFindMyStyle) {
                    onFindMyStyle();
                  }
                }}
              >
                <EnhancedFindMyStyleButton onClick={onFindMyStyle} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-2.5 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-700 ease-out rounded-full ${
              currentIndex === index 
                ? 'w-10 h-2 bg-[#b2833a] shadow-lg' 
                : 'w-2 h-2 bg-[#222222]/40 hover:bg-[#b2833a]/70 hover:scale-125'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}