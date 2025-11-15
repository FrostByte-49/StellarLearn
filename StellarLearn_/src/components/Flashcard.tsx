import { useState } from 'react';

interface FlashcardProps {
  question: string;
  answer: string;
}

export const Flashcard = ({ question, answer }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-64 cursor-pointer group perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-500 preserve-3d
          ${isFlipped ? 'rotate-y-180' : ''}
        `}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
        }}
      >
        <div
          className="absolute w-full h-full backface-hidden backdrop-blur-md bg-gradient-to-br from-[#5A00FF]/20 to-[#00E5FF]/20 border-2 border-white/20 rounded-[28px] p-8 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(90,0,255,0.3)] group-hover:shadow-[0_0_60px_rgba(0,229,255,0.5)] transition-all"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-sm font-semibold text-[#00E5FF] mb-4 uppercase tracking-wider">Question</div>
          <p className="text-xl font-bold text-white text-center leading-relaxed">{question}</p>
          <div className="absolute bottom-6 text-xs text-[#D3F5FF]/40">Click to flip</div>
        </div>

        <div
          className="absolute w-full h-full backface-hidden backdrop-blur-md bg-gradient-to-br from-[#00E5FF]/20 to-[#FF00E5]/20 border-2 border-white/20 rounded-[28px] p-8 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,229,255,0.3)] group-hover:shadow-[0_0_60px_rgba(255,0,229,0.5)] transition-all"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="text-sm font-semibold text-[#FF00E5] mb-4 uppercase tracking-wider">Answer</div>
          <p className="text-lg text-white text-center leading-relaxed">{answer}</p>
          <div className="absolute bottom-6 text-xs text-[#D3F5FF]/40">Click to flip</div>
        </div>
      </div>
    </div>
  );
};
