"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PageLoaderProps {
  onLoadComplete?: () => void;
}

export default function PageLoader({ onLoadComplete }: PageLoaderProps) {
  const [particles, setParticles] = useState<
    { x: number; y: number; delay: number }[]
  >([]);

  // Generate particle positions only on client
  useEffect(() => {
    const p = Array.from({ length: 6 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      delay: Math.random() * 1.2,
    }));
    setParticles(p);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onLoadComplete}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#faf8f5] to-white opacity-60" />

      {/* Main loader container */}
      <div className="relative flex flex-col items-center justify-center gap-8 select-none">
        {/* Main logomark */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1, 1, 0.8],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative"
        >
          {/* Pulse ring */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-[#b2833a] blur-xl"
            style={{ width: 120, height: 120, margin: -10 }}
          />

          {/* Main circle logo */}
          <div className="relative w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#b2833a] to-[#D38436] flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-20"
            />

            <div className="relative z-10 font-serif font-bold text-white text-[48px]">
              E
            </div>
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 10] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3,
          }}
          className="flex flex-col items-center gap-2"
        >
          <p className="font-serif text-[#222] text-[20px] tracking-wide">
            Loading
          </p>

          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-[#b2833a]"
              />
            ))}
          </div>
        </motion.div>

        {/* Circular progress indicator */}
        <motion.div className="relative w-[160px] h-[160px]">
          <svg className="absolute inset-0 -rotate-90 opacity-20" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="70" fill="none" stroke="#b2833a" strokeWidth="2" />
          </svg>

          <motion.svg className="absolute inset-0 -rotate-90" viewBox="0 0 160 160">
            <motion.circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="url(#loaderGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 0.8, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ strokeDasharray: "439.82" }}
            />

            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b2833a" />
                <stop offset="100%" stopColor="#D38436" />
              </linearGradient>
            </defs>
          </motion.svg>

          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-[#b2833a] opacity-20 blur-2xl"
          />
        </motion.div>

        {/* Loading bar */}
        <div className="w-[200px] h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#b2833a] to-transparent rounded-full"
          />
        </div>
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: p.x, y: p.y }}
          animate={{
            opacity: [0, 0.4, 0],
            y: [p.y, p.y - 120, p.y + 40],
            x: [p.x, p.x + (Math.random() - 0.5) * 120, p.x],
          }}
          transition={{
            duration: 8 + Math.random() * 3,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 rounded-full bg-[#b2833a]"
          style={{ filter: "blur(2px)" }}
        />
      ))}
    </motion.div>
  );
}
