import { Rocket, Sparkles, Target, Users, BookOpen, Star, Globe, Award, Zap, ChevronRight, Play, Brain, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { AstronautAvatar } from '../components/AstronautAvatar';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#0A0F2D] to-black">
      {/* Animated Star Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <Logo size={48} />
          <span className="text-2xl font-bold text-white">StellarLearn</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-white/80 hover:text-white transition-all duration-300 font-medium hover:scale-105 border border-white/20 px-6 py-2 rounded-2xl backdrop-blur-sm"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-white text-black px-6 py-2 rounded-2xl font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-8 pt-16 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full shadow-2xl">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm text-white font-medium">AI-Powered Learning Platform</span>
              </div>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Learn Across{' '}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                the Universe
              </span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-xl">
              Embark on an interstellar educational journey where every lesson is a mission, 
              every topic a new galaxy, and every achievement a star in your cosmic constellation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-white text-black px-8 py-4 rounded-2xl font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>Launch Learning</span>
                <Rocket className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 text-white border border-white/30 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-white/60">Cosmic Learners</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-sm text-white/60">Missions Completed</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-white/60">Stellar Rating</div>
              </div>
            </div>
          </div>

          {/* Monochromatic Hero Visual */}
          <div className="relative h-[700px] hidden lg:block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Massive Monochromatic Ring System */}
              <div className="relative">
                {/* Outer Ring */}
                <div className="w-[600px] h-[600px] rounded-full border border-white/20 animate-spin-slow">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg shadow-white/50" />
                </div>
                
                {/* Middle Ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/30 animate-spin-medium">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50" />
                </div>
                
                {/* Inner Ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/40 animate-spin-fast">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-lg shadow-white/50" />
                </div>

                {/* Central Astronaut */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <AstronautAvatar size={280} animated={true} />
                    {/* White glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
                  </div>
                </div>

                {/* Orbiting Planets */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Tech Planet */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-orbit-slow">
                    <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Science Planet */}
                  <div className="absolute top-1/2 -right-4 -translate-y-1/2 animate-orbit-medium">
                    <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Progress Planet */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 animate-orbit-fast">
                    <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monochromatic Background Orbs */}
            <div className="absolute top-20 left-20 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-32 h-32 rounded-full bg-white/5 blur-2xl" />
            </div>
            <div className="absolute bottom-32 right-32 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-40 h-40 rounded-full bg-white/5 blur-2xl" />
            </div>
            <div className="absolute top-1/3 right-40 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-24 h-24 rounded-full bg-white/10 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-8 py-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-white">StellarLearn?</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Experience the future of education with our cosmic learning ecosystem designed to make 
            every study session an interstellar adventure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Target,
              title: "Gamified Missions",
              description: "Transform learning into epic space missions. Complete challenges, earn cosmic credits, and unlock new knowledge galaxies."
            },
            {
              icon: Sparkles,
              title: "AI Cosmonaut",
              description: "Your personal AI guide adapts to your learning style, providing real-time assistance and personalized study paths."
            },
            {
              icon: Users,
              title: "Cosmic Community",
              description: "Join interstellar study groups, compete in galactic leaderboards, and collaborate with learners across the universe."
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-white/5 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all duration-500 group-hover:scale-105 h-full">
                <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Galaxies Section */}
      <section className="relative z-10 container mx-auto px-8 py-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Explore Learning <span className="text-white">Galaxies</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Journey through specialized knowledge galaxies, each with unique challenges and rewards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { 
              name: 'Tech Nebula', 
              subjects: ['AI Engineering', 'Web Development', 'Data Science'],
              icon: Zap
            },
            { 
              name: 'Science Galaxy', 
              subjects: ['Quantum Physics', 'Bio Sciences', 'Chemistry'],
              icon: Star
            },
            { 
              name: 'Arts Constellation', 
              subjects: ['Digital Design', 'Music Theory', 'Creative Writing'],
              icon: Award
            },
            { 
              name: 'Business Universe', 
              subjects: ['Entrepreneurship', 'Finance', 'Marketing'],
              icon: TrendingUp
            }
          ].map((galaxy, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-white/5 rounded-[28px] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-[28px] p-8 hover:bg-white/10 transition-all duration-500 group-hover:scale-105 h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <galaxy.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{galaxy.name}</h3>
                <ul className="space-y-3">
                  {galaxy.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/70 group-hover:text-white transition-colors">
                      <div className="w-2 h-2 rounded-full bg-white" />
                      <span className="text-sm font-medium">{subject}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button 
                    onClick={() => navigate('/quests')}
                    className="text-sm text-white hover:text-white/80 transition-colors font-medium flex items-center gap-2"
                  >
                    Explore Galaxy
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 container mx-auto px-8 py-20">
        <div className="relative overflow-hidden backdrop-blur-2xl bg-white/5 border border-white/20 rounded-[40px] p-16 text-center">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Launch Your Learning Journey?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of cosmic learners exploring the universe of knowledge. 
              Your educational adventure across the stars begins now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-white text-black px-8 py-4 rounded-2xl font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg"
              >
                <span>Begin Cosmic Journey</span>
                <Rocket className="w-6 h-6" />
              </button>
              <button className="px-8 py-4 text-white border border-white/30 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                Schedule Demo Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 border-t border-white/10 backdrop-blur-2xl bg-white/5">
        <div className="container mx-auto px-8 py-16">
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Logo size={40} />
                <span className="text-2xl font-bold text-white">StellarLearn</span>
              </div>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                Pioneering the future of education through cosmic exploration and AI-powered learning adventures. 
                Join us in making knowledge accessible across the universe.
              </p>
            </div>
            
            {[
              {
                title: "Platform",
                links: ["Features", "Pricing", "Testimonials", "Roadmap"]
              },
              {
                title: "Resources", 
                links: ["Learning Paths", "Documentation", "Blog", "Webinars"]
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Community", "Privacy Policy"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-white font-bold text-lg mb-6">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center">
            <p className="text-white/60 text-base">
              © 2024 StellarLearn. Embark on infinite learning possibilities.
            </p>
            <div className="flex gap-6 mt-4 lg:mt-0">
              {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110 text-base"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};