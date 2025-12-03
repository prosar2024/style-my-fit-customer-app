import { motion } from 'motion/react';
import svgPaths from "../imports/svg-701nqg7p4d";
import imgGroup581 from "figma:asset/4fae0d16a7b686d4e1972e6f284820bc21530bd2.png";

interface TabletHeaderProps {
  onMenuClick?: () => void;
  onLogoClick?: () => void;
  onSearchClick?: () => void;
}

function HamburgerMenuIcon({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 cursor-pointer"
      aria-label="Open menu"
    >
      <div className="[grid-area:1_/_1] bg-white h-[5px] ml-0 mt-0 rounded-[2.5px] w-[30px] transition-all" />
      <div className="[grid-area:1_/_1] bg-white h-[5px] ml-0 mt-[8px] rounded-[2.5px] w-[30px] transition-all" />
      <div className="[grid-area:1_/_1] bg-white h-[5px] ml-0 mt-[16px] rounded-[2.5px] w-[30px] transition-all" />
    </motion.button>
  );
}

function SearchIcon({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="content-stretch flex gap-[17px] items-center justify-center relative shrink-0 w-[40px] cursor-pointer"
      aria-label="Search"
    >
      <div className="relative shrink-0 size-[35px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
          <g>
            <path 
              d={svgPaths.p2bbcd700} 
              stroke="white" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              className="transition-colors"
            />
          </g>
        </svg>
      </div>
    </motion.button>
  );
}

function LogoImage({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="h-[35px] relative shrink-0 w-[150px] cursor-pointer"
      data-name="Group 58 1"
      aria-label="Go to homepage"
    >
      <img 
        alt="StyleMyFit Logo" 
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
        src={imgGroup581} 
      />
    </motion.button>
  );
}

export default function TabletHeader({ onMenuClick, onLogoClick, onSearchClick }: TabletHeaderProps) {
  return (
    <div className="bg-[#222222] box-border content-stretch flex flex-col gap-[10px] items-center px-0 py-[26px] relative w-full">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center justify-between px-[66px] py-0 relative w-full">
            <HamburgerMenuIcon onClick={onMenuClick} />
            <LogoImage onClick={onLogoClick} />
            <SearchIcon onClick={onSearchClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
