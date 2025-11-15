interface ConstellationNodeProps {
  title: string;
  isCompleted: boolean;
  isLocked: boolean;
  x: number;
  y: number;
  onClick?: () => void;
}

export const ConstellationNode = ({
  title,
  isCompleted,
  isLocked,
  x,
  y,
  onClick
}: ConstellationNodeProps) => {
  return (
    <div
      className="absolute cursor-pointer group"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      onClick={!isLocked ? onClick : undefined}
    >
      <div className="relative">
        <div
          className={`
            w-16 h-16 rounded-full transition-all duration-300
            ${isLocked ? 'bg-white/10 border-2 border-white/20' : ''}
            ${!isLocked && !isCompleted ? 'bg-gradient-to-br from-[#5A00FF] to-[#00E5FF] animate-pulse' : ''}
            ${isCompleted ? 'bg-gradient-to-br from-[#00FF94] to-[#00E5FF]' : ''}
          `}
          style={{
            boxShadow: !isLocked ? '0 0 30px rgba(0, 229, 255, 0.6)' : 'none',
          }}
        />

        {isCompleted && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13l4 4L19 7"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}

        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="7" y="11" width="10" height="8" rx="1" stroke="white" strokeWidth="2" />
              <path d="M9 11V8a3 3 0 0 1 6 0v3" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        )}

        <div
          className={`
            absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity
            ${!isLocked ? 'bg-gradient-to-r from-[#5A00FF]/20 to-[#00E5FF]/20' : ''}
          `}
          style={{ filter: 'blur(12px)' }}
        />
      </div>

      <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <span
          className={`text-sm font-medium ${
            isLocked ? 'text-white/40' : 'text-white'
          } drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]`}
        >
          {title}
        </span>
      </div>
    </div>
  );
};
