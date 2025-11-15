export const theme = {
  colors: {
    space: {
      deepNavy: '#0A0F1F',
      cosmicPurple: '#5A00FF',
      neonBlue: '#00E5FF',
      stardustWhite: '#D3F5FF',
      darkPurple: '#1A0B2E',
      mediumPurple: '#3D1E6D',
      accent: '#FF00E5',
      success: '#00FF94',
      warning: '#FFB800',
    },
    gradients: {
      cosmic: 'linear-gradient(135deg, #0A0F1F 0%, #1A0B2E 50%, #3D1E6D 100%)',
      nebula: 'linear-gradient(135deg, #5A00FF 0%, #00E5FF 100%)',
      aurora: 'linear-gradient(135deg, #00E5FF 0%, #FF00E5 100%)',
      stardust: 'linear-gradient(135deg, #D3F5FF 0%, #5A00FF 100%)',
      planet: 'radial-gradient(circle at 30% 30%, #00E5FF 0%, #5A00FF 50%, #1A0B2E 100%)',
    },
  },
  typography: {
    fontFamily: {
      heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    lineHeight: {
      body: '150%',
      heading: '120%',
    },
  },
  spacing: {
    borderRadius: {
      sm: '12px',
      md: '20px',
      lg: '28px',
      full: '9999px',
    },
  },
  effects: {
    glow: {
      soft: '0 0 20px rgba(0, 229, 255, 0.3)',
      medium: '0 0 40px rgba(90, 0, 255, 0.4)',
      strong: '0 0 60px rgba(255, 0, 229, 0.5)',
      neon: '0 0 30px rgba(0, 229, 255, 0.6), 0 0 60px rgba(90, 0, 255, 0.3)',
    },
    shadow: {
      glass: '0 8px 32px rgba(0, 0, 0, 0.37)',
      elevated: '0 20px 60px rgba(0, 0, 0, 0.5)',
    },
  },
};
