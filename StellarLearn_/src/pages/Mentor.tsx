import { Sidebar } from '../components/Sidebar';
import { ChatBubble } from '../components/ChatBubble';
import { AstronautAvatar } from '../components/AstronautAvatar';
import { GlassCard } from '../components/GlassCard';
import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface MentorProps {
  onNavigate: (page: string) => void;
}

export const Mentor = ({ onNavigate }: MentorProps) => {
  const [inputValue, setInputValue] = useState('');

  const [messages] = useState([
    {
      id: 1,
      message: "Hello! I'm your AI astronaut mentor. How can I help you explore the universe of knowledge today?",
      isUser: false,
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      message: "Can you help me understand quadratic equations?",
      isUser: true,
      timestamp: '10:32 AM',
    },
    {
      id: 3,
      message: "Of course! Quadratic equations are polynomial equations of degree 2, typically in the form ax² + bx + c = 0. Think of them like the trajectory of a rocket - they create beautiful parabolic curves! Would you like me to generate some practice problems or create flashcards for you?",
      isUser: false,
      timestamp: '10:32 AM',
    },
  ]);

  const quickPrompts = [
    { icon: <Sparkles className="w-4 h-4" />, text: 'Generate quick notes' },
    { icon: <Sparkles className="w-4 h-4" />, text: 'Make 5 flashcards' },
    { icon: <Sparkles className="w-4 h-4" />, text: 'Explain like I\'m 10' },
    { icon: <Sparkles className="w-4 h-4" />, text: 'Quiz me on this topic' },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="mentor" onNavigate={onNavigate} />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-white mb-2">AI Mentor</h1>
            <p className="text-[#D3F5FF]/60">Your personal learning companion</p>
          </div>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
            <div className="lg:col-span-2 flex flex-col min-h-0">
              <GlassCard className="flex-1 flex flex-col p-6 min-h-0">
                <div className="flex-1 overflow-y-auto mb-6 space-y-4 pr-2">
                  {messages.map((msg) => (
                    <ChatBubble
                      key={msg.id}
                      message={msg.message}
                      isUser={msg.isUser}
                      timestamp={msg.timestamp}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {quickPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00E5FF]/50 transition-all duration-300 text-sm text-[#D3F5FF] hover:text-white"
                    >
                      {prompt.icon}
                      {prompt.text}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything..."
                    className="w-full px-6 py-4 pr-14 rounded-full bg-white/5 border-2 border-white/10 focus:border-[#00E5FF] focus:shadow-[0_0_30px_rgba(0,229,255,0.3)] outline-none text-white placeholder-[#D3F5FF]/40 transition-all duration-300"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#5A00FF] to-[#00E5FF] flex items-center justify-center hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all duration-300">
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              </GlassCard>
            </div>

            <div className="space-y-6">
              <GlassCard className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <AstronautAvatar size={120} animated={true} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Nova</h3>
                <p className="text-sm text-[#D3F5FF]/60 mb-4">Your AI Learning Assistant</p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-[#00FF94] rounded-full animate-pulse" />
                  <span className="text-[#00FF94]">Online</span>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Capabilities</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5A00FF] to-[#00E5FF] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Explain Concepts</p>
                      <p className="text-xs text-[#D3F5FF]/60">Break down complex topics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#FF00E5] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Generate Content</p>
                      <p className="text-xs text-[#D3F5FF]/60">Notes, flashcards & quizzes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF00E5] to-[#FFB800] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Personalized Help</p>
                      <p className="text-xs text-[#D3F5FF]/60">Adapts to your learning style</p>
                    </div>
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
