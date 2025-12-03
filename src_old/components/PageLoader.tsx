import { motion } from 'motion/react';

interface PageLoaderProps {
  onLoadComplete?: () => void;
}

export default function PageLoader({ onLoadComplete }: PageLoaderProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#faf8f5] to-white opacity-60" />
      
      {/* Main loader container */}
      <div className="relative flex flex-col items-center justify-center gap-8">
        
        {/* Animated Logo/Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1, 1, 0.8],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="relative"
        >
          {/* Golden circle with pulse */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-[#b2833a] blur-xl"
            style={{ width: '120px', height: '120px', margin: '-10px' }}
          />
          
          {/* Main logo circle */}
          <div className="relative w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#b2833a] to-[#D38436] flex items-center justify-center shadow-2xl">
            {/* Inner shine effect */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-2 rounded-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-20"
            />
            
            {/* Elegant letter or icon */}
            <div className="relative z-10 font-['Playfair_Display:700',serif] text-white text-[48px] select-none">
              E
            </div>
          </div>
        </motion.div>

        {/* Animated loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 10] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3
          }}
          className="flex flex-col items-center gap-2"
        >
          <p className="font-['Playfair_Display:600',serif] text-[#222222] text-[20px] tracking-wide">
            Loading
          </p>
          
          {/* Animated dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 rounded-full bg-[#b2833a]"
              />
            ))}
          </div>
        </motion.div>

        {/* Elegant circular progress indicator */}
        <motion.div className="relative w-[160px] h-[160px]">
          {/* Background circle */}
          <svg className="absolute inset-0 -rotate-90 opacity-20" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#b2833a"
              strokeWidth="2"
            />
          </svg>
          
          {/* Animated progress circle */}
          <motion.svg 
            className="absolute inset-0 -rotate-90" 
            viewBox="0 0 160 160"
          >
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 0.8, 0],
                rotate: [0, 360]
              }}
              transition={{
                pathLength: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: [0.25, 0.1, 0.25, 1]
                },
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              style={{
                strokeDasharray: "439.82",
                transformOrigin: "center"
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b2833a" />
                <stop offset="100%" stopColor="#D38436" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Glow effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-[#b2833a] opacity-20 blur-2xl"
          />
        </motion.div>

        {/* Elegant loading bar (alternative style) */}
        <div className="w-[200px] h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#b2833a] to-transparent rounded-full"
          />
        </div>

      </div>

      {/* Floating particles effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight - 100,
              Math.random() * window.innerHeight
            ],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth + (Math.random() - 0.5) * 100,
              Math.random() * window.innerWidth
            ]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2 rounded-full bg-[#b2833a]"
          style={{
            filter: 'blur(2px)'
          }}
        />
      ))}

    </motion.div>
  );
}