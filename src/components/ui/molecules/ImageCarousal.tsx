import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface CarouselProps {
    images: string[];
    intervalMs?: number;
    title: string;
    ctaLabel: string;
    onCtaClick?: () => void;
}

export const ImageCarousel: React.FC<CarouselProps> = ({
    images,
    intervalMs = 4000,
    title,
    ctaLabel,
    onCtaClick,
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(
            () => setIndex((prev) => (prev + 1) % images.length),
            intervalMs,
        );
        return () => clearInterval(id);
    }, [images.length, intervalMs]);

    return (
        <div className="relative min-w-[336px] overflow-hidden flex-1">
            {images.map((image, i) => (
                <motion.div
                    key={image}
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                        x: i === index ? 0 : i < index ? "-100%" : "100%",
                        opacity: i === index ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />
                </motion.div>
            ))}
            <div className="relative z-10 pointer-events-none h-full w-full">
                <div className="h-full w-full flex items-center px-[47px] py-[125px]">
                    <div className="pointer-events-auto space-y-3">
                        <p className="font-poppins text-[30px] text-[#222222]">
                            {title}
                        </p>
                        <button
                            type="button"
                            onClick={onCtaClick}
                            className="bg-[#b2833a] shop-now-btn font-poppins text-white rounded-[30px] h-[42px] px-[15px] text-[16px]"
                        >
                            {ctaLabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
