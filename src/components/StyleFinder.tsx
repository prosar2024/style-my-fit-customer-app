import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ruler, Triangle, ChevronLeft, ChevronRight, X, HelpCircle } from 'lucide-react';
import { Slider } from './ui/slider';
import BodyShape from './BodyShape';
import SuccessPopup from './SuccessPopup';
import MeasurementGuide from './MeasurementGuide';

interface StyleFinderProps {
  unit: string;
  onUnitChange: (unit: string) => void;
  onClose: () => void;
  onComplete?: (measurements: any, bodyShape: string) => void;
}

// Conversion helpers
const INCH_TO_CM = 2.54;

const inchesToCm = (inches: number): number => {
  return inches * INCH_TO_CM;
};

const cmToInches = (cm: number): number => {
  return cm / INCH_TO_CM;
};

const formatValue = (value: number, unit: string, decimals: number = 1): number => {
  if (unit === 'cm') {
    return Math.round(inchesToCm(value) * 10) / 10;
  }
  return Math.round(value * 10) / 10;
};

const getMinMax = (minInches: number, maxInches: number, unit: string) => {
  if (unit === 'cm') {
    return {
      min: Math.round(inchesToCm(minInches)),
      max: Math.round(inchesToCm(maxInches))
    };
  }
  return { min: minInches, max: maxInches };
};

// Calculate body shape from measurements
const calculateBodyShape = (measurements: any): string => {
  const { bust, waist, hips, shoulders } = measurements;
  
  // Calculate ratios
  const bustToWaist = bust / waist;
  const hipsToWaist = hips / waist;
  const shoulderToHip = shoulders / hips;
  const bustToHip = bust / hips;
  
  // Hourglass: Bust and hips are similar, waist is smaller
  if (bustToWaist >= 1.25 && hipsToWaist >= 1.25 && Math.abs(bust - hips) <= 5) {
    return 'Hourglass';
  }
  
  // Pear: Hips wider than bust
  if (hips > bust + 2 && hipsToWaist >= 1.25) {
    return 'Pear';
  }
  
  // Apple: Bust and waist are similar, hips narrower
  if (bustToWaist <= 1.2 && waist >= hips - 3) {
    return 'Apple';
  }
  
  // Inverted Triangle: Shoulders/bust wider than hips
  if (shoulderToHip >= 1.05 || bust > hips + 3) {
    return 'Inverted Triangle';
  }
  
  // Rectangle: Similar measurements throughout
  return 'Rectangle';
};

const questions = [
  {
    id: 'shoulders',
    question: 'What is your shoulders measurement?',
    subtitle: 'Measure from shoulder to shoulder',
    type: 'slider' as const,
    icon: '👔',
    min: 20,
    max: 50,
  },
  {
    id: 'bust',
    question: 'What is your bust measurement?',
    subtitle: 'Measure around the fullest part of your chest',
    type: 'slider' as const,
    icon: '👚',
    min: 20,
    max: 50,
  },
  {
    id: 'waist',
    question: 'What is your waist measurement?',
    subtitle: 'Measure around the narrowest part of your waist',
    type: 'slider' as const,
    icon: '📏',
    min: 20,
    max: 45,
  },
  {
    id: 'hips',
    question: 'What is your hips measurement?',
    subtitle: 'Measure around the fullest part of your hips',
    type: 'slider' as const,
    icon: '👖',
    min: 20,
    max: 55,
  },
  {
    id: 'weight',
    question: 'What is your weight?',
    subtitle: 'This helps us recommend the perfect fit',
    type: 'slider' as const,
    icon: '⚖️',
    min: 80,
    max: 250,
    unit: 'lbs',
  },
  {
    id: 'height',
    question: 'What is your height?',
    subtitle: 'Helps us recommend the right length and proportions',
    type: 'slider' as const,
    icon: '📐',
    min: 48,
    max: 84,
    isHeight: true,
  },
  {
    id: 'stylePreference',
    question: 'Describe your personal style in a few words',
    subtitle: 'Help us understand your unique fashion preferences',
    type: 'text' as const,
    icon: '✨',
    placeholder: 'e.g., minimalist, bohemian, classic elegance...',
  },
  {
    id: 'dressOccasion',
    question: 'What occasions do you dress for most?',
    subtitle: 'Select the option that best describes your lifestyle',
    type: 'choice' as const,
    icon: '👗',
    options: [
      { value: 'casual', label: 'Casual & Everyday', description: 'Comfortable daily wear' },
      { value: 'work', label: 'Professional & Work', description: 'Business and office attire' },
      { value: 'evening', label: 'Evening & Events', description: 'Special occasions and parties' },
    ],
  },
];

