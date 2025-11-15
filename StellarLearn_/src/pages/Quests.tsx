import { Sidebar } from '../components/Sidebar';
import { PlanetCard } from '../components/PlanetCard';
import { CosmicButton } from '../components/CosmicButton';
import { BookOpen, Zap, Brain, TrendingUp, Filter } from 'lucide-react';
import { useState } from 'react';

interface QuestsProps {
  onNavigate: (page: string) => void;
}

export const Quests = ({ onNavigate }: QuestsProps) => {
  const [filter, setFilter] = useState<'all' | 'Easy' | 'Medium' | 'Hard'>('all');

  const missions = [
    {
      id: 1,
      title: 'Master Quadratic Equations',
      difficulty: 'Easy' as const,
      xpReward: 500,
      progress: 75,
      planetColor: '#00E5FF',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      id: 2,
      title: 'Explore Trigonometric Functions',
      difficulty: 'Medium' as const,
      xpReward: 750,
      progress: 40,
      planetColor: '#5A00FF',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      id: 3,
      title: 'Conquer Calculus Derivatives',
      difficulty: 'Hard' as const,
      xpReward: 1200,
      progress: 15,
      planetColor: '#FF00E5',
      icon: <Brain className="w-6 h-6" />,
    },
    {
      id: 4,
      title: 'Physics: Laws of Motion',
      difficulty: 'Medium' as const,
      xpReward: 800,
      progress: 60,
      planetColor: '#FFB800',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: 5,
      title: 'Chemistry: Periodic Table',
      difficulty: 'Easy' as const,
      xpReward: 600,
      progress: 90,
      planetColor: '#00FF94',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      id: 6,
      title: 'Advanced Linear Algebra',
      difficulty: 'Hard' as const,
      xpReward: 1500,
      progress: 5,
      planetColor: '#FF00E5',
      icon: <Brain className="w-6 h-6" />,
    },
  ];

  const filteredMissions = filter === 'all'
    ? missions
    : missions.filter(m => m.difficulty === filter);

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="quests" onNavigate={onNavigate} />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Mission Quests</h1>
              <p className="text-[#D3F5FF]/60">Choose your next learning adventure</p>
            </div>
            <CosmicButton variant="primary" size="md">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Daily Challenge
              </span>
            </CosmicButton>
          </div>

          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-[#D3F5FF]/60" />
            <div className="flex gap-2">
              {(['all', 'Easy', 'Medium', 'Hard'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setFilter(level)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${filter === level
                      ? 'bg-gradient-to-r from-[#5A00FF] to-[#00E5FF] text-white shadow-[0_0_20px_rgba(0,229,255,0.4)]'
                      : 'bg-white/5 text-[#D3F5FF]/60 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  {level === 'all' ? 'All Missions' : level}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMissions.map((mission) => (
              <PlanetCard
                key={mission.id}
                {...mission}
                onClick={() => {}}
              />
            ))}
          </div>

          {filteredMissions.length === 0 && (
            <div className="text-center py-20">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#5A00FF]/20 to-[#00E5FF]/20 flex items-center justify-center mx-auto mb-6">
                <Target className="w-16 h-16 text-[#00E5FF]/40" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No missions found</h3>
              <p className="text-[#D3F5FF]/60">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
