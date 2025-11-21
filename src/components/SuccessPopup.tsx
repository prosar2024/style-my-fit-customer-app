import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check } from 'lucide-react';

interface SuccessPopupProps {
  isOpen: boolean;
  bodyShape: string;
  onComplete: () => void;
}

export default function SuccessPopup({ isOpen, bodyShape, onComplete }: SuccessPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(178, 131, 58, 0.15) 0%, rgba(0, 0, 0, 0.6) 100%)',
            backdropFilter: 'blur(8px)'
          }}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#b2833a] rounded-full"
                initial={{ 
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  y: typeof window !== 'undefined' ? [null, Math.random() * window.innerHeight] : 0,
                  opacity: [0, 1, 0],
                  scale: [0, Math.random() * 2 + 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 2 + 2,
                  delay: Math.random() * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Success Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: -20 }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.6
            }}
            className="relative bg-white rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.3)] overflow-hidden max-w-[540px] w-full"
          >
            {/* Decorative Top Border with Animation */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#b2833a] via-[#D38436] to-[#b2833a]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Animated Background Glow */}
            <motion.div
              className="absolute top-0 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-[#b2833a] rounded-full opacity-10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Content */}
            <div className="relative px-8 py-10 sm:px-12 sm:py-12">
              {/* Success Icon with Animation */}
              <motion.div
                className="relative mx-auto mb-6 flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring",
                  damping: 15,
                  stiffness: 200,
                  delay: 0.3
                }}
              >
                {/* Outer Ring */}
                <motion.div
                  className="absolute w-28 h-28 rounded-full border-4 border-[#b2833a]/20"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
                
                {/* Pulsing Ring */}
                <motion.div
                  className="absolute w-28 h-28 rounded-full border-2 border-[#b2833a]"
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 0, 0.6]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Success Circle */}
                <motion.div
                  className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#b2833a] to-[#D38436] flex items-center justify-center shadow-[0_10px_30px_rgba(178,131,58,0.4)]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                    delay: 0.5
                  }}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                  >
                    <Check size={48} className="text-white" strokeWidth={3} />
                  </motion.div>
                </motion.div>

                {/* Sparkles */}
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles size={24} className="text-[#D38436]" fill="#D38436" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2"
                  animate={{ 
                    rotate: [0, -15, 15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <Sparkles size={20} className="text-[#b2833a]" fill="#b2833a" />
                </motion.div>
              </motion.div>

              {/* Success Message */}
              <motion.div
                className="text-center space-y-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <h2 className="font-['Playfair_Display:700',serif] text-[#222222] text-3xl sm:text-4xl">
                  Perfect!
                </h2>
                <p className="font-['Poppins:Regular',sans-serif] text-[#666666] text-base sm:text-lg leading-relaxed">
                  Finding your best fit recommendations...
                </p>
              </motion.div>

              {/* Body Shape Badge */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#b2833a]/10 to-[#D38436]/10 rounded-full border-2 border-[#b2833a]/20">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={18} className="text-[#b2833a]" />
                  </motion.div>
                  <span className="font-['Poppins:SemiBold',sans-serif] text-[#b2833a]">
                    {bodyShape} Body Shape
                  </span>
                </div>
              </motion.div>

              {/* Loading Progress Bar */}
              <motion.div
                className="mt-8 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center justify-between text-xs text-[#999]">
                  <span className="font-['Poppins:Medium',sans-serif]">Curating your collection</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="font-['Poppins:SemiBold',sans-serif] text-[#b2833a]"
                  >
                    100%
                  </motion.span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#b2833a] via-[#D38436] to-[#b2833a] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      duration: 2.5,
                      delay: 1,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>

              {/* Auto-redirect message */}
              <motion.p
                className="text-center text-xs text-[#999] mt-4 font-['Poppins:Regular',sans-serif]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                Redirecting to your personalized collection...
              </motion.p>
            </div>

            {/* Decorative Corner Accents */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-[#b2833a]/5 rounded-bl-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-32 h-32 bg-[#D38436]/5 rounded-tr-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}