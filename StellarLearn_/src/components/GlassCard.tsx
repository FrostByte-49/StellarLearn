import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

export const GlassCard = ({ children, className = '', glow = false, hover = true }: GlassCardProps) => {
  return (
    <div
      className={`
        backdrop-blur-md bg-white/5 border border-white/10 rounded-[28px]
        ${glow ? 'shadow-[0_0_40px_rgba(90,0,255,0.4)]' : 'shadow-[0_8px_32px_rgba(0,0,0,0.37)]'}
        ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_60px_rgba(0,229,255,0.3)] transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
