import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../imports/svg-him158wfwa";
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoImage from 'figma:asset/4fae0d16a7b686d4e1972e6f284820bc21530bd2.png';

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#222222] h-[116px] left-0 top-0 w-full" />
    </div>
  );
}

function Group34({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button 
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className="relative shrink-0 cursor-pointer transition-all flex items-center"
    >
      <ImageWithFallback 
        src={logoImage} 
        alt="Style My Fit" 
        className="h-[50px] w-auto object-contain"
      />
    </motion.button>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex font-['Poppins:Regular',sans-serif] gap-[46px] items-center leading-[40px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
      <button className="relative shrink-0 cursor-pointer transition-colors hover:text-[#d38436]">Our Solution</button>
      <button className="relative shrink-0 cursor-pointer transition-colors hover:text-[#d38436]">How it Works</button>
      <button className="relative shrink-0 cursor-pointer transition-colors hover:text-[#d38436]">About</button>
      <button className="relative shrink-0 cursor-pointer transition-colors hover:text-[#d38436]">Contact</button>
    </div>
  );
}

function Frame5() {
  return (
    <button className="box-border flex items-center justify-center gap-[10px] h-[39px] p-[10px] relative shrink-0 w-[96px] cursor-pointer transition-colors hover:text-[#a07534]">
      <p className="font-['Poppins:Regular',sans-serif] not-italic relative shrink-0 text-[#b2833a] text-[14px] text-nowrap whitespace-pre">Login</p>
    </button>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame79({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[169px] items-center relative shrink-0">
      <Group34 onClick={onLogoClick} />
      <Frame77 />
      <Frame78 />
    </div>
  );
}

function Frame80({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="h-[116px] mb-[-26px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[116px] items-start px-[214px] py-[38px] relative w-full">
          <Group1 />
          <Frame79 onLogoClick={onLogoClick} />
        </div>
      </div>
    </div>
  );
}

function IconamoonSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconamoon:search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconamoon:search">
          <path d={svgPaths.p10a22f00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.21" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[1040] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Search Box - Focused State */}
      <motion.div
        initial={{ scale: 0.95, y: -20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: -20 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#f4f4f4] box-border flex gap-[6px] h-[50px] items-center px-[24px] py-[10px] rounded-[30px] w-[600px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] z-10"
      >
        <div 
          aria-hidden="true" 
          className="absolute inset-0 pointer-events-none rounded-[30px] border-2 border-[#b2833a]"
        />
        <IconamoonSearch />
        <input
          type="text"
          placeholder="Search your item here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent font-['Poppins:Regular',sans-serif] leading-[40px] text-[14px] text-[#222222] outline-none placeholder:text-[#acacac]"
          autoFocus
        />
        {searchQuery && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              setSearchQuery('');
            }}
            className="text-[#666666] hover:text-[#222222] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        )}
      </motion.div>
      
      {/* Search Results (if needed) */}
      {searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[calc(50%+35px)] bg-white rounded-[16px] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] w-[600px] max-h-[400px] overflow-y-auto p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-[14px] text-[#999999] font-['Poppins:Regular',sans-serif] text-center py-8">
            No results found for "{searchQuery}"
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

function Frame7() {
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);

  return (
    <>
      {/* Search Box - Default State (stays in original position) */}
      <div
        className="bg-[#f4f4f4] box-border content-stretch flex gap-[6px] h-[50px] items-center px-[24px] py-[10px] rounded-[30px] shrink-0 w-[482px] cursor-pointer hover:bg-[#ebebeb] transition-colors relative"
        style={{
          marginBottom: '-26px',
        }}
        onClick={() => setShowSearchOverlay(true)}
      >
        <div 
          aria-hidden="true" 
          className="absolute inset-0 pointer-events-none rounded-[30px] border-2 border-[#c7c7c7] transition-colors"
        />
        <IconamoonSearch />
        <p className="flex-1 font-['Poppins:Regular',sans-serif] leading-[40px] text-[14px] text-[#acacac] select-none">
          Search your item here...
        </p>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {showSearchOverlay && (
          <SearchOverlay onClose={() => setShowSearchOverlay(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function Header({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-center left-0 pb-[26px] pt-0 px-0 top-0 w-full z-50">
      <Frame80 onLogoClick={onLogoClick} />
      <Frame7 />
    </div>
  );
}
