import { ReactNode } from 'react';
import { Lock } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: ReactNode;
  isUnlocked: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedDate?: string;
}

export const AchievementBadge = ({
  title,
  description,
  icon,
  isUnlocked,
  rarity,
  unlockedDate,
}: AchievementBadgeProps) => {
  const rarityColors = {
    common: { from: '#00E5FF', to: '#5A00FF' },
    rare: { from: '#00FF94', to: '#00E5FF' },
    epic: { from: '#FF00E5', to: '#FFB800' },
    legendary: { from: '#FFB800', to: '#FF00E5' },
  };

  const colors = rarityColors[rarity];

  return (
    <div
      className={`
        relative backdrop-blur-md rounded-[28px] p-6 border-2 transition-all duration-300 cursor-pointer group
        ${isUnlocked
          ? 'bg-white/10 border-white/20 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,229,255,0.4)]'
          : 'bg-white/5 border-white/10 opacity-50'
        }
      `}
    >
      {isUnlocked && (
        <div
          className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-20 transition-opacity"
          style={{
            background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
            filter: 'blur(20px)',
          }}
        />
      )}

      <div className="relative flex flex-col items-center text-center">
        <div
          className={`
            relative w-24 h-24 rounded-full flex items-center justify-center mb-4
            ${isUnlocked ? 'animate-float' : ''}
          `}
          style={{
            background: isUnlocked
              ? `linear-gradient(135deg, ${colors.from}, ${colors.to})`
              : 'rgba(255, 255, 255, 0.1)',
            boxShadow: isUnlocked ? `0 0 40px ${colors.from}60` : 'none',
          }}
        >
          {isUnlocked ? (
            <div className="text-white text-3xl">{icon}</div>
          ) : (
            <Lock className="w-8 h-8 text-white/40" />
          )}
        </div>

        <div
          className={`
            inline-block px-3 py-1 rounded-full text-xs font-bold mb-3
            ${isUnlocked ? 'text-white' : 'text-white/40'}
          `}
          style={{
            background: isUnlocked
              ? `linear-gradient(135deg, ${colors.from}40, ${colors.to}40)`
              : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${isUnlocked ? colors.from + '60' : 'rgba(255, 255, 255, 0.1)'}`,
          }}
        >
          {rarity.toUpperCase()}
        </div>

        <h3 className={`text-lg font-bold mb-2 ${isUnlocked ? 'text-white' : 'text-white/40'}`}>
          {title}
        </h3>

        <p className={`text-sm leading-relaxed mb-3 ${isUnlocked ? 'text-[#D3F5FF]/70' : 'text-white/30'}`}>
          {description}
        </p>

        {isUnlocked && unlockedDate && (
          <p className="text-xs text-[#D3F5FF]/40">Unlocked {unlockedDate}</p>
        )}
      </div>
    </div>
  );
};
