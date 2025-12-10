"use client";
import React from "react";
import { OurBrands } from "@/components/ui/home/OurBrand";
import RecommendationsGrid from "@/components/ui/home/RecommendationsStack";
import HeroSection from "@/components/ui/molecules/HeroSection";
import { ImageCarousel } from "@/components/ui/molecules/ImageCarousal";

const Index = () => {

  const brands = [
    {
      id: "juju-1",
      name: "JuJu",
      imageSrc: "/images/home/brand1.jpg",
    },
    {
      id: "landskein-1",
      name: "Landskein",
      imageSrc: "/images/home/brand2.jpg",
    },
    {
      id: "juju-tall",
      name: "JuJu",
      imageSrc: "/images/home/brand3.jpg",
    },
    {
      id: "landskein-tall",
      name: "Landskein",
      imageSrc: "/images/home/brand4.jpg",
    },
  ];
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <HeroSection
        title="Where Style Meets the Perfect Fit."
        buttonTitle="Find My Style"
        carouselImages={[
          { src: "/images/home/banner1.jpg", alt: "Hero Banner 1" },
          { src: "/images/home/banner2.jpg", alt: "Hero Banner 2" },
          { src: "/images/home/banner3.jpg", alt: "Hero Banner 3" },
        ]}
        buttonClick={() => {
          console.log("Find My Style clicked");
        }}
      />

      {/* Product carousels */}
      <section className="flex flex-wrap justify-center gap-0 w-full">
        <ImageCarousel
          images={["/images/home/carousel1-1.jpg", "/images/home/carousel1-2.jpg", "/images/home/carousel1-3.jpg"]}
          title="Classic Black Blazer"
          ctaLabel="Shop Now"
        />
        <ImageCarousel
          images={["/images/home/carousel2-1.jpg", "/images/home/carousel2-2.jpg", "/images/home/carousel2-3.jpg"]}
          title="Belted Black Dress"
          ctaLabel="Shop Now"
        />
        <ImageCarousel
          images={["/images/home/carousel3-1.jpg", "/images/home/carousel3-2.jpg", "/images/home/carousel3-3.jpg"]}
          title="Elegant White Dress"
          ctaLabel="Shop Now"
        />
      </section>
      <OurBrands
        title="Our Brands"
        brands={brands}
        primaryBrandIds={["juju-1", "landskein-1", "juju-tall"]} // left column: 2 small + 1 medium
        onSeeAll={() => { }}
        seeAllLabel="See All Brands"
      />
      <RecommendationsGrid />
      {/* Then mount your “Our Brands”, feature cards, business section,
        newsletter, footer as separate typed components in the same style. */}
    </div>
  );
};
export default Index;
