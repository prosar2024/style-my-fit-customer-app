"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

import { X } from "lucide-react";
import { SearchIcon, WishlistIcon } from "@/components/icons/icons";
import { menuItems, mobileMenuItems } from "@/data/menuItems";
import LoginModal from "./LoginModal";


function DesktopNav({
  pathname,
  router,
  wishlistCount,
  onLoginClick,
}: {
  pathname: string;
  router: any;
  wishlistCount: number;
  onLoginClick: () => void;
}) {
  return (
    <div className="hidden lg:flex items-center justify-between px-[174px] w-full">
      {/* LOGO */}
      <button
        onClick={() => router.push("/")}
        className="relative h-[35px] w-[150px] hover:scale-105 transition-transform"
      >
        <img
          src="/icons/logo.svg"
          alt="StyleMyFit Logo"
          className="absolute inset-0 size-full object-contain"
        />
      </button>

      {/* MENU */}
      <nav className="flex gap-[46px] text-white text-[14px]">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`transition-colors ${pathname === item.path
                ? "text-[#b2833a]"
                : "hover:text-[#b2833a]"
              }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-[17px]">
        <SearchIcon onClick={() => router.push("/search")} />
        <WishlistIcon
          onClick={() => router.push("/wishlist")}
          wishlistCount={wishlistCount}
        />
        <button
          onClick={onLoginClick}
          className="px-4 py-2 border border-[#b2833a] text-[#b2833a] rounded-[30px] hover:bg-[#b2833a] hover:text-white transition-all"
        >
          Login
        </button>
      </div>
    </div>
  );
}

/* ----------------------------------------------
   MOBILE NAV
----------------------------------------------- */

function MobileNav({
  pathname,
  router,
  menuOpen,
  setMenuOpen,
  wishlistCount,
  onLoginClick,
}: {
  pathname: string;
  router: any;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  wishlistCount: number;
  onLoginClick: () => void;
}) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 bg-[#222222] z-50">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-5 py-3">
        {/* MENU BUTTON */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? (
            <X className="text-white" size={28} />
          ) : (
            <div className="space-y-2">
              <div className="h-[4px] w-[30px] bg-white rounded" />
              <div className="h-[4px] w-[30px] bg-white rounded" />
              <div className="h-[4px] w-[30px] bg-white rounded" />
            </div>
          )}
        </motion.button>

        {/* LOGO */}
        <button onClick={() => router.push("/")}>
          <img src="/icons/logo.svg" className="h-[35px]" />
        </button>

        {/* SEARCH */}
        <button onClick={() => router.push("/search")}>
          <SearchIcon />
        </button>
      </div>

      {/* DROPDOWN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#222222] border-t border-[#333]"
          >
            <nav className="flex flex-col px-5 py-2 text-white">
              {mobileMenuItems.map((item) => (
                <motion.button
                  key={item.path}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    router.push(item.path);
                    setMenuOpen(false);
                  }}
                  className={`py-3 text-left ${pathname === item.path
                      ? "text-[#b2833a]"
                      : "hover:text-[#d38436]"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    {item.label}

                    {item.showBadge && wishlistCount > 0 && (
                      <span className="w-6 h-6 bg-[#b2833a] text-white rounded-full flex items-center justify-center text-xs">
                        {wishlistCount}
                      </span>
                    )}
                  </div>
                </motion.button>
              ))}

              {/* LOGIN */}
              <button
                onClick={onLoginClick}
                className="py-3 text-left hover:text-[#d38436]"
              >
                Login
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* spacer */}
      <div className="h-[59px]" />
    </header>
  );
}

/* ----------------------------------------------
   MAIN HEADER COMPONENT
----------------------------------------------- */

export default function Header({ wishlistCount = 0 }: { wishlistCount?: number }) {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <div className="bg-[#222222] py-[26px]">
        {/* DESKTOP */}
        <DesktopNav
          pathname={pathname}
          router={router}
          wishlistCount={wishlistCount}
          onLoginClick={() => setIsLoginModalOpen(true)}
        />

        {/* MOBILE */}
        <MobileNav
          pathname={pathname}
          router={router}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          wishlistCount={wishlistCount}
          onLoginClick={() => setIsLoginModalOpen(true)}
        />
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}
