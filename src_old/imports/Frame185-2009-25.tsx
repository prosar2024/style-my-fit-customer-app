import svgPaths from "./svg-vxrm6lqvkp";
import imgGroup581 from "figma:asset/4fae0d16a7b686d4e1972e6f284820bc21530bd2.png";

function Frame1() {
  return (
    <div className="content-stretch flex font-['Poppins:Regular',sans-serif] gap-[46px] items-center justify-center leading-[40px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
      <p className="relative shrink-0">Our Solution</p>
      <p className="relative shrink-0">Shop</p>
      <p className="relative shrink-0">Body Shape Guide</p>
      <p className="relative shrink-0">About</p>
      <p className="relative shrink-0">Blog</p>
      <p className="relative shrink-0">Contact</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[32px] relative shrink-0 w-[35px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 32">
        <g id="Frame 186">
          <path d={svgPaths.p3f949480} fill="var(--fill-0, #B2833A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[39px] items-center justify-center p-[10px] relative shrink-0 w-[96px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#b2833a] text-[14px] text-nowrap whitespace-pre">Login</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[96px]">
      <Frame />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[151px]">
      <Frame6 />
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[174px] py-0 relative w-full">
          <div className="h-[35px] relative shrink-0 w-[150px]" data-name="Group 58 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup581} />
          </div>
          <Frame1 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function IconamoonSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconamoon:search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconamoon:search">
          <path d={svgPaths.p10a22f00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.21" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[6px] h-[43px] items-center px-[30px] py-[5px] relative rounded-[30px] shrink-0 w-[380px]">
      <IconamoonSearch />
      <p className="font-['Poppins:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#acacac] text-[14px] text-nowrap whitespace-pre">Search your item here...</p>
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-[#222222] box-border content-stretch flex flex-col gap-[4px] items-center px-0 py-[11px] relative size-full">
      <Frame3 />
      <Frame4 />
    </div>
  );
}