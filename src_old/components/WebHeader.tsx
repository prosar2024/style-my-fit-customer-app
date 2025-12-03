import { motion } from 'motion/react';
import { Heart, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from 'figma:asset/4fae0d16a7b686d4e1972e6f284820bc21530bd2.png';

interface WebHeaderProps {
  onSearchClick?: () => void;
  onWishlistClick?: () => void;
  onShopClick?: () => void;
  onLogoClick?: () => void;
  onSolutionClick?: () => void;
  wishlistCount?: number;
  showClose?: boolean;
  onClose?: () => void;
  highlightShop?: boolean;
}

// Search Icon SVG Component
function IconamoonSearch() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="black" strokeOpacity="0.21" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function WebHeader({ 
  onSearchClick, 
  onWishlistClick, 
  onShopClick,
  onLogoClick,
  onSolutionClick,
  wishlistCount = 0,
  showClose = false,
  onClose,
  highlightShop = false
}: WebHeaderProps) {
  console.log('🔍 WebHeader wishlistCount:', wishlistCount);
  
  return (
    <div className="bg-[#222222] box-border content-stretch flex flex-col gap-[10px] items-center px-0 py-[24px] relative w-full sticky top-0 z-50">
      {/* Top Row: Logo, Navigation, Wishlist, Login */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center justify-between px-6 lg:px-[174px] py-0 relative w-full">
            {/* Logo */}
            <motion.div
              onClick={onLogoClick || onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`h-[35px] relative shrink-0 w-[150px] ml-10 lg:ml-0 cursor-pointer`}
            >
              <img 
                alt="E-FIT" 
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                src={logoImage} 
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex content-stretch font-['Poppins:Regular',sans-serif] gap-[46px] items-center justify-center leading-[40px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
              <p 
                className="relative shrink-0 hover:text-[#d38436] transition-colors cursor-pointer"
                onClick={onSolutionClick}
              >
                Our Solution
              </p>
              <p 
                className={`relative shrink-0 transition-colors cursor-pointer ${highlightShop ? 'text-[#d38436]' : 'hover:text-[#d38436]'}`}
                onClick={onShopClick}
              >
                Shop
              </p>
              <p className="relative shrink-0 hover:text-[#d38436] transition-colors cursor-pointer">Body Shape Guide</p>
              <p className="relative shrink-0 hover:text-[#d38436] transition-colors cursor-pointer">About</p>
              <p className="relative shrink-0 hover:text-[#d38436] transition-colors cursor-pointer">Blog</p>
              <p className="relative shrink-0 hover:text-[#d38436] transition-colors cursor-pointer">Contact</p>
            </div>

            {/* Right Side: Wishlist + Login (Desktop) / Close (Mobile) */}
            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[96px]">
              {/* Wishlist Button - Desktop Only */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onWishlistClick}
                className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors relative cursor-pointer"
              >
                <Heart className="text-[#b2833a]" size={20} fill="#b2833a" />
                {wishlistCount > 0 && (
                  <motion.span 
                    key={wishlistCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                    className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-[#b2833a] rounded-full flex items-center justify-center text-white text-xs font-semibold shadow-lg border-2 border-[#222222]"
                  >
                    {wishlistCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Login Button - Desktop Only */}
              <div className="hidden lg:flex box-border items-center justify-center gap-[10px] h-[39px] p-[10px] relative shrink-0">
                <p className="font-['Poppins:Regular',sans-serif] not-italic relative shrink-0 text-[#b2833a] text-[14px] text-nowrap whitespace-pre cursor-pointer hover:text-[#a07534] transition-colors">
                  Login
                </p>
              </div>

              {/* Mobile Close Button */}
              {showClose && (
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="text-white" size={20} />
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Search Box - Desktop Only */}
      <div 
        className="hidden lg:flex bg-white box-border content-stretch gap-[6px] items-center px-[30px] py-[5px] relative rounded-[30px] shrink-0 w-[482px] cursor-pointer hover:bg-[#f9f9f9] transition-colors"
        onClick={onSearchClick}
      >
        <IconamoonSearch />
        <p className="font-['Poppins:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#acacac] text-[14px] text-nowrap whitespace-pre select-none">
          Search your item here...
        </p>
      </div>
    </div>
  );
}