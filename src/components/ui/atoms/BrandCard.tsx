import React from "react";
import Image from "next/image";

interface BrandCardProps {
    name: string;
    imageSrc: string;
    badgeClassName?: string;
}

export const BrandCard: React.FC<BrandCardProps> = ({
    name,
    imageSrc,
    badgeClassName,
}) => (
    <div className="relative h-[490px] min-w-[200px] flex-1">
        <Image
            src={imageSrc}
            alt={name}
            fill
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        />
        <div className="relative h-full w-full overflow-hidden rounded-[10px] flex justify-end items-start p-[10px]">
            <div className={badgeClassName ?? "bg-[rgba(255,255,255,0.35)] rounded-[10px] h-[54px] flex items-center justify-center px-[20px]"}>
                <span className="font-['Recoleta_Alt'] text-[22px] text-[#222222]">
                    {name}
                </span>
            </div>
        </div>
    </div>
);
