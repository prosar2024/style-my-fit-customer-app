import { motion } from 'motion/react';
import { Sparkles, X } from 'lucide-react';

interface WelcomePopupProps {
  onYes: () => void;
  onNotNow: () => void;
}

export default function WelcomePopup({ onYes, onNotNow }: WelcomePopupProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6"
      onClick={onNotNow}
    >
      {/* Backdrop with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Popup Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 10 }}
        transition={{ 
          type: "spring", 
          duration: 0.5,
          bounce: 0.3
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
      >
        {/* Decorative gradient background */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-[#b2833a]/10 via-[#D38436]/5 to-transparent" />
        
        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onNotNow}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-md transition-all"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-[#222222]" />
        </motion.button>

        {/* Content */}
        <div className="relative px-6 md:px-8 py-8 md:py-10">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2,
              type: "spring",
              stiffness: 200
            }}
            className="mx-auto w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#b2833a] to-[#D38436] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
          >
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-4 text-[#222222]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Looking for the Perfect Fit?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center text-[#666666] mb-8 px-2 font-['Poppins',sans-serif] text-[15px] leading-relaxed"
          >
            Share your measurements and we'll help you find clothes that suit you best.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            {/* Primary Button - Yes */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onYes}
              className="w-full bg-gradient-to-r from-[#b2833a] to-[#D38436] text-white py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-['Poppins',sans-serif] group relative overflow-hidden"
            >
              {/* Shimmer effect */}
              <motion.div
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Yes, find my style
              </span>
            </motion.button>

            {/* Secondary Button - Not Now */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onNotNow}
              className="w-full bg-transparent border-2 border-[#E5E5E5] text-[#666666] py-4 px-6 rounded-full hover:border-[#b2833a] hover:text-[#b2833a] transition-all duration-300 font-['Poppins',sans-serif]"
            >
              Not now
            </motion.button>
          </div>

          {/* Decorative dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="w-2 h-2 rounded-full bg-[#b2833a]/30"
              />
            ))}
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#b2833a] via-[#D38436] to-[#b2833a]" />
      </motion.div>
    </motion.div>
  );
}
