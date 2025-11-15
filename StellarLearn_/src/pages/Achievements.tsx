import { Sidebar } from '../components/Sidebar';
import { AchievementBadge } from '../components/AchievementBadge';
import { GlassCard } from '../components/GlassCard';
import { Trophy, Zap, Brain, Flame, Star, Target, Award } from 'lucide-react';

interface AchievementsProps {
  onNavigate: (page: string) => void;
}

export const Achievements = ({ onNavigate }: AchievementsProps) => {
  const categories = [
    {
      name: 'Knowledge Galaxy',
      achievements: [
        {
          id: 1,
          title: 'First Steps',
          description: 'Complete your first learning mission',
          icon: <Star />,
          isUnlocked: true,
          rarity: 'common' as const,
          unlockedDate: '2 weeks ago',
        },
        {
          id: 2,
          title: 'Knowledge Seeker',
          description: 'Complete 10 missions',
          icon: <Target />,
          isUnlocked: true,
          rarity: 'rare' as const,
          unlockedDate: '1 week ago',
        },
        {
          id: 3,
          title: 'Master Explorer',
          description: 'Complete 50 missions',
          icon: <Trophy />,
          isUnlocked: false,
          rarity: 'epic' as const,
        },
      ],
    },
    {
      name: 'Math Nebula',
      achievements: [
        {
          id: 4,
          title: 'Algebra Ace',
          description: 'Master all algebra topics',
          icon: <Brain />,
          isUnlocked: true,
          rarity: 'rare' as const,
          unlockedDate: '3 days ago',
        },
        {
          id: 5,
          title: 'Calculus Champion',
          description: 'Complete advanced calculus',
          icon: <Zap />,
          isUnlocked: false,
          rarity: 'epic' as const,
        },
        {
          id: 6,
          title: 'Math Mastermind',
          description: 'Achieve perfection in all math topics',
          icon: <Award />,
          isUnlocked: false,
          rarity: 'legendary' as const,
        },
      ],
    },
    {
      name: 'Science Meteor Belt',
      achievements: [
        {
          id: 7,
          title: 'Physics Pioneer',
          description: 'Complete all physics missions',
          icon: <Zap />,
          isUnlocked: true,
          rarity: 'rare' as const,
          unlockedDate: '5 days ago',
        },
        {
          id: 8,
          title: 'Chemistry Master',
          description: 'Master the periodic table',
          icon: <Star />,
          isUnlocked: false,
          rarity: 'epic' as const,
        },
        {
          id: 9,
          title: 'Science Sage',
          description: 'Achieve mastery in all sciences',
          icon: <Trophy />,
          isUnlocked: false,
          rarity: 'legendary' as const,
        },
      ],
    },
    {
      name: 'Dedication Constellation',
      achievements: [
        {
          id: 10,
          title: 'Week Warrior',
          description: 'Maintain a 7-day streak',
          icon: <Flame />,
          isUnlocked: true,
          rarity: 'common' as const,
          unlockedDate: '1 week ago',
        },
        {
          id: 11,
          title: 'Month Master',
          description: 'Maintain a 30-day streak',
          icon: <Flame />,
          isUnlocked: false,
          rarity: 'rare' as const,
        },
        {
          id: 12,
          title: 'Eternal Flame',
          description: 'Maintain a 100-day streak',
          icon: <Flame />,
          isUnlocked: false,
          rarity: 'legendary' as const,
        },
      ],
    },
  ];

  const totalAchievements = categories.reduce((sum, cat) => sum + cat.achievements.length, 0);
  const unlockedAchievements = categories.reduce(
    (sum, cat) => sum + cat.achievements.filter(a => a.isUnlocked).length,
    0
  );
  const percentage = Math.round((unlockedAchievements / totalAchievements) * 100);

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="achievements" onNavigate={onNavigate} />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Achievements</h1>
            <p className="text-[#D3F5FF]/60">Track your cosmic accomplishments</p>
          </div>

          <GlassCard className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Overall Progress</h2>
                <p className="text-[#D3F5FF]/60">
                  {unlockedAchievements} of {totalAchievements} achievements unlocked
                </p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#00E5FF] to-[#FF00E5] bg-clip-text text-transparent">
                  {percentage}%
                </div>
              </div>
            </div>

            <div className="relative h-4 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00E5FF] via-[#5A00FF] to-[#FF00E5] transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </div>
            </div>
          </GlassCard>

          {categories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#5A00FF]" />
                {category.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.achievements.map((achievement) => (
                  <AchievementBadge key={achievement.id} {...achievement} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
