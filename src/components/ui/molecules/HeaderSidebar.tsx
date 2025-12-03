"use client";

import { mobileMenuItems } from "@/data/menuItems";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

interface HeaderSidebarProps {
    isOpen: boolean;
    onMenuToggle: () => void;
    wishlistCount?: number;
}

const HeaderSidebar = ({ isOpen, onMenuToggle, wishlistCount = 0 }: HeaderSidebarProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
        onMenuToggle();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    className="bg-[#222222] border-t border-[#333333] overflow-hidden"
                >
                    <nav className="flex flex-col px-[20px] py-3 font-['Poppins:Regular',sans-serif] text-[14px] text-white">

                        {mobileMenuItems.map((item) => {
                            const isActive = pathname === item.path;

                            return (
                                <motion.button
                                    key={item.path}
                                    onClick={() => handleNavigation(item.path)}
                                    whileTap={{ scale: 0.98 }}
                                    className={`py-3 text-left transition-colors touch-manipulation min-h-[44px] flex items-center justify-between ${isActive ? "text-[#b2833a]" : "hover:text-[#d38436]"
                                        }`}
                                >
                                    <span>{item.label}</span>

                                    {item.showBadge && wishlistCount > 0 && (
                                        <span className="bg-[#b2833a] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                                            {wishlistCount}
                                        </span>
                                    )}
                                </motion.button>
                            );
                        })}

                        {/* Login button (static) */}
                        <motion.button
                            onClick={() => router.push("/login")}
                            whileTap={{ scale: 0.98 }}
                            className="py-3 text-left transition-colors hover:text-[#d38436] touch-manipulation min-h-[44px] flex items-center"
                        >
                            Login
                        </motion.button>

                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default HeaderSidebar;
