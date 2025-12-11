"use client";
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { mobileMenuItems } from '@/data/menuItems';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate?: (section: string) => void;
    setShowLoginModal: (show: boolean) => void;
}

export default function MobileMenu({ isOpen, onClose, onNavigate, setShowLoginModal }: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('menu-open');
            document.documentElement.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
            document.documentElement.classList.remove('menu-open');
        }

        return () => {
            document.body.classList.remove('menu-open');
            document.documentElement.classList.remove('menu-open');
        };
    }, [isOpen]);

    const handleItemClick = (href: string, label: string) => {
        if (onNavigate) {
            onNavigate(href);
        }
        onClose();
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
                            onClick={onClose}
                        />

                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-[#222222] z-[1000] shadow-[4px_0_20px_rgba(0,0,0,0.3)]"
                        >
                            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                                <h2 className="font-['Playfair_Display:600',serif] text-white text-[24px]">Menu</h2>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-white hover:text-[#b2833a] transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="px-4 py-6">
                                <ul className="space-y-2">
                                    {mobileMenuItems.map((item, index) => (
                                        <motion.li
                                            key={item.label}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                        >
                                            <button
                                                onClick={() => handleItemClick(item.path, item.label)}
                                                className="w-full flex items-center justify-between px-4 py-4 text-white hover:bg-[#b2833a]/10 hover:text-[#b2833a] rounded-lg transition-all duration-200 group"
                                            >
                                                <span className="font-poppins text-[16px]">
                                                    {item.label}
                                                </span>
                                                <ChevronRight
                                                    size={20}
                                                    className="text-white/40 group-hover:text-[#b2833a] group-hover:translate-x-1 transition-all"
                                                />
                                            </button>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-white/10">
                                <button
                                    className="w-full py-3 px-4 text-[#b2833a] font-poppins font-medium text-[16px] border border-[#b2833a] rounded-full hover:bg-[#b2833a]/10 transition-colors"
                                    onClick={() => setShowLoginModal(true)}
                                >
                                    Login
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
