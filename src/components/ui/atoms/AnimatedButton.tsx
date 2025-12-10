import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface AnimatedButtonProps {
  onClick?: () => void;
  buttonTitle?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onClick,
  buttonTitle = "Find My Style",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Pulsing glow behind button */}
      <motion.div
        className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-[#b2833a] via-[#D38436] to-[#b2833a] opacity-40 blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.button
        type="button"
        onClick={onClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative bg-gradient-to-r from-[#b2833a] to-[#D38436] text-white font-poppins font-semibold text-[18px] px-8 py-4 rounded-[40px] shadow-[0px_20px_40px_rgba(178,131,58,0.35)] overflow-hidden cursor-pointer border-2 border-white/20"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 25px 50px rgba(178,131,58,0.5)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Shimmer overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ["-200%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
        />

        {/* Button content */}
        <div className="relative flex items-center gap-3 justify-center">
          {/* Sparkles animation */}
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{
              rotate: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.3 },
            }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>

          <span className="relative z-10">{buttonTitle}</span>

          {/* Arrow animation */}
          <motion.div
            animate={{
              x: isHovered ? [0, 5, 0] : 0,
            }}
            transition={{
              duration: 0.8,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="flex items-center"
          >
            <svg className="w-4 h-4" viewBox="0 0 12 8" fill="white">
              <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z" />
            </svg>
          </motion.div>
        </div>

        {/* Floating particles */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-70"
          animate={{
            x: [-20, 20],
            y: [-20, 20],
            scale: [0, 1, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-70"
          animate={{
            x: [20, -20],
            y: [20, -20],
            scale: [0, 1, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </motion.button>

      {/* Outer pulse ring */}
      <motion.div
        className="absolute inset-0 border-2 border-[#D38436] rounded-[40px] pointer-events-none"
        animate={{
          scale: [1, 1.15, 1.15],
          opacity: [0.5, 0, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
};

export default AnimatedButton;
