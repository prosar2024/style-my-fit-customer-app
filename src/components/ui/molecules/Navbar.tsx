"use client";
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { SearchIcon, WishlistIcon } from '@/components/icons/icons';
import LoginModal from '@/components/ui/molecules/LoginModal';
import { menuItems } from '@/data/menuItems';

interface DesktopHeaderProps {
  wishlistCount?: number;
}

const Navbar = ({ wishlistCount = 0 }: DesktopHeaderProps) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <div className="bg-[#222222] box-border content-stretch flex flex-col gap-[4px] items-center px-0 py-[26px] relative w-full">
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex items-center justify-between px-[174px] py-0 relative w-full">
              <button
                onClick={() => { window.location.href = '/'; }}
                className="h-[35px] relative shrink-0 w-[150px] hover:scale-105 transition-transform cursor-pointer"
                data-name="Group 58 1"
                aria-label="Go to homepage"
              >
                <img alt="StyleMyFit Logo" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={"/icons/logo.svg"} />
              </button>
              <div className="content-stretch hidden lg:flex font-['Poppins:Regular',sans-serif] gap-[46px] items-center justify-center leading-[40px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
                {menuItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <button
                      key={item.path}
                      onClick={() => router.push(item.path)}
                      className={`relative shrink-0 transition-colors cursor-pointer ${isActive ? "text-[#b2833a]" : "hover:text-[#b2833a]"
                        }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
              <div className="content-stretch flex gap-[17px] items-center justify-center relative shrink-0 w-[192px]">
                <SearchIcon onClick={() => {}} />
                <WishlistIcon onClick={() => {}} wishlistCount={wishlistCount} />
                <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-[69px]">
                  <button
                    onClick={() => {setIsLoginModalOpen(true)}}
                    className="box-border content-stretch flex gap-[10px] h-[39px] items-center justify-center p-[10px] relative shrink-0 w-[96px] hover:bg-[#b2833a] hover:text-white rounded-[30px] transition-all cursor-pointer group"
                  >
                    <p className="font-['Poppins:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#b2833a] text-[14px] text-nowrap whitespace-pre group-hover:text-white">Login</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </>
  );
}

export default Navbar;