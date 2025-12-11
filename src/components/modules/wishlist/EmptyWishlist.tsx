"use client";
import React from "react";
import { motion } from "motion/react";
import { Heart, ShoppingBag } from "lucide-react";

function EmptyWishlist({ onShopClick }: { onShopClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center py-20 px-6"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                className="relative mb-8"
            >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#b2833a]/10 to-[#d38436]/10 flex items-center justify-center">
                    <Heart size={64} className="text-[#b2833a]/30" strokeWidth={1.5} />
                </div>
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[#b2833a] rounded-full"
                        style={{
                            top: '50%',
                            left: '50%',
                        }}
                        animate={{
                            x: [0, (Math.cos(i * 60 * Math.PI / 180) * 60)],
                            y: [0, (Math.sin(i * 60 * Math.PI / 180) * 60)],
                            opacity: [1, 0],
                            scale: [1, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            delay: 0.5 + i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                    />
                ))}
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-['Recoleta_Alt:Bold',sans-serif] text-[#222] text-3xl mb-3 text-center"
            >
                Your Wishlist is Empty
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-[#666] text-center max-w-md mb-8 font-poppins"
            >
                Save your favorite items here and never lose track of the pieces you love. Start exploring our collection!
            </motion.p>

            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(178, 131, 58, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onShopClick()}
                className="flex items-center gap-3 px-8 py-4 bg-[#b2833a] text-white rounded-full font-poppins font-medium shadow-lg hover:bg-[#a07534] transition-all"
            >
                <ShoppingBag size={20} />
                Start Shopping
            </motion.button>
        </motion.div>
    );
}

export default EmptyWishlist;