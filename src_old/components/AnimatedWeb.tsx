import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import Web from '../imports/Web';
import { ChevronUp } from 'lucide-react';
import DesktopHeader from './DesktopHeader';

interface AnimatedWebProps {
  onWishlistClick?: () => void;
  onSearchClick?: () => void;
  onShopClick?: () => void;
  onLogoClick?: () => void;
  onContactClick?: () => void;
  onAboutClick?: () => void;
  onBlogClick?: () => void;
  onSolutionClick?: () => void;
  onFindMyStyle?: () => void;
  onBodyShapeGuideClick?: () => void;
  wishlistCount?: number;
}

// Wrapper component that adds sophisticated animations to the Web import (matching Shop page style)
export default function AnimatedWeb({ onWishlistClick, onSearchClick, onShopClick, onLogoClick, onContactClick, onAboutClick, onBlogClick, onSolutionClick, onFindMyStyle, onBodyShapeGuideClick, wishlistCount = 0 }: AnimatedWebProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect for hero section
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Add ripple effect to all clickable elements
    const addRipple = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.className = 'ripple-effect';
      
      target.style.position = 'relative';
      target.style.overflow = 'hidden';
      target.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    };

    // Add ripple to buttons
    const buttons = containerRef.current.querySelectorAll('[class*="bg-[#b2833a]"], [class*="rounded-[40px]"]');
    buttons.forEach(btn => {
      btn.addEventListener('click', addRipple as EventListener);
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Trigger when 15% of element is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Find all major sections to animate
    // Look for large containers with specific characteristics
    const allDivs = Array.from(containerRef.current.querySelectorAll('div'));
    
    // Target sections based on their structure and size
    const animatedElements = allDivs.filter(div => {
      const classes = div.className;
      
      // Product cards - 3 cards with min-w-[336px]
      if (classes.includes('min-w-[336px]') && classes.includes('basis-0')) {
        div.setAttribute('data-animate', 'product-card');
        return true;
      }
      
      // Large section containers - expanded to catch more patterns
      if (classes.includes('h-[185px]') || 
          classes.includes('min-w-[400px]') ||
          classes.includes('min-w-[650px]') ||
          classes.includes('h-[728px]') ||
          classes.includes('h-[754px]') ||
          classes.includes('h-[900px]') ||
          (classes.includes('bg-[#e3e3e3]') && classes.includes('w-full')) ||
          (classes.includes('bg-[#f6f7f9]') && classes.includes('w-full')) ||
          (classes.includes('bg-[#353535]') && classes.includes('w-full')) ||
          (classes.includes('bg-[#222222]') && classes.includes('w-full') && classes.includes('relative'))) {
        div.setAttribute('data-animate', 'section');
        return true;
      }
      
      // Feature cards with borders
      if (classes.includes('border-[1px]') && classes.includes('rounded-[10px]')) {
        div.setAttribute('data-animate', 'feature-card');
        return true;
      }
      
      // Brand showcase cards
      if ((classes.includes('h-[490px]') && classes.includes('min-w-[200px]')) ||
          (classes.includes('h-[828px]') && classes.includes('min-w-[410px]')) ||
          (classes.includes('h-[452px]') && classes.includes('max-w-[655px]'))) {
        div.setAttribute('data-animate', 'brand-card');
        return true;
      }
      
      // Catch large containers by height (for sections in second half)
      if ((classes.includes('px-[90px]') || classes.includes('px-[210px]')) && 
          (classes.includes('py-[40px]') || classes.includes('py-[50px]') || 
           classes.includes('py-[70px]') || classes.includes('py-[76px]')) &&
          classes.includes('w-full')) {
        div.setAttribute('data-animate', 'section');
        return true;
      }
      
      return false;
    });

    animatedElements.forEach(el => observer.observe(el));

    return () => {
      buttons.forEach(btn => {
        btn.removeEventListener('click', addRipple as EventListener);
      });
      animatedElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative">
      <style dangerouslySetInnerHTML={{__html: `
        /* Enhanced smooth transitions matching Shop page */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Hide the original header from Web component - Frame90 */
        .web-content-wrapper > div > div:first-child[class*="bg-[#222222]"][class*="h-[142px]"] {
          display: none !important;
        }

        /* Add padding to content to account for fixed header - reduced height */
        .web-content-wrapper {
          padding-top: 82px;
        }

        /* Ripple effect animation */
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple-animation 0.6s ease-out;
          pointer-events: none;
        }

        @keyframes ripple-animation {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        /* Navigation hover effects with underline */
        div[class*="Frame37"] p {
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
          position: relative;
        }

        div[class*="Frame37"] p::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #b2833a;
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          transform: translateX(-50%);
        }

        div[class*="Frame37"] p:hover {
          color: #b2833a !important;
          transform: translateY(-2px);
        }

        div[class*="Frame37"] p:hover::after {
          width: 100%;
        }

        /* Button hover effects with Shop page sophistication */
        /* Find my style button */
        div[class*="w-[171px]"][class*="bg-[#b2833a]"] {
          transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
          position: relative;
        }

        div[class*="w-[171px]"][class*="bg-[#b2833a]"]:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0px 15px 40px rgba(178, 131, 58, 0.4);
          filter: brightness(1.15);
        }

        div[class*="w-[171px]"][class*="bg-[#b2833a]"]:active {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0px 10px 30px rgba(178, 131, 58, 0.3);
        }

        /* Shop Now buttons */
        div[class*="rounded-[30px]"][class*="bg-[#b2833a]"]:not([class*="w-[171px]"]) {
          transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
          position: relative;
        }

        div[class*="rounded-[30px]"][class*="bg-[#b2833a]"]:not([class*="w-[171px]"]):hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0px 15px 40px rgba(178, 131, 58, 0.4);
          filter: brightness(1.15);
        }

        div[class*="rounded-[30px]"][class*="bg-[#b2833a]"]:not([class*="w-[171px]"]):active {
          transform: translateY(-2px) scale(1.02);
        }

        /* Login button */
        div[class*="Frame38"] > div {
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
        }

        div[class*="Frame38"] > div:hover {
          transform: scale(1.08);
        }

        div[class*="Frame38"] > div:hover p {
          color: #D38436 !important;
        }

        div[class*="Frame38"] > div:active {
          transform: scale(1.04);
        }

        /* Sign Up button */
        div[class*="Frame38"] div[class*="rounded-[40px]"] {
          transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
        }

        div[class*="Frame38"] div[class*="rounded-[40px]"]:hover {
          background-color: #b2833a;
          transform: scale(1.08);
          box-shadow: 0px 8px 20px rgba(178, 131, 58, 0.3);
        }

        div[class*="Frame38"] div[class*="rounded-[40px]"]:active {
          transform: scale(1.04);
        }

        /* Search box hover effect - Shop page style */
        div[class*="Frame89"] {
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
        }

        div[class*="Frame89"]:hover {
          transform: scale(1.03);
          box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.2);
        }

        div[class*="Frame89"]:active {
          transform: scale(1.01);
        }

        div[class*="Frame89"]:hover div[data-name="iconamoon:search"] {
          transform: rotate(15deg) scale(1.15);
        }

        div[data-name="iconamoon:search"] {
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        /* === IMAGE HOVER EFFECTS - Scale inside container only === */
        
        /* Product cards - Frame42, 43, 44 (min-w-[336px]) */
        div.relative.basis-0.grow[class*="min-w-[336px]"] {
          overflow: hidden !important;
          cursor: pointer;
        }

        div.relative.basis-0.grow[class*="min-w-[336px]"]:hover > img {
          transform: scale(1.05);
        }

        div.relative.basis-0.grow[class*="min-w-[336px]"] > img {
          transition: transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        /* Brand cards - Frame50, 51 (h-[490px] min-w-[200px]) */
        div.relative[class*="h-[490px]"][class*="min-w-[200px]"] {
          overflow: hidden !important;
          cursor: pointer;
        }

        div.relative[class*="h-[490px]"][class*="min-w-[200px]"]:hover > img {
          transform: scale(1.05);
        }

        div.relative[class*="h-[490px]"][class*="min-w-[200px]"] > img {
          transition: transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        /* Brand card - Frame52 (h-[828px]) */
        div.relative[class*="h-[828px]"][class*="min-w-[410px]"] {
          overflow: hidden !important;
          cursor: pointer;
        }

        div.relative[class*="h-[828px]"][class*="min-w-[410px]"]:hover > img {
          transform: scale(1.05);
        }

        div.relative[class*="h-[828px]"][class*="min-w-[410px]"] > img {
          transition: transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        /* Brand card - Frame53 (h-[452px] max-w-[655px]) */
        div.relative[class*="h-[452px]"][class*="max-w-[655px]"] {
          overflow: hidden !important;
          cursor: pointer;
        }

        div.relative[class*="h-[452px]"][class*="max-w-[655px]"]:hover > img {
          transform: scale(1.05);
        }

        div.relative[class*="h-[452px]"][class*="max-w-[655px]"] > img {
          transition: transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        /* General fallback for all images with absolute positioning */
        div.relative:has(> img.absolute) {
          overflow: hidden !important;
        }

        div.relative:has(> img.absolute):hover > img.absolute {
          transform: scale(1.05) !important;
        }

        div.relative img.absolute {
          transition: transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) !important;
        }

        /* Feature cards hover effects */
        div[class*="Frame68"],
        div[class*="Frame69"],
        div[class*="Frame70"] {
          transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
        }

        div[class*="Frame68"]:hover,
        div[class*="Frame69"]:hover,
        div[class*="Frame70"]:hover {
          transform: translateY(-10px);
          border-color: #b2833a !important;
          box-shadow: 0px 20px 50px rgba(178, 131, 58, 0.25);
        }

        /* Logo hover effect */
        div[data-name="Group 58 1"] {
          transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
        }

        div[data-name="Group 58 1"]:hover {
          transform: scale(1.08);
        }

        div[data-name="Group 58 1"] img {
          transition: none !important;
        }

        div[data-name="Group 58 1"]:hover img {
          transform: none !important;
        }

        /* See All button hover */
        div[class*="Frame54"] {
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
        }

        div[class*="Frame54"]:hover {
          transform: scale(1.05);
          box-shadow: 0px 15px 40px rgba(178, 131, 58, 0.35);
        }

        /* Business feature cards */
        div[class*="Frame7"]:not([class*="Frame77"]):not([class*="Frame70"]),
        div[class*="Frame8"],
        div[class*="Frame9"],
        div[class*="Frame10"] {
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
        }

        div[class*="Frame7"]:not([class*="Frame77"]):not([class*="Frame70"]):hover,
        div[class*="Frame8"]:hover,
        div[class*="Frame9"]:hover,
        div[class*="Frame10"]:hover {
          transform: translateY(-8px);
          box-shadow: 0px 15px 40px rgba(178, 131, 58, 0.2);
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Scroll-triggered fade in animations for sections - Using Intersection Observer approach */
        .scroll-animate {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.8s ease-in, transform 0.8s ease-in;
        }

        .scroll-animate.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Animated elements by data attribute */
        div[data-animate] {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.8s ease-in, transform 0.8s ease-in;
        }

        div[data-animate].in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Product cards with stagger */
        div[data-animate="product-card"] {
          opacity: 0;
          transform: translateY(80px) scale(0.95);
          transition: opacity 0.8s ease-in, transform 0.8s ease-in;
        }

        div[data-animate="product-card"].in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        div[data-animate="product-card"]:nth-of-type(1).in-view {
          transition-delay: 0ms;
        }

        div[data-animate="product-card"]:nth-of-type(2).in-view {
          transition-delay: 150ms;
        }

        div[data-animate="product-card"]:nth-of-type(3).in-view {
          transition-delay: 300ms;
        }

        /* Feature cards */
        div[data-animate="feature-card"] {
          opacity: 0;
          transform: scale(0.9) translateY(50px);
          transition: opacity 0.8s ease-in, transform 0.8s ease-in;
        }

        div[data-animate="feature-card"].in-view {
          opacity: 1;
          transform: scale(1) translateY(0);
        }

        /* Brand cards */
        div[data-animate="brand-card"] {
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          transition: opacity 0.8s ease-in, transform 0.8s ease-in;
        }

        div[data-animate="brand-card"].in-view {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Section containers */
        div[data-animate="section"] {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.9s ease-in, transform 0.9s ease-in;
        }

        div[data-animate="section"].in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hero section initial load animation */
        div[class*="Frame87"] {
          animation: heroFadeIn 1s ease-out;
        }

        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Pulse animation for brand badges */
        div[class*="Frame88"],
        div[class*="Frame91"],
        div[class*="Frame92"],
        div[class*="Frame93"] {
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.95;
          }
          50% {
            opacity: 1;
          }
        }
      `}} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="web-content-wrapper"
      >
        <Web onFindMyStyle={onFindMyStyle} />
      </motion.div>

      {/* New Shop-style Header - Overlaid on top */}
      <div className="fixed top-0 left-0 right-0 z-[999]" id="desktop-header-wrapper">
        <DesktopHeader 
          onSearchClick={onSearchClick}
          onWishlistClick={onWishlistClick}
          onShopClick={onShopClick}
          onLogoClick={onLogoClick}
          onContactClick={onContactClick}
          onAboutClick={onAboutClick}
          onBlogClick={onBlogClick}
          onSolutionClick={onSolutionClick}
          onBodyShapeGuideClick={onBodyShapeGuideClick}
          wishlistCount={wishlistCount}
        />
      </div>

      {/* Remove the old wishlist overlay since it's now in the header */}
      
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, boxShadow: '0px 8px 25px rgba(178, 131, 58, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-8 right-8 bg-[#b2833a] text-white p-4 rounded-full shadow-xl z-50 hover:bg-[#D38436] transition-colors duration-300"
          onClick={scrollToTop}
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </div>
  );
}