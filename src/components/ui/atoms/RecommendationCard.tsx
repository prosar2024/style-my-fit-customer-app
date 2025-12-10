import React from 'react';

interface RecommendationCardProps {
    imageSrc: string;
    title: string;
    description: string;
    features: string[];
}

function RecommendationCard({
    imageSrc,
    title = "Precise Recommendations",
    description = "Get clothing suggestions perfectly matched to your unique body shape.",
    features = [
        "AI-powered body shape analysis.",
        "Personalized style recommendations.",
        "Real-time fit predictions."
    ]
}: RecommendationCardProps) {
    return (
        <div className="flex flex-col gap-[5px] items-center max-w-[416px] min-w-[300px] rounded-[10px] relative">
            {/* Frame68 Border */}
            <div className="absolute inset-0 border border-[rgba(178,131,58,0.55)] rounded-[10px] pointer-events-none" aria-hidden="true" />

            {/* Frame61 Image */}
            <div className="h-[247px] w-full rounded-[10px] shrink-0 relative overflow-hidden">
                <img
                    src={imageSrc}
                    alt=""
                    className="w-full h-full object-cover rounded-[10px]"
                />
            </div>

            {/* Frame67 Content */}
            <div className="w-full shrink-0">
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col gap-[12px] items-center w-full px-[9px] py-[12px]">

                        {/* Frame65 Title - Recoleta Alt SemiBold */}
                        <div className="w-full">
                            <div className="flex items-center justify-center w-full">
                                <p className="font-poppins text-[#222222] text-[20px] leading-[17px] text-center tracking-tight">
                                    {title}
                                </p>
                            </div>
                        </div>

                        {/* Frame64 Description - Poppins Regular */}
                        <div className="w-full">
                            <div className="flex items-center justify-center w-full">
                                <p className="font-normal text-[#222222] text-[14px] leading-[21px] text-center">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* Frame66 Features - Poppins Regular */}
                        <div className="w-full">
                            <div className="flex items-center justify-center w-full">
                                <div className="text-[14px] leading-[21px] text-[rgba(34,34,34,0.7)] text-center font-normal">
                                    {features.map((feature, index) => (
                                        <p key={index} className="mb-0 last:mb-0">
                                            {feature}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommendationCard;
