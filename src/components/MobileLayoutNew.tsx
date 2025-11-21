import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Mobile from '../imports/Mobile';
import AnimatedSearchBox from './AnimatedSearchBox';
import MobileHeader from './MobileHeader';
import HamburgerIcon from './HamburgerIcon';
import MobileMenu from './MobileMenu';
import AnimatedWebWrapper from './AnimatedWebWrapper';

interface MobileLayoutNewProps {
  onFindMyStyle?: () => void;
  onShopClick?: () => void;
  onWishlistClick?: () => void;
  onGoHome?: () => void;
  onContactClick?: () => void;
  onAboutClick?: () => void;
  onBlogClick?: () => void;
  onSolutionClick?: () => void;
  onBodyShapeGuideClick?: () => void;
  unit: string;
  onUnitChange: (unit: string) => void;
  wishlistCount?: number;
  triggerStyleFinder?: boolean;
  onStyleFinderClose?: () => void;
}

export default function MobileLayoutNew({ 
  onFindMyStyle, 
  onShopClick, 
  onWishlistClick,
  onGoHome,
  onContactClick,
  onAboutClick,
  onBlogClick,
  onSolutionClick,
  onBodyShapeGuideClick,
  unit,
  onUnitChange,
  wishlistCount = 0,
  triggerStyleFinder,
  onStyleFinderClose
}: MobileLayoutNewProps) {
  const [showAnimatedSearch, setShowAnimatedSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleFindMyStyleClick = () => {
    if (onFindMyStyle) onFindMyStyle();
  };

  const handleMenuNavigate = (page: string) => {
    setShowMobileMenu(false);
    
    switch (page) {
      case 'home':
        onGoHome?.();
        break;
      case 'shop':
        onShopClick?.();
        break;
      case 'wishlist':
        onWishlistClick?.();
        break;
      case 'contact':
        onContactClick?.();
        break;
      case 'about':
        onAboutClick?.();
        break;
      case 'blog':
        onBlogClick?.();
        break;
      case 'solution':
        onSolutionClick?.();
        break;
      case 'body-shape-guide':
        onBodyShapeGuideClick?.();
        break;
    }
  };

  return (
    <>
      <div 
        className="mobile-only w-full min-h-screen relative"
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
            handleFindMyStyleClick();
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
        }}
      >
        {/* Hide the old header from Mobile.tsx */}
        <style dangerouslySetInnerHTML={{__html: `
          /* Hide the old Mobile.tsx Frame85 header using data-name selector */
          div[data-name="Mobile"] > div:first-child {
            display: none !important;
          }
        `}} />

        {/* New MobileHeader - Replaces hamburger icon and old header */}
        <div className={`sticky top-0 z-[999] transition-opacity duration-300 ${triggerStyleFinder ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <MobileHeader
            menuOpen={showMobileMenu}
            onMenuToggle={() => setShowMobileMenu(!showMobileMenu)}
            onSearchClick={() => setShowAnimatedSearch(true)}
            onShopClick={onShopClick}
            onWishlistClick={onWishlistClick}
            onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            activePage="home"
            wishlistCount={wishlistCount}
          />
        </div>

        <AnimatedWebWrapper>
          <Mobile onFindMyStyle={handleFindMyStyleClick} />
        </AnimatedWebWrapper>
        
        {/* Mobile Menu Drawer */}
        <MobileMenu 
          isOpen={showMobileMenu}
          onClose={() => setShowMobileMenu(false)}
          onNavigate={handleMenuNavigate}
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