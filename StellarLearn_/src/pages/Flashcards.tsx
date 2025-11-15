import { Sidebar } from '../components/Sidebar';
import { Flashcard } from '../components/Flashcard';
import { CosmicButton } from '../components/CosmicButton';
import { GlassCard } from '../components/GlassCard';
import { Plus, Sparkles, Zap } from 'lucide-react';

interface FlashcardsProps {
  onNavigate: (page: string) => void;
}

export const Flashcards = ({ onNavigate }: FlashcardsProps) => {
  const flashcards = [
    {
      id: 1,
      question: 'What is the quadratic formula?',
      answer: 'x = (-b ± √(b² - 4ac)) / (2a)',
    },
    {
      id: 2,
      question: 'Define the derivative of a function',
      answer: 'The derivative represents the rate of change of a function at any point',
    },
    {
      id: 3,
      question: 'What is Newton\'s Second Law?',
      answer: 'Force equals mass times acceleration (F = ma)',
    },
    {
      id: 4,
      question: 'What is the Pythagorean theorem?',
      answer: 'a² + b² = c², where c is the hypotenuse of a right triangle',
    },
    {
      id: 5,
      question: 'Define photosynthesis',
      answer: 'The process by which plants convert light energy into chemical energy',
    },
    {
      id: 6,
      question: 'What is the speed of light?',
      answer: 'Approximately 299,792,458 meters per second in a vacuum',
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPage="flashcards" onNavigate={onNavigate} />

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Flashcards</h1>
              <p className="text-[#D3F5FF]/60">Master concepts through active recall</p>
            </div>
            <div className="flex gap-3">
              <CosmicButton variant="ghost" size="md">
                <span className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Create Set
                </span>
              </CosmicButton>
              <CosmicButton variant="secondary" size="md">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Generate
                </span>
              </CosmicButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashcards.map((card) => (
              <Flashcard key={card.id} question={card.question} answer={card.answer} />
            ))}
          </div>

          <GlassCard className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF00E5] flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Practice Mode</h3>
              <p className="text-[#D3F5FF]/70 mb-6">
                Test your knowledge with our spaced repetition algorithm designed to maximize retention
              </p>
              <CosmicButton size="lg">
                Start Practice Session
              </CosmicButton>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
};
