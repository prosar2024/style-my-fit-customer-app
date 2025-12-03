"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Heart } from "lucide-react";
import logo from "@/public/icons/logo.svg";

interface MobileHeaderProps {
  menuOpen: boolean;
  wishlistCount?: number;
  activePage?: string;
  onToggleMenu: () => void;
  onNavigate: (path: string) => void;
}

const navItems = [
  { label: "Home", path: "/" },
  { label: "Clothing", path: "/clothing" },
  { label: "Wishlist", path: "/wishlist" },
  { label: "Our Solution", path: "/solution" },
  { label: "Body Shape Guide", path: "/body-shape-guide" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function MobileHeader({
  menuOpen,
  wishlistCount = 0,
  activePage = "",
  onToggleMenu,
  onNavigate,
}: MobileHeaderProps) {
  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#222]">
        <div className="flex items-center justify-between px-5 py-4">

          {/* Menu Toggle */}
          <motion.button onClick={onToggleMenu}>
            {menuOpen ? (
              <X className="text-white" size={28} />
            ) : (
              <div className="flex flex-col gap-1">
                <span className="w-7 h-[3px] bg-white" />
                <span className="w-7 h-[3px] bg-white" />
                <span className="w-7 h-[3px] bg-white" />
              </div>
            )}
          </motion.button>

          {/* Logo */}
          <button onClick={() => onNavigate("/")}>
            <Image src={logo} alt="logo" width={140} height={40} />
          </button>

          {/* Search */}
          <button onClick={() => onNavigate("/search")}>
            <Search className="text-white" />
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-[#222] border-t border-[#333] overflow-hidden"
            >
              <div className="flex flex-col py-3">

                {navItems.map((item) => (
                  <motion.button
                    key={item.path}
                    className={`py-3 text-left px-5 text-white text-sm ${
                      activePage === item.path.replace("/", "")
                        ? "text-[#b2833a]"
                        : "hover:text-[#d38436]"
                    }`}
                    onClick={() => {
                      onNavigate(item.path);
                      onToggleMenu();
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* Login */}
                <motion.button
                  onClick={() => {
                    onNavigate("/login");
                    onToggleMenu();
                  }}
                  className="py-3 text-left px-5 text-white hover:text-[#d38436]"
                >
                  Login
                </motion.button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-[64px] lg:hidden" />
    </>
  );
}
