export const AstronautAvatar = ({ size = 80, animated = true }: { size?: number; animated?: boolean }) => {
  return (
    <div
      className={`relative ${animated ? 'animate-float' : ''}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        className="drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]"
      >
        {/* Helmet Glass Reflection */}
        <defs>
          <linearGradient id="helmetGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0A1126" />
            <stop offset="50%" stopColor="#1A237E" />
            <stop offset="100%" stopColor="#283593" />
          </linearGradient>
          
          <linearGradient id="helmetShine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.1" />
          </linearGradient>
          
          <linearGradient id="suitGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A237E" />
            <stop offset="100%" stopColor="#0A1126" />
          </linearGradient>
          
          <linearGradient id="visorGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.1" />
          </linearGradient>
          
          <radialGradient id="helmetGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Helmet Base */}
        <circle cx="60" cy="50" r="35" fill="url(#helmetGradient)" stroke="#00E5FF" strokeWidth="1" opacity="0.9" />
        
        {/* Helmet Glow Effect */}
        <circle cx="60" cy="50" r="36" fill="url(#helmetGlow)" opacity="0.6" />
        
        {/* Visor Area */}
        <ellipse cx="60" cy="50" rx="25" ry="20" fill="url(#visorGradient)" opacity="0.7" />
        
        {/* Helmet Shine */}
        <path d="M 35 30 Q 60 15 85 30" stroke="url(#helmetShine)" strokeWidth="8" strokeLinecap="round" fill="none" />
        
        {/* Face Details */}
        <g className={animated ? 'animate-pulse' : ''}>
          {/* Eyes */}
          <ellipse cx="50" cy="45" rx="3" ry="4" fill="#00E5FF">
            {animated && (
              <animate attributeName="ry" values="4;3;4" dur="2s" repeatCount="indefinite" />
            )}
          </ellipse>
          <ellipse cx="70" cy="45" rx="3" ry="4" fill="#00E5FF">
            {animated && (
              <animate attributeName="ry" values="4;3;4" dur="2s" repeatCount="indefinite" />
            )}
          </ellipse>
          
          {/* Eye Glow */}
          <ellipse cx="50" cy="45" rx="3" ry="4" fill="#00E5FF" opacity="0.3">
            {animated && (
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.5s" repeatCount="indefinite" />
            )}
          </ellipse>
          <ellipse cx="70" cy="45" rx="3" ry="4" fill="#00E5FF" opacity="0.3">
            {animated && (
              <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.5s" repeatCount="indefinite" />
            )}
          </ellipse>
        </g>
        
        {/* Smile */}
        <path
          d="M 48 58 Q 60 65 72 58"
          stroke="#00E5FF"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        >
          {animated && (
            <animate attributeName="d" values="M 48 58 Q 60 65 72 58; M 48 59 Q 60 63 72 59; M 48 58 Q 60 65 72 58" 
                     dur="3s" repeatCount="indefinite" />
          )}
        </path>

        {/* Body */}
        <rect x="45" y="85" width="30" height="25" rx="6" fill="url(#suitGradient)" stroke="#00E5FF" strokeWidth="1" opacity="0.9" />
        
        {/* Arms */}
        <rect x="30" y="85" width="15" height="8" rx="3" fill="url(#suitGradient)" stroke="#00E5FF" strokeWidth="1" />
        <rect x="75" y="85" width="15" height="8" rx="3" fill="url(#suitGradient)" stroke="#00E5FF" strokeWidth="1" />
        
        {/* Backpack */}
        <rect x="40" y="75" width="40" height="12" rx="4" fill="url(#suitGradient)" stroke="#00E5FF" strokeWidth="1" opacity="0.9" />
        <rect x="45" y="70" width="30" height="8" rx="2" fill="url(#suitGradient)" stroke="#00E5FF" strokeWidth="1" opacity="0.8" />
        
        {/* Antenna */}
        <line x1="60" y1="15" x2="60" y2="25" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="60" cy="14" r="2" fill="#FFB800">
          {animated && (
            <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite" />
          )}
        </circle>
        
        {/* Shoulder Details */}
        <circle cx="45" cy="80" r="3" fill="#00E5FF" opacity="0.6">
          {animated && (
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="75" cy="80" r="3" fill="#00E5FF" opacity="0.6">
          {animated && (
            <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
          )}
        </circle>
        
        {/* Chest Control Panel */}
        <rect x="52" y="90" width="16" height="8" rx="2" fill="#00E5FF" opacity="0.2">
          {animated && (
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite" />
          )}
        </rect>
        <circle cx="56" cy="94" r="1" fill="#00E5FF" opacity="0.8">
          {animated && (
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="60" cy="94" r="1" fill="#FFB800" opacity="0.8">
          {animated && (
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.8s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="64" cy="94" r="1" fill="#00E5FF" opacity="0.8">
          {animated && (
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
          )}
        </circle>

        {/* Floating Particles */}
        {animated && (
          <>
            <circle cx="20" cy="40" r="1" fill="#00E5FF" opacity="0.6">
              <animate attributeName="cy" values="40;35;40" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="60" r="1" fill="#FFB800" opacity="0.6">
              <animate attributeName="cy" values="60;55;60" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="85" cy="30" r="1" fill="#00E5FF" opacity="0.6">
              <animate attributeName="cy" values="30;25;30" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0.9;0.6" dur="4s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
};