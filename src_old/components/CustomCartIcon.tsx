import svgPaths from "../imports/svg-neva698web";

export default function CustomCartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className}
      fill="currentColor" 
      preserveAspectRatio="none" 
      viewBox="0 0 47 44"
    >
      <path d={svgPaths.p16ac0800} fill="currentColor" />
    </svg>
  );
}
