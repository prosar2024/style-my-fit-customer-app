import { motion, AnimatePresence } from 'motion/react';
import { X, HelpCircle, ShoppingBag } from 'lucide-react';

interface SizeEstimationModalProps {
  isOpen: boolean;
  questionId: string;
  onClose: () => void;
  onEstimate: (size: string) => void;
}

// Size estimation data for different measurements
const estimationData: Record<string, {
  title: string;
  promptText: string;
  options: { value: string; label: string; estimatedInches: number }[];
}> = {
  waist: {
    title: "Let's estimate your waist size",
    promptText: "What was the waist size of the last pair of pants you purchased that fit well?",
    options: [
      { value: '24', label: '24', estimatedInches: 24 },
      { value: '25', label: '25', estimatedInches: 25 },
      { value: '26', label: '26', estimatedInches: 26 },
      { value: '27', label: '27', estimatedInches: 27 },
      { value: '28', label: '28', estimatedInches: 28 },
      { value: '29', label: '29', estimatedInches: 29 },
      { value: '30', label: '30', estimatedInches: 30 },
      { value: '31', label: '31', estimatedInches: 31 },
      { value: '32', label: '32', estimatedInches: 32 },
      { value: '33', label: '33', estimatedInches: 33 },
      { value: '34', label: '34', estimatedInches: 34 },
      { value: '36', label: '36', estimatedInches: 36 },
      { value: '38', label: '38', estimatedInches: 38 },
      { value: '40', label: '40', estimatedInches: 40 },
    ],
  },
  bust: {
    title: "Let's estimate your bust size",
    promptText: "What is the size (S, M, L, XL) of your best-fitting shirt or top?",
    options: [
      { value: 'XXS', label: 'XXS', estimatedInches: 30 },
      { value: 'XS', label: 'XS', estimatedInches: 32 },
      { value: 'S', label: 'Small (S)', estimatedInches: 34 },
      { value: 'M', label: 'Medium (M)', estimatedInches: 36 },
      { value: 'L', label: 'Large (L)', estimatedInches: 38 },
      { value: 'XL', label: 'X-Large (XL)', estimatedInches: 40 },
      { value: 'XXL', label: '2X-Large (XXL)', estimatedInches: 42 },
      { value: '3XL', label: '3X-Large (3XL)', estimatedInches: 44 },
    ],
  },
  hips: {
    title: "Let's estimate your hip size",
    promptText: "What was the size of the last pair of pants or skirt that fit you well?",
    options: [
      { value: 'XXS', label: 'XXS', estimatedInches: 32 },
      { value: 'XS', label: 'XS', estimatedInches: 34 },
      { value: 'S', label: 'Small (S)', estimatedInches: 36 },
      { value: 'M', label: 'Medium (M)', estimatedInches: 38 },
      { value: 'L', label: 'Large (L)', estimatedInches: 40 },
      { value: 'XL', label: 'X-Large (XL)', estimatedInches: 42 },
      { value: 'XXL', label: '2X-Large (XXL)', estimatedInches: 44 },
      { value: '3XL', label: '3X-Large (3XL)', estimatedInches: 46 },
    ],
  },
  shoulders: {
    title: "Let's estimate your shoulder width",
    promptText: "What is the size (S, M, L, XL) of your best-fitting jacket or blazer?",
    options: [
      { value: 'XXS', label: 'XXS', estimatedInches: 36 },
      { value: 'XS', label: 'XS', estimatedInches: 38 },
      { value: 'S', label: 'Small (S)', estimatedInches: 40 },
      { value: 'M', label: 'Medium (M)', estimatedInches: 42 },
      { value: 'L', label: 'Large (L)', estimatedInches: 44 },
      { value: 'XL', label: 'X-Large (XL)', estimatedInches: 46 },
      { value: 'XXL', label: '2X-Large (XXL)', estimatedInches: 48 },
      { value: '3XL', label: '3X-Large (3XL)', estimatedInches: 50 },
    ],
  },
};

export default function SizeEstimationModal({ isOpen, questionId, onClose, onEstimate }: SizeEstimationModalProps) {
  const data = estimationData[questionId];

  if (!data) return null;

  const handleSizeSelect = (option: typeof data.options[0]) => {
    onEstimate(option.estimatedInches.toString());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ backdropFilter: 'blur(0px)' }}
            animate={{ backdropFilter: 'blur(8px)' }}
            exit={{ backdropFilter: 'blur(0px)' }}
            className="absolute inset-0 bg-black/50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-[24px] shadow-2xl w-full max-w-lg max-h-[80vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-[#b2833a] to-[#D38436] px-6 py-8 text-center">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X size={20} className="text-white" />
              </button>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.1 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4"
              >
                <HelpCircle size={32} className="text-white" />
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-['Playfair_Display:700',serif] text-white text-[26px] sm:text-[30px] mb-2"
              >
                {data.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-['Poppins:Regular',sans-serif] text-white/90 text-[14px] sm:text-[15px] max-w-md mx-auto"
              >
                {data.promptText}
              </motion.p>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-3">
                {data.options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSizeSelect(option)}
                    className="w-full px-5 py-4 rounded-[16px] border-2 border-[#e8e8e8] hover:border-[#b2833a] hover:bg-[#faf8f5] transition-all text-left group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#b2833a]/10 flex items-center justify-center group-hover:bg-[#b2833a] group-hover:text-white transition-colors">
                          <ShoppingBag size={18} className="text-[#b2833a] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="font-['Poppins:SemiBold',sans-serif] text-[15px] sm:text-[16px] text-[#222222] mb-0.5">
                            {option.label}
                          </p>
                          <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#999999]">
                            Estimated: {option.estimatedInches}"
                          </p>
                        </div>
                      </div>
                      <motion.div
                        className="w-6 h-6 rounded-full border-2 border-[#e8e8e8] group-hover:border-[#b2833a] flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <motion.div className="w-3 h-3 rounded-full bg-[#b2833a] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Help Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 bg-[#faf8f5] rounded-[12px] border border-[#e8e8e8]"
              >
                <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#666666] text-center">
                  💡 <span className="font-['Poppins:Medium',sans-serif]">Tip:</span> These are estimates based on standard sizing. You can always adjust the slider after selecting!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}