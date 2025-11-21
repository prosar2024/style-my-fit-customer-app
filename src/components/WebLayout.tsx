import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import AnimatedWeb from './AnimatedWeb';
import AnimatedSearchBox from './AnimatedSearchBox';

interface WebLayoutProps {
  onFindMyStyle?: () => void;
  onShopClick?: () => void;
  onWishlistClick?: () => void;
  onLogoClick?: () => void;
  onContactClick?: () => void;
  onAboutClick?: () => void;
  onBlogClick?: () => void;
  onSolutionClick?: () => void;
  onBodyShapeGuideClick?: () => void;
  wishlistCount?: number;
  unit: string;
  onUnitChange: (unit: string) => void;
  triggerStyleFinder?: boolean;
  onStyleFinderClose?: () => void;
}

export default function WebLayout({ 
  onFindMyStyle, 
  onShopClick, 
  onWishlistClick,
  onLogoClick,
  onContactClick,
  onAboutClick,
  onBlogClick,
  onSolutionClick,
  onBodyShapeGuideClick,
  wishlistCount = 0,
  unit,
  onUnitChange,
  triggerStyleFinder = false,
  onStyleFinderClose
}: WebLayoutProps) {
  const [showAnimatedSearch, setShowAnimatedSearch] = useState(false);

  return (
    <>
      <div 
        className="desktop-only w-full min-h-screen relative"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const text = target.textContent?.trim();
          
          // Handle search box click
          if (text === 'Search your item here...' || target.closest('[data-name="iconamoon:search"]')) {
            e.preventDefault();
            e.stopPropagation();
            setShowAnimatedSearch(true);
          }
          
          // Handle "Find my style" button
          if (text === 'Find my style' || text === 'Start Now') {
            e.preventDefault();
            if (onFindMyStyle) onFindMyStyle();
          }
          
          // Handle "Shop" and "Shop Now" buttons
          if (text === 'Shop Now' || text === 'Shop' || text === 'View All') {
            e.preventDefault();
            if (onShopClick) {
              onShopClick();
            }
          }
          
          // Handle wishlist
          if (text === 'Wishlist' || target.closest('[data-wishlist]')) {
            e.preventDefault();
            if (onWishlistClick) {
              onWishlistClick();
            }
          }
          
          // Handle logo click
          if (target.closest('[data-logo]')) {
            e.preventDefault();
            if (onLogoClick) {
              onLogoClick();
            }
          }
          
          // Handle contact click
          if (target.closest('[data-contact]')) {
            e.preventDefault();
            if (onContactClick) {
              onContactClick();
            }
          }
          
          // Handle about click
          if (target.closest('[data-about]')) {
            e.preventDefault();
            if (onAboutClick) {
              onAboutClick();
            }
          }
          
          // Handle blog click
          if (target.closest('[data-blog]')) {
            e.preventDefault();
            if (onBlogClick) {
              onBlogClick();
            }
          }
          
          // Handle solution click
          if (target.closest('[data-solution]')) {
            e.preventDefault();
            if (onSolutionClick) {
              onSolutionClick();
            }
          }
          
          // Handle body shape guide click
          if (target.closest('[data-body-shape-guide]')) {
            e.preventDefault();
            if (onBodyShapeGuideClick) {
              onBodyShapeGuideClick();
            }
          }
        }}
      >
        <AnimatedWeb 
          onWishlistClick={onWishlistClick}
          onSearchClick={() => setShowAnimatedSearch(true)}
          onShopClick={onShopClick}
          onLogoClick={onLogoClick}
          onContactClick={onContactClick}
          onAboutClick={onAboutClick}
          onBlogClick={onBlogClick}
          onSolutionClick={onSolutionClick}
          onBodyShapeGuideClick={onBodyShapeGuideClick}
          onFindMyStyle={onFindMyStyle}
          wishlistCount={wishlistCount}
        />
        
        {/* Animated Search Overlay */}
        <AnimatePresence>
          {showAnimatedSearch && (
            <AnimatedSearchBox 
              onClose={() => setShowAnimatedSearch(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}