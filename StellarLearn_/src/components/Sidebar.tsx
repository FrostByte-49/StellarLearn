import { Home, Target, Bot, CreditCard, Award, Settings } from 'lucide-react';
import { Logo } from './Logo';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Sidebar = ({ currentPage, onNavigate }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'quests', label: 'Missions', icon: Target },
    { id: 'mentor', label: 'AI Mentor', icon: Bot },
    { id: 'flashcards', label: 'Flashcards', icon: CreditCard },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 h-screen backdrop-blur-md bg-white/5 border-r border-white/10 p-6 flex flex-col sticky top-0">
      <div className="flex items-center gap-3 mb-12">
        <Logo size={40} />
        <span className="text-xl font-bold text-white">StellarLearn</span>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300
                ${
                  isActive
                    ? 'bg-gradient-to-r from-[#5A00FF] to-[#00E5FF] text-white shadow-[0_0_30px_rgba(0,229,255,0.4)]'
                    : 'text-[#D3F5FF] hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10">
        <button
          onClick={() => onNavigate('landing')}
          className="w-full text-sm text-[#D3F5FF]/60 hover:text-[#D3F5FF] transition-colors"
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
};
