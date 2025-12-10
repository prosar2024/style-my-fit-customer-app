"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { SearchIcon, WishlistIcon } from "@/components/icons/icons";
import { menuItems } from "@/data/menuItems";
import LoginModal from "@/components/ui/molecules/LoginModal";
import AnimatedSearchBox from "@/components/ui/atoms/AnimatedSearchBox";
import MobileMenu from "@/components/ui/molecules/MobileMenu";

function DesktopNav({
  pathname,
  router,
  wishlistCount,
  onLoginClick,
  setShowSearchOverlay,
}: {
  pathname: string;
  router: any;
  wishlistCount: number;
  onLoginClick: () => void;
  setShowSearchOverlay: (v: boolean) => void;
}) {
  return (
    <div className="hidden lg:flex items-center justify-between lg:px-[30px] xl:px-[100px] 2xl:px-[174px] w-full">
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

      <div className="flex items-center gap-[17px]">
        <SearchIcon onClick={() => setShowSearchOverlay(true)} />
        <WishlistIcon
          onClick={() => router.push("/wishlist")}
          pathname={pathname}
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

function MobileNav({
  router,
  menuOpen,
  setMenuOpen,
  onLoginClick,
  setShowSearchOverlay,
}: {
  pathname: string;
  router: any;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  wishlistCount: number;
  onLoginClick: () => void;
  setShowSearchOverlay: (v: boolean) => void;
}) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 bg-[#222222] z-50">
      <div className="flex items-center justify-between px-5 py-3">
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? (
            <X className="text-white" size={28} />
          ) : (
            <div className="space-y-1">
              <div className="h-[3px] w-[25px] bg-white rounded" />
              <div className="h-[3px] w-[25px] bg-white rounded" />
              <div className="h-[3px] w-[25px] bg-white rounded" />
            </div>
          )}
        </motion.button>

        <button onClick={() => router.push("/")}>
          <img src="/icons/logo.svg" className="h-[35px]" />
        </button>

        <button onClick={() => setShowSearchOverlay(true)}>
          <SearchIcon />
        </button>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} setShowLoginModal={onLoginClick} onNavigate={(path) => router.push(path)} />
    </header>
  );
}

export default function Header({ wishlistCount = 0 }: { wishlistCount?: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  return (
    <>
      <div className="bg-[#222222] py-[26px] fixed z-[9999] w-full top-0 left-0">
        <DesktopNav
          pathname={pathname}
          router={router}
          wishlistCount={wishlistCount}
          onLoginClick={() => setIsLoginModalOpen(true)}
          setShowSearchOverlay={setShowSearchOverlay}
        />
        <MobileNav
          pathname={pathname}
          router={router}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          wishlistCount={wishlistCount}
          onLoginClick={() => setIsLoginModalOpen(true)}
          setShowSearchOverlay={setShowSearchOverlay}
        />
      </div>
      {showSearchOverlay && (
        <AnimatedSearchBox
          onClose={() => setShowSearchOverlay(false)}
        />
      )}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}
