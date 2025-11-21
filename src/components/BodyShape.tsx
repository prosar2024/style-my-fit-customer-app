import { motion } from 'motion/react';

interface BodyShapeProps {
  measurements: {
    bust: number;
    waist: number;
    hips: number;
    shoulders: number;
    height: number;
    weight: number;
  };
}

export default function BodyShape({ measurements }: BodyShapeProps) {
  // Normalize measurements to proportions (0-1 range for scaling)
  const bustScale = (measurements.bust - 20) / 30; // 20-50 range
  const waistScale = (measurements.waist - 20) / 25; // 20-45 range
  const hipsScale = (measurements.hips - 20) / 35; // 20-55 range
  const shouldersScale = (measurements.shoulders - 20) / 30; // 20-50 range
  const heightScale = (measurements.height - 48) / 36; // 48-84 range
  
  // Base measurements for the SVG
  const baseWidth = 200;
  const baseHeight = 400;
  
  // Calculate dynamic measurements with smooth interpolation
  const shoulderWidth = 80 + (shouldersScale * 40); // 80-120
  const bustWidth = 70 + (bustScale * 35); // 70-105
  const waistWidth = 50 + (waistScale * 30); // 50-80
  const hipsWidth = 75 + (hipsScale * 40); // 75-115
  
  // Height affects the overall vertical scale
  const heightFactor = 0.85 + (heightScale * 0.3); // 0.85-1.15
  
  // Skin tone
  const skinTone = "#f4c2a8";
  const hairColor = "#5a3825";
  const outlineColor = "#b2833a";
  
  return (
    <>
      {/* Shadow under figure */}
      <motion.ellipse
        cx={baseWidth / 2}
        cy={baseHeight * heightFactor - 10}
        rx={hipsWidth * 0.6}
        ry="8"
        fill="rgba(0,0,0,0.1)"
        animate={{
          rx: hipsWidth * 0.6,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      {/* Body - Main Torso Path */}
      <motion.path
        d={`
          M ${baseWidth / 2 - shoulderWidth / 2} ${80 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 + 5} ${90 * heightFactor}
          Q ${baseWidth / 2 - bustWidth / 2} ${120 * heightFactor}, ${baseWidth / 2 - bustWidth / 2} ${150 * heightFactor}
          Q ${baseWidth / 2 - waistWidth / 2} ${180 * heightFactor}, ${baseWidth / 2 - waistWidth / 2} ${200 * heightFactor}
          Q ${baseWidth / 2 - hipsWidth / 2} ${240 * heightFactor}, ${baseWidth / 2 - hipsWidth / 2} ${270 * heightFactor}
          L ${baseWidth / 2 - hipsWidth / 2 + 10} ${340 * heightFactor}
          L ${baseWidth / 2 - 15} ${340 * heightFactor}
          L ${baseWidth / 2} ${baseHeight * heightFactor - 20}
          L ${baseWidth / 2 + 15} ${340 * heightFactor}
          L ${baseWidth / 2 + hipsWidth / 2 - 10} ${340 * heightFactor}
          L ${baseWidth / 2 + hipsWidth / 2} ${270 * heightFactor}
          Q ${baseWidth / 2 + hipsWidth / 2} ${240 * heightFactor}, ${baseWidth / 2 + waistWidth / 2} ${200 * heightFactor}
          Q ${baseWidth / 2 + waistWidth / 2} ${180 * heightFactor}, ${baseWidth / 2 + bustWidth / 2} ${150 * heightFactor}
          Q ${baseWidth / 2 + bustWidth / 2} ${120 * heightFactor}, ${baseWidth / 2 + shoulderWidth / 2 - 5} ${90 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2} ${80 * heightFactor}
          Z
        `}
        fill={skinTone}
        stroke={outlineColor}
        strokeWidth="2"
        animate={{
          d: `
            M ${baseWidth / 2 - shoulderWidth / 2} ${80 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 + 5} ${90 * heightFactor}
            Q ${baseWidth / 2 - bustWidth / 2} ${120 * heightFactor}, ${baseWidth / 2 - bustWidth / 2} ${150 * heightFactor}
            Q ${baseWidth / 2 - waistWidth / 2} ${180 * heightFactor}, ${baseWidth / 2 - waistWidth / 2} ${200 * heightFactor}
            Q ${baseWidth / 2 - hipsWidth / 2} ${240 * heightFactor}, ${baseWidth / 2 - hipsWidth / 2} ${270 * heightFactor}
            L ${baseWidth / 2 - hipsWidth / 2 + 10} ${340 * heightFactor}
            L ${baseWidth / 2 - 15} ${340 * heightFactor}
            L ${baseWidth / 2} ${baseHeight * heightFactor - 20}
            L ${baseWidth / 2 + 15} ${340 * heightFactor}
            L ${baseWidth / 2 + hipsWidth / 2 - 10} ${340 * heightFactor}
            L ${baseWidth / 2 + hipsWidth / 2} ${270 * heightFactor}
            Q ${baseWidth / 2 + hipsWidth / 2} ${240 * heightFactor}, ${baseWidth / 2 + waistWidth / 2} ${200 * heightFactor}
            Q ${baseWidth / 2 + waistWidth / 2} ${180 * heightFactor}, ${baseWidth / 2 + bustWidth / 2} ${150 * heightFactor}
            Q ${baseWidth / 2 + bustWidth / 2} ${120 * heightFactor}, ${baseWidth / 2 + shoulderWidth / 2 - 5} ${90 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2} ${80 * heightFactor}
            Z
          `,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      {/* Arms */}
      <motion.path
        d={`
          M ${baseWidth / 2 - shoulderWidth / 2} ${85 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 15} ${100 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 18} ${180 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 15} ${200 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 10} ${200 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 8} ${180 * heightFactor}
          L ${baseWidth / 2 - shoulderWidth / 2 - 5} ${100 * heightFactor}
          Z
        `}
        fill={skinTone}
        stroke={outlineColor}
        strokeWidth="2"
        animate={{
          d: `
            M ${baseWidth / 2 - shoulderWidth / 2} ${85 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 15} ${100 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 18} ${180 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 15} ${200 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 10} ${200 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 8} ${180 * heightFactor}
            L ${baseWidth / 2 - shoulderWidth / 2 - 5} ${100 * heightFactor}
            Z
          `,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      <motion.path
        d={`
          M ${baseWidth / 2 + shoulderWidth / 2} ${85 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 15} ${100 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 18} ${180 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 15} ${200 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 10} ${200 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 8} ${180 * heightFactor}
          L ${baseWidth / 2 + shoulderWidth / 2 + 5} ${100 * heightFactor}
          Z
        `}
        fill={skinTone}
        stroke={outlineColor}
        strokeWidth="2"
        animate={{
          d: `
            M ${baseWidth / 2 + shoulderWidth / 2} ${85 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 15} ${100 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 18} ${180 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 15} ${200 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 10} ${200 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 8} ${180 * heightFactor}
            L ${baseWidth / 2 + shoulderWidth / 2 + 5} ${100 * heightFactor}
            Z
          `,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      {/* Neck */}
      <motion.rect
        x={baseWidth / 2 - 10}
        y={60 * heightFactor}
        width="20"
        height={25 * heightFactor}
        fill={skinTone}
        stroke={outlineColor}
        strokeWidth="2"
        rx="3"
        animate={{
          y: 60 * heightFactor,
          height: 25 * heightFactor,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      {/* Head */}
      <motion.circle
        cx={baseWidth / 2}
        cy={40 * heightFactor}
        r="28"
        fill={skinTone}
        stroke={outlineColor}
        strokeWidth="2"
        animate={{
          cy: 40 * heightFactor,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      {/* Hair */}
      <motion.ellipse
        cx={baseWidth / 2}
        cy={35 * heightFactor}
        rx="30"
        ry="25"
        fill={hairColor}
        animate={{
          cy: 35 * heightFactor,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      
      {/* Face details */}
      <motion.g
        animate={{
          transform: `translate(0, ${(40 - 40 * heightFactor) * -1}px)`,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Eyes */}
        <circle cx={baseWidth / 2 - 10} cy="35" r="2" fill="#222222" />
        <circle cx={baseWidth / 2 + 10} cy="35" r="2" fill="#222222" />
        
        {/* Smile */}
        <path
          d={`M ${baseWidth / 2 - 8} 45 Q ${baseWidth / 2} 48 ${baseWidth / 2 + 8} 45`}
          stroke="#222222"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </motion.g>
      
      {/* Measurement indicators */}
      <motion.g opacity="0.6">
        {/* Bust line */}
        <motion.line
          x1={baseWidth / 2 - bustWidth / 2 - 10}
          y1={150 * heightFactor}
          x2={baseWidth / 2 + bustWidth / 2 + 10}
          y2={150 * heightFactor}
          stroke="#b2833a"
          strokeWidth="1"
          strokeDasharray="3,3"
          animate={{
            x1: baseWidth / 2 - bustWidth / 2 - 10,
            x2: baseWidth / 2 + bustWidth / 2 + 10,
            y1: 150 * heightFactor,
            y2: 150 * heightFactor,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Waist line */}
        <motion.line
          x1={baseWidth / 2 - waistWidth / 2 - 10}
          y1={200 * heightFactor}
          x2={baseWidth / 2 + waistWidth / 2 + 10}
          y2={200 * heightFactor}
          stroke="#b2833a"
          strokeWidth="1"
          strokeDasharray="3,3"
          animate={{
            x1: baseWidth / 2 - waistWidth / 2 - 10,
            x2: baseWidth / 2 + waistWidth / 2 + 10,
            y1: 200 * heightFactor,
            y2: 200 * heightFactor,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Hips line */}
        <motion.line
          x1={baseWidth / 2 - hipsWidth / 2 - 10}
          y1={270 * heightFactor}
          x2={baseWidth / 2 + hipsWidth / 2 + 10}
          y2={270 * heightFactor}
          stroke="#b2833a"
          strokeWidth="1"
          strokeDasharray="3,3"
          animate={{
            x1: baseWidth / 2 - hipsWidth / 2 - 10,
            x2: baseWidth / 2 + hipsWidth / 2 + 10,
            y1: 270 * heightFactor,
            y2: 270 * heightFactor,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </motion.g>
    </>
  );
}
