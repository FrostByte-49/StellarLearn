import { Flame } from 'lucide-react';

interface StreakIndicatorProps {
  days: number;
}

export const StreakIndicator = ({ days }: StreakIndicatorProps) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFB800]/20 to-[#FF00E5]/20 rounded-full border border-[#FFB800]/30 backdrop-blur-sm">
      <div className="relative">
        <Flame className="w-5 h-5 text-[#FFB800]" fill="#FFB800" />
        <div className="absolute inset-0 blur-md bg-[#FFB800] opacity-50" />
      </div>
      <span className="text-sm font-bold text-white">
        {days} Day Streak
      </span>
    </div>
  );
};
