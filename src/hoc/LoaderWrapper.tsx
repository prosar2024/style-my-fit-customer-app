"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import PageLoader from "@/components/reusable/atoms/PageLoader";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);

    if (document.readyState === "complete") {
      const minTimer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(minTimer);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader />}
      </AnimatePresence>

      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-700"}>
        {children}
      </div>
    </>
  );
}
