import { Sidebar } from '../components/Sidebar';
import { GlassCard } from '../components/GlassCard';
import { User, Bell, Palette, Shield, Globe } from 'lucide-react';

interface SettingsProps {
  onNavigate: (page: string) => void;
}

export const Settings = ({ onNavigate }: SettingsProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="settings" onNavigate={onNavigate} />

      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
            <p className="text-[#D3F5FF]/60">Customize your learning experience</p>
          </div>

          <div className="space-y-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5A00FF] to-[#00E5FF] flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Profile</h2>
                  <p className="text-sm text-[#D3F5FF]/60">Manage your account information</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#D3F5FF] mb-2">Display Name</label>
                  <input
                    type="text"
                    defaultValue="Explorer"
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#00E5FF] outline-none text-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#D3F5FF] mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="explorer@stellarlearn.space"
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#00E5FF] outline-none text-white transition-all"
                  />
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#FF00E5] flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Notifications</h2>
                  <p className="text-sm text-[#D3F5FF]/60">Configure your alerts and reminders</p>
                </div>
              </div>
              <div className="space-y-4">
                {['Daily Reminders', 'Achievement Unlocked', 'Streak Alerts', 'Mission Updates'].map((option) => (
                  <label key={option} className="flex items-center justify-between cursor-pointer group">
                    <span className="text-white group-hover:text-[#00E5FF] transition-colors">{option}</span>
                    <div className="relative">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-12 h-6 bg-white/10 rounded-full peer-checked:bg-gradient-to-r peer-checked:from-[#5A00FF] peer-checked:to-[#00E5FF] transition-all" />
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6" />
                    </div>
                  </label>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF00E5] to-[#FFB800] flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Appearance</h2>
                  <p className="text-sm text-[#D3F5FF]/60">Customize the visual experience</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#D3F5FF] mb-3">Theme</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Cosmic Dark', 'Nebula Purple', 'Galaxy Blue'].map((theme) => (
                      <button
                        key={theme}
                        className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00E5FF] text-white transition-all"
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF00E5] flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Language & Region</h2>
                  <p className="text-sm text-[#D3F5FF]/60">Set your preferred language</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#D3F5FF] mb-2">Language</label>
                <select className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-[#00E5FF] outline-none text-white transition-all">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FF94] to-[#00E5FF] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Privacy & Security</h2>
                  <p className="text-sm text-[#D3F5FF]/60">Manage your data and security settings</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00E5FF] text-white text-left transition-all">
                  Change Password
                </button>
                <button className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00E5FF] text-white text-left transition-all">
                  Download My Data
                </button>
                <button className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-red-500/30 hover:bg-red-500/10 hover:border-red-500 text-red-400 text-left transition-all">
                  Delete Account
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
    </div>
  );
};
