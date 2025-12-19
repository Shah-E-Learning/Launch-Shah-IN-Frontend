import type { Config } from 'tailwindcss'

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1800px'
      }
    },
    extend: {
      colors: {
        mainColor: '#023535',
        buttonColor: '#015958',
        secondaryColor: '#0FC2C0',
        completedColor: '#008F8C',
        purpleColor: '#864499',
        bgMainColor: '#f7f7f7',
        facebookColor: '#3b5998',
        instagramColor: '#e1306c',
        linkedinColor: '#0077b5',
        youtubeColor: '#ff0000',
        lightBg: '#e5f8f8',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))'
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '30px'
      },
      keyframes: {
        'icon-bounce': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          '40%': {
            transform: 'translateY(-10px)'
          },
          '60%': {
            transform: 'translateY(-5px)'
          }
        },
        'combined-bounce': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: ' translateY(0)'
          },
          '40%': {
            transform: 'translateY(-15px)'
          },
          ' 60%': {
            transform: 'translateY(-7.5px)'
          }
        },

        'bounce-in': {
          '0%': {
            transform: 'translateY(20%)',
            opacity: '0',
            visibility: 'hidden'
          },
          '50%': {
            transform: 'translateY(-30px)',
            opacity: '1',
            visibility: 'visible'
          },
          '70%': {
            transform: 'translateY(10px)'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
            visibility: 'visible'
          }
        },
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },

        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'caret-blink': {
          '0%, 70%, 100%': { opacity: '1' },
          '20%, 50%': { opacity: '0' }
        },
        'hero-image': {
          from: {
            opacity: '0'
          },

          to: {
            opacity: '1'
          }
        },
        'height-zero': {
          '0%': {
            height: '100%',
            opacity: '1'
          },
          '90%': {
            opacity: '1'
          },
          '100%': {
            height: '0px',
            opacity: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.2s ease-out infinite',
        'hero-image': 'hero-image 0.5s linear',
        'height-zero': 'height-zero 0.8s linear',
        'bounce-in': 'bounce-in 1s ease-in-out forwards',
        'combined-bounce': 'combined-bounce 2s infinite',
        'icon-bounce': 'icon-bounce 2s infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), addVariablesForColors]
} satisfies Config

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars
  })
}

export default config
