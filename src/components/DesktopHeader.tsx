import { Heart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import svgPaths from "../imports/svg-pa3yw4y7q3";
import imgGroup581 from "figma:asset/4fae0d16a7b686d4e1972e6f284820bc21530bd2.png";
import LoginModal from './LoginModal';

interface DesktopHeaderProps {
  onLogoClick?: () => void;
  onShopClick?: () => void;
  onWishlistClick?: () => void;
  onSearchClick?: () => void;
  onContactClick?: () => void;
  onAboutClick?: () => void;
  onBlogClick?: () => void;
  onSolutionClick?: () => void;
  onBodyShapeGuideClick?: () => void;
  wishlistCount?: number;
  activePage?: 'home' | 'clothing' | 'wishlist' | 'contact' | 'about' | 'blog' | 'solution' | 'body-shape-guide';
}

function Frame1({ onShopClick, onContactClick, onAboutClick, onBlogClick, onSolutionClick, onBodyShapeGuideClick, activePage }: { onShopClick?: () => void; onContactClick?: () => void; onAboutClick?: () => void; onBlogClick?: () => void; onSolutionClick?: () => void; onBodyShapeGuideClick?: () => void; activePage?: string }) {
  return (
    <div className="content-stretch hidden lg:flex font-['Poppins:Regular',sans-serif] gap-[46px] items-center justify-center leading-[40px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
      <button 
        onClick={onSolutionClick}
        className={`relative shrink-0 transition-colors cursor-pointer ${
          activePage === 'solution' ? 'text-[#b2833a]' : 'hover:text-[#b2833a]'
        }`}
      >
        Our Solution
      </button>
      <button 
        onClick={onShopClick}
        className={`relative shrink-0 transition-colors cursor-pointer ${
          activePage === 'clothing' ? 'text-[#b2833a]' : 'hover:text-[#b2833a]'
        }`}
      >
        Clothing
      </button>
      <button 
        onClick={onBodyShapeGuideClick}
        className={`relative shrink-0 transition-colors cursor-pointer ${
          activePage === 'body-shape-guide' ? 'text-[#b2833a]' : 'hover:text-[#b2833a]'
        }`}
      >
        Body Shape Guide
      </button>
      <button 
        onClick={onAboutClick}
        className={`relative shrink-0 transition-colors cursor-pointer ${
          activePage === 'about' ? 'text-[#b2833a]' : 'hover:text-[#b2833a]'
        }`}
      >
        About
      </button>
      <button 
        onClick={onBlogClick}
        className={`relative shrink-0 transition-colors cursor-pointer ${
          activePage === 'blog' ? 'text-[#b2833a]' : 'hover:text-[#b2833a]'
        }`}
      >
        Blog
      </button>
      <button 
        onClick={onContactClick}
        className={`relative shrink-0 transition-colors cursor-pointer ${
          activePage === 'contact' ? 'text-[#b2833a]' : 'hover:text-[#b2833a]'
        }`}
      >
        Contact
      </button>
    </div>
  );
}

// Search Icon Component
function SearchIcon({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative shrink-0 size-[35px] hover:scale-110 transition-transform cursor-pointer group"
      aria-label="Search"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g>
          <path d={svgPaths.p2bbcd700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="group-hover:stroke-[#b2833a] transition-colors" />
        </g>
      </svg>
    </button>
  );
}

// Heart/Wishlist Icon Component
function WishlistIcon({ onClick, wishlistCount = 0 }: { onClick?: () => void; wishlistCount?: number }) {
  return (
    <button 
      onClick={onClick}
      className="h-[32px] relative shrink-0 w-[35px] hover:scale-110 transition-transform cursor-pointer group"
      aria-label={`Wishlist (${wishlistCount} items)`}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 32">
        <g>
          <path d={svgPaths.p3f949480} fill="white" className="group-hover:fill-[#b2833a] transition-colors" />
        </g>
      </svg>
      {wishlistCount > 0 && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 bg-[#b2833a] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-['Poppins:Medium',sans-serif]"
        >
          {wishlistCount}
        </motion.div>
      )}
    </button>
  );
}

function Frame({ onLoginClick }: { onLoginClick?: () => void }) {
  return (
    <button 
      onClick={onLoginClick}
      className="box-border content-stretch flex gap-[10px] h-[39px] items-center justify-center p-[10px] relative shrink-0 w-[96px] hover:bg-[#b2833a] hover:text-white rounded-[30px] transition-all cursor-pointer group"
    >
      <p className="font-['Poppins:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#b2833a] text-[14px] text-nowrap whitespace-pre group-hover:text-white">Login</p>
    </button>
  );
}

function Frame2({ onLoginClick }: { onLoginClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-[69px]">
      <Frame onLoginClick={onLoginClick} />
    </div>
  );
}

function Frame6({ onSearchClick, onWishlistClick, onLoginClick, wishlistCount }: { 
  onSearchClick?: () => void;
  onWishlistClick?: () => void; 
  onLoginClick?: () => void; 
  wishlistCount?: number;
}) {
  return (
    <div className="content-stretch flex gap-[17px] items-center justify-center relative shrink-0 w-[192px]">
      <SearchIcon onClick={onSearchClick} />
      <WishlistIcon onClick={onWishlistClick} wishlistCount={wishlistCount} />
      <Frame2 onLoginClick={onLoginClick} />
    </div>
  );
}

function Frame3({ onLogoClick, onShopClick, onSearchClick, onWishlistClick, onLoginClick, onContactClick, onAboutClick, onBlogClick, onSolutionClick, onBodyShapeGuideClick, wishlistCount, activePage }: { 
  onLogoClick?: () => void; 
  onShopClick?: () => void;
  onSearchClick?: () => void;
  onWishlistClick?: () => void;
  onLoginClick?: () => void;
  onContactClick?: () => void;
  onAboutClick?: () => void;
  onBlogClick?: () => void;
  onSolutionClick?: () => void;
  onBodyShapeGuideClick?: () => void;
  wishlistCount?: number;
  activePage?: string;
}) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[174px] py-0 relative w-full">
          <button 
            onClick={onLogoClick}
            className="h-[35px] relative shrink-0 w-[150px] hover:scale-105 transition-transform cursor-pointer" 
            data-name="Group 58 1"
            aria-label="Go to homepage"
          >
            <img alt="StyleMyFit Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup581} />
          </button>
          <Frame1 onShopClick={onShopClick} onContactClick={onContactClick} onAboutClick={onAboutClick} onBlogClick={onBlogClick} onSolutionClick={onSolutionClick} onBodyShapeGuideClick={onBodyShapeGuideClick} activePage={activePage} />
          <Frame6 onSearchClick={onSearchClick} onWishlistClick={onWishlistClick} onLoginClick={onLoginClick} wishlistCount={wishlistCount} />
        </div>
      </div>
    </div>
  );
}

export default function DesktopHeader({ onLogoClick, onShopClick, onWishlistClick, onSearchClick, onContactClick, onAboutClick, onBlogClick, onSolutionClick, onBodyShapeGuideClick, wishlistCount = 0, activePage }: DesktopHeaderProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <div className="bg-[#222222] box-border content-stretch flex flex-col gap-[4px] items-center px-0 py-[26px] relative w-full">
        <Frame3 
          onLogoClick={onLogoClick}
          onShopClick={onShopClick}
          onSearchClick={onSearchClick}
          onWishlistClick={onWishlistClick}
          onLoginClick={handleLoginClick}
          onContactClick={onContactClick}
          onAboutClick={onAboutClick}
          onBlogClick={onBlogClick}
          onSolutionClick={onSolutionClick}
          onBodyShapeGuideClick={onBodyShapeGuideClick}
          wishlistCount={wishlistCount}
          activePage={activePage}
        />
      </div>
      
      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </>
  );
}