export default function StyleFinder({ unit, onUnitChange, onClose, onComplete }: StyleFinderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({
    bust: 36,
    waist: 28,
    hips: 38,
    shoulders: 40,
    weight: 140,
    height: 65,
    stylePreference: '',
    dressOccasion: '',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [calculatedBodyShape, setCalculatedBodyShape] = useState('');
  const [showEstimationFlow, setShowEstimationFlow] = useState(false);
  const [estimationBandSize, setEstimationBandSize] = useState('34');
  const [estimationCupSize, setEstimationCupSize] = useState('B');

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleSkip = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    console.log('Measurements submitted:', answers);
    const bodyShape = calculateBodyShape(answers);
    setCalculatedBodyShape(bodyShape);
    setShowSuccessPopup(true);
    
    // Auto-close after 3.5 seconds and navigate to shop
    setTimeout(() => {
      setShowSuccessPopup(false);
      setTimeout(() => {
        if (onComplete) {
          onComplete(answers, bodyShape);
        }
        onClose();
      }, 300); // Small delay for exit animation
    }, 3500);
  };

  const updateAnswer = (value: any) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleDontKnowSize = () => {
    // Only show estimation for measurement-related questions
    if (['waist', 'bust', 'hips', 'shoulders'].includes(currentQuestion.id)) {
      setShowEstimationFlow(true);
    }
  };

  const handleEstimationComplete = () => {
    // Calculate bust size from band + cup
    const bandSize = parseInt(estimationBandSize);
    const cupSizes = { 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    const cupInches = cupSizes[estimationCupSize as keyof typeof cupSizes] || 2;
    const estimatedBust = bandSize + cupInches;
    
    // Update the answer with the estimated value
    updateAnswer(estimatedBust);
    setShowEstimationFlow(false);
  };

  const handleEstimationBack = () => {
    setShowEstimationFlow(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop Overlay with Blur */}
        <motion.div 
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: 'blur(8px)' }}
          exit={{ backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-black/40" 
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 100 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.34, 1.56, 0.64, 1],
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-[20px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.3)] w-full max-w-5xl max-h-[85vh] flex flex-col"
        >
          {/* Top Bar with Unit Selector and Close Button */}
          <div className="flex-shrink-0 px-3 sm:px-4 pt-2 sm:pt-3 pb-1.5 sm:pb-2 flex items-center justify-between border-b border-gray-100">
            {/* Unit Selector */}
            <div className="bg-white rounded-[16px] p-0.5 sm:p-1 flex items-center gap-0.5 sm:gap-1 shadow-md">
              <motion.button
                onClick={() => onUnitChange('inches')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-[12px] sm:rounded-[16px] transition-all flex items-center gap-1 sm:gap-2 ${
                  unit === 'inches'
                    ? 'bg-[#b2833a] shadow-sm'
                    : 'bg-transparent'
                }`}
              >
                <Ruler
                  size={14}
                  className={`transition-colors ${
                    unit === 'inches' ? 'text-white' : 'text-[#b2833a]'
                  }`}
                />
                <span
                  className={`font-['Poppins:SemiBold',sans-serif] text-[12px] sm:text-[14px] transition-colors ${
                    unit === 'inches' ? 'text-white' : 'text-[#666666]'
                  }`}
                >
                  Inches
                </span>
              </motion.button>

              <motion.button
                onClick={() => onUnitChange('cm')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-[12px] sm:rounded-[16px] transition-all flex items-center gap-1 sm:gap-2 ${
                  unit === 'cm'
                    ? 'bg-[#b2833a] shadow-sm'
                    : 'bg-transparent'
                }`}
              >
                <Triangle
                  size={14}
                  className={`transition-colors ${
                    unit === 'cm' ? 'text-white' : 'text-[#b2833a]'
                  }`}
                />
                <span
                  className={`font-['Poppins:SemiBold',sans-serif] text-[12px] sm:text-[14px] transition-colors ${
                    unit === 'cm' ? 'text-white' : 'text-[#666666]'
                  }`}
                >
                  CM
                </span>
              </motion.button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition-colors bg-white shadow-md"
            >
              <X size={20} className="text-[#666666]" />
            </button>
          </div>

          {/* Progress Header */}
          <div className="px-3 sm:px-6 pt-2 sm:pt-3 pb-1.5 sm:pb-2 flex-shrink-0">
            <div className="max-w-full mx-auto">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[#999999]">
                  <Ruler size={12} className="sm:hidden" />
                  <Ruler size={14} className="hidden sm:block" />
                  <span className="font-['Poppins:Medium',sans-serif] text-[11px] sm:text-[12px]">
                    Question {currentStep + 1} of {questions.length}
                  </span>
                </div>
                <span className="font-['Poppins:SemiBold',sans-serif] text-[11px] sm:text-[12px] text-[#b2833a]">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              {/* Progress Bar */}
              <div className="h-1 sm:h-1.5 bg-[#f4f4f4] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#b2833a]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 px-2 sm:px-4 md:px-6 pb-2 sm:pb-3 md:pb-4 overflow-y-auto min-h-[520px] max-h-[520px] sm:min-h-[580px] sm:max-h-[580px] md:min-h-[420px] md:max-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={showEstimationFlow ? 'estimation' : currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-full h-full"
            >
              {/* Show Estimation Flow or Normal Question */}
              {showEstimationFlow && currentQuestion.id === 'bust' ? (
                /* Bust Size Estimation Page */
                <div className="bg-white rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] overflow-hidden h-full">
                  <div className="p-3 sm:p-4 md:p-6 h-full flex flex-col">
                    {/* Question Header */}
                    <div className="mb-4 sm:mb-5 md:mb-6">
                      <h2 className="font-['Playfair_Display:600',serif] text-[#222222] text-[18px] sm:text-[20px] md:text-[22px] leading-[1.3] mb-1">
                        Let's estimate your bust size
                      </h2>
                      <p className="font-['Poppins:Regular',sans-serif] text-[#999999] text-[11px] sm:text-[12px] md:text-[13px] leading-[1.5]">
                        What is the size (S, M, L, XL) of your best-fitting shirt or top?
                      </p>
                    </div>

                    <div className="space-y-4 sm:space-y-5 max-w-2xl mx-auto">
                      {/* Dropdowns Side by Side */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {/* Band Size Dropdown */}
                        <div>
                          <label className="block font-['Poppins:Medium',sans-serif] text-[#666666] text-[13px] sm:text-[14px] mb-2">
                            Band Size
                          </label>
                          <select
                            value={estimationBandSize}
                            onChange={(e) => setEstimationBandSize(e.target.value)}
                            className="w-full px-4 py-3 sm:py-4 rounded-[16px] border-2 border-[#e8e8e8] focus:border-[#b2833a] focus:outline-none transition-all font-['Poppins:Regular',sans-serif] text-[14px] sm:text-[15px] text-[#222222] bg-white cursor-pointer"
                          >
                            <option value="30">30</option>
                            <option value="32">32</option>
                            <option value="34">34</option>
                            <option value="36">36</option>
                            <option value="38">38</option>
                            <option value="40">40</option>
                          </select>
                        </div>

                        {/* Cup Size Dropdown */}
                        <div>
                          <label className="block font-['Poppins:Medium',sans-serif] text-[#666666] text-[13px] sm:text-[14px] mb-2">
                            Cup Size
                          </label>
                          <select
                            value={estimationCupSize}
                            onChange={(e) => setEstimationCupSize(e.target.value)}
                            className="w-full px-4 py-3 sm:py-4 rounded-[16px] border-2 border-[#e8e8e8] focus:border-[#b2833a] focus:outline-none transition-all font-['Poppins:Regular',sans-serif] text-[14px] sm:text-[15px] text-[#222222] bg-white cursor-pointer"
                          >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                          </select>
                        </div>
                      </div>

                      {/* Help Text */}
                      <div className="text-center">
                        <p className="font-['Poppins:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#b2833a] flex items-center justify-center gap-1.5">
                          <span>💝</span>
                          <span className="hidden sm:inline">We'll calculate your bust measurement based on your bra size</span>
                          <span className="sm:hidden">Based on your bra size</span>
                        </p>
                      </div>

                      {/* Info Box */}
                      <div className="p-4 bg-[#faf8f5] rounded-[12px] border border-[#e8e8e8]">
                        <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#666666] text-center">
                          💡 <span className="font-['Poppins:Medium',sans-serif]">Tip:</span> This is an estimate based on standard sizing. You can always adjust the measurement on the next screen!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
              /* Normal Question Content */
              <div className="bg-white rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] overflow-hidden h-full">
                <div className={`flex flex-col h-full ${currentQuestion.type === 'slider' ? 'lg:grid lg:grid-cols-[1fr_280px]' : ''}`}>
                  {/* Left: Question Section */}
                  <div className="p-3 sm:p-4 md:p-6 order-2 lg:order-1 overflow-y-auto relative">
                    {/* Question Header with "I don't know my size" button */}
                    <div className="mb-2 sm:mb-3 md:mb-4 relative">
                      <h2 className="font-['Playfair_Display:600',serif] text-[#222222] text-[18px] sm:text-[20px] md:text-[22px] leading-[1.3] mb-1 pr-28 sm:pr-36">
                        {currentQuestion.question}
                      </h2>
                      <p className="font-['Poppins:Regular',sans-serif] text-[#999999] text-[11px] sm:text-[12px] md:text-[13px] leading-[1.5]">
                        {currentQuestion.subtitle}
                      </p>
                      
                      {/* "I don't know my size" Button - Top Right */}
                      {['shoulders', 'bust', 'waist', 'hips'].includes(currentQuestion.id) && (
                        <motion.button
                          onClick={handleDontKnowSize}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="absolute top-0 right-0 inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[12px] sm:rounded-[14px] bg-gradient-to-r from-[#faf8f5] to-[#f4f1ed] border border-[#e8e8e8] hover:border-[#b2833a] text-[#666666] hover:text-[#b2833a] font-['Poppins:Medium',sans-serif] text-[11px] sm:text-[12px] transition-all shadow-sm hover:shadow-md"
                        >
                          <HelpCircle size={14} className="sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">I don't know</span>
                          <span className="sm:hidden">Help</span>
                        </motion.button>
                      )}
                    </div>

                    {/* Slider Input */}
                    {currentQuestion.type === 'slider' && (() => {
                      const { min: displayMin, max: displayMax } = getMinMax(
                        currentQuestion.min,
                        currentQuestion.max,
                        currentQuestion.unit ? 'inches' : unit
                      );
                      const displayValue = formatValue(
                        answers[currentQuestion.id],
                        currentQuestion.unit ? 'inches' : unit
                      );
                      const displayUnit = currentQuestion.unit || (unit === 'cm' ? 'cm' : '\"');

                      return (
                      <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                        {/* Value Display */}
                        <div className="text-center py-1.5 sm:py-2 md:py-3">
                          <motion.div 
                            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#b2833a] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-[20px] sm:rounded-[24px] shadow-[0px_8px_16px_0px_rgba(178,131,58,0.25)]"
                            whileHover={{ scale: 1.03 }}
                          >
                            <span className="text-[16px] sm:text-[18px] md:text-[20px]">{currentQuestion.icon}</span>
                            <motion.span
                              key={`${answers[currentQuestion.id]}-${unit}`}
                              initial={{ scale: 1.15, opacity: 0.8 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3, ease: 'easeOut' }}
                              className="font-['Playfair_Display:700',serif] text-[24px] sm:text-[28px] md:text-[32px] leading-[1]"
                            >
                              {currentQuestion.isHeight
                                ? `${Math.floor(answers[currentQuestion.id] / 12)}'${
                                    answers[currentQuestion.id] % 12
                                  }\"`
                                : `${displayValue}${displayUnit}`}
                            </motion.span>
                          </motion.div>
                        </div>

                        {/* Slider */}
                        <div className="px-1">
                          <Slider
                            value={[answers[currentQuestion.id]]}
                            onValueChange={(value) => updateAnswer(value[0])}
                            max={currentQuestion.max}
                            min={currentQuestion.min}
                            step={currentQuestion.id === 'weight' ? 1 : 0.5}
                            className="[&_[data-slot=slider-track]]:bg-[#e8e8e8] [&_[data-slot=slider-track]]:h-2.5 [&_[data-slot=slider-range]]:bg-[#b2833a] [&_[role=slider]]:size-6 [&_[role=slider]]:bg-white [&_[role=slider]]:border-[3px] [&_[role=slider]]:border-[#b2833a] [&_[role=slider]]:shadow-lg [&_[role=slider]]:ring-0 hover:[&_[role=slider]]:ring-4 hover:[&_[role=slider]]:ring-[#b2833a]/20 [&_[role=slider]]:transition-all"
                          />
                          <div className="flex justify-between mt-1.5 sm:mt-2">
                            <motion.span 
                              key={`min-${displayMin}-${unit}`}
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-[10px] sm:text-[11px] text-[#999999] font-['Poppins:Medium',sans-serif]"
                            >
                              {displayMin}{displayUnit}
                            </motion.span>
                            <motion.span 
                              key={`max-${displayMax}-${unit}`}
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-[10px] sm:text-[11px] text-[#999999] font-['Poppins:Medium',sans-serif]"
                            >
                              {displayMax}{displayUnit}
                            </motion.span>
                          </div>
                        </div>

                        {/* Help Text */}
                        <div className="text-center mt-2 sm:mt-3">
                          <p className="font-['Poppins:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#b2833a] flex items-center justify-center gap-1.5">
                            <span>💝</span>
                            <span className="hidden sm:inline">Your measurements help us recommend the perfect fit for you</span>
                            <span className="sm:hidden">We'll find your perfect fit</span>
                          </p>
                        </div>

                        {/* Measurement Guide - Only show for body measurements */}
                        {['shoulders', 'bust', 'waist', 'hips'].includes(currentQuestion.id) && (
                          <>
                            <MeasurementGuide type={currentQuestion.id as 'shoulders' | 'bust' | 'waist' | 'hips'} />
                          </>
                        )}
                      </div>
                      );
                    })()}

                    {/* Text Input */}
                    {currentQuestion.type === 'text' && (
                      <div className="space-y-3 sm:space-y-4">
                        {/* Icon Display */}
                        <div className="text-center py-2 sm:py-3">
                          <motion.div 
                            className="inline-flex items-center justify-center bg-[#b2833a] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-[20px] shadow-[0px_8px_16px_0px_rgba(178,131,58,0.25)]"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-[24px] sm:text-[28px]">{currentQuestion.icon}</span>
                          </motion.div>
                        </div>

                        {/* Text Input Field */}
                        <div className="px-1">
                          <motion.textarea
                            value={answers[currentQuestion.id] || ''}
                            onChange={(e) => updateAnswer(e.target.value)}
                            placeholder={currentQuestion.placeholder}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-[16px] border-2 border-[#e8e8e8] focus:border-[#b2833a] focus:outline-none transition-all font-['Poppins:Regular',sans-serif] text-[14px] sm:text-[15px] text-[#222222] placeholder:text-[#999999] resize-none"
                            rows={4}
                          />
                        </div>

                        {/* Help Text */}
                        <div className="text-center mt-2 sm:mt-3">
                          <p className="font-['Poppins:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#b2833a] flex items-center justify-center gap-1.5">
                            <span>✨</span>
                            <span className="hidden sm:inline">Share your style vision so we can curate pieces you'll love</span>
                            <span className="sm:hidden">Tell us your style</span>
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Choice Input */}
                    {currentQuestion.type === 'choice' && (
                      <div className="space-y-3 sm:space-y-4">
                        {/* Icon Display */}
                        <div className="text-center py-2 sm:py-3">
                          <motion.div 
                            className="inline-flex items-center justify-center bg-[#b2833a] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-[20px] shadow-[0px_8px_16px_0px_rgba(178,131,58,0.25)]"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-[24px] sm:text-[28px]">{currentQuestion.icon}</span>
                          </motion.div>
                        </div>

                        {/* Choice Options */}
                        <div className="space-y-2 sm:space-y-3">
                          {currentQuestion.options?.map((option, index) => (
                            <motion.button
                              key={option.value}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => updateAnswer(option.value)}
                              className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-[16px] border-2 transition-all text-left ${
                                answers[currentQuestion.id] === option.value
                                  ? 'border-[#b2833a] bg-gradient-to-r from-[#faf8f5] to-[#f4f1ed] shadow-[0px_4px_12px_0px_rgba(178,131,58,0.15)]'
                                  : 'border-[#e8e8e8] bg-white hover:border-[#b2833a]/50 hover:bg-[#faf8f5]/50'
                              }`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1">
                                  <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] sm:text-[15px] text-[#222222] mb-0.5">
                                    {option.label}
                                  </p>
                                  <p className="font-['Poppins:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#999999]">
                                    {option.description}
                                  </p>
                                </div>
                                <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                  answers[currentQuestion.id] === option.value
                                    ? 'border-[#b2833a] bg-[#b2833a]'
                                    : 'border-[#e8e8e8]'
                                }`}>
                                  {answers[currentQuestion.id] === option.value && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ duration: 0.2 }}
                                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full"
                                    />
                                  )}
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </div>

                        {/* Help Text */}
                        <div className="text-center mt-2 sm:mt-3">
                          <p className="font-['Poppins:Regular',sans-serif] text-[11px] sm:text-[12px] text-[#b2833a] flex items-center justify-center gap-1.5">
                            <span>👗</span>
                            <span className="hidden sm:inline">This helps us recommend pieces perfect for your lifestyle</span>
                            <span className="sm:hidden">Choose your lifestyle</span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Body Shape Preview - Show during slider questions */}
                  {currentQuestion.type === 'slider' && (
                    <div className="bg-gradient-to-br from-[#faf8f5] to-[#f4f1ed] border-b lg:border-b-0 lg:border-l border-[#e8e8e8] order-1 lg:order-2">
                      <div className="w-full flex flex-col items-center justify-center p-2 sm:p-3 md:p-4">
                        <div className="mb-1 text-center">
                          <p className="font-['Poppins:Regular',sans-serif] text-[#999999] text-[9px] sm:text-[10px]">
                            Live Preview
                          </p>
                        </div>
                        
                        <div className="relative w-full max-w-[100px] sm:max-w-[120px] md:max-w-[140px] flex items-center justify-center">
                          <svg
                            viewBox="0 0 200 450"
                            className="w-full h-auto max-h-[160px] sm:max-h-[200px] md:max-h-[260px]"
                          >
                            <BodyShape measurements={answers} />
                          </svg>
                        </div>

                        <div className="mt-1.5 sm:mt-2 md:mt-3 pt-1.5 sm:pt-2 md:pt-3 border-t border-[#e8e8e8] w-full">
                          <div className="grid grid-cols-3 gap-1 sm:gap-1.5 text-center">
                            <div className="bg-white/60 rounded-[6px] sm:rounded-[8px] p-1 sm:p-1.5">
                              <p className="text-[8px] sm:text-[9px] text-[#999999] font-['Poppins:Regular',sans-serif] mb-0.5">Bust</p>
                              <motion.p 
                                key={`bust-${answers.bust}-${unit}`}
                                initial={{ scale: 1.1, opacity: 0.7 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="text-[11px] sm:text-[13px] text-[#b2833a] font-['Poppins:SemiBold',sans-serif]"
                              >
                                {formatValue(answers.bust, unit)}{unit === 'cm' ? 'cm' : '\\\"'}
                              </motion.p>
                            </div>
                            <div className="bg-white/60 rounded-[6px] sm:rounded-[8px] p-1 sm:p-1.5">
                              <p className="text-[8px] sm:text-[9px] text-[#999999] font-['Poppins:Regular',sans-serif] mb-0.5">Waist</p>
                              <motion.p 
                                key={`waist-${answers.waist}-${unit}`}
                                initial={{ scale: 1.1, opacity: 0.7 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="text-[11px] sm:text-[13px] text-[#b2833a] font-['Poppins:SemiBold',sans-serif]"
                              >
                                {formatValue(answers.waist, unit)}{unit === 'cm' ? 'cm' : '\\\"'}
                              </motion.p>
                            </div>
                            <div className="bg-white/60 rounded-[6px] sm:rounded-[8px] p-1 sm:p-1.5">
                              <p className="text-[8px] sm:text-[9px] text-[#999999] font-['Poppins:Regular',sans-serif] mb-0.5">Hips</p>
                              <motion.p 
                                key={`hips-${answers.hips}-${unit}`}
                                initial={{ scale: 1.1, opacity: 0.7 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="text-[11px] sm:text-[13px] text-[#b2833a] font-['Poppins:SemiBold',sans-serif]"
                              >
                                {formatValue(answers.hips, unit)}{unit === 'cm' ? 'cm' : '\\\"'}
                              </motion.p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              )}
            </motion.div>
          </AnimatePresence>
          </div>

          {/* Navigation Footer - Fixed at Bottom */}
          <div className="flex-shrink-0 bg-white border-t border-[#e8e8e8] px-3 sm:px-6 py-2 sm:py-3 rounded-b-[20px]">
          <div className="max-w-full mx-auto flex items-center justify-between gap-3">
            <motion.button
              onClick={showEstimationFlow ? handleEstimationBack : handleBack}
              disabled={!showEstimationFlow && currentStep === 0}
              whileHover={(!showEstimationFlow && currentStep === 0) ? {} : { scale: 1.03 }}
              whileTap={(!showEstimationFlow && currentStep === 0) ? {} : { scale: 0.98 }}
              className={`flex items-center gap-1 px-4 py-2 rounded-[20px] font-['Poppins:Medium',sans-serif] text-[13px] transition-all ${
                (!showEstimationFlow && currentStep === 0)
                  ? 'text-[#cccccc] cursor-not-allowed'
                  : 'text-[#666666] hover:bg-[#f4f4f4]'
              }`}
            >
              <ChevronLeft size={16} />
              Back
            </motion.button>

            <div className="flex items-center gap-3">
              {!showEstimationFlow && (
                <motion.button
                  onClick={handleSkip}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-1 px-5 py-2 rounded-[20px] font-['Poppins:Medium',sans-serif] text-[13px] text-[#999999] hover:text-[#666666] hover:bg-[#f4f4f4] transition-all border border-[#e8e8e8]"
                >
                  Skip
                </motion.button>
              )}

              <motion.button
                onClick={showEstimationFlow ? handleEstimationComplete : handleNext}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-1 px-6 py-2 bg-[#b2833a] text-white rounded-[20px] font-['Poppins:SemiBold',sans-serif] text-[13px] shadow-[0px_6px_12px_0px_rgba(178,131,58,0.25)] hover:bg-[#a07534] transition-colors"
              >
                {currentStep === questions.length - 1 ? 'Complete' : 'Continue'}
                <ChevronRight size={16} />
              </motion.button>
            </div>
          </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Success Popup */}
      <SuccessPopup 
        isOpen={showSuccessPopup}
        bodyShape={calculatedBodyShape}
        onComplete={() => {}} 
      />
    </>
  );
}