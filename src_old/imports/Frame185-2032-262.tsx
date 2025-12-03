import svgPaths from "./svg-701nqg7p4d";
import imgGroup581 from "figma:asset/4fae0d16a7b686d4e1972e6f284820bc21530bd2.png";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-white h-[5px] ml-0 mt-0 rounded-[2.5px] w-[30px]" />
      <div className="[grid-area:1_/_1] bg-white h-[5px] ml-0 mt-[8px] rounded-[2.5px] w-[30px]" />
      <div className="[grid-area:1_/_1] bg-white h-[5px] ml-0 mt-[16px] rounded-[2.5px] w-[30px]" />
    </div>
  );
}

function Frame3() {
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

function Frame2() {
  return (
    <div className="content-stretch flex gap-[17px] items-center justify-center relative shrink-0 w-[40px]">
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[66px] py-0 relative w-full">
          <Group />
          <div className="h-[35px] relative shrink-0 w-[150px]" data-name="Group 58 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup581} />
          </div>
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#222222] box-border content-stretch flex flex-col gap-[10px] items-center px-0 py-[26px] relative size-full">
      <Frame />
    </div>
  );
}