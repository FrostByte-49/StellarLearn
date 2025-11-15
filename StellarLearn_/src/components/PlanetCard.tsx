import { ReactNode } from 'react';
import { GlassCard } from './GlassCard';

interface PlanetCardProps {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  xpReward: number;
  progress: number;
  planetColor: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export const PlanetCard = ({
  title,
  difficulty,
  xpReward,
  progress,
  planetColor,
  icon,
  onClick
}: PlanetCardProps) => {
  const difficultyColors = {
    Easy: '#00FF94',
    Medium: '#FFB800',
    Hard: '#FF00E5',
  };

  return (
    <GlassCard className="p-6 cursor-pointer group" onClick={onClick}>
      <div className="flex items-start gap-4">
        <div className="relative">
          <div
            className="w-16 h-16 rounded-full animate-spin-slow"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${planetColor}, #1A0B2E)`,
              boxShadow: `0 0 30px ${planetColor}80`,
            }}
          >
            {icon && (
              <div className="absolute inset-0 flex items-center justify-center text-white">
                {icon}
              </div>
            )}
          </div>
          <div
            className="absolute -inset-2 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
            style={{
              background: `radial-gradient(circle, ${planetColor}40, transparent)`,
              filter: 'blur(10px)',
            }}
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00E5FF] transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-xs font-semibold px-2 py-1 rounded-full"
              style={{
                background: `${difficultyColors[difficulty]}20`,
                color: difficultyColors[difficulty],
                border: `1px solid ${difficultyColors[difficulty]}40`,
              }}
            >
              {difficulty}
            </span>
            <span className="text-sm text-[#FFB800] font-medium">
              +{xpReward} Stardust
            </span>
          </div>

          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00E5FF] to-[#5A00FF] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-[#D3F5FF]/60 mt-1 block">
            {progress}% Complete
          </span>
        </div>
      </div>
    </GlassCard>
  );
};
