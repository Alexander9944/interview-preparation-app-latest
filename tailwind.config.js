/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary gradient palette
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
        },
        // Secondary gradient (purple-blue)
        secondary: {
          50: '#f3f0ff',
          100: '#e9d5ff',
          200: '#d8b4fe',
          300: '#c084fc',
          400: '#a855f7',
          500: '#9333ea',
          600: '#7e22ce',
          700: '#6b21a8',
          800: '#581c87',
          900: '#3f0f5c',
        },
        // Tertiary (aqua-teal)
        tertiary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Neutral (soft grays)
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          150: '#f0f0f0',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      backgroundImage: {
        // Gradient backgrounds
        'gradient-soft': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #dbeafe 100%)',
        'gradient-purple-blue': 'linear-gradient(135deg, #f3f0ff 0%, #ede9fe 50%, #e0e7ff 100%)',
        'gradient-aqua-blue': 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 50%, #bae6fd 100%)',
        'gradient-dark-subtle': 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 41, 59, 0.5) 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      boxShadow: {
        // Soft shadows for depth
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'soft-md': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'soft-xl': '0 12px 32px rgba(0, 0, 0, 0.18)',
        // Glass effect shadows
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-lg': '0 12px 48px rgba(0, 0, 0, 0.15)',
        // Inset shadows for depth
        'inset-light': 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px', letterSpacing: '0.3px' }],
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        'base': ['16px', { lineHeight: '24px', letterSpacing: '0.2px' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '0.15px' }],
        'xl': ['20px', { lineHeight: '30px', letterSpacing: '0.1px' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '0px' }],
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '-0.5px' }],
        '4xl': ['36px', { lineHeight: '40px', letterSpacing: '-1px' }],
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      maxWidth: {
        'xs': '20rem',    /* 320px */
        'sm': '24rem',    /* 384px */
        'md': '28rem',    /* 448px */
        'lg': '32rem',    /* 512px */
        'xl': '36rem',    /* 576px */
        '2xl': '42rem',   /* 672px */
        '3xl': '48rem',   /* 768px */
        '4xl': '56rem',   /* 896px */
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        // Utility classes for common patterns
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: theme('borderRadius.lg'),
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          backgroundColor: 'rgba(15, 23, 42, 0.5)',
          backdropFilter: 'blur(10px)',
          borderRadius: theme('borderRadius.lg'),
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-lg': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
          backdropFilter: 'blur(16px)',
          borderRadius: theme('borderRadius.xl'),
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.card-base': {
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.soft-md'),
          padding: theme('spacing.lg'),
          backgroundColor: 'white',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.card-hover': {
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.soft-lg'),
          },
        },
        '.btn-primary': {
          padding: `${theme('spacing.sm')} ${theme('spacing.lg')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: '600',
          fontSize: theme('fontSize.sm'),
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundImage: `linear-gradient(135deg, ${theme('colors.primary.500')} 0%, ${theme('colors.primary.600')} 100%)`,
          color: 'white',
          boxShadow: theme('boxShadow.soft-md'),
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: theme('boxShadow.soft-lg'),
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        '.btn-secondary': {
          padding: `${theme('spacing.sm')} ${theme('spacing.lg')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: '600',
          fontSize: theme('fontSize.sm'),
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: 'rgba(14, 165, 233, 0.1)',
          color: theme('colors.primary.600'),
          border: `1px solid ${theme('colors.primary.200')}`,
          '&:hover': {
            backgroundColor: 'rgba(14, 165, 233, 0.2)',
            transform: 'translateY(-2px)',
          },
        },
        '.btn-outline': {
          padding: `${theme('spacing.sm')} ${theme('spacing.lg')}`,
          borderRadius: theme('borderRadius.lg'),
          fontWeight: '600',
          fontSize: theme('fontSize.sm'),
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: 'transparent',
          color: theme('colors.primary.600'),
          border: `1.5px solid ${theme('colors.primary.400')}`,
          '&:hover': {
            backgroundColor: theme('colors.primary.50'),
            borderColor: theme('colors.primary.600'),
          },
        },
        '.input-base': {
          borderRadius: theme('borderRadius.lg'),
          border: `1px solid ${theme('colors.neutral.200')}`,
          padding: `${theme('spacing.md')} ${theme('spacing.lg')}`,
          fontSize: theme('fontSize.sm'),
          fontFamily: theme('fontFamily.sans'),
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.primary.400'),
            boxShadow: `0 0 0 3px rgba(14, 165, 233, 0.1)`,
          },
          '&::placeholder': {
            color: theme('colors.neutral.400'),
          },
        },
      });
    },
  ],
};
