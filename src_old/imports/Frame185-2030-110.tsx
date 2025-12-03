import svgPaths from "./svg-pa3yw4y7q3";
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

function Frame7() {
  return (
    <div className="relative shrink-0 size-[35px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Frame 190">
          <path d={svgPaths.p2bbcd700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[35px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 32">
        <g id="Frame 186">
          <path d={svgPaths.p3f949480} fill="var(--fill-0, white)" id="Vector" />
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
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-[69px]">
      <Frame />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[17px] items-center justify-center relative shrink-0 w-[192px]">
      <Frame7 />
      <Frame5 />
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
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="bg-[#222222] box-border content-stretch flex flex-col gap-[4px] items-center px-0 py-[26px] relative size-full">
      <Frame3 />
    </div>
  );
}