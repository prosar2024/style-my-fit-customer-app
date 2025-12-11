"use client";
import React from "react";
import { IconFacebook, IconInstagram, IconTwitter, SocialIcon } from "@/components/icons/icons";

function FooterSection({
  title,
  children,
}: React.PropsWithChildren<{ title: React.ReactNode }>) {
  return (
    <div className="min-w-[330px] max-w-[360px] flex flex-col gap-4">
      <h3 className="text-lg font-medium">{title}</h3>
      {children}
    </div>
  );
}

function FooterList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="text-sm text-[#99a1af] hover:text-white cursor-pointer transition"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

const Footer = () => {
  return (
    <footer className="bg-[#222222] w-full text-white">
      <div className="px-4 md:px-[90px] py-[80px] flex flex-col gap-8">
        <div className="flex flex-wrap gap-8 md:gap-[32px] w-full">
          <FooterSection
            title={
              <>
                About <span className="font-bold">STYLEMYFIT</span>
              </>
            }
          >
            <p className="text-sm text-[#99a1af] leading-5 max-w-[320px]">
              Personalized fashion recommendations based on your unique body shape.
            </p>
          </FooterSection>

          <FooterSection title="Customer Service">
            <FooterList
              items={[
                "Contact Us",
                "Shipping & Delivery",
                "Returns & Exchanges",
                "Size Guide",
                "FAQs",
              ]}
            />
          </FooterSection>

          <FooterSection title="Quick Links">
            <FooterList
              items={[
                "About Us",
                "Careers",
                "Privacy Policy",
                "Terms & Conditions",
              ]}
            />
          </FooterSection>

          <FooterSection title="Follow Us">
            <div className="flex gap-4">
              <SocialIcon icon={IconFacebook} />
              <SocialIcon icon={IconInstagram} />
              <SocialIcon icon={IconTwitter} />
            </div>
          </FooterSection>

        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 w-full pt-4">
          <p className="text-sm text-[#99a1af]">© 2025 BelleMode. All rights reserved.</p>

          <div className="flex items-center gap-4 text-sm text-[#99a1af]">
            <span>🇬🇧 United Kingdom</span>
            <span>|</span>
            <span>GBP £</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;


