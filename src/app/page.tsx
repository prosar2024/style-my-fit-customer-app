"use client";
import React from "react";
import { OurBrands } from "@/components/modules/home/OurBrand";
import RecommendationsGrid from "@/components/modules/home/RecommendationsStack";
import HeroSection from "@/components/reusable/molecules/HeroSection";
import { ImageCarousel } from "@/components/reusable/molecules/ImageCarousal";
import { motion } from "motion/react";

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
      imageSrc: "/images/home/brand3.jpg",
    },
    {
      id: "juju-tall",
      name: "JuJu",
      imageSrc: "/images/home/brand4.jpg",
    },
    {
      id: "rightTall",
      name: "Landskein",
      imageSrc: "/images/home/brand2.jpg",
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
        <motion.div
          key={"Classic Black Blazer"}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1 * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="min-w-[336px] basis-0 grow"
        >
          <ImageCarousel
            images={["/images/home/carousel1-1.jpg", "/images/home/carousel1-2.jpg", "/images/home/carousel1-3.jpg"]}
            title="Classic Black Blazer"
            ctaLabel="Shop Now"
          />
        </motion.div>
        <motion.div
          key={"Belted Black Dress"}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2 * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="min-w-[336px] basis-0 grow"
        >
          <ImageCarousel
            images={["/images/home/carousel2-1.jpg", "/images/home/carousel2-2.jpg", "/images/home/carousel2-3.jpg"]}
            title="Belted Black Dress"
            ctaLabel="Shop Now"
          />
        </motion.div>
        <motion.div
          key={"Elegant White Dress"}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 3 * 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="min-w-[336px] basis-0 grow"
        >
          <ImageCarousel
            images={["/images/home/carousel3-1.jpg", "/images/home/carousel3-2.jpg", "/images/home/carousel3-3.jpg"]}
            title="Elegant White Dress"
            ctaLabel="Shop Now"
          />
        </motion.div>
      </section>
      <OurBrands
        title="Our Brands"
        brands={brands}
        primaryBrandIds={["juju-1", "landskein-1", "juju-tall", "rightTall"]}
        onSeeAll={() => { }}
        seeAllLabel="See All Brands"
      />
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <RecommendationsGrid />
      </motion.div>
    </div>
  );
};
export default Index;
