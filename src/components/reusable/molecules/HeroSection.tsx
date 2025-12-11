import React from "react";
import BannerCarousel from "@/components/reusable/molecules/BannerCarousal";
import MobileHeroBanner from "@/components/reusable/molecules/MobileHeroBanner";
import AnimatedButton from "@/components/reusable/atoms/AnimatedButton";

interface HeroSectionProps {
    buttonClick?: () => void;
    title: string;
    buttonTitle: string;
    carouselImages: { src: string; alt?: string }[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
    buttonClick,
    title,
    buttonTitle,
    carouselImages,
}) => {
    return (
        <section className="w-full">
            <div className="hidden lg:block w-full h-[732px]">
                <BannerCarousel className="h-full w-full" images={carouselImages}>
                    <div className="flex h-full w-full items-center justify-start pl-[482px] pr-[193px]">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[22px] max-w-[600px] min-w-[350px]">
                            <h1
                                className="font-['Playfair_Display'] text-[60px] leading-[70px]"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #222222 0%, #b2833a 50%, #D38436 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                {title}
                            </h1>
                            <div className="flex items-center gap-4">
                                <AnimatedButton onClick={buttonClick} buttonTitle={buttonTitle} />
                            </div>
                        </div>
                    </div>
                </BannerCarousel>
            </div>

            <div className="block lg:hidden">
                <MobileHeroBanner
                    onFindMyStyle={buttonClick}
                    title={title}
                    buttonTitle={buttonTitle}
                    images={carouselImages}
                />
            </div>
        </section>
    );
};

export default HeroSection;
