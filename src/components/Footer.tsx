function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-nowrap text-white top-[-1px] whitespace-pre">
        <span>{`About `}</span>
        <span className="font-['Poppins:Bold',sans-serif]">STYLEMYFIT</span>
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-2px] w-[348px]">Personalized fashion recommendations based on your unique body shape.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[176px] items-start max-w-[360px] min-h-px min-w-[330px] relative shrink-0" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-nowrap text-white top-[-1px] whitespace-pre">Customer Service</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[67.266px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre hover:text-white transition-colors cursor-pointer">Contact Us</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[123.234px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre hover:text-white transition-colors cursor-pointer">{`Shipping & Delivery`}</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[130.016px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre hover:text-white transition-colors cursor-pointer">{`Returns & Exchanges`}</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[64.813px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre hover:text-white transition-colors cursor-pointer">Size Guide</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[31.547px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre hover:text-white transition-colors cursor-pointer">FAQs</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[176px] items-start max-w-[360px] min-h-px min-w-[330px] relative shrink-0" data-name="Container">
      <Heading1 />
      <List />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-nowrap text-white top-[-1px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[57.531px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre hover:text-white transition-colors cursor-pointer">About Us</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[46.109px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre hover:text-white transition-colors cursor-pointer">Careers</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[82.563px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-0 top-0 w-[121.672px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre hover:text-white transition-colors cursor-pointer">{`Terms & Conditions`}</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[176px] items-start max-w-[360px] min-h-px min-w-[330px] relative shrink-0" data-name="Container">
      <Heading2 />
      <List1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-nowrap text-white top-[-1px] whitespace-pre">Follow Us</p>
    </div>
  );
}

function Icon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <g>
        <path d="M14 7C15.1046 7 16 6.10457 16 5C16 3.89543 15.1046 3 14 3C12.8954 3 12 3.89543 12 5C12 6.10457 12.8954 7 14 7Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M5.5 17C7.433 17 9 15.433 9 13.5C9 11.567 7.433 10 5.5 10C3.567 10 2 11.567 2 13.5C2 15.433 3.567 17 5.5 17Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M14 14C15.933 14 17.5 12.433 17.5 10.5C17.5 8.567 15.933 7 14 7C12.067 7 10.5 8.567 10.5 10.5C10.5 12.433 12.067 14 14 14Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
    </svg>
  );
}

function Link9() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[36px] hover:bg-[rgba(255,255,255,0.2)] transition-colors cursor-pointer" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <div className="h-[20px] overflow-clip relative shrink-0 w-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path d="M11 5H13C13.5304 5 14.0391 5.21071 14.4142 5.58579C14.7893 5.96086 15 6.46957 15 7V17C15 17.5304 14.7893 18.0391 14.4142 18.4142C14.0391 18.7893 13.5304 19 13 19H7C6.46957 19 5.96086 18.7893 5.58579 18.4142C5.21071 18.0391 5 17.5304 5 17V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function Link10() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[36px] hover:bg-[rgba(255,255,255,0.2)] transition-colors cursor-pointer" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <div className="h-[20px] overflow-clip relative shrink-0 w-full">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path d="M17 4.5C16.3672 4.82812 15.6719 5.0625 14.9375 5.1875C15.6875 4.73438 16.2656 4.01562 16.5391 3.15625C15.8438 3.57812 15.0703 3.88281 14.2422 4.0625C13.6016 3.34375 12.6719 2.90625 11.6328 2.90625C9.63281 2.90625 8.01562 4.52344 8.01562 6.52344C8.01562 6.84375 8.05469 7.15625 8.125 7.45312C5.20312 7.28906 2.60938 5.85156 0.890625 3.67188C0.546875 4.10938 0.347656 4.64062 0.347656 5.21875C0.347656 6.30469 0.898438 7.26562 1.73438 7.82031C1.22656 7.80469 0.746094 7.66406 0.328125 7.42969V7.46875C0.328125 9.23438 1.5625 10.7109 3.20312 11.0859C2.875 11.1758 2.52344 11.2227 2.15625 11.2227C1.89844 11.2227 1.64844 11.1992 1.40625 11.1523C1.91406 12.6016 3.23438 13.6641 4.80469 13.6953C3.57812 14.6797 2.01562 15.2734 0.320312 15.2734C0 15.2734 -0.320312 15.2578 -0.632812 15.2188C0.945312 16.2578 2.84375 16.875 4.89844 16.875C11.625 16.875 15.3047 11.2812 15.3047 6.99219C15.3047 6.8125 15.3008 6.63281 15.293 6.45312C16 5.94531 16.6172 5.30469 17.1094 4.57031L17 4.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function Link11() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[3.35544e+07px] shrink-0 size-[36px] hover:bg-[rgba(255,255,255,0.2)] transition-colors cursor-pointer" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <div className="h-[20px] overflow-clip relative shrink-0 w-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-[176px] items-start max-w-[360px] min-h-px min-w-[330px] relative shrink-0" data-name="Container">
      <Heading3 />
      <Container3 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-start flex flex-wrap gap-[32px] items-start relative shrink-0 w-full">
      <Container />
      <Container1 />
      <Container2 />
      <Container4 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[237.203px]" data-name="Paragraph">
      <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre">© 2025 BelleMode. All rights reserved.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre">🇬🇧 United Kingdom</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[3.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[3.359px]">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre">|</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[36.859px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px] text-nowrap whitespace-pre">GBP £</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-[191.5px]" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-center flex flex-wrap gap-[32px] items-center justify-between relative shrink-0 w-full">
      <Paragraph1 />
      <Container5 />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#222222] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start pb-[47px] pt-[80px] px-4 md:px-[90px] relative w-full">
          <Frame85 />
          <Frame86 />
        </div>
      </div>
    </div>
  );
}
