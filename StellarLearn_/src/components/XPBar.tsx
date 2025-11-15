interface XPBarProps {
  current: number;
  max: number;
  label?: string;
}

export const XPBar = ({ current, max, label = 'Stardust' }: XPBarProps) => {
  const percentage = Math.min((current / max) * 100, 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-[#D3F5FF] font-medium">{label}</span>
        <span className="text-sm text-[#00E5FF] font-bold">{current} / {max}</span>
      </div>
      <div className="relative h-3 bg-white/10 rounded-full overflow-hidden border border-white/20">
        <div
          className="h-full bg-gradient-to-r from-[#00E5FF] to-[#5A00FF] transition-all duration-500 relative"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 20px rgba(0, 229, 255, 0.3)',
          }}
        />
      </div>
    </div>
  );
};
