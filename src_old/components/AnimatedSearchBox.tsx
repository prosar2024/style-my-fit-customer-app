import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X } from 'lucide-react';

interface AnimatedSearchBoxProps {
  onClose?: () => void;
  placeholder?: string;
}

export default function AnimatedSearchBox({ 
  onClose,
  placeholder = "Search your item here..."
}: AnimatedSearchBoxProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Lock body scroll when search box is open
  useEffect(() => {
    document.body.classList.add('menu-open');
    document.documentElement.classList.add('menu-open');
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
    };
  }, []);

  const handleClose = () => {
    setSearchQuery('');
    if (onClose) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
      onClick={handleClose}
    >
      {/* Backdrop with blur */}
      <motion.div 
        initial={{ backdropFilter: 'blur(0px)' }}
        animate={{ backdropFilter: 'blur(12px)' }}
        exit={{ backdropFilter: 'blur(0px)' }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black/40" 
      />
      
      <motion.div
        initial={{ scale: 0.85, y: -40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: -20, opacity: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.34, 1.56, 0.64, 1],
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white box-border flex gap-[10px] items-center px-[30px] py-[15px] rounded-[30px] w-full max-w-[600px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] relative z-10"
      >
        <div 
          aria-hidden="true" 
          className="absolute inset-0 pointer-events-none rounded-[30px] border-2 border-[#b2833a]"
        />
        <Search size={24} className="text-black opacity-21 flex-shrink-0" />
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent font-['Poppins:Regular',sans-serif] leading-[40px] text-[16px] text-[#222222] outline-none placeholder:text-[#acacac]"
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
            className="text-[#666666] hover:text-[#222222] transition-colors flex-shrink-0"
          >
            <X size={20} />
          </motion.button>
        )}
        <button
          onClick={handleClose}
          className="ml-2 text-[#666666] hover:text-[#222222] transition-colors flex-shrink-0"
        >
          <X size={24} />
        </button>
      </motion.div>
    </motion.div>
  );
}