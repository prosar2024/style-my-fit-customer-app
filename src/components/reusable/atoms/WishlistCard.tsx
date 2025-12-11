"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trash2 } from "lucide-react";

interface WishlistItem {
    id: number;
    name: string;
    brand: string;
    category: string;
    image: string;
    price: number;
    inStock: boolean;
    bodyShape: string[];
}

function WishlistCard({
    item,
    index,
    onRemoveClick,
    onProductClick
}: {
    item: WishlistItem;
    index: number;
    onRemoveClick: (id: number, name: string) => void;
    onProductClick?: (source: string) => void;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className="group"
            onMouseEnter={() => !isMobile && setIsHovered(true)}
            onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
            <div className="relative bg-white rounded-[24px] overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(178,131,58,0.15)] transition-all duration-500">
                {/* Image Container */}
                <div
                    className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 cursor-pointer"
                    onClick={() => onProductClick && onProductClick('wishlist')}
                >
                    <motion.img
                        animate={{
                            scale: isHovered ? 1.08 : 1,
                        }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay on Hover */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
                    />

                    {/* Remove Button */}
                    <motion.button
                        initial={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.85 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemoveClick(item.id, item.name);
                        }}
                        className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center bg-white/95 backdrop-blur-xl rounded-full shadow-lg transition-all duration-300 text-red-500 hover:bg-red-50 hover:text-red-600"
                    >
                        <Trash2 size={20} strokeWidth={2} />
                    </motion.button>

                    {/* Category Badge */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.08 + 0.15 }}
                        className="absolute top-5 left-5"
                    >
                        <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs tracking-wide text-[#222] shadow-md">
                            {item.category}
                        </div>
                    </motion.div>

                    {/* Stock Status */}
                    {!item.inStock && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.08 + 0.2 }}
                            className="absolute bottom-5 left-5 right-5"
                        >
                            <div className="px-3 py-2 bg-red-500/95 backdrop-blur-sm rounded-lg text-xs text-white text-center shadow-md">
                                Out of Stock
                            </div>
                        </motion.div>
                    )}

                    {/* Quick Actions Overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: isMobile ? 1 : (isHovered ? 1 : 0),
                            y: isMobile ? 0 : (isHovered ? 0 : 20)
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-x-5 bottom-5 flex gap-2"
                    >
                        <div
                            className="w-12 h-12 flex items-center justify-center bg-white/95 backdrop-blur-xl rounded-xl shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-4 h-4">
                                <div className="relative size-full" data-name="Vector">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 44">
                                        <path d="M44.8806 10.4599L34.3693 0L30.3309 4.03617L36.2023 9.89147H17.1846C12.627 9.89147 8.25601 11.6883 5.03327 14.8866C1.81052 18.0848 0 22.4227 0 26.9457C0 31.4688 1.81052 35.8066 5.03327 39.0049C8.25601 42.2032 12.627 44 17.1846 44H25.777V38.3152H17.1846C14.1462 38.3152 11.2322 37.1174 9.08372 34.9852C6.93523 32.853 5.72821 29.9611 5.72821 26.9457C5.72821 23.9304 6.93523 21.0385 9.08372 18.9063C11.2322 16.7741 14.1462 15.5762 17.1846 15.5762H35.9159L30.1877 21.261L34.3693 25.1835L44.8806 14.7235L47 12.6202L44.8806 10.4599Z" fill="var(--fill-0, #121212)" id="Vector" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                    <motion.p
                        className="text-xs text-[#b2833a] tracking-[0.15em] mb-2 font-poppins font-medium uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.08 + 0.25 }}
                    >
                        {item.brand}
                    </motion.p>
                    <motion.h3
                        className="font-['Playfair_Display:600',serif] text-[#222] mb-3 line-clamp-1 group-hover:text-[#b2833a] transition-colors duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 + 0.3 }}
                    >
                        {item.name}
                    </motion.h3>

                    {/* Price */}
                    <motion.div
                        className="flex items-center justify-between gap-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 + 0.35 }}
                    >
                        <div className="flex flex-col">
                            <p className="font-['Playfair_Display:600',serif] text-[#222] text-xl">
                                ${item.price}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">Free Shipping</p>
                        </div>
                    </motion.div>

                    {/* Body Shape Tags */}
                    <motion.div
                        className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.08 + 0.4 }}
                    >
                        {item.bodyShape.slice(0, 2).map((shape, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-1 bg-gray-50 text-[10px] text-gray-600 rounded-md border border-gray-200"
                            >
                                {shape}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default WishlistCard;