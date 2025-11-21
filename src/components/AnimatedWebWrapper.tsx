import { motion, useInView } from 'motion/react';
import { useRef, useEffect, ReactNode } from 'react';

interface AnimatedWebWrapperProps {
  children: React.ReactNode;
}

export default function AnimatedWebWrapper({ children }: AnimatedWebWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Get all major sections for scroll-based animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all sections after a short delay to ensure DOM is ready
    setTimeout(() => {
      if (wrapperRef.current) {
        // Find all major container divs (sections)
        const sections = wrapperRef.current.querySelectorAll('div[class*="flex flex-col"]');
        sections.forEach((section) => {
          if (section instanceof HTMLElement && section.offsetHeight > 300) {
            section.classList.add('animate-section');
            observer.observe(section);
          }
        });

        // Animate product cards
        const cards = wrapperRef.current.querySelectorAll('img[alt=""]');
        cards.forEach((card, index) => {
          if (card instanceof HTMLElement && card.closest('div')?.offsetHeight > 200) {
            const cardContainer = card.closest('div');
            if (cardContainer) {
              cardContainer.classList.add('animate-card');
              cardContainer.style.animationDelay = `${index * 0.1}s`;
              observer.observe(cardContainer);
            }
          }
        });
      }
    }, 100);
    
    return () => {
      observer.disconnect();
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="homepage-animated"
    >
      {children}
    </motion.div>
  );
}

// Scroll reveal component for specific use cases
export function ScrollReveal({ 
  children, 
  delay = 0 
}: { 
  children: ReactNode; 
  delay?: number 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}

// Export animation variants for reuse
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};