import { motion, AnimatePresence } from 'motion/react';
import { Info } from 'lucide-react';
import { useState } from 'react';

interface MeasurementGuideProps {
  type: 'shoulders' | 'bust' | 'waist' | 'hips';
}

const measurementInstructions = {
  shoulders: {
    title: 'How to Measure Shoulders',
    description: 'Measure straight across from the edge of one shoulder to the other, across your back.',
    tips: 'Keep the tape measure straight and level across your back.',
  },
  bust: {
    title: 'How to Measure Bust',
    description: 'Wrap the tape measure around the fullest part of your chest, keeping it parallel to the floor.',
    tips: 'Stand naturally and breathe normally. The tape should be snug but not tight.',
  },
  waist: {
    title: 'How to Measure Waist',
    description: 'Find your natural waistline (the narrowest part) and wrap the tape measure around it.',
    tips: 'Don\'t suck in or push out. Stand naturally and breathe comfortably.',
  },
  hips: {
    title: 'How to Measure Hips',
    description: 'Measure around the fullest part of your hips and bottom, keeping the tape parallel to the floor.',
    tips: 'Keep your feet together and stand naturally for the most accurate measurement.',
  },
};

// SVG Illustrations
const ShouldersSVG = () => (
  <svg viewBox="0 0 200 240" className="w-full h-auto">
    {/* Body outline */}
    <path
      d="M 60 60 L 40 100 L 40 180 L 50 220 M 140 60 L 160 100 L 160 180 L 150 220"
      stroke="#D1D5DB"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Shoulders line */}
    <line x1="40" y1="60" x2="160" y2="60" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" />
    {/* Head circle */}
    <circle cx="100" cy="30" r="22" fill="none" stroke="#D1D5DB" strokeWidth="2.5" />
    
    {/* Measuring tape - shoulders */}
    <path
      d="M 35 60 L 165 60"
      stroke="#b2833a"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeDasharray="6 4"
    />
    {/* Measurement arrows */}
    <path d="M 35 60 L 45 55 M 35 60 L 45 65" stroke="#b2833a" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 165 60 L 155 55 M 165 60 L 155 65" stroke="#b2833a" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Measurement markers */}
    <circle cx="35" cy="60" r="4" fill="#b2833a" />
    <circle cx="165" cy="60" r="4" fill="#b2833a" />
  </svg>
);

const BustSVG = () => (
  <svg viewBox="0 0 200 240" className="w-full h-auto">
    {/* Body outline */}
    <ellipse cx="100" cy="110" rx="50" ry="60" fill="none" stroke="#D1D5DB" strokeWidth="2.5" />
    <path d="M 50 140 L 45 220 M 150 140 L 155 220" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" />
    {/* Shoulders */}
    <line x1="50" y1="60" x2="150" y2="60" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" />
    {/* Head */}
    <circle cx="100" cy="30" r="22" fill="none" stroke="#D1D5DB" strokeWidth="2.5" />
    
    {/* Measuring tape around bust - front view */}
    <ellipse 
      cx="100" 
      cy="100" 
      rx="56" 
      ry="15" 
      fill="none" 
      stroke="#b2833a" 
      strokeWidth="3"
      strokeDasharray="6 4"
    />
    
    {/* Measurement markers */}
    <circle cx="44" cy="100" r="4" fill="#b2833a" />
    <circle cx="156" cy="100" r="4" fill="#b2833a" />
    
    {/* Highlight fullest part */}
    <path d="M 160 100 L 170 95 L 185 95" stroke="#b2833a" strokeWidth="2" strokeLinecap="round" />
    <text x="175" y="90" fill="#b2833a" fontSize="12" fontWeight="600">Fullest part</text>
  </svg>
);

