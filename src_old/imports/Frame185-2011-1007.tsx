import svgPaths from "./svg-9o6tkv9f5u";
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

function Frame() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[6px] h-[35px] items-center px-[30px] py-[5px] relative rounded-[30px] shrink-0 w-[254px]">
      <IconamoonSearch />
      <p className="font-['Poppins:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#acacac] text-[14px] text-nowrap whitespace-pre">Search your item here...</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-px grow items-center min-h-px min-w-px relative shrink-0">
      <div className="h-[35px] relative shrink-0 w-[150px]" data-name="Group 58 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup581} />
      </div>
      <Frame />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#222222] relative size-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[20px] py-[6px] relative size-full">
          <Group />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}