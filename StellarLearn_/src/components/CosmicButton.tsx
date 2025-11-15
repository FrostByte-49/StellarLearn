import { ReactNode } from 'react';

interface CosmicButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export const CosmicButton = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = ''
}: CosmicButtonProps) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 cursor-pointer select-none';

  const variants = {
    primary: 'bg-gradient-to-r from-[#5A00FF] to-[#00E5FF] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:scale-105 text-white',
    secondary: 'bg-gradient-to-r from-[#00E5FF] to-[#FF00E5] hover:shadow-[0_0_40px_rgba(255,0,229,0.6)] hover:scale-105 text-white',
    ghost: 'bg-transparent border-2 border-[#00E5FF] hover:bg-[#00E5FF]/20 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] text-[#00E5FF]',
  };

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};
