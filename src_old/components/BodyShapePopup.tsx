import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

interface BodyShapePopupProps {
  isOpen: boolean;
  onClose: () => void;
  unit: string;
  onUnitChange: (unit: string) => void;
}

export default function BodyShapePopup({ isOpen, onClose, unit, onUnitChange }: BodyShapePopupProps) {
  const [shoulders, setShoulders] = useState('');
  const [bust, setBust] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [bodyShape, setBodyShape] = useState<string | null>(null);

  const calculateBodyShape = () => {
    const shoulderNum = parseFloat(shoulders);
    const bustNum = parseFloat(bust);
    const waistNum = parseFloat(waist);
    const hipNum = parseFloat(hips);

    if (!shoulderNum || !bustNum || !waistNum || !hipNum) {
      return;
    }

    const shoulderHipDiff = Math.abs(shoulderNum - hipNum);
    const bustHipDiff = Math.abs(bustNum - hipNum);
    const bustWaistRatio = bustNum / waistNum;
    const hipWaistRatio = hipNum / waistNum;

    let shape = '';

    if (shoulderHipDiff <= 2 && bustWaistRatio >= 1.2 && hipWaistRatio >= 1.2) {
      shape = 'Hourglass';
    } else if (shoulderNum > hipNum && shoulderNum - hipNum >= 2) {
      shape = 'Inverted Triangle';
    } else if (hipNum > shoulderNum && hipNum - shoulderNum >= 2) {
      shape = 'Pear';
    } else if (bustWaistRatio < 1.2 && hipWaistRatio < 1.2) {
      shape = 'Rectangle';
    } else if (waistNum >= bustNum && waistNum >= hipNum) {
      shape = 'Apple';
    } else {
      shape = 'Hourglass';
    }

    setBodyShape(shape);
    
    // Store in localStorage
    localStorage.setItem('userBodyShape', shape);
    
    // Dispatch event to notify other components
    window.dispatchEvent(new CustomEvent('bodyShapeCalculated', { detail: shape }));
  };

  const handleSubmit = () => {
    calculateBodyShape();
  };

  const handleReset = () => {
    setShoulders('');
    setBust('');
    setWaist('');
    setHips('');
    setBodyShape(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-[9998]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, x: 400, y: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 400, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-[420px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl z-[9999] overflow-hidden min-h-[500px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#b2833a] to-[#D38436] px-6 py-4 flex items-center justify-between">
              <h3 className="text-white text-lg">Know your body shape</h3>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto flex flex-col justify-end min-h-[440px]">
              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full py-3 bg-gradient-to-r from-[#b2833a] to-[#D38436] text-white rounded-lg hover:shadow-lg transition-all text-center"
              >
                Submit
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}