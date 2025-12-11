import { motion } from 'motion/react';
import { products } from '@/data/products';

interface FilterBlockProps {
    title: string;
    options: string[];
    selected: string[];
    onToggle: (value: string) => void;
    getCount?: (option: string) => number;
    delay?: number;
}

export default function FilterBlock({
    title,
    options,
    selected,
    onToggle,
    getCount = (option: string) => products.filter(p => p.category === option || p.brand === option || p.bodyShape.includes(option)).length,
    delay = 0,
}: FilterBlockProps) {
    return (
        <motion.div
            className="space-y-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
        >
            <h3 className="font-medium text-gray-900 text-sm">{title}</h3>
            <div className="space-y-2">
                {options.map((option, idx) => (
                    <motion.label
                        key={option}
                        className="flex items-center justify-between py-2 cursor-pointer group"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: delay + 0.05 + idx * 0.03 }}
                    >
                        <div className="flex items-center gap-3">
                            <div className="relative w-4 h-4">
                                <input
                                    type="checkbox"
                                    checked={selected.includes(option)}
                                    onChange={() => onToggle(option)}
                                    className="peer absolute opacity-0 w-4 h-4 cursor-pointer"
                                />
                                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${selected.includes(option)
                                        ? 'border-[#b2833a] bg-[#b2833a]'
                                        : 'border-gray-300 bg-white hover:border-gray-400'
                                    }`}>
                                    {selected.includes(option) && (
                                        <svg className="w-full h-full text-white p-0.5" viewBox="0 0 12 12" fill="none">
                                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <span className="text-sm text-gray-700 group-hover:text-[#b2833a] transition-colors">
                                {option}
                            </span>
                        </div>
                        <span className="text-xs text-gray-500">{getCount(option)}</span>
                    </motion.label>
                ))}
            </div>
        </motion.div>
    );
}
