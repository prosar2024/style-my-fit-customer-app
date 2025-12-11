"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";


function ConfirmationDialog({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    type = 'single'
}: {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    type?: 'single' | 'all';
}) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
                onClick={onClose}
            >
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                />

                {/* Dialog */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        duration: 0.3
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
                >
                    {/* Decorative top bar */}
                    <div className={`h-1.5 w-full ${type === 'all' ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-[#b2833a] to-[#d38436]'}`} />

                    <div className="p-8">
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                delay: 0.1,
                                type: "spring",
                                stiffness: 200,
                                damping: 15
                            }}
                            className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center"
                        >
                            <AlertCircle className="text-red-500" size={32} strokeWidth={2} />
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="font-['Recoleta_Alt:Bold',sans-serif] text-[#222222] text-2xl text-center mb-3"
                        >
                            {title}
                        </motion.h3>

                        {/* Message */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#666] text-center mb-8 font-poppins leading-relaxed"
                        >
                            {message}
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="flex gap-3"
                        >
                            {/* Cancel Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={onClose}
                                className="flex-1 px-6 py-3.5 bg-gray-100 text-[#222] rounded-2xl font-poppins font-medium hover:bg-gray-200 transition-all"
                            >
                                Cancel
                            </motion.button>

                            {/* Confirm Button */}
                            <motion.button
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 8px 30px rgba(239, 68, 68, 0.4)"
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    onConfirm();
                                    onClose();
                                }}
                                className="flex-1 px-6 py-3.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-poppins font-semibold hover:from-red-600 hover:to-red-700 transition-all shadow-lg"
                            >
                                Yes, Delete
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default ConfirmationDialog;