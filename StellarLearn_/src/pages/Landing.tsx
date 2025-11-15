import { Rocket, Sparkles, Target, Users } from 'lucide-react';
import { CosmicButton } from '../components/CosmicButton';
import { Logo } from '../components/Logo';
import { AstronautAvatar } from '../components/AstronautAvatar';

interface LandingProps {
  onNavigate: (page: string) => void;
}

export const Landing = ({ onNavigate }: LandingProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <Logo size={48} />
          <span className="text-2xl font-bold text-white">StellarLearn</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="text-[#D3F5FF] hover:text-white transition-colors font-medium"
          >
            Sign In
          </button>
          <CosmicButton onClick={() => onNavigate('dashboard')} size="sm">
            Get Started
          </CosmicButton>
        </div>
      </nav>

      <section className="relative z-10 container mx-auto px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
                <Sparkles className="w-4 h-4 text-[#FFB800]" />
                <span className="text-sm text-[#D3F5FF]">AI-Powered Learning Platform</span>
              </div>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Learn Across the{' '}
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#FF00E5] bg-clip-text text-transparent">
                Universe
              </span>
            </h1>

            <p className="text-xl text-[#D3F5FF]/80 leading-relaxed max-w-xl">
              A cosmic journey that turns studying into an interstellar adventure.
              Explore galaxies of knowledge, complete missions, and unlock your potential.
            </p>

            <div className="flex flex-wrap gap-4">
              <CosmicButton onClick={() => onNavigate('dashboard')} size="lg">
                <span className="flex items-center gap-2">
                  Start Learning
                  <Rocket className="w-5 h-5" />
                </span>
              </CosmicButton>
              <CosmicButton variant="ghost" size="lg">
                Try Demo
              </CosmicButton>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-[#D3F5FF]/60">Active Learners</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-sm text-[#D3F5FF]/60">Missions Completed</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-[#D3F5FF]/60">Rating</div>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <AstronautAvatar size={300} animated={true} />
            </div>

            <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#5A00FF] to-[#00E5FF] opacity-60 blur-xl" />
            </div>
            <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FF00E5] to-[#FFB800] opacity-60 blur-xl" />
            </div>
            <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#5A00FF] opacity-80 blur-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-[#00E5FF]">StellarLearn?</span>
          </h2>
          <p className="text-lg text-[#D3F5FF]/60 max-w-2xl mx-auto">
            Experience learning like never before with our gamified, AI-powered platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[28px] p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5A00FF] to-[#00E5FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Gamified Missions</h3>
            <p className="text-[#D3F5FF]/70 leading-relaxed">
              Turn your study sessions into exciting space missions. Earn Stardust, unlock achievements, and explore new galaxies of knowledge.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[28px] p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#FF00E5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Mentor</h3>
            <p className="text-[#D3F5FF]/70 leading-relaxed">
              Your personal AI astronaut assistant helps you understand complex topics, generates flashcards, and adapts to your learning style.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[28px] p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF00E5] to-[#FFB800] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Track Progress</h3>
            <p className="text-[#D3F5FF]/70 leading-relaxed">
              Visualize your learning journey with cosmic progress maps, maintain streaks, and compete on global leaderboards.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 container mx-auto px-8 py-20">
        <div className="backdrop-blur-md bg-gradient-to-r from-[#5A00FF]/20 to-[#00E5FF]/20 border border-white/20 rounded-[28px] p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-[#D3F5FF]/80 mb-8 max-w-2xl mx-auto">
            Join thousands of learners exploring the universe of knowledge. Your adventure begins now.
          </p>
          <CosmicButton onClick={() => onNavigate('dashboard')} size="lg">
            Launch Into Learning
          </CosmicButton>
        </div>
      </section>

      <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#D3F5FF] rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-[#00E5FF] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-[#FF00E5] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-[#FFB800] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};
