import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import svgPaths from "../imports/svg-iinhb3rl1e";
import imgGroup581 from "figma:asset/4fae0d16a7b686d4e1972e6f284820bc21530bd2.png";

interface MobileHeaderProps {
  menuOpen: boolean;
  onMenuToggle: () => void;
  onSearchClick: () => void;
  onShopClick?: () => void;
  onWishlistClick?: () => void;
  onLogoClick?: () => void;
  onLoginClick?: () => void;
  onSolutionClick?: () => void;
  onBodyShapeGuideClick?: () => void;
  onAboutClick?: () => void;
  onBlogClick?: () => void;
  onContactClick?: () => void;
  activePage?: 'home' | 'clothing' | 'wishlist' | 'solution' | 'body-shape-guide' | 'about' | 'blog' | 'contact';
  wishlistCount?: number;
}

function HamburgerIcon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[5px] ml-0 mt-0 rounded-[2.5px] w-[30px]" />
      <div className="[grid-area:1_/_1] bg-white h-[5px] ml-0 mt-[8px] rounded-[2.5px] w-[30px]" />
      <div className="[grid-area:1_/_1] bg-white h-[5px] ml-0 mt-[16px] rounded-[2.5px] w-[30px]" />
    </div>
  );
}

function IconamoonSearch() {
  return (
    <div className="relative shrink-0 size-[35px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g>
          <path d={svgPaths.p2bbcd700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function MobileHeader({ 
  menuOpen, 
  onMenuToggle, 
  onSearchClick,
  onShopClick,
  onWishlistClick,
  onLogoClick,
  onLoginClick,
  onSolutionClick,
  onBodyShapeGuideClick,
  onAboutClick,
  onBlogClick,
  onContactClick,
  activePage = 'home',
  wishlistCount = 0
}: MobileHeaderProps) {
  return (
    <>
      {/* Fixed Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#222222]">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center justify-between px-[20px] py-[12px] relative size-full">
            {/* Hamburger Menu Button */}
            <motion.button
              onClick={onMenuToggle}
              className="touch-manipulation relative z-10"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="hamburger"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HamburgerIcon />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Logo */}
            <motion.div 
              className="h-[35px] relative shrink-0 w-[150px] cursor-pointer" 
              onClick={onLogoClick}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                alt="Style My Fit" 
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                src={imgGroup581} 
              />
            </motion.div>

            {/* Search Icon Button */}
            <motion.button
              onClick={onSearchClick}
              className="touch-manipulation relative z-10"
              aria-label="Search"
              whileTap={{ scale: 0.95 }}
            >
              <IconamoonSearch />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[#222222] border-t border-[#333333] overflow-hidden"
            >
              <nav className="flex flex-col px-[20px] py-3 font-['Poppins:Regular',sans-serif] text-[14px] text-white">
                <motion.button 
                  onClick={() => {
                    if (onLogoClick) {
                      onLogoClick();
                      onMenuToggle();
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`py-3 text-left transition-colors touch-manipulation min-h-[44px] flex items-center ${
                    activePage === 'home' ? 'text-[#b2833a]' : 'hover:text-[#d38436]'
                  }`}
                >
                  Home
                </motion.button>
                <motion.button 
                  onClick={() => {
                    if (onShopClick) {
                      onShopClick();
                      onMenuToggle();
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`py-3 text-left transition-colors touch-manipulation min-h-[44px] flex items-center ${
                    activePage === 'clothing' ? 'text-[#b2833a]' : 'hover:text-[#d38436]'
                  }`}
                >
                  Clothing
                </motion.button>
                <motion.button
                  onClick={() => {
                    if (onWishlistClick) {
                      onWishlistClick();
                      onMenuToggle();
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`py-3 text-left transition-colors touch-manipulation min-h-[44px] flex items-center justify-between ${
                    activePage === 'wishlist' ? 'text-[#b2833a]' : 'hover:text-[#d38436]'
                  }`}
                >
                  <span>Wishlist</span>
                  {wishlistCount > 0 && (
                    <span className="bg-[#b2833a] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      {wishlistCount}
                    </span>
                  )}
                </motion.button>
                <motion.button 
                  onClick={() => {
                    if (onSolutionClick) {
                      onSolutionClick();
                      onMenuToggle();
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`py-3 text-left transition-colors touch-manipulation min-h-[44px] flex items-center ${
                    activePage === 'solution' ? 'text-[#b2833a]' : 'hover:text-[#d38436]'
                  }`}
                >
                  Our Solution
                </motion.button>
                <motion.button 
                  onClick={() => {
                    if (onBodyShapeGuideClick) {
                      onBodyShapeGuideClick();
                      onMenuToggle();
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`py-3 text-left transition-colors touch-manipulation min-h-[44px] flex items-center ${
                    activePage === 'body-shape-guide' ? 'text-[#b2833a]' : 'hover:text-[#d38436]'
                  }`}
                >
                  Body Shape Guide
                </motion.button>
                <motion.button 
                  onClick={() => {
                    if (onAboutClick) {
                      onAboutClick();
                      onMenuToggle();
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`py-3 text-left transition-colors touch-manipulation min-h-[44px] flex items-center ${
                    activePage === 'about' ? 'text-[#b2833a]' : 'hover:text-[#d38436]'
                  }`}
                >
                  About
                </motion.button>
                <motion.button 
                  onClick={() => {
                    if (onBlogClick) {
                      onBlogClick();
                      onMenuToggle();
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`py-3 text-left transition-colors touch-manipulation min-h-[44px] flex items-center ${
                    activePage === 'blog' ? 'text-[#b2833a]' : 'hover:text-[#d38436]'
                  }`}
                >
                  Blog
                </motion.button>
                <motion.button 
                  onClick={() => {
                    if (onContactClick) {
                      onContactClick();
                      onMenuToggle();
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`py-3 text-left transition-colors touch-manipulation min-h-[44px] flex items-center ${
                    activePage === 'contact' ? 'text-[#b2833a]' : 'hover:text-[#d38436]'
                  }`}
                >
                  Contact
                </motion.button>
                <motion.button 
                  onClick={onLoginClick}
                  whileTap={{ scale: 0.98 }}
                  className="py-3 text-left transition-colors hover:text-[#d38436] touch-manipulation min-h-[44px] flex items-center"
                >
                  Login
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Header Spacer - Accounts for fixed header height */}
      <div className="h-[59px]" />
    </>
  );
}