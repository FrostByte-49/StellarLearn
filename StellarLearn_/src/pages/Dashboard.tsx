import { Sidebar } from '../components/Sidebar';
import { GlassCard } from '../components/GlassCard';
import { XPBar } from '../components/XPBar';
import { StreakIndicator } from '../components/StreakIndicator';
import { ConstellationNode } from '../components/ConstellationNode';
import { User } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export const Dashboard = ({ onNavigate }: DashboardProps) => {
  const constellations = [
    { id: 1, title: 'Algebra Basics', x: 20, y: 25, completed: true, locked: false },
    { id: 2, title: 'Geometry', x: 35, y: 35, completed: true, locked: false },
    { id: 3, title: 'Trigonometry', x: 50, y: 30, completed: false, locked: false },
    { id: 4, title: 'Calculus I', x: 65, y: 40, completed: false, locked: false },
    { id: 5, title: 'Calculus II', x: 80, y: 35, completed: false, locked: true },
    { id: 6, title: 'Physics', x: 30, y: 60, completed: true, locked: false },
    { id: 7, title: 'Chemistry', x: 50, y: 65, completed: false, locked: false },
    { id: 8, title: 'Biology', x: 70, y: 60, completed: false, locked: true },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="dashboard" onNavigate={onNavigate} />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome back, <span className="text-[#00E5FF]">Explorer</span>
              </h1>
              <p className="text-[#D3F5FF]/60">Continue your journey through the cosmos of knowledge</p>
            </div>

            <div className="flex items-center gap-4">
              <StreakIndicator days={12} />
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5A00FF] to-[#00E5FF] flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <GlassCard className="p-6 lg:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6">Your Cosmic Map</h2>
              <div className="relative h-[500px] bg-gradient-to-br from-[#0A0F1F] to-[#1A0B2E] rounded-3xl overflow-hidden border border-white/10">
                <div className="absolute inset-0">
                  {[...Array(50)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.5 + 0.2,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>

                <svg className="absolute inset-0 w-full h-full">
                  <line x1="20%" y1="25%" x2="35%" y2="35%" stroke="#5A00FF" strokeWidth="2" opacity="0.5" />
                  <line x1="35%" y1="35%" x2="50%" y2="30%" stroke="#5A00FF" strokeWidth="2" opacity="0.5" />
                  <line x1="50%" y1="30%" x2="65%" y2="40%" stroke="#5A00FF" strokeWidth="2" opacity="0.3" />
                  <line x1="65%" y1="40%" x2="80%" y2="35%" stroke="#5A00FF" strokeWidth="2" opacity="0.2" strokeDasharray="5,5" />
                  <line x1="35%" y1="35%" x2="30%" y2="60%" stroke="#00E5FF" strokeWidth="2" opacity="0.5" />
                  <line x1="30%" y1="60%" x2="50%" y2="65%" stroke="#00E5FF" strokeWidth="2" opacity="0.3" />
                  <line x1="50%" y1="65%" x2="70%" y2="60%" stroke="#00E5FF" strokeWidth="2" opacity="0.2" strokeDasharray="5,5" />
                </svg>

                {constellations.map((node) => (
                  <ConstellationNode
                    key={node.id}
                    title={node.title}
                    isCompleted={node.completed}
                    isLocked={node.locked}
                    x={node.x}
                    y={node.y}
                    onClick={() => onNavigate('quests')}
                  />
                ))}
              </div>
            </GlassCard>

            <div className="space-y-6">
              <GlassCard className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Your Progress</h3>
                <div className="space-y-4">
                  <XPBar current={2450} max={5000} />
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-[#D3F5FF]/60">Level</span>
                      <span className="text-2xl font-bold text-white">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#D3F5FF]/60">Rank</span>
                      <span className="text-lg font-bold bg-gradient-to-r from-[#FFB800] to-[#FF00E5] bg-clip-text text-transparent">
                        Stellar Explorer
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#D3F5FF]/60">Topics Completed</span>
                    <span className="text-lg font-bold text-[#00FF94]">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#D3F5FF]/60">Missions Active</span>
                    <span className="text-lg font-bold text-[#00E5FF]">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#D3F5FF]/60">Study Time</span>
                    <span className="text-lg font-bold text-[#FFB800]">47h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#D3F5FF]/60">Achievements</span>
                    <span className="text-lg font-bold text-[#FF00E5]">18</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
