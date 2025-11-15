import { Home, Target, Bot, CreditCard, Award, Settings, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useState, useEffect } from 'react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Sidebar = ({ currentPage, onNavigate }: SidebarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileOpen(false); // Close sidebar when switching to desktop
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'quests', label: 'Missions', icon: Target },
    { id: 'mentor', label: 'AI Mentor', icon: Bot },
    { id: 'flashcards', label: 'Flashcards', icon: CreditCard },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    if (isMobile) {
      setIsMobileOpen(false);
    }
  };

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <span className="text-xl font-bold text-white">StellarLearn</span>
        </div>
        {isMobile && (
          <button
            onClick={() => setIsMobileOpen(false)}
            className="p-2 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group
                ${
                  isActive
                    ? 'bg-white text-black shadow-lg shadow-white/20'
                    : 'text-white/70 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20'
                }
              `}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-white/70 group-hover:text-white'}`} />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/20">
        <div className="flex items-center gap-3 mb-4 p-3 rounded-2xl bg-white/5 border border-white/10">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">Cosmic Learner</p>
            <p className="text-white/60 text-xs">Level 15 Explorer</p>
          </div>
        </div>
        <button
          onClick={() => handleNavigation('landing')}
          className="w-full text-sm text-white/60 hover:text-white transition-colors py-2 border border-white/10 hover:border-white/20 rounded-2xl backdrop-blur-sm"
        >
          Sign Out
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Header - Fixed at top with logo left, menu right */}
      {isMobile && (
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            {/* Logo on left */}
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <span className="text-lg font-bold text-white">StellarLearn</span>
            </div>
            
            {/* Hamburger menu on right */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-white/60 hover:text-white transition-colors"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      )}

      {/* Desktop Sidebar - Only show on desktop */}
      {!isMobile && (
        <aside className="w-64 h-screen backdrop-blur-md bg-black/80 border-r border-white/10 p-6 flex flex-col sticky top-0">
          {sidebarContent}
        </aside>
      )}

      {/* Mobile Sidebar Overlay - Only show when open on mobile */}
      {isMobile && isMobileOpen && (
        <>
          {/* Backdrop - Click anywhere to close */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
          
          {/* Mobile Sidebar */}
          <aside className="fixed left-0 top-0 h-full w-80 backdrop-blur-xl bg-black/95 border-r border-white/10 p-6 flex flex-col z-50 md:hidden">
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
};