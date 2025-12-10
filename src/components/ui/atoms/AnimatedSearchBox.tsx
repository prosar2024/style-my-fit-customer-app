"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

interface AnimatedSearchBoxProps {
  onClose?: () => void;
  placeholder?: string;
}

export default function AnimatedSearchBox({
  onClose,
  placeholder = "Search your item here...",
}: AnimatedSearchBoxProps) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.classList.add("menu-open");
    document.documentElement.classList.add("menu-open");

    return () => {
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
    };
  }, []);

  const handleClose = useCallback(() => {
    setSearchQuery("");
    onClose?.();
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center px-4"
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ backdropFilter: "blur(0px)" }}
          animate={{ backdropFilter: "blur(12px)" }}
          exit={{ backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/40"
        />
        <motion.div
          initial={{ scale: 0.95, y: -20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: -20, opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 flex w-full max-w-[600px] items-center gap-3 rounded-2xl bg-[#f4f4f4] px-6 py-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-[#b2833a]"
          />

          <Search size={22} className="text-black/40" />

          <input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-[16px] text-[#222] outline-none placeholder:text-[#acacac]"
            autoFocus
            aria-label="Search"
          />

          <AnimatePresence>
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchQuery("");
                }}
                className="text-[#666] hover:text-[#222] transition-colors"
                aria-label="Clear search input"
              >
                <X size={20} />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Close button */}
          {/* <button
            onClick={handleClose}
            className="text-[#666] hover:text-[#222] transition-colors"
            aria-label="Close search"
          >
            <X size={24} />
          </button> */}
        </motion.div>

        <AnimatePresence>
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute top-[calc(50%+40px)] w-[90vw] max-w-[600px] max-h-[400px] overflow-y-auto rounded-[16px] bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-[14px] text-[#999] text-center py-8">
                No results found for "{searchQuery}"
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