const WaistSVG = () => (
  <svg viewBox="0 0 200 240" className="w-full h-auto">
    {/* Body outline - torso */}
    <path
      d="M 70 50 Q 60 100 65 140 L 70 220 M 130 50 Q 140 100 135 140 L 130 220"
      stroke="#D1D5DB"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Shoulders */}
    <line x1="50" y1="40" x2="150" y2="40" stroke="#D1D5DB" strokeWidth="2.5" strokeLinecap="round" />
    {/* Head */}
    <circle cx="100" cy="15" r="12" fill="none" stroke="#D1D5DB" strokeWidth="2.5" />
    
    {/* Natural waistline area highlight */}
    <ellipse cx="100" cy="110" rx="35" ry="12" fill="rgba(178, 131, 58, 0.1)" stroke="none" />
    
    {/* Measuring tape around waist */}
    <ellipse 
      cx="100" 
      cy="110" 
      rx="40" 
      ry="12" 
      fill="none" 
      stroke="#b2833a" 
      strokeWidth="3"
      strokeDasharray="6 4"
    />
    
    {/* Measurement markers */}
    <circle cx="60" cy="110" r="4" fill="#b2833a" />
    <circle cx="140" cy="110" r="4" fill="#b2833a" />
    
    {/* Annotation */}
    <path d="M 145 110 L 155 105 L 170 105" stroke="#b2833a" strokeWidth="2" strokeLinecap="round" />
    <text x="150" y="100" fill="#b2833a" fontSize="12" fontWeight="600">Narrowest part</text>
  </svg>
);

const HipsSVG = () => (
  <svg viewBox="0 0 200 240" className="w-full h-auto">
    {/* Body outline - lower torso and hips */}
    <path
      d="M 70 30 Q 65 80 70 120 Q 72 140 65 160 L 60 220 M 130 30 Q 135 80 130 120 Q 128 140 135 160 L 140 220"
      stroke="#D1D5DB"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Waist reference */}
    <ellipse cx="100" cy="80" rx="32" ry="10" fill="none" stroke="#D1D5DB" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
    
    {/* Hip area highlight - widest part */}
    <ellipse cx="100" cy="145" rx="48" ry="15" fill="rgba(178, 131, 58, 0.1)" stroke="none" />
    
    {/* Measuring tape around hips */}
    <ellipse 
      cx="100" 
      cy="145" 
      rx="53" 
      ry="16" 
      fill="none" 
      stroke="#b2833a" 
      strokeWidth="3"
      strokeDasharray="6 4"
    />
    
    {/* Measurement markers */}
    <circle cx="47" cy="145" r="4" fill="#b2833a" />
    <circle cx="153" cy="145" r="4" fill="#b2833a" />
    
    {/* Annotation */}
    <path d="M 158 145 L 168 140 L 183 140" stroke="#b2833a" strokeWidth="2" strokeLinecap="round" />
    <text x="168" y="135" fill="#b2833a" fontSize="12" fontWeight="600">Widest part</text>
  </svg>
);

export default function MeasurementGuide({ type }: MeasurementGuideProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const instruction = measurementInstructions[type];

  const renderIllustration = () => {
    switch (type) {
      case 'shoulders':
        return <ShouldersSVG />;
      case 'bust':
        return <BustSVG />;
      case 'waist':
        return <WaistSVG />;
      case 'hips':
        return <HipsSVG />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-3 sm:mt-4">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-[12px] bg-gradient-to-r from-[#faf8f5] to-[#f4f1ed] border border-[#e8e8e8] hover:border-[#b2833a]/30 transition-all group"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#b2833a]/10 flex items-center justify-center group-hover:bg-[#b2833a]/20 transition-colors">
            <Info size={14} className="text-[#b2833a]" />
          </div>
          <span className="font-['Poppins:Medium',sans-serif] text-[12px] sm:text-[13px] text-[#666666]">
            {instruction.title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="#b2833a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-2 p-4 rounded-[12px] bg-white border border-[#e8e8e8] shadow-sm">
              {/* Illustration */}
              <div className="mb-4 flex justify-center">
                <div className="w-32 sm:w-40 md:w-48 bg-gradient-to-br from-[#faf8f5] to-white rounded-[12px] p-4 border border-[#e8e8e8]">
                  {renderIllustration()}
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-2">
                <div>
                  <h4 className="font-['Poppins:SemiBold',sans-serif] text-[13px] sm:text-[14px] text-[#222222] mb-1">
                    Instructions:
                  </h4>
                  <p className="font-['Poppins:Regular',sans-serif] text-[12px] sm:text-[13px] text-[#666666] leading-relaxed">
                    {instruction.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e8e8e8]">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <div className="w-4 h-4 rounded-full bg-[#b2833a]/10 flex items-center justify-center">
                        <span className="text-[10px]">💡</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-['Poppins:Medium',sans-serif] text-[11px] sm:text-[12px] text-[#b2833a] leading-relaxed">
                        {instruction.tips}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}