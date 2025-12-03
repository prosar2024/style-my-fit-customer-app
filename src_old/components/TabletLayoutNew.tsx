import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Tablet from '../imports/Tablet';
import AnimatedSearchBox from './AnimatedSearchBox';
import TabletHeader from './TabletHeader';
import MobileMenu from './MobileMenu';
import AnimatedWebWrapper from './AnimatedWebWrapper';

interface TabletLayoutNewProps {
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
  triggerStyleFinder?: boolean;
  onStyleFinderClose?: () => void;
}

export default function TabletLayoutNew({ 
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
  triggerStyleFinder,
  onStyleFinderClose
}: TabletLayoutNewProps) {
  const [showAnimatedSearch, setShowAnimatedSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
        className="tablet-only w-full min-h-screen relative"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const text = target.textContent?.trim();
          
          console.log('🖱️ Tablet Click:', { text, tagName: target.tagName, className: target.className });
          
          // Handle search box click
          if (text === 'Search your item here...' || target.closest('[data-name="iconamoon:search"]')) {
            e.preventDefault();
            e.stopPropagation();
            setShowAnimatedSearch(true);
          }
          
          // Handle "Find my style" button - Enhanced matching
          if (text === 'Find my style' || text === 'Start Now' || text?.toLowerCase().includes('find my style')) {
            e.preventDefault();
            e.stopPropagation();
            console.log('✨ Find My Style clicked!');
            if (onFindMyStyle) {
              console.log('🚀 Calling onFindMyStyle callback...');
              onFindMyStyle();
            } else {
              console.warn('⚠️ onFindMyStyle callback is not defined!');
            }
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
          
          // Handle "Go Home" button
          if (text === 'Go Home') {
            e.preventDefault();
            if (onGoHome) {
              onGoHome();
            }
          }
          
          // Handle "Contact" button
          if (text === 'Contact') {
            e.preventDefault();
            if (onContactClick) {
              onContactClick();
            }
          }
          
          // Handle "About" button
          if (text === 'About') {
            e.preventDefault();
            if (onAboutClick) {
              onAboutClick();
            }
          }
          
          // Handle "Blog" button
          if (text === 'Blog') {
            e.preventDefault();
            if (onBlogClick) {
              onBlogClick();
            }
          }
          
          // Handle "Solution" button
          if (text === 'Solution') {
            e.preventDefault();
            if (onSolutionClick) {
              onSolutionClick();
            }
          }
          
          // Handle "Body Shape Guide" button
          if (text === 'Body Shape Guide') {
            e.preventDefault();
            if (onBodyShapeGuideClick) {
              onBodyShapeGuideClick();
            }
          }
        }}
      >
        {/* New Tablet Header - Fixed Position */}
        <div className={`fixed top-0 left-0 right-0 z-[998] transition-opacity duration-300 ${triggerStyleFinder ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <TabletHeader
            onMenuClick={() => setShowMobileMenu(!showMobileMenu)}
            onLogoClick={onGoHome}
            onSearchClick={() => setShowAnimatedSearch(true)}
          />
        </div>

        {/* Hide the original tablet header from Tablet component */}
        <style dangerouslySetInnerHTML={{__html: `
          /* Hide the original Tablet header */
          div[data-name="Tablet"] > div:first-child {
            display: none !important;
          }
        `}} />

        {/* Hide tablet header when StyleFinder is open */}
        {triggerStyleFinder && (
          <style dangerouslySetInnerHTML={{__html: `
            /* Hide the new Tablet header when StyleFinder is open */
            .fixed.top-0.left-0.right-0 {
              opacity: 0 !important;
              pointer-events: none !important;
            }
          `}} />
        )}

        <AnimatedWebWrapper>
          <Tablet />
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