import React, { useState, useEffect } from "react";
import { BrandCard } from "@/components/ui/atoms/BrandCard";

interface BrandCardData {
    id: string;
    name: string;
    imageSrc: string;
}

interface OurBrandsProps {
    title?: string;
    brands: BrandCardData[];
    primaryBrandIds?: string[];
    rightTallBrandId?: string;
    onSeeAll?: () => void;
    seeAllLabel?: string;
}

export const OurBrands: React.FC<OurBrandsProps> = ({
    title = "Our Brands",
    brands,
    primaryBrandIds = [],
    rightTallBrandId,
    onSeeAll,
    seeAllLabel = "See All Brands",
}) => {

    /* -----------------------------------------------------------
       DESKTOP BRAND MAPPING
    ------------------------------------------------------------*/
    const [first, second, smallTall] = primaryBrandIds;

    const firstBrand = brands.find(b => b.id === first);
    const secondBrand = brands.find(b => b.id === second);
    const smallTallBrand = brands.find(b => b.id === smallTall);
    const rightTallBrand = brands.find(b => b.id === first);

    /* -----------------------------------------------------------
       MOBILE VIEW — EXACT FROM Mobile.tsx (NO CHANGES)
    ------------------------------------------------------------*/

    // Mobile view uses the first 3 brands in order
    const mobileFirst = brands[0];
    const mobileSecond = brands[1];
    const mobileTall = brands[2];

    return (
        <section className="w-full bg-white">

            {/* -----------------------------------------------------
               MOBILE (<lg) — EXACT Mobile.tsx OUTPUT
            ------------------------------------------------------ */}
            <div className="block lg:hidden px-4 sm:px-6 py-12 sm:py-16">

                {/* Frame55 */}
                <h2 className="font-['Recoleta_Alt'] text-[34px] text-[#222] text-center mb-10">
                    {title}
                </h2>

                {/* Frame54 container */}
                <div className="flex flex-col gap-[13px] items-center">

                    {/* Frame52: first two cards */}
                    <div className="flex flex-row w-full gap-[13px] justify-center">

                        {/* Frame45 */}
                        {mobileFirst && (
                            <div className="relative h-[490px] min-w-[200px] flex-1 rounded-[10px] overflow-hidden">
                                <img
                                    src={mobileFirst.imageSrc}
                                    alt={mobileFirst.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute top-0 right-0 p-[10px]">
                                    <div className="bg-white/35 backdrop-blur-sm rounded-[10px] h-[54px] px-[20px] flex items-center justify-center">
                                        <p className="font-['Recoleta_Alt'] text-[22px] text-[#222]">
                                            {mobileFirst.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Frame46 */}
                        {mobileSecond && (
                            <div className="relative h-[490px] min-w-[200px] flex-1 rounded-[10px] overflow-hidden">
                                <img
                                    src={mobileSecond.imageSrc}
                                    alt={mobileSecond.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute top-0 right-0 p-[10px]">
                                    <div className="bg-white/35 backdrop-blur-sm rounded-[10px] h-[54px] px-[20px] flex items-center justify-center">
                                        <p className="font-['Recoleta_Alt'] text-[22px] text-[#222]">
                                            {mobileSecond.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Frame48 — small tall card */}
                    {mobileTall && (
                        <div className="relative h-[452px] w-full max-w-[655px] rounded-[10px] overflow-hidden">
                            <img
                                src={mobileTall.imageSrc}
                                alt={mobileTall.name}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute top-0 right-0 p-[10px]">
                                <div className="bg-white/35 backdrop-blur-sm rounded-[10px] h-[54px] px-[20px] flex items-center justify-center">
                                    <p className="font-['Recoleta_Alt'] text-[22px] text-[#222]">
                                        {mobileTall.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* -----------------------------------------------------
               DESKTOP (lg+)
            ------------------------------------------------------ */}
            <div className="hidden lg:block">
                {/* Title */}
                <div className="h-[185px] flex items-center justify-center">
                    <h2 className="font-poppins text-[34px] text-[#222] text-center">
                        {title}
                    </h2>
                </div>

                {/* Grid */}
                <div className="w-full flex justify-center">
                    <div className="flex gap-[20px] w-full max-w-[1500px] px-[90px]">

                        {/* LEFT COLUMN */}
                        <div className="flex flex-col gap-[13px] flex-1 min-w-[380px] max-w-[650px]">

                            <div className="flex gap-[13px]">
                                {firstBrand && <BrandCard name={firstBrand.name} imageSrc={firstBrand.imageSrc} />}
                                {secondBrand && <BrandCard name={secondBrand.name} imageSrc={secondBrand.imageSrc} />}
                            </div>

                            {smallTallBrand && (
                                <BrandCard name={smallTallBrand.name} imageSrc={smallTallBrand.imageSrc} />
                            )}
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="flex flex-col gap-[13px] flex-1 min-w-[380px] max-w-[650px]">

                            {rightTallBrand && (
                                <div className="relative h-[828px] w-full min-w-[410px] rounded-[10px] overflow-hidden">
                                    <img
                                        src={rightTallBrand.imageSrc}
                                        alt={rightTallBrand.name}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />

                                    <div className="absolute top-0 left-0 p-[10px]">
                                        <div className="bg-white/35 backdrop-blur-md rounded-[10px] h-[54px] flex items-center justify-center px-[20px]">
                                            <span className="font-['Recoleta_Alt'] text-[22px] text-[#222]">
                                                {rightTallBrand.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={onSeeAll}
                                className="bg-[#b2833a] rounded-[10px] h-[114px] w-full min-w-[410px] flex items-center justify-center gap-[8px] text-white text-[16px] font-poppins"
                            >
                                <span>{seeAllLabel}</span>
                                <svg width="18" height="15" fill="none">
                                    <path
                                        d="M17.7071 8.07107C18.0976 7.68054 18.0976 7.04738 17.7071 6.65685L11.3431 0.292893C10.9526 -0.0976309 10.3195 -0.0976309 9.92893 0.292893C9.53841 0.683418 9.53841 1.31658 9.92893 1.70711L15.5858 7.36396L9.92893 13.0208C9.53841 13.4113 9.53841 14.0445 9.92893 14.435C10.3195 14.8256 10.9526 14.8256 11.3431 14.435L17.7071 8.07107ZM0 7.36396V8.36396H17V7.36396V6.36396H0V7.36396Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};
