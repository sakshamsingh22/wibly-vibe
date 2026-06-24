export default function Logo({ size = 28, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M5 8L11 24L16 14" 
        stroke="url(#wibly-grad)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M16 14L21 24L27 8" 
        stroke="#f3ece2" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <circle cx="16" cy="14" r="2.5" fill="#ff6a2c" />
      <defs>
        <linearGradient id="wibly-grad" x1="5" y1="8" x2="16" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff6a2c" />
          <stop offset="1" stopColor="#ff8a57" />
        </linearGradient>
      </defs>
    </svg>
  );
}
