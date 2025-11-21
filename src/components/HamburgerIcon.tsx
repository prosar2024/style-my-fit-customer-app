import { motion } from 'motion/react';

interface HamburgerIconProps {
  isOpen?: boolean;
  onClick: () => void;
  className?: string;
}

export default function HamburgerIcon({ isOpen = false, onClick, className = "" }: HamburgerIconProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors ${className}`}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="block h-0.5 w-full bg-white rounded-full origin-center"
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -10 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="block h-0.5 w-full bg-white rounded-full"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="block h-0.5 w-full bg-white rounded-full origin-center"
        />
      </div>
    </button>
  );
}
