export const AstronautAvatar = ({ size = 80, animated = true }: { size?: number; animated?: boolean }) => {
  return (
    <div
      className={`relative ${animated ? 'animate-float' : ''}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        className="drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]"
      >
        <circle cx="40" cy="35" r="25" fill="url(#helmetGradient)" opacity="0.9" />
        <circle cx="40" cy="35" r="20" fill="#0A0F1F" opacity="0.3" />
        <ellipse cx="33" cy="32" rx="4" ry="5" fill="#00E5FF" className="animate-pulse" />
        <ellipse cx="47" cy="32" rx="4" ry="5" fill="#00E5FF" className="animate-pulse" />
        <path
          d="M 35 40 Q 40 43 45 40"
          stroke="#00E5FF"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="30" y="55" width="20" height="15" rx="3" fill="url(#bodyGradient)" />
        <rect x="25" y="57" width="8" height="12" rx="2" fill="url(#armGradient)" />
        <rect x="47" y="57" width="8" height="12" rx="2" fill="url(#armGradient)" />
        <circle cx="40" cy="28" r="3" fill="#FFB800" opacity="0.8" />
        <defs>
          <linearGradient id="helmetGradient" x1="15" y1="10" x2="65" y2="60">
            <stop offset="0%" stopColor="#D3F5FF" />
            <stop offset="100%" stopColor="#00E5FF" />
          </linearGradient>
          <linearGradient id="bodyGradient" x1="30" y1="55" x2="50" y2="70">
            <stop offset="0%" stopColor="#5A00FF" />
            <stop offset="100%" stopColor="#3D1E6D" />
          </linearGradient>
          <linearGradient id="armGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5A00FF" />
            <stop offset="100%" stopColor="#3D1E6D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
