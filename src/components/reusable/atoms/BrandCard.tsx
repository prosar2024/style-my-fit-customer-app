import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
interface BrandCardProps {
    index: number;
    name: string;
    imageSrc: string;
    badgeClassName?: string;
}

export const BrandCard: React.FC<BrandCardProps> = ({
    index,
    name,
    imageSrc,
    badgeClassName,
}) => (
    <motion.div
        key={name}
        className="group relative h-[490px] min-w-[200px] flex-1 rounded-[10px] overflow-hidden"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2 + index * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.3 }}
    >
        <Image
            src={imageSrc}
            alt={name}
            fill
            className="absolute inset-0 h-full w-full object-cover pointer-events-none group-hover:scale-110 transition-transform duration-700"
        />
        <div className="relative h-full w-full overflow-hidden rounded-[10px] flex justify-end items-start p-[10px]">
            <div className={badgeClassName ?? "bg-[rgba(255,255,255,0.35)] rounded-[10px] h-[54px] flex items-center justify-center px-[20px]"}>
                <span className="font-poppins text-[22px] text-[#222222]">
                    {name}
                </span>
            </div>
        </div>
    </motion.div>
);